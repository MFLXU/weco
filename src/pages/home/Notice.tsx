import { useNavigate } from "react-router-dom";

const Notice = () => {
  const navigete = useNavigate();
  return (
    <div className="bg-red-600 py-2">
      <div className="container">
        <div className="flex items-center justify-center">
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
      </div>
    </div>
  );
};
export default Notice;
