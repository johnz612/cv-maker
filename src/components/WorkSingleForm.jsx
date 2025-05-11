import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useCV } from "../context/CVContext";
import Form from "../ui/Form";
import FormField from "../ui/FormField";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Select from "../ui/Select";
import HeadingHistory from "./HeadingHistory";
import RespWorkItem from "./RespWorkItem";
import Button from "../ui/Button";

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5 rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
`;

const FormContainer = styled.div`
  padding: 1rem;
`;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const year = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
  2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
];

const yearWPresent = [
  "Present",
  2024,
  2023,
  2022,
  2021,
  2020,
  2019,
  2018,
  2017,
  2016,
  2015,
  2014,
  2013,
  2012,
  2011,
  2010,
  2009,
  2008,
  2007,
  2006,
  2005,
  2004,
  2003,
  2002,
  2001,
  2000,
];

function WorkSingleForm({ job }) {
  const { register } = useForm();
  const { dispatch, workHistory } = useCV();
  const [isOpen, setIsOpen] = useState(true);
  const [jobTitle, setJobTitle] = useState("");
  const [roles, setRoles] = useState([{ id: "123" }]);

  const isEnough = roles.length >= 3;
  const isSomeEmpty = roles.some((s) => !s.role);
  function handleChange(value, key) {
    const updatedJob = { ...job, [key]: value };
    const updatedHistory = workHistory.map((work) => {
      return work.id === job.id ? updatedJob : work;
    });

    dispatch({ type: "setWorkHistory", payload: updatedHistory });
  }

  return (
    <WorkContainer>
      <HeadingHistory
        isOpen={isOpen}
        handleOpen={setIsOpen}
        item={job}
        title={jobTitle}
        history={workHistory}
        kind={"workHistory"}
      />

      {isOpen && (
        <FormContainer>
          <Form>
            <FormRow>
              <FormField label="Job Title">
                <Input
                  type="text"
                  id="jobTitle"
                  mode="long"
                  value={jobTitle}
                  {...register("jobTitle", {
                    onChange: (e) => {
                      setJobTitle(() => e.target.value);
                      handleChange(e.target.value, "jobTitle");
                    },
                  })}
                />
              </FormField>
              <FormField label="Employer">
                <Input
                  type="text"
                  id="employer"
                  mode="long"
                  // defaultValue={}
                  {...register("employer", {
                    onChange: (e) => {
                      handleChange(e.target.value, "employer");
                    },
                  })}
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField label="Start Year">
                <Select
                  {...register("startYear", {
                    onChange: (e) => {
                      handleChange(e.target.value, "startYear");
                    },
                  })}
                >
                  <option value="" hidden>
                    Year
                  </option>
                  {year.map((year) => (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  ))}
                </Select>
              </FormField>

              <FormField label="End Year">
                <Select
                  {...register("endYear", {
                    onChange: (e) => {
                      handleChange(e.target.value, "endYear");
                    },
                  })}
                >
                  <option value="" hidden>
                    Year
                  </option>
                  {yearWPresent.map((year, i) => (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  ))}
                </Select>
              </FormField>
            </FormRow>
            <FormRow>
              <div className="relative w-full">
                <FormField label="Roles" className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3 mt-5">
                    {roles.map((role) => (
                      <RespWorkItem
                        key={role.id}
                        role={role}
                        roles={roles}
                        setRoles={setRoles}
                        job={job}
                      />
                    ))}
                  </div>
                  <div className="mt-4 mb-2">
                    {!isEnough && !isSomeEmpty ? (
                      <Button
                        onClick={() => {
                          const newEntry = { id: uuidv4(), role: "" };
                          const rolesCopy = Array.from(roles);
                          rolesCopy.push(newEntry);
                          setRoles(() => rolesCopy);
                          // dispatch({ type: "setSkills", payload: skillsCopy });
                        }}
                        type="button"
                        className="self-start"
                      >
                        +
                        {roles.length < 1 ? "Add a role" : " Add one more role"}
                      </Button>
                    ) : null}
                  </div>
                </FormField>
              </div>
            </FormRow>
          </Form>
        </FormContainer>
      )}
    </WorkContainer>
  );
}

export default WorkSingleForm;
