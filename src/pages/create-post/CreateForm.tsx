import { useForm } from "react-hook-form";
import * as yup from "yup";
const CreateForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add a title"),
  });
  return (
    <form>
      <label>title :</label>
      <input placeholder="title..." />
      <label>github :</label>
      <input placeholder="github..." />
      <label>e-mail :</label>
      <input placeholder="e-mail..." />
      <label>description :</label>
      <textarea placeholder="project summary" cols={30} rows={10} />
      <input
        className="bg-neutral-800 hover:-translate-y-1 border border-neutral-900 duration-300 text-xl rounded-md px-8 cursor-pointer py-2 mt-2"
        type="submit"
      />
    </form>
  );
};
export default CreateForm;
