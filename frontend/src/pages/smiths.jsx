import React, { useEffect, useState } from "react";

const Smiths = () => {
  const [smiths, setSmiths] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users/smiths")
      .then((res) => res.json())
      .then((data) => setSmiths(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">Smiths</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {smiths.map((smith) => (
          <div
            key={smith.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={smith.avatar_url}
                alt={smith.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h2 className="font-semibold text-lg">{smith.name}</h2>
                <p className="text-sm text-gray-500">
                  {smith.bio || "No bio yet"}
                </p>
              </div>
            </div>

            <button className="mt-4 text-sm text-blue-500 hover:underline">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smiths;
