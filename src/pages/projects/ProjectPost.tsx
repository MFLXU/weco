import { Post } from "./Projects";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import {
  ArrowRightOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  GlobeAltIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

interface Props {
  post: Post;
}

const ProjectPost = (props: Props) => {
  const [user] = useAuthState(auth);
  const { post } = props;
  console.log(post.githubrepo);
  return (
    <div className="bg-neutral-800 rounded-md overflow-hidden border border-orange-500 border-2 ">
      <div className="p-4">
        <h3 className="text-4xl font-extrabold mb-2">{post.title}</h3>
        <p className="text-xl">{post.description}</p>
      </div>
      <div className="flex justify-between p-2 items-center bg-orange-500">
        <div className="flex gap-1 items-center">
          <img
            className="w-8 rounded-md overflow-hidden border border-neutral-900"
            src={user?.photoURL || ""}
            alt=""
          />
          <p className="text-2xl text-neutral-900 font-bold">
            {user?.displayName}
          </p>
        </div>
        <a
          className="bg-neutral-900 py-2 px-4 rounded-md text-xl flex items-center gap-2"
          href={post.githubrepo}
          target="_blank"
        >
          Github <ArrowTopRightOnSquareIcon className="w-6" />
        </a>
      </div>
    </div>
  );
};
export default ProjectPost;
