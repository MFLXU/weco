import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import ProjectPost from "./ProjectPost";
import { useAuthState } from "react-firebase-hooks/auth";

export interface Post {
  id: string;
  userId: string;
  title: string;
  githubrepo: string;
  username: string;
  description: string;
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
          <div className="grid grid-cols-1 gap-8">
            {postsList == null ? (
              <p className="text-3xl text-orange-500 text-center font-extrabold">
                Loading
              </p>
            ) : (
              postsList
                ?.slice(0)
                .reverse()
                .map((post) => <ProjectPost post={post} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
