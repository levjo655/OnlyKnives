export default function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  ...props
}) {
  const paddingSizes = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };
  
  const hoverStyles = hover ? "transition-shadow duration-200 hover:shadow-lg" : "";
  
  return (
    <div
      className={`bg-white rounded-lg shadow-md ${paddingSizes[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

