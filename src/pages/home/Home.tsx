import { useNavigate } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container">
        <div className=" h-[80vh] flex items-center justify-center flex-col">
          <h1 className="md:text-6xl text-5xl font-extrabold text-center">
            the best place to find{" "}
            <span className="text-orange-500">open-source</span> project.
          </h1>
          <p className="text-xl mt-4 text-center">
            brows open-source project, or post your own.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-20 w-full md:w-fit">
            <a
              href="https://github.com/MFLXU"
              target="_blank"
              className=" flex gap-2 items-center justify-center hover:border-orange-500 border border-neutral-900 text-2xl font-bold py-2 px-8 rounded-md bg-neutral-800 duration-300"
            >
              github
              <ArrowTopRightOnSquareIcon className="w-6" />
            </a>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className=" bg-orange-500 text-black text-2xl font-bold py-2 px-8 rounded-md hover:bg-orange-400 duration-300"
            >
              get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
