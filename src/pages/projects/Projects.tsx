import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import ProjectPost from "./ProjectPost";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export interface Post {
  id: string;
  userId: string;
  title: string;
  githubrepo: string;
  username: string;
  description: string;
  ptype: string;
}

const Projects = () => {
  const postsRef = collection(db, "posts");
  const [postsList, setPostslist] = useState<Post[] | null>(null);
  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostslist(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };
  useEffect(() => {
    getPosts();
  }, [postsList]);
  const [sort, setSort] = useState(false);
  return (
    <div className="pb-10">
      <div className="container">
        <div className="">
          <h1 className="md:my-20 my-10 md:text-5xl text-4xl text-center">
            find a{" "}
            <span className="text-orange-500 font-extrabold">project</span>, and
            leave your{" "}
            <span className="text-orange-500 font-extrabold">mark</span> ✨{" "}
          </h1>

          <div className="mb-8 flex gap-4 items-center justify-center">
            <div className="flex w-full ml-auto items-center justify-start gap-2 p-2 rounded-md border border-neutral-800  duration-300 cursor-pointer hover:border-orange-500">
              <input
                type="text"
                className="bg-neutral-900 outline-0 text-xl w-full ml-2"
                placeholder="Front-End, Back-End, Mobile, Web3..."
              />
              <MagnifyingGlassIcon className="w-8 ml-auto" />
            </div>
            <button
              onClick={() => {
                setSort(!sort);
              }}
              className="flex ml-auto items-center justify-center gap-2 p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 duration-300 cursor-pointer hover:border-orange-500"
            >
              {sort ? (
                <BarsArrowDownIcon className="w-8" />
              ) : (
                <BarsArrowUpIcon className="w-8" />
              )}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {postsList == null ? (
              <p className="text-3xl text-orange-500 text-center font-extrabold">
                Loading
              </p>
            ) : sort ? (
              postsList
                ?.slice(0)
                .reverse()
                .map((post) => <ProjectPost post={post} />)
            ) : (
              postsList?.map((post) => <ProjectPost post={post} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
