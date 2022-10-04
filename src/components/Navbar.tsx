import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };
  const navigate = useNavigate();
  const createPostNavigate = () => {
    navigate("/create-post");
  };
  return (
    <nav className="bg-neutral-900">
      <div className="container">
        <div className="py-4 flex items-center justify-between">
          <a href="/" className="text-4xl font-extrabold">
            weco.
          </a>

          {user ? (
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-2 p-2 rounded-md hover:bg-neutral-800 duration-300 cursor-default">
                <div className="rounded-md overflow-hidden w-8">
                  <img src={auth.currentUser?.photoURL || ""} alt="" />
                </div>
                <p className="text-xl">{auth.currentUser?.displayName}</p>
              </div>
              <button
                onClick={createPostNavigate}
                className="flex items-center justify-center gap-2 p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 duration-300 cursor-pointer"
              >
                <PencilIcon className="w-8" />
              </button>
              <button
                className="flex items-center justify-center gap-2 p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 duration-300 cursor-pointer"
                onClick={signUserOut}
              >
                <ArrowRightOnRectangleIcon className="w-8" />
              </button>
            </div>
          ) : (
            <Link
              className="flex items-center justify-center gap-2 p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 duration-300 cursor-pointer"
              to="/login"
            >
              <ArrowLeftOnRectangleIcon className="w-8" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
