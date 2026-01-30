import React, { useState } from "react";
import {
  Button,
  Card,
  Center,
  Container,
  Heading,
  Input,
  Spinner,
  Text,
  ThemeToggle,
} from "../components";

const ComponentShowcase = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputWithError, setInputWithError] = useState("");
  const [error, setError] = useState("");

  const handleErrorInput = (e) => {
    const value = e.target.value;
    setInputWithError(value);
    if (value.length < 3 && value.length > 0) {
      setError("Must be at least 3 characters");
    } else {
      setError("");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <Container maxWidth="xl">
        <div className="mb-12 text-center">
          <Heading size="3xl" className="mb-4">
            Component Showcase
          </Heading>
          <Text size="lg" color="muted">
            A demonstration of all OnlyKnives core components
          </Text>
        </div>

        {/* Buttons Section */}
        <Card className="mb-8">
          <Heading size="xl" className="mb-6">
            Buttons
          </Heading>

          <div className="space-y-6">
            <div>
              <Text weight="semibold" className="mb-3">
                Button Variants
              </Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div>
              <Text weight="semibold" className="mb-3">
                Button Sizes
              </Text>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <Text weight="semibold" className="mb-3">
                Button States
              </Text>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Text size="sm" weight="semibold" className="mb-2">
              Usage:
            </Text>
            <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
              {`<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>`}
            </pre>
          </div>
        </Card>

        {/* Inputs Section */}
        <Card className="mb-8">
          <Heading size="xl" className="mb-6">
            Inputs
          </Heading>

          <div className="space-y-6 max-w-md">
            <Input
              label="Basic Input"
              placeholder="Enter text..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Input
              label="Required Input"
              placeholder="This field is required"
              required
            />

            <Input
              label="Input with Error"
              placeholder="Type at least 3 characters"
              value={inputWithError}
              onChange={handleErrorInput}
              error={error}
            />

            <Input
              label="Email Input"
              type="email"
              placeholder="email@example.com"
            />

            <Input
              label="Password Input"
              type="password"
              placeholder="Enter password"
            />

            <Input label="Disabled Input" placeholder="Disabled" disabled />
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Text size="sm" weight="semibold" className="mb-2">
              Usage:
            </Text>
            <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
              {`<Input
  label="Email"
  type="email"
  placeholder="email@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  required
/>`}
            </pre>
          </div>
        </Card>

        {/* Typography Section */}
        <Card className="mb-8">
          <Heading size="xl" className="mb-6">
            Typography
          </Heading>

          <div className="space-y-6">
            <div>
              <Text weight="semibold" className="mb-3">
                Heading Sizes
              </Text>
              <div className="space-y-3">
                <Heading size="3xl" as="h1">
                  Heading 3XL (h1)
                </Heading>
                <Heading size="2xl" as="h2">
                  Heading 2XL (h2)
                </Heading>
                <Heading size="xl" as="h2">
                  Heading XL (h2)
                </Heading>
                <Heading size="lg" as="h3">
                  Heading LG (h3)
                </Heading>
                <Heading size="md" as="h4">
                  Heading MD (h4)
                </Heading>
                <Heading size="sm" as="h5">
                  Heading SM (h5)
                </Heading>
                <Heading size="xs" as="h6">
                  Heading XS (h6)
                </Heading>
              </div>
            </div>

            <div>
              <Text weight="semibold" className="mb-3">
                Text Sizes & Colors
              </Text>
              <div className="space-y-2">
                <Text size="xl">Extra Large Text</Text>
                <Text size="lg">Large Text</Text>
                <Text size="base">Base Text (default)</Text>
                <Text size="sm">Small Text</Text>
                <Text size="xs">Extra Small Text</Text>
              </div>
              <div className="space-y-2 mt-4">
                <Text color="default">Default Color</Text>
                <Text color="muted">Muted Color</Text>
                <Text color="light">Light Color</Text>
                <Text color="primary">Primary Color</Text>
                <Text color="danger">Danger Color</Text>
                <Text color="success">Success Color</Text>
              </div>
            </div>

            <div>
              <Text weight="semibold" className="mb-3">
                Text Weights
              </Text>
              <div className="space-y-2">
                <Text weight="normal">Normal Weight</Text>
                <Text weight="medium">Medium Weight</Text>
                <Text weight="semibold">Semibold Weight</Text>
                <Text weight="bold">Bold Weight</Text>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Text size="sm" weight="semibold" className="mb-2">
              Usage:
            </Text>
            <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
              {`<Heading as="h1" size="3xl">Page Title</Heading>
<Text size="lg" color="muted" weight="medium">
  Subtitle or description text
</Text>`}
            </pre>
          </div>
        </Card>

        {/* Cards Section */}
        <Card className="mb-8">
          <Heading size="xl" className="mb-6">
            Cards
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="sm">
              <Text weight="semibold" className="mb-2">
                Small Padding
              </Text>
              <Text size="sm" color="muted">
                This card has small padding (p-4)
              </Text>
            </Card>

            <Card padding="md">
              <Text weight="semibold" className="mb-2">
                Medium Padding
              </Text>
              <Text size="sm" color="muted">
                This card has medium padding (p-6) - default
              </Text>
            </Card>

            <Card padding="lg">
              <Text weight="semibold" className="mb-2">
                Large Padding
              </Text>
              <Text size="sm" color="muted">
                This card has large padding (p-8)
              </Text>
            </Card>
          </div>

          <div className="mt-6">
            <Text weight="semibold" className="mb-3">
              Card with Hover Effect
            </Text>
            <Card hover className="max-w-sm">
              <Text weight="semibold" className="mb-2">
                Hover over me!
              </Text>
              <Text size="sm" color="muted">
                This card has a hover shadow effect
              </Text>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Text size="sm" weight="semibold" className="mb-2">
              Usage:
            </Text>
            <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
              {`<Card hover padding="lg">
  <Heading size="md">Card Title</Heading>
  <Text color="muted">Card content goes here</Text>
</Card>`}
            </pre>
          </div>
        </Card>

        {/* Container Section */}
        <Card className="mb-8">
          <Heading size="xl" className="mb-6">
            Container
          </Heading>

          <div className="space-y-4">
            <Text>
              Containers provide responsive max-widths and padding. They're used
              to wrap page content.
            </Text>

            <div className="space-y-2">
              <Text weight="semibold">Available Sizes:</Text>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>sm - max-w-screen-sm</li>
                <li>md - max-w-screen-md</li>
                <li>lg - max-w-screen-lg</li>
                <li>xl - max-w-screen-xl (default)</li>
                <li>2xl - max-w-screen-2xl</li>
                <li>full - max-w-full</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Text size="sm" weight="semibold" className="mb-2">
              Usage:
            </Text>
            <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
              {`<Container maxWidth="xl">
  <Heading>Page Content</Heading>
  <Text>Your content here...</Text>
</Container>`}
            </pre>
          </div>
        </Card>

        {/* Center Section */}
        <Card className="mb-8">
          <Heading size="xl" className="mb-6">
            Center
          </Heading>

          <div className="space-y-4">
            <Text>
              Center component uses CSS Grid to center content horizontally and
              optionally vertically.
            </Text>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-48">
              <Center fullScreen={false}>
                <div className="text-center">
                  <Text weight="semibold">Centered Content</Text>
                  <Text size="sm" color="muted">
                    This is centered!
                  </Text>
                </div>
              </Center>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Text size="sm" weight="semibold" className="mb-2">
              Usage:
            </Text>
            <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
              {`<Center fullScreen={true}>
  <div>Centered content</div>
</Center>`}
            </pre>
          </div>
        </Card>

        {/* Spinner Section */}
        <Card className="mb-8">
          <Heading size="xl" className="mb-6">
            Spinner
          </Heading>

          <div className="space-y-6">
            <div>
              <Text weight="semibold" className="mb-3">
                Spinner Sizes
              </Text>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <Spinner size="sm" />
                  <Text size="sm" className="mt-2">
                    Small
                  </Text>
                </div>
                <div className="text-center">
                  <Spinner size="md" />
                  <Text size="sm" className="mt-2">
                    Medium
                  </Text>
                </div>
                <div className="text-center">
                  <Spinner size="lg" />
                  <Text size="sm" className="mt-2">
                    Large
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Text size="sm" weight="semibold" className="mb-2">
              Usage:
            </Text>
            <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
              {`{isLoading ? (
  <Spinner size="lg" />
) : (
  <YourContent />
)}`}
            </pre>
          </div>
        </Card>

        {/* Theme Toggle Section */}
        <Card className="mb-8">
          <Heading size="xl" className="mb-6">
            Theme Toggle
          </Heading>

          <div className="space-y-4">
            <Text>
              The theme toggle switches between light and dark modes. It's
              already in the navbar, but here's a standalone example:
            </Text>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Text color="muted">Click to toggle theme</Text>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Text size="sm" weight="semibold" className="mb-2">
              Usage:
            </Text>
            <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
              {`import { ThemeToggle } from '../components';

<ThemeToggle />`}
            </pre>
          </div>
        </Card>

        {/* Combined Example */}
        <Card className="mb-8">
          <Heading size="xl" className="mb-6">
            Combined Example
          </Heading>

          <Text className="mb-6" color="muted">
            Here's a practical example combining multiple components:
          </Text>

          <Card hover className="max-w-2xl mx-auto">
            <Heading size="lg" className="mb-4">
              Contact Form
            </Heading>

            <div className="space-y-4">
              <Input label="Name" placeholder="Enter your name" required />

              <Input
                label="Email"
                type="email"
                placeholder="email@example.com"
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Your message..."
                />
              </div>

              <div className="flex gap-3">
                <Button variant="primary">Send Message</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </Card>
        </Card>
      </Container>
    </div>
  );
};

export default ComponentShowcase;
