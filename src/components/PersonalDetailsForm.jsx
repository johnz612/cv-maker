import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import FormRow from "../ui/FormRow";
import "../styles/invalid.css";
import FormField from "../ui/FormField";
import styled from "styled-components";
import Form from "../ui/Form";
import { useCV } from "../context/CVContext";

function PersonalDetailsForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const {
    firstName,
    surName,
    profession,
    city,
    country,
    postalCode,
    phone,
    email,
    userPhoto,
    dispatch,
  } = useCV();

  return (
    <Form>
      <FormRow>
        <FormField label="First Name" error={errors?.firstName?.message}>
          <Input
            type="text"
            id="firstName"
            mode="long"
            defaultValue={firstName}
            {...register("firstName", {
              onChange: (e) =>
                dispatch({ type: "setFirstName", payload: e.target.value }),
              required: "This field is required!",
            })}
          />
        </FormField>
        <FormField label="Surname" error={errors?.surName?.message}>
          <Input
            type="text"
            id="surName"
            mode="long"
            defaultValue={surName}
            {...register("surName", {
              onChange: (e) =>
                dispatch({ type: "setSurName", payload: e.target.value }),
              required: "This field is required!",
            })}
          />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField label="Profession" error={errors?.profession?.message}>
          <Input
            type="text"
            id="profession"
            mode="long"
            defaultValue={profession}
            {...register("profession", {
              onChange: (e) =>
                dispatch({ type: "setProfession", payload: e.target.value }),
              required: "This field is required!",
            })}
          />
        </FormField>
        <FormField label="City/Municipality" error={errors?.city?.message}>
          <Input
            type="text"
            id="City/Municipality"
            mode="long"
            defaultValue={city}
            {...register("city", {
              onChange: (e) =>
                dispatch({ type: "setCity", payload: e.target.value }),
              required: "This field is required!",
            })}
          />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField label="Country" error={errors?.country?.message}>
          <Input
            type="text"
            id="Country"
            mode="long"
            defaultValue={country}
            {...register("country", {
              onChange: (e) =>
                dispatch({ type: "setCountry", payload: e.target.value }),
              required: "This field is required!",
            })}
          />
        </FormField>
        <FormField label="Postal Code" error={errors?.postal?.message}>
          <Input
            type="text"
            id="Postal Code"
            mode="long"
            defaultValue={postalCode}
            {...register("postal", {
              onChange: (e) =>
                dispatch({
                  type: "setPostalCode",
                  payload: e.target.value,
                }),
              required: "This field is required!",
            })}
          />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField label="Phone" error={errors?.phone?.message}>
          <Input
            type="number"
            id="Phone"
            mode="long"
            defaultValue={phone}
            {...register("phone", {
              onChange: (e) =>
                dispatch({ type: "setPhone", payload: e.target.value }),
              required: "This field is required!",
            })}
          />
        </FormField>
        <FormField label="Email" error={errors?.email?.message}>
          <Input
            type="email"
            id="Email"
            mode="long"
            defaultValue={email}
            {...register("email", {
              onChange: (e) =>
                dispatch({ type: "setEmail", payload: e.target.value }),
              required: "This field is required!",
            })}
          />
        </FormField>
      </FormRow>
    </Form>
  );
}

export default PersonalDetailsForm;
