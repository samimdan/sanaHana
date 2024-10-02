import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebaseinit";
import { set, ref } from "firebase/database";

export default function EmailForm() {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [clicked, setClicked] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const EmailSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setClicked(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!email?.toString().match(isValidEmail)) {
      setErrorEmail(true);
      console.log("error");
      return;
    } else {
      setErrorEmail(false);
      set(ref(db, "emails/"), {
        name: name,
        email: email,
        message: message,
      });
    }
    e.currentTarget.reset();
  };
  useEffect(() => {
    if ((name === "" || email === "") && clicked) {
      setErrorInput(true);
    } else {
      setErrorInput(false);
    }
  }, [name, email]);
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 2 },
      }}
      className="text-2xl font-[NovableBold] md:w-[60%] mx-auto p-12 md:border-2 mb-3 rounded-2xl md:border-dashed mt-5 md:border-rose-400"
    >
      <p className="text-4xl text-center text-rose-500">
        Let Us Know If You’ll Be Joining Us!
      </p>
      <form onSubmit={EmailSend} className="flex flex-col mt-9 justify-center">
        <span className="md:flex md:items-center md:justify-between">
          <section className="flex items-center gap-2">
            <label>
              <p>Name:</p>
              <input
                className="outline-none border-b border-black"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </section>
          <section className="flex items-center gap-2 mt-7 md:mt-0">
            <label>
              <p>Email:</p>
              <input
                className="outline-none border-b border-black"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </section>
        </span>
        <span className="md:mt-0 mt-9">
          <label className="md:flex items-center w-90 gap-3   md:mt-0 ">
            <span>Message:</span>
            <textarea
              className="w-full resize-none    border-b border-black outline-none"
              name="message"
              id=""
            ></textarea>
          </label>
        </span>
        {errorInput && (
          <p className="text-rose-400 text-xl p-3">inputs can't be empty!!!</p>
        )}
        {errorEmail && (
          <p className="text-rose-400 text-xl p-3">
            please enter vaid email address
          </p>
        )}
        <span className="flex justify-center">
          <input
            className="p-2 mt-5  rounded-xl w-44 border cursor-pointer hover:border-2 hover:border-rose-500 hover:bg-rose-500 hover:text-white"
            type="submit"
            value="send"
          />
        </span>
      </form>
    </motion.div>
  );
}
