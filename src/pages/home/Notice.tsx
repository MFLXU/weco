import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Notice = (props: any) => {
  const navigete = useNavigate();
  return (
    <div className="bg-red-600 py-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center justify-center text-center">
          <p>
            Some features may not work,{" "}
            <span
              onClick={() => {
                navigete("/about");
              }}
              className="underline cursor-pointer font-extrabold"
            >
              click here
            </span>{" "}
            to know why.
          </p>
        </div>
        <button
          onClick={() => {
            props.show(false);
          }}
        >
          <XMarkIcon className="w-6" />{" "}
        </button>
      </div>
    </div>
  );
};
export default Notice;
