import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Center, Heading, Input, Text } from "../components/core";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:23456/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      console.log("User created:", data);
      navigate("/login");
    } catch (err) {
      setErrors({ api: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center className="bg-gray-50 dark:bg-gray-900 px-4 min-h-screen">
      <Card className="w-full max-w-md" padding="lg">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <Heading as="h1" size="xl">
              Create an Account
            </Heading>
            <Text color="muted" size="sm">
              Sign up to get started
            </Text>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </Button>
          </form>

          {/* Already have an account */}
          <div className="text-center">
            <Text color="muted" size="sm">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
            </Text>
          </div>
        </div>
      </Card>
    </Center>
  );
}
