import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  CommandLineIcon,
  PencilIcon,
  Bars4Icon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  const navigate = useNavigate();
  const createPostNavigate = () => {
    navigate("/create-post");
  };
  const postsNavigate = () => {
    navigate("/projects");
  };
  return (
    <nav className="bg-neutral-900">
      <div className="container">
        <div className="py-4 flex items-center justify-between">
          <a href="/" className="text-4xl font-extrabold text-orange-500">
            weco.
          </a>

          <div className="flex items-center justify-center gap-2">
            {user ? (
              <div className="flex items-center justify-center gap-2">
                <div className="hidden md:flex items-center border border-orange-500 justify-center gap-2 p-2 rounded-md hover:bg-neutral-800 duration-300 cursor-default">
                  <div className="rounded-md overflow-hidden w-7">
                    <img src={auth.currentUser?.photoURL || ""} alt="" />
                  </div>
                  <p className="text-xl ">{auth.currentUser?.displayName}</p>
                </div>
                <button
                  onClick={postsNavigate}
                  className="flex items-center justify-center gap-2 p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 duration-300 cursor-pointer text-xl  hover:border-orange-500"
                >
                  <CommandLineIcon className="w-8" />
                </button>
                <button
                  onClick={createPostNavigate}
                  className="flex items-center justify-center gap-2 p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 duration-300 cursor-pointer hover:border-orange-500"
                >
                  <PencilIcon className="w-8" />
                </button>

                <button
                  className="flex items-center justify-center gap-2 p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 duration-300 cursor-pointer hover:border-orange-500"
                  onClick={signUserOut}
                >
                  <ArrowRightOnRectangleIcon className="w-8" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Link
                  className="flex items-center justify-center gap-2 p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 duration-300 cursor-pointer hover:border-orange-500"
                  to="/login"
                >
                  <ArrowLeftOnRectangleIcon className="w-8" />
                </Link>
              </div>
            )}
            <div className="flex items-center justify-center gap-2">
              <Link
                className="flex items-center justify-center gap-2 p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 duration-300 cursor-pointer hover:border-orange-500"
                to="/about"
              >
                <InformationCircleIcon className="w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
