export default function Text({
  children,
  as = "p",
  size = "base",
  color = "default",
  weight = "normal",
  className = "",
  ...props
}) {
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };
  
  const colors = {
    default: "text-gray-900 dark:text-gray-100",
    muted: "text-gray-600 dark:text-gray-400",
    light: "text-gray-400 dark:text-gray-500",
    primary: "text-blue-600 dark:text-blue-400",
    danger: "text-red-600 dark:text-red-400",
    success: "text-green-600 dark:text-green-400",
  };
  
  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };
  
  const Component = as;
  
  return (
    <Component
      className={`${sizes[size]} ${colors[color]} ${weights[weight]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

