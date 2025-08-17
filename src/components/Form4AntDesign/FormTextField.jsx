import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "antd";
const FormTextField = ({ name, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input.Search {...field} {...other} status={error ? "error" : ""} allowClear />
      )}
    />
  );
};

export default FormTextField;
