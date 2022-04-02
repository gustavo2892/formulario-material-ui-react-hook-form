import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  type: "text" | "password";
  placeholder: string;
}

export const Input: React.FC<IInput> = ({ name, type, placeholder }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={placeholder}
          type={type}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
};

