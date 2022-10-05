import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import * as yup from "yup";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
interface CreateFormData {
  title: string;
  description: string;
  githubrepo: string;
}
const CreateForm = () => {
  const navigate = useNavigate();
  const [notice, setNotice] = useState(false);
  const [user] = useAuthState(auth);
  const [desc, setDesc] = useState(0);
  const descLength = (e: any) => {
    setDesc(e.target.value.length);
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
  const postsRef = collection(db, "posts");
  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    setNotice(true);
    setTimeout(() => {
      navigate("/projects");
      setNotice(false);
    }, 3000);
  };
  // @ts-ignore
  return (
    <>
      {notice ? (
        <div className="fixed border border-white border-2 right-10 bottom-10 bg-neutral-800 py-4 px-8 rounded-md text-xl flex items-center justify-center gap-4">
          <ExclamationCircleIcon className="w-8" />
          <p>Post have been Created</p>
        </div>
      ) : null}
      <form onSubmit={handleSubmit(onCreatePost)}>
        <label>title :</label>
        <input placeholder="title..." {...register("title")} />
        <p className="text-red-600">{errors.title?.message}</p>
        <label>github repo :</label>
        <input placeholder="github repo..." {...register("githubrepo")} />
        <p className="text-red-600">{errors.githubrepo?.message}</p>

        <label>description :</label>
        <div className="relative w-full">
          <textarea
            className="w-full"
            placeholder="project summary"
            cols={30}
            rows={10}
            {...register("description")}
            onChange={descLength}
          />
          <p
            className={
              desc < 400
                ? "absolute right-4 bottom-4 bg-neutral-800 p-1 rounded-md"
                : "absolute right-4 bottom-4 bg-neutral-800 p-1 rounded-md text-red-600"
            }
          >
            {desc}/400
          </p>
        </div>
        <p className="text-red-600">{errors.description?.message}</p>

        <input
          className="bg-neutral-800 hover:-translate-y-1 border border-neutral-900 duration-300 text-xl rounded-md px-8 cursor-pointer py-2 mt-2"
          type="submit"
        />
      </form>
    </>
  );
};
export default CreateForm;
