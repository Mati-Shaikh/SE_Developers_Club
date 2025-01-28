// "use client";
// import { Loader2 } from "lucide-react";
// import React, { useState } from "react";
// import { toast } from "sonner";

// function RegisterForm({ id, usecase, teamSize }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     rollNo: "",
//     email: "",
//     department: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // checks
//     if (formData.department === "") {
//       toast.error("Please select a department");
//       return;
//     }

//     // preparing data
//     setLoading(true);
//     let dataToSend = {
//       name: formData.name,
//       rollno: formData.rollNo,
//       email: formData.email,
//       department: formData.department,
//       usecase: usecase,
//     };
//     if (usecase === "Event") {
//       dataToSend.eventID = id;
//     } else {
//       dataToSend.workshopID = id;
//     }

//     // request
//     await fetch("/api/RegistrationApi/addRegistration", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(dataToSend),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         if (data.message === "Registration created successfully") {
//           toast.success(data.message);
//         } else {
//           // some field missing or error in them
//           toast.error(data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Something went wrong!!");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="p-8 shadow-lg rounded-lg text-white">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         {usecase} Registration
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-wrap gap-4 w-full pb-10">
//           {Array.from({ length: teamSize }, (_, index) => (
//             <div className="min-w-72 space-y-4" key={index}>
//               <div>
//                 <label className="block text-sm font-medium">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-2 border bg-transparent border-gray-300 rounded shadow-sm shadow-primary"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">
//                   Roll No (Format: 21I-0909):
//                 </label>
//                 <input
//                   type="text"
//                   name="rollNo"
//                   value={formData.rollNo}
//                   pattern="[0-9]{2}[A-Z]{1}-[0-9]{4}"
//                   onChange={handleChange}
//                   className="w-full p-2 border bg-transparent border-gray-300 rounded shadow-sm shadow-primary"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Email:</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border bg-transparent border-gray-300 rounded shadow-sm shadow-primary"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Department:</label>
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="w-full p-2 border bg-transparent border-gray-300 rounded shadow-sm shadow-primary"
//                   required
//                 >
//                   <option value="CS">CS (Computer Science)</option>
//                   <option value="SE">SE (Software Engineering)</option>
//                   <option value="AI">AI (Artificial Intelligence)</option>
//                   <option value="EE">EE (Electrical Engineering)</option>
//                   <option value="CY">CY (Cybersecurity)</option>
//                 </select>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           disabled={loading}
//           type="submit"
//           className="w-full flex justify-center items-center py-2 bg-primary text-white rounded-lg hover:bg-blue-600"
//         >
//           {loading ? (
//             <Loader2 className="h-6 w-6 text-white animate-spin" />
//           ) : (
//             "Register"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;

// "use client";
// import { Loader2 } from "lucide-react";
// import React, { useState } from "react";
// import { toast } from "sonner";

// function RegisterForm({ id, usecase, teamSize }) {
//   const [teamData, setTeamData] = useState([
//     { name: "", rollno: "", email: "", department: "" },
//   ]);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedTeamData = [...teamData];
//     updatedTeamData[index][name] = value;
//     setTeamData(updatedTeamData);
//   };

//   const handleAddMember = () => {
//     setTeamData([
//       ...teamData,
//       { name: "", rollno: "", email: "", department: "" },
//     ]);
//   };

//   const handleRemoveMember = (index) => {
//     const updatedTeamData = teamData.filter((_, i) => i !== index);
//     setTeamData(updatedTeamData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (teamData.some((member) => !member.department)) {
//       toast.error("Please select a department for all members");
//       return;
//     }

//     setLoading(true);
//     const dataToSend = {
//       users: teamData,
//       usecase: usecase,
//       eventOrWorkshopID: id,
//     };

//     // request
//     await fetch("/api/RegistrationApi/addRegistration", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(dataToSend),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.message === "Registration created successfully") {
//           toast.success(data.message);
//         } else {
//           toast.error(data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Something went wrong!!");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="p-8 shadow-lg rounded-lg text-white">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         {usecase} Registration
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-wrap gap-6">
//           {teamData.map((member, index) => (
//             <div
//               key={index}
//               className="border border-gray-800 p-4 w-80 rounded-lg"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-bold">Member {index + 1}</h3>
//                 {teamData.length > 1 && (
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveMember(index)}
//                     className="bg-red-500 text-white text-sm px-2 py-1 rounded-lg hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 )}
//               </div>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium">Name:</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={member.name}
//                     onChange={(e) => handleChange(index, e)}
//                     className="w-full p-2 border bg-transparent border-gray-800 rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium">
//                     Roll No (Format: 21I-0909):
//                   </label>
//                   <input
//                     type="text"
//                     name="rollno"
//                     value={member.rollno}
//                     pattern="[0-9]{2}[A-Z]{1}-[0-9]{4}"
//                     onChange={(e) => handleChange(index, e)}
//                     className="w-full p-2 border bg-transparent border-gray-800 rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium">Email:</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={member.email}
//                     onChange={(e) => handleChange(index, e)}
//                     className="w-full p-2 border bg-transparent border-gray-800 rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium">
//                     Department:
//                   </label>
//                   <select
//                     name="department"
//                     value={member.department}
//                     onChange={(e) => handleChange(index, e)}
//                     className="w-full p-2 border bg-gray-600 border-gray-800 rounded-lg"
//                     required
//                   >
//                     <option value="">Select Department</option>
//                     <option value="CS">CS (Computer Science)</option>
//                     <option value="SE">SE (Software Engineering)</option>
//                     <option value="AI">AI (Artificial Intelligence)</option>
//                     <option value="EE">EE (Electrical Engineering)</option>
//                     <option value="CY">CY (Cybersecurity)</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div>
//             {teamData.length < teamSize && (
//               <button
//                 type="button"
//                 onClick={handleAddMember}
//                 className="bg-green-500 text-white text-sm px-2 py-1 rounded-lg hover:bg-green-600"
//               >
//                 Add Member
//               </button>
//             )}
//           </div>
//         </div>

//         <button
//           disabled={loading}
//           type="submit"
//           className="w-full flex justify-center items-center py-2 mt-6 bg-primary text-white rounded-lg hover:bg-blue-600"
//         >
//           {loading ? (
//             <Loader2 className="h-6 w-6 text-white animate-spin" />
//           ) : (
//             "Register"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;

"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

function RegisterForm({ id, usecase, teamSize }) {
  const [teamData, setTeamData] = useState([
    { name: "", rollno: "", email: "", department: "" },
  ]);
  const [loading, setLoading] = useState(false);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTeamData = [...teamData];
    updatedTeamData[index][name] = value;
    setTeamData(updatedTeamData);
  };

  const handleAddMember = () => {
    setTeamData([
      ...teamData,
      { name: "", rollno: "", email: "", department: "" },
    ]);
  };

  const handleRemoveMember = (index) => {
    const updatedTeamData = teamData.filter((_, i) => i !== index);
    setTeamData(updatedTeamData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (teamData.some((member) => !member.department)) {
      toast.error("Please select a department for all members");
      return;
    }

    setLoading(true);

    // Prepare payload for the backend
    const dataToSend = {
      users: teamData,
      eventID: usecase === "Event" ? id : null,
      workshopID: usecase === "Workshop" ? id : null,
    };

    try {
      const response = await fetch("/api/RegistrationApi/addRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 shadow-lg rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {usecase} Registration
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-6">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="border border-gray-800 p-4 w-80 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Member {index + 1}</h3>
                {teamData.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveMember(index)}
                    className="bg-red-500 text-white text-sm px-2 py-1 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full p-2 border bg-transparent border-gray-800 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Roll No (Format: 21I-0909):
                  </label>
                  <input
                    type="text"
                    name="rollno"
                    value={member.rollno}
                    pattern="[0-9]{2}[A-Z]{1}-[0-9]{4}"
                    onChange={(e) => handleChange(index, e)}
                    className="w-full p-2 border bg-transparent border-gray-800 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={member.email}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full p-2 border bg-transparent border-gray-800 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Department:
                  </label>
                  <select
                    name="department"
                    value={member.department}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full p-2 border bg-gray-600 border-gray-800 rounded-lg"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="CS">CS (Computer Science)</option>
                    <option value="SE">SE (Software Engineering)</option>
                    <option value="AI">AI (Artificial Intelligence)</option>
                    <option value="EE">EE (Electrical Engineering)</option>
                    <option value="CY">CY (Cybersecurity)</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
          <div>
            {teamData.length < teamSize && (
              <button
                type="button"
                onClick={handleAddMember}
                className="bg-green-500 text-white text-sm px-2 py-1 rounded-lg hover:bg-green-600"
              >
                Add Member
              </button>
            )}
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full flex justify-center items-center py-2 mt-6 bg-primary text-white rounded-lg hover:bg-blue-600"
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
