export default function Heading({
  children,
  as = "h2",
  size = "md",
  className = "",
  ...props
}) {
  const sizes = {
    xs: "text-lg",
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
    "2xl": "text-5xl",
    "3xl": "text-6xl",
  };

  const baseStyles = "font-semibold text-gray-900 dark:text-gray-100";

  const Component = as;

  return (
    <Component
      className={`${baseStyles} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
