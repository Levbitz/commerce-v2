import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function SignUp() {
  // const handleSignUp = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     try {
  //       await auth.createUserWithEmailAndPassword(email.value, password.value);
  //       history.push("/");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },

  //   [history]
  // );
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center ">
        <div class=" p-16 rounded border-gray-200 border-2">
          <h2 class="text-3xl font-bold mb-10 text-gray-800">
            Create Your Account
          </h2>

          <form class="space-y-5">
            <div>
              <label class="block mb-1 font-bold text-gray-500">Name</label>
              <input
                type="text"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Email</label>
              <input
                type="email"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input
                type="password"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div class="flex items-center">
              <input type="checkbox" id="agree" />
              <label for="agree" class="ml-2 text-gray-700 text-sm">
                I agree to the terms and privacy.
              </label>
            </div>

            <button class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">
              Sign Up
            </button>
          </form>
          <Link to="/login">Already Have Account? Login</Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SignUp);
