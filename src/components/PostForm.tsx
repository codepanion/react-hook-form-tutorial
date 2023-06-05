import { useForm, FormProvider } from "react-hook-form";
import PostTitleValidationErrors from "./PostTitleValidationErrors";
import TextInputWrapper from "./TextInputWrapper";
import { ControlledSelect } from "./ControlledSelect";
import { DevTool } from "@hookform/devtools";

interface FormData {
  title: string;
  body: string;
}

const defaultData = {
  title: "",
  body: "",
};

const PostForm: React.FC = () => {
  const formMethods = useForm<FormData>({
    defaultValues: defaultData,
  });

  const { register, handleSubmit, reset, watch, setFocus, setError, control } =
    formMethods;

  const onFormSubmit = async (data: FormData) => {
    console.log("form async data", data, formMethods.formState);
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      setError("title", { type: "postAlreadyExists" }, { shouldFocus: true });
    }
  };

  const title = watch("title");
  const body = watch("body");

  return (
    <div
      style={{
        display: "flex",
        width: "70%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div>
            <TextInputWrapper />
            <ControlledSelect
              name="option"
              rules={{ required: true }}
              defaultValue={"option1"}
            />
            <PostTitleValidationErrors />
          </div>
          <div style={{ flex: "1" }}>
            <textarea placeholder="body" {...register("body")} />
          </div>

          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => reset()}>
              Reset
            </button>
          </div>
        </form>
      </FormProvider>

      {(title || body) && (
        <div>
          <h3>Preview</h3>
          <h4 onClick={() => setFocus("title")}>{title}</h4>
          <p onClick={() => setFocus("body")}>{body}</p>
        </div>
      )}

      <DevTool control={control} />
    </div>
  );
};

export default PostForm;
