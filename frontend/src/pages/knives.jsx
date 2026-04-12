import React from "react";
import { KnifePost } from "components";
import demoKnife from "../images/demo_knife.jpg";

const mockKnives = [
  {
    id: 1,
    name: "Petty Suminagashi",
    smith: "Eduardo Covre",
    image: demoKnife,
    likes: 120,
  },
  {
    id: 2,
    name: "Crimson Edge",
    smith: "Aki Tanaka",
    image: "/images/knife2.jpg",
    likes: 89,
  },
  {
    id: 3,
    name: "Nordic Hunter",
    smith: "Erik Lund",
    image: "/images/knife3.jpg",
    likes: 210,
  },
];

const Knives = () => {
  return (
    <div className="bg-bg min-h-screen text-primaryText">
      <div className="max-w-2xl mx-auto py-10 space-y-10">
        {mockKnives.map((knife) => (
          <KnifePost key={knife.id} knife={knife} />
        ))}
      </div>
    </div>
  );
};

export default Knives;
