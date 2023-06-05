import { useFormContext } from "react-hook-form";

const name = "title";
const TextInput: React.FC = () => {
  const { register } = useFormContext();

  return (
    <>
      <label> {name}</label>
      <input
        type="text"
        placeholder="title"
        {...register("title", {
          required: true,
          maxLength: 10,
          pattern: /[A-Za-z]/,
        })}
      />
    </>
  );
};

export default TextInput;
