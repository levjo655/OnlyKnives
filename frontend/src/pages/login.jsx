import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Center, Heading, Input, Text } from "../components/core";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login data:", formData);
      setIsLoading(false);
      // Navigate to home or dashboard after successful login
      // navigate("/");
    }, 1500);
  };

  return (
    <Center className="bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md" padding="lg">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <Heading as="h1" size="xl">
              Welcome Back
            </Heading>
            <Text color="muted" size="sm">
              Sign in to your account to continue
            </Text>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                onClick={() => console.log("Forgot password clicked")}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Or
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <Text color="muted" size="sm">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
            </Text>
          </div>

          {/* Smith Signup Link */}
          <div className="text-center pt-2 border-t border-gray-200 dark:border-gray-700">
            <Text color="muted" size="sm">
              Are you a knife smith?{" "}
              <button
                type="button"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                onClick={() => navigate("/smith-signup")}
              >
                Register as a smith
              </button>
            </Text>
          </div>
        </div>
      </Card>
    </Center>
  );
};

export default Login;
