import { useFormContext } from "react-hook-form";

const PostTitleValidationErrors: React.FC = () => {
  const {
    formState: { errors },
    clearErrors,
  } = useFormContext();

  return (
    <div>
      {errors.title?.type === "required" && (
        <>
          <span style={{ color: "red" }}>Title field is required</span>
          <button type="button" onClick={() => clearErrors("title")}>
            x
          </button>
        </>
      )}
      {errors.title?.type === "maxLength" && (
        <span style={{ color: "red" }}>
          Title can only be 10 characters long
        </span>
      )}
      {errors.title?.type === "pattern" && (
        <span style={{ color: "red" }}>Title should contain only letters</span>
      )}

      {errors.title?.type === "postAlreadyExists" && (
        <span style={{ color: "red" }}>
          Post with this title already exists
        </span>
      )}
    </div>
  );
};

export default PostTitleValidationErrors;
