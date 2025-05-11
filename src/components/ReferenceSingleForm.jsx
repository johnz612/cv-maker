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

const FormContainer = styled.div`
  padding: 1rem;
`;

function ReferenceSingleForm({ reference }) {
  const { register } = useForm();

  const { dispatch, references } = useCV();

  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");

  function handleChange(value, key) {
    const newReference = { ...reference, [key]: value };
    const updated = references.map((current) => {
      return newReference.id === current.id ? newReference : current;
    });

    dispatch({ type: "setReferences", payload: updated });
  }

  return (
    <Container>
      <HeadingHistory
        isOpen={isOpen}
        handleOpen={setIsOpen}
        item={reference}
        title={name}
        history={references}
        kind={"references"}
      />
      {isOpen && (
        <FormContainer>
          <Form>
            <FormRow>
              <FormField label="Name">
                <Input
                  type="text"
                  id="name"
                  mode="long"
                  {...register("name", {
                    onChange: (e) => {
                      setName(() => e.target.value);
                      handleChange(e.target.value, "name");
                    },

                    //   required: "This field is required!",
                  })}
                />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField label="Company">
                <Input
                  type="text"
                  id="company"
                  mode="long"
                  {...register("company", {
                    onChange: (e) => {
                      handleChange(e.target.value, "company");
                    },
                  })}
                />
              </FormField>

              <FormField label="Position">
                <Input
                  type="text"
                  id="position"
                  mode="long"
                  {...register("position", {
                    onChange: (e) => {
                      handleChange(e.target.value, "position");
                    },
                  })}
                />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField label="Phone">
                <Input
                  type="tel"
                  id="phone"
                  mode="long"
                  {...register("phone", {
                    onChange: (e) => {
                      handleChange(e.target.value, "phone");
                    },
                  })}
                />
              </FormField>
              <FormField label="Email">
                <Input
                  type="email"
                  id="email"
                  mode="long"
                  {...register("email", {
                    onChange: (e) => {
                      handleChange(e.target.value, "email");
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

export default ReferenceSingleForm;
