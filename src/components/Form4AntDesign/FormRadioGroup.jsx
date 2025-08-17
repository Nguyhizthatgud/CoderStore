/* filepath: c:\Users\tvc45\CoderStore\CoderStore\src\components\Form\FormRadioGroup.jsx */
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Radio } from "antd";

const FormRadioGroup = ({ name, options = [], disabled = false, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Radio.Group options={options} value={field.value} onChange={field.onChange} disabled={disabled} {...other} />
      )}
    />
  );
};

export default FormRadioGroup;
