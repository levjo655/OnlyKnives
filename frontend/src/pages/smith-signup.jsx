import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SmithSignup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    country: "",
    bio: "",
    website: "",
    instagram: "",
    steels: "",
    heat: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: `${form.name}@smith.com`, // temporary (you can improve later)
          password: "default123",
          role: "smith",
          bio: form.bio,
          avatar_url: null,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate(`/smith/${data.id}`);
      } else {
        console.error(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-bg min-h-screen text-primaryText">
      <div className="bg-gray-200 p-8 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6 text-center">
          Apply as a smith form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-4">
            <input
              id="name"
              placeholder="Full name"
              onChange={handleChange}
              className="w-full p-2"
            />

            <textarea
              id="bio"
              placeholder="Background / summary"
              onChange={handleChange}
              className="w-full p-2"
            />
          </div>

          <div className="space-y-4">
            <input
              id="steels"
              placeholder="Steels you work with"
              onChange={handleChange}
              className="w-full p-2"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SmithSignup;
