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
    <Center>
      <Card className="w-full max-w-md">
        <Heading>Sign up</Heading>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" label="Name" onChange={handleChange} />
          <Input name="email" label="Email" onChange={handleChange} />
          <Input
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
          />

          {errors.api && <Text color="danger">{errors.api}</Text>}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign up"}
          </Button>
        </form>
      </Card>
    </Center>
  );
}
