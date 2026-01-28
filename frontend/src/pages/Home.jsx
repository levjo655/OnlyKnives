import React from "react";
import { ProductCard } from "../components";
import demoKnife from "../images/demo_knife.jpg";

const Home = () => (
  <div className="bg-bg min-h-screen text-primaryText">


    {/* Hero */}
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl font-bold mb-4">OnlyKnives</h1>
      <p className="text-secondaryText max-w-xl">
        A curated marketplace of extraordinary craftsmanship
      </p>
    </section>

    {/* Main categories */}
    <section className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <ProductCard
        title="All Knives"
        description="Hand crafted by the world's finest"
        to="/knives"
      />

      <ProductCard
        title="Blacksmiths"
        description="Worldwide handpicked"
        to="/smiths"
      />
    </section>

    {/* Featured */}
    <section className="px-10 pb-20">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Featured
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        <ProductCard
          title="Featured Knife"
          description="San mai"
          image={demoKnife}
          to="/knives/featured"
          compact
        />

        <ProductCard
          title="Featured Smith"
          to="/smiths/featured"
          compact
        />

        <ProductCard
          title="Featured Steel"
          to="/steels/featured"
          compact
        />
      </div>
    </section>

  </div>
);

export default Home;
