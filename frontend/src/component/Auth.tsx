import { Link } from "react-router-dom";
import { InputField } from "./InputField";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-4xl font-extrabold">Create An Account</div>
          <div className="mt-2 text-slate-500 font-light">
            Already An Account?
            <Link className="pl-2 underline" to={"/signin"}>
              Login
            </Link>
          </div>
          <InputField label="UserName" placeholder="Enter Your UserName" />
          <InputField label="Email" placeholder="Enter Your Email " />
          <InputField label="Password" placeholder="Enter Your Password" />
          <button
            type="button"
            className=" w-full mt-7 text-white bg-black hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
