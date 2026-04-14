import { KnifePost } from "components";
import demoKnife from "../images/demo_knife.jpg";

import React, { useEffect, useState } from "react";

const Knives = () => {
  const [knives, setKnives] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/knife_posts")
      .then((res) => res.json())
      .then((data) => setKnives(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-bg min-h-screen text-primaryText">
      <div className="max-w-2xl mx-auto py-10 space-y-10">
        {knives.map((knife) => (
          <KnifePost key={knife.id} knife={knife} />
        ))}
      </div>
    </div>
  );
};

export default Knives;
