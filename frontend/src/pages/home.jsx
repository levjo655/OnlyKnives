import React from "react";
import { Link } from "react-router-dom";
import {
  ProductCard,
  Container,
  Heading,
  Text,
  Button,
  Center,
} from "../components";
import demoKnife from "../images/demo_knife.jpg";

const Home = () => (
  <div className="bg-bg dark:bg-gray-900 min-h-screen text-primaryText dark:text-gray-100">
    {/* Hero Section */}
    <section className="relative py-20 md:py-32 overflow-hidden">
      <Container maxWidth="xl">
        <Center fullScreen={false}>
          <div className="text-center space-y-6">
            <Heading
              as="h1"
              size="3xl"
              className="text-5xl md:text-7xl font-bold mb-6 text-primaryText"
            >
              OnlyKnives
            </Heading>
            <Text size="xl" color="muted" className="max-w-2xl mx-auto mb-8">
              A curated marketplace of extraordinary craftsmanship
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/knives">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Collection
                </Button>
              </Link>
              <Link to="/smiths">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Meet the Smiths
                </Button>
              </Link>
            </div>
          </div>
        </Center>
      </Container>
    </section>

    {/* Main Categories */}
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <Container maxWidth="xl">
        <div className="text-center mb-12">
          <Heading size="xl" className="mb-4">
            Discover Our Collection
          </Heading>
          <Text color="muted" size="lg">
            Handcrafted excellence from master artisans worldwide
          </Text>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <ProductCard
            title="Steels"
            description="Premium materials and techniques"
            to="/steels"
          />
        </div>
      </Container>
    </section>

    {/* Featured Section */}
    <section className="py-20">
      <Container maxWidth="xl">
        <div className="text-center mb-12">
          <Heading size="xl" className="mb-4">
            Featured
          </Heading>
          <Text color="muted" size="lg">
            Handpicked selections from our collection
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            title="Featured Knife"
            description="San mai construction with exceptional edge retention"
            image={demoKnife}
            to="/knives/featured"
            compact
          />
          <ProductCard
            title="Featured Smith"
            description="Master craftsman with decades of experience"
            to="/smiths/featured"
            compact
          />
          <ProductCard
            title="Featured Steel"
            description="Premium Japanese steel with superior performance"
            to="/steels/featured"
            compact
          />
        </div>
      </Container>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gray-900 dark:bg-gray-950 text-white">
      <Container maxWidth="lg">
        <Center fullScreen={false}>
          <div className="text-center space-y-6">
            <Heading size="2xl" className="text-white">
              Ready to Start Your Collection?
            </Heading>
            <Text size="lg" color="light" className="max-w-xl mx-auto">
              Join our community of knife enthusiasts and discover the finest
              handcrafted blades
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/knives">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  Browse Collection
                </Button>
              </Link>
              <Link to="/smithsignup">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Apply as a Smith
                </Button>
              </Link>
            </div>
          </div>
        </Center>
      </Container>
    </section>
  </div>
);

export default Home;
