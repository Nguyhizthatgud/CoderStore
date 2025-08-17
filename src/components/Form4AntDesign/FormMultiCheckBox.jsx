import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox, Typography } from "antd";
const FormMultiCheckBox = ({ name, options = [], disabled = false, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Checkbox.Group
          options={options}
          value={field.value || []}
          onChange={field.onChange}
          disabled={disabled}
          {...other}
        />
      )}
    />
  );
};

export default FormMultiCheckBox;
