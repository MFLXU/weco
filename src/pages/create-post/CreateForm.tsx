import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface CreateFormData {
  title: string;
  description: string;
  githubrepo: string;
}
const CreateForm = () => {
  const onCreatePost = (data: CreateFormData) => {
    console.log(data);
  };
  const schema = yup.object().shape({
    title: yup.string().max(100).required("You must add a title!"),
    description: yup.string().max(400).required("You must add a description!"),
    githubrepo: yup.string().required("You must add the github repo link!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({ resolver: yupResolver(schema) });
  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <label>title :</label>
      <input placeholder="title..." {...register("title")} />
      <p className="text-red-600">{errors.title?.message}</p>
      <label>github repo :</label>
      <input placeholder="github repo..." {...register("githubrepo")} />
      <p className="text-red-600">{errors.githubrepo?.message}</p>

      <label>description :</label>
      <textarea
        placeholder="project summary"
        cols={30}
        rows={10}
        {...register("description")}
      />
      <p className="text-red-600">{errors.description?.message}</p>

      <input
        className="bg-neutral-800 hover:-translate-y-1 border border-neutral-900 duration-300 text-xl rounded-md px-8 cursor-pointer py-2 mt-2"
        type="submit"
      />
    </form>
  );
};
export default CreateForm;
