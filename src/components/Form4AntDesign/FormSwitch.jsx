import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Switch } from "antd";
const FormSwitch = ({ name, ...other }) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Switch {...field} checked={field.value} {...other} />}
      />
    </div>
  );
};

export default FormSwitch;
