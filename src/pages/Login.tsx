import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const loginImg = require("../utils/login-img.png");
const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/projects");
  };

  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 mt-10 md:mt-40">
          <div className="flex items-center md:justify-start justify-center flex-col">
            <h1 className="text-4xl mb-4">
              👉 start by login in with your{" "}
              <span className="text-orange-500 font-extrabold">Google</span>{" "}
              account.
            </h1>
            <p>
              before using Google with the <b>weco</b> app, you can consult{" "}
              <a
                className="underline"
                href="https://policies.google.com/privacy?gl=DZ&hl=fr"
                target="_blank"
              >
                Google's Privacy Policy{" "}
              </a>
              and{" "}
              <a
                className="underline"
                href="https://policies.google.com/terms?gl=DZ&hl=fr"
                target="_blank"
              >
                Terms of Use.
              </a>
            </p>
            <button
              className="w-full md:w-fit cursor-pointer bg-neutral-800 border hover:border-orange-500 border border-neutral-900 duration-300 text-xl rounded-md px-8 py-2 mt-10"
              onClick={signInWithGoogle}
            >
              log in with Google
            </button>
          </div>
          <div>
            <img src={loginImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
