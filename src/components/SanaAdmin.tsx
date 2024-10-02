import React from "react";
import DataShow from "./dataShow";
import { set } from "firebase/database";
export default function SanaAdmin() {
  const [auth, setAuth] = React.useState(false);
  const sanaAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === "SanaMoji" && password === "Sana0918") {
      setAuth(true);
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <>
      {!auth ? (
        <div className="w-full flex items-center justify-center h-screen my-auto border rounded-xl">
          <form
            onSubmit={sanaAuth}
            className="flex flex-col items-center justify-center gap-5"
          >
            <h1 className="text-4xl font-bold">Admin Login</h1>
            <input
              className="border-2 border-black p-2 rounded-xl"
              type="text"
              name="username"
              placeholder="username"
            />
            <input
              className="border-2 border-black p-2 rounded-xl"
              type="password"
              name="password"
              placeholder="password"
            />
            <button className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white">
              login
            </button>
          </form>
        </div>
      ) : (
        <DataShow />
      )}
    </>
  );
}
