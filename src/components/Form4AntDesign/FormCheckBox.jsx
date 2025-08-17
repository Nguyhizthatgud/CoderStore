import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Checkbox } from "antd";
const FormCheckBox = ({ name, ...other }) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Checkbox {...field} checked={field.value} {...other} />}
      />
    </div>
  );
};

export default FormCheckBox;
