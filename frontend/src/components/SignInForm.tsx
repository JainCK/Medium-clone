// SignInForm.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LabelInput from "./Labelinput";
import axios from "axios";
import { BACKEND_URL } from "../config";

const SignInForm = () => {
  const navigate = useNavigate();
  const [signInInputs, setSignInInputs] = useState({
    email: "",
    password: "",
  });

  async function signIn() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        signInInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Error while signing in");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              Sign in to your account
            </div>
            <div className="text-slate-400">
              Don't have an account?{" "}
              <Link className="pl-2 underline" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
          <div className="pt-10">
            <LabelInput
              label="Email"
              type="email"
              placeholder="JohnDoe@email.com"
              onChange={(e) =>
                setSignInInputs({ ...signInInputs, email: e.target.value })
              }
            />
            <LabelInput
              label="Password"
              type="password"
              placeholder="******"
              onChange={(e) =>
                setSignInInputs({ ...signInInputs, password: e.target.value })
              }
            />
            <button
              onClick={signIn}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
