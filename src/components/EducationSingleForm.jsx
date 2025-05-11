import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../ui/Form";
import FormField from "../ui/FormField";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Select from "../ui/Select";

import { useCV } from "../context/CVContext";
import HeadingHistory from "./HeadingHistory";

const Container = styled.div`
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

function EducationSingleForm({ ed }) {
  const { register } = useForm();

  const { dispatch, education } = useCV();

  const [isOpen, setIsOpen] = useState(true);
  const [course, setCourse] = useState("");

  function handleChange(value, key) {
    const newEducation = { ...ed, [key]: value };
    const updatedEducation = education.map((currentEd) => {
      return newEducation.id === currentEd.id ? newEducation : currentEd;
    });

    dispatch({ type: "setEducation", payload: updatedEducation });
  }

  return (
    <Container>
      <HeadingHistory
        isOpen={isOpen}
        handleOpen={setIsOpen}
        item={ed}
        title={course}
        history={education}
        kind={"education"}
      />
      {isOpen && (
        <FormContainer>
          <Form>
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
                  {year.map((year, i) => (
                    <option value={year} key={i * 10}>
                      {year}
                    </option>
                  ))}
                </Select>
              </FormField>
            </FormRow>
            <FormRow>
              <FormField label="School Name">
                <Input
                  type="text"
                  id="schoolName"
                  mode="long"
                  // defaultValue={}
                  {...register("schoolName", {
                    onChange: (e) => {
                      handleChange(e.target.value, "schoolName");
                    },

                    //   required: "This field is required!",
                  })}
                />
              </FormField>
              <FormField label="Course">
                <Input
                  type="text"
                  id="course"
                  mode="long"
                  // defaultValue={}
                  {...register("course", {
                    onChange: (e) => {
                      setCourse(() => e.target.value);
                      handleChange(e.target.value, "course");
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
              <FormField label="Achievement">
                <Input
                  type="text"
                  id="acheivement"
                  mode="long"
                  {...register("achievement", {
                    onChange: (e) => {
                      handleChange(e.target.value, "achievement");
                    },
                  })}
                />
              </FormField>
            </FormRow>
          </Form>
        </FormContainer>
      )}
    </Container>
  );
}

export default EducationSingleForm;
