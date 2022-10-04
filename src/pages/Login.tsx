import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <section className="my-20">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-4xl mb-4">
            👉 start by login in with your google account.
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
            className="bg-neutral-800 hover:-translate-y-1 border border-neutral-900 duration-300 text-xl rounded-md px-8 py-2 mt-10"
            onClick={signInWithGoogle}
          >
            log in with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
