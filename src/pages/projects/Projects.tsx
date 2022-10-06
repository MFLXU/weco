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
  }, []);
  return (
    <div>
      <div className="container">
        <div className="">
          <h1 className="my-20 text-5xl text-center">
            Find a project, and leave your mark ✨{" "}
          </h1>
          <div className="grid grid-cols-1 gap-8">
            {postsList?.map((post) => (
              <ProjectPost post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
