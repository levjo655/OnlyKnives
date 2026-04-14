import React, { useState } from "react";

const KnifePost = ({ knife }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="font-semibold">{knife.smith || "Unknown Smith"}</p>
          <p className="text-xs text-gray-500">Master Smith</p>
        </div>

        <button className="text-sm text-blue-500 hover:underline">
          Follow
        </button>
      </div>

      {/* Image */}
      <img
        src={knife.image_url}
        alt={knife.title}
        className="w-full h-[400px] object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title + Like */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{knife.title}</h3>

          <button
            onClick={() => setLiked(!liked)}
            className={`text-sm transition ${
              liked ? "text-red-500" : "text-gray-500"
            }`}
          >
            ♥ {liked ? (knife.likes || 0) + 1 : knife.likes || 0}
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {knife.description}
        </p>

        {/* Actions */}
        <div className="text-sm text-gray-500">View details • Save • Share</div>
      </div>
    </div>
  );
};

export default KnifePost;
