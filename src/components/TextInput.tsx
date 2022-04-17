import { useFormContext } from "react-hook-form";

const TextInput: React.FC = () => {
  const { register } = useFormContext();

  return (
    <input
      type="text"
      placeholder="title"
      {...register("title", {
        required: true,
        maxLength: 10,
        pattern: /[A-Za-z]/,
      })}
    />
  );
};

export default TextInput;
