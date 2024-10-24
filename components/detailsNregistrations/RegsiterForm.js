"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

function RegisterForm({ id, usecase }) {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
    department: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // checks
    if (formData.department === "") {
      toast.error("Please select a department");
      return;
    }

    // preparing data
    setLoading(true);
    let dataToSend = {
      name: formData.name,
      rollno: formData.rollNo,
      email: formData.email,
      department: formData.department,
      usecase: usecase,
    };
    if (usecase === "Event") {
      dataToSend.eventID = id;
    } else {
      dataToSend.workshopID = id;
    }

    // request
    await fetch("/api/RegistrationApi/addRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.message === "Registration created successfully") {
          toast.success(data.message);
        } else {
          // some field missing or error in them
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-8 shadow-lg rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {usecase} Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border bg-transparent border-gray-300 rounded shadow-sm shadow-primary"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Roll No (Format: 21I-0909):
          </label>
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            pattern="[0-9]{2}[A-Z]{1}-[0-9]{4}"
            onChange={handleChange}
            className="w-full p-2 border bg-transparent border-gray-300 rounded shadow-sm shadow-primary"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border bg-transparent border-gray-300 rounded shadow-sm shadow-primary"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            // className="w-full px-2 py-4 backdrop-filter backdrop-blur-lg bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg"
            className="w-full p-2 border bg-transparent border-gray-300 rounded shadow-sm shadow-primary"
            required
          >
            <option
              className="block py-2 px-4 text-white rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-gray-800"
              value="CS"
            >
              CS (Computer Science)
            </option>
            <option
              className="block py-2 px-4 text-white rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-gray-800"
              value="SE"
            >
              SE (Software Engineering)
            </option>
            <option
              className="block py-2 px-4 text-white rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-gray-800"
              value="AI"
            >
              AI (Artificial Intelligence)
            </option>
            <option
              className="block py-2 px-4 text-white rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-gray-800"
              value="EE"
            >
              EE (Electrical Engineering)
            </option>
            <option
              className="block py-2 px-4 text-white rounded-lg hover:bg-gray-800"
              value="CY"
            >
              CY (Cybersecurity)
            </option>
          </select>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full flex justify-center items-center py-2 bg-primary text-white rounded-lg hover:bg-blue-600"
        >
          {loading ? (
            <Loader2 className="h-6 w-6 text-white animate-spin" />
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
