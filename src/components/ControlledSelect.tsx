import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export function ControlledSelect({
  name,
  rules,
  defaultValue,
}: {
  name: any;
  rules: Object;
  defaultValue: string;
}) {
  const {
    control,
    formState: { errors },
    formState,
  } = useFormContext();

  console.log("formState", formState);

  return (
    <>
      <label>{name}</label>
      {errors[name] && JSON.stringify(errors)}
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <select {...field}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        )}
      />
    </>
  );
}
