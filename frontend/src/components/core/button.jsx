export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles = "font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-300",
    outline: "border-2 border-gray-600 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 disabled:opacity-50",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 disabled:opacity-50",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

