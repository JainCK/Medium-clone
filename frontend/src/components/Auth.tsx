import { Link } from "react-router-dom";
import LabelInput from "./Labelinput";
import { useState } from "react";
import { signupInput } from "@jainck88/jmedium-app";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-400">
              Already have an account?
              <Link className="pl-2 underline" to={"/signin"}>
                Login
              </Link>
            </div>
          </div>
          <div className="pt-10">
            <LabelInput
              label="Username"
              type={"name"}
              placeholder="John Doe"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
            <LabelInput
              label="Email"
              type={"email"}
              placeholder="JohnDoe@email.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelInput
              label="Password"
              type={"password"}
              placeholder="******"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
