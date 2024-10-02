import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebaseinit";
import { ref, onValue } from "firebase/database";

interface DataType {
  // Define the structure of your data here
  // For example, if your data has an 'email' field:
  email: string;
  name: string;
  message: string;
}

export default function DataShow() {
  const [dataArray, setDataArray] = useState<DataType[]>([]);
  let isRun = false;
  useEffect(() => {
    if (!isRun) {
      isRun = true;
      console.log("run");
      onValue(ref(db, "emails/"), (snapshot) => {
        const data = snapshot.val();
        if (data === null) return;
        for (const key in data) {
          setDataArray((prev) => [...prev, data[key]]);
        }
      });
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center p-3 border-b">Guests</h1>
      <div className="overflow-x-auto mt-3 mx-auto md:w-[70%] ">
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {dataArray &&
              dataArray.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.message}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <section className="flex justify-center w-full p-2 bg-gray-300">
          Total Number: {dataArray.length}
        </section>
      </div>
    </div>
  );
}
