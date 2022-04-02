import { Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface IInput {
  name: string;
  type: "text" | "password";
  placeholder: string;
}

export const Input: React.FC<IInput> = ({ name, type, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {errors[name] && (
        <Typography variant="caption" sx={{ color: "red" }}>
          {errors[name].message}
        </Typography>
      )}
    </>
  );
};