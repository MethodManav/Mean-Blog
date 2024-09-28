import { Link } from "react-router-dom";
import { InputField } from "./InputField";
import { useState } from "react";
import { Button } from "./Button";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInput, setPostInput] = useState<any>({
    email: "",
    username: "",
    password: "",
  });
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
          <InputField
            label="UserName"
            placeholder="Enter Your UserName"
            onChange={(e) =>
              setPostInput({
                ...postInput,
                username: e.target.value,
              })
            }
          />
          <InputField
            label="Email"
            placeholder="Enter Your Email "
            onChange={(e) =>
              setPostInput({
                ...postInput,
                email: e.target.value,
              })
            }
          />
          <InputField
            label="Password"
            placeholder="Enter Your Password"
            onChange={(e) =>
              setPostInput({
                ...postInput,
                password: e.target.value,
              })
            }
          />
          <Button type="signup" />
        </div>
      </div>
    </div>
  );
};
