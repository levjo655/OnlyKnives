import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Smiths = () => {
  const [smiths, setSmiths] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users/smiths")
      .then((res) => res.json())
      .then((data) => setSmiths(data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">Smiths</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {smiths.map((smith) => (
          <Link
            key={smith.id}
            to={`/smith/${smith.id}`}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition block"
          >
            <div className="flex items-center gap-4">
              <img
                src={smith.avatar_url || "https://i.pravatar.cc/150"}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Smiths;
