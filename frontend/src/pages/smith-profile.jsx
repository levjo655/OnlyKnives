import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KnifePost } from "components/core";

const SmithProfile = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/users/${id}/profile`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, [id]);

  if (!data) return <p className="p-10">Loading...</p>;

  const { smith, knives } = data;

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-8">
      {/* Smith header */}
      <div className="flex items-center gap-4">
        <img
          src={smith.avatar_url || "https://i.pravatar.cc/150"}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h1 className="text-2xl font-bold">{smith.name}</h1>
          <p className="text-gray-500">{smith.bio || "No bio yet"}</p>
        </div>
      </div>

      {/* Knives */}
      <div className="space-y-6">
        {knives.map((knife) => (
          <KnifePost key={knife.id} knife={knife} />
        ))}
      </div>
    </div>
  );
};

export default SmithProfile;
