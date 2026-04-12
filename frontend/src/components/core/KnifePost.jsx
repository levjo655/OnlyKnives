import React, { useState } from "react";

const KnifePost = ({ knife }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      {/* Smith header */}
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="font-semibold">{knife.smith}</p>
          <p className="text-xs text-gray-500">Master Smith</p>
        </div>

        <button className="text-sm text-blue-500 hover:underline">
          Follow
        </button>
      </div>

      {/* Image */}
      <img
        src={knife.image}
        alt={knife.name}
        className="w-full h-[400px] object-cover"
      />

      {/* Actions */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{knife.name}</h3>

          <button
            onClick={() => setLiked(!liked)}
            className={`text-sm ${liked ? "text-red-500" : "text-gray-500"}`}
          >
            ♥ {liked ? knife.likes + 1 : knife.likes}
          </button>
        </div>

        <div className="text-sm text-gray-500">View details • Save • Share</div>
      </div>
    </div>
  );
};

export default KnifePost;
