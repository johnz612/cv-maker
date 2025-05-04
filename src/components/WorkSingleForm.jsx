import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import FormField from "../ui/FormField";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import Select from "../ui/Select";
import { useState } from "react";
import styled from "styled-components";
import HeadingWorkHistory from "../ui/HeadingWorkHistory";
import { useCV } from "../context/CVContext";
import StyledTextArea from "../ui/TextAreaInput";

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

function WorkSingleForm({ job }) {
  const { register } = useForm();
  const { dispatch, workHistory } = useCV();
  const [isOpen, setIsOpen] = useState(true);
  const [jobTitle, setJobTitle] = useState("");

  function handleChange(value, key) {
    job[key] = value;
    dispatch({ type: "setWorkHistory", payload: workHistory });
  }

  return (
    <WorkContainer>
      <HeadingWorkHistory
        isOpen={isOpen}
        handleOpen={setIsOpen}
        job={job}
        jobTitle={jobTitle}
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

                    //   required: "This field is required!",
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
              <FormField label="Location">
                <Input
                  type="text"
                  id="location"
                  mode="long"
                  {...register("location", {
                    onChange: (e) => {
                      handleChange(e.target.value, "location");
                    },
                  })}
                />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField label="Start Month">
                <Select
                  {...register("startMonth", {
                    onChange: (e) => {
                      handleChange(e.target.value, "startMonth");
                    },
                  })}
                >
                  <option value="" hidden>
                    Month
                  </option>
                  {months.map((month) => (
                    <option value={month} key={month}>
                      {month}
                    </option>
                  ))}
                </Select>
              </FormField>
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
              <FormField label="End Month">
                <Select
                  {...register("endMonth", {
                    onChange: (e) => {
                      handleChange(e.target.value, "endMonth");
                    },
                  })}
                >
                  <option value="" hidden>
                    Month
                  </option>
                  {months.map((month, i) => (
                    <option value={month} key={i}>
                      {month}
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField label="End Year">
                <Select
                  {...register("endYear", {
                    onChange: (e) => {
                      handleChange(e.target.value, "endMonth");
                    },
                  })}
                >
                  <option value="" hidden>
                    Year
                  </option>
                  {year.map((year, i) => (
                    <option value={year} key={i * 10}>
                      {year}
                    </option>
                  ))}
                </Select>
              </FormField>
            </FormRow>
            <div>
              <Label htmlFor="description">Description</Label>
              <StyledTextArea
                id="description"
                rows={10}
                cols={30}
                {...register("description", {
                  onChange: (e) => {
                    handleChange(e.target.value, "description");
                  },
                })}
              />
            </div>
          </Form>
        </FormContainer>
      )}
    </WorkContainer>
  );
}

export default WorkSingleForm;
