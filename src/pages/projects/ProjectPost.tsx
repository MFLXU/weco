import { Post } from "./Projects";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import {
  ArrowTopRightOnSquareIcon,
  ExclamationCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { deleteDoc, doc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  post: Post;
}

const ProjectPost = (props: Props) => {
  const [notice, setNotice] = useState(false);

  const [user] = useAuthState(auth);
  const { post } = props;
  const deletePost = async (id: any) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setNotice(true);
    setTimeout(() => {
      setNotice(false);
    }, 3000);
  };
  return (
    <>
      {notice ? (
        <div className="fixed border border-white border-2 right-10 bottom-10 bg-neutral-800 py-4 px-8 rounded-md text-xl flex items-center justify-center gap-4">
          <ExclamationCircleIcon className="w-8" />
          <p>Post have been Deleted</p>
        </div>
      ) : null}
      <div className="bg-neutral-800 rounded-md overflow-hidden border border-orange-500 border-2 ">
        <div className="flex justify-between p-2 items-center bg-orange-500">
          <div className="flex gap-1 items-center cursor-default">
            <div className="flex items-center justify-center py-1 px-3 text-xl text-orange-500 bg-neutral-900 rounded-md">
              {post.username[0]}
            </div>
            <p className="text-2xl text-neutral-900 font-bold">
              {post.username}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {user && post.userId === user.uid && (
              <button
                onClick={() => {
                  deletePost(post.id);
                }}
                className="bg-neutral-900 p-2 rounded-md text-xl flex items-center gap-2 hover:bg-neutral-800 duration-300"
              >
                <TrashIcon className="w-7" />
              </button>
            )}

            <a
              className="bg-neutral-900 py-2 px-4 rounded-md text-xl flex items-center gap-2 hover:bg-neutral-800 duration-300"
              href={post.githubrepo}
              target="_blank"
            >
              Github <ArrowTopRightOnSquareIcon className="w-6" />
            </a>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-4xl font-extrabold mb-2">
            {post.title.toLowerCase()}
          </h3>
          <p className="text-xl">{post.description.toLowerCase()}</p>
        </div>
      </div>
    </>
  );
};
export default ProjectPost;
