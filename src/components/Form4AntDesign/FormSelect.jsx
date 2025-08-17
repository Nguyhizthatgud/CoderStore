import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Select } from "antd";
const FormSelect = ({ name, options, ...other }) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} {...other}>
            {options.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default FormSelect;
