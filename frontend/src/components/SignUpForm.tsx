// SignUpForm.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LabelInput from "./Labelinput";
import axios from "axios";
import { BACKEND_URL } from "../config";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [signUpInputs, setSignUpInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function signUp() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        signUpInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Error while signing up");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-400">
              Already have an account?{" "}
              <Link className="pl-2 underline" to="/signin">
                Sign in
              </Link>
            </div>
          </div>
          <div className="pt-10">
            <LabelInput
              label="Name"
              placeholder="John Doe"
              onChange={(e) =>
                setSignUpInputs({ ...signUpInputs, name: e.target.value })
              }
            />
            <LabelInput
              label="Email"
              type="email"
              placeholder="JohnDoe@email.com"
              onChange={(e) =>
                setSignUpInputs({ ...signUpInputs, email: e.target.value })
              }
            />
            <LabelInput
              label="Password"
              type="password"
              placeholder="******"
              onChange={(e) =>
                setSignUpInputs({ ...signUpInputs, password: e.target.value })
              }
            />
            <button
              onClick={signUp}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
