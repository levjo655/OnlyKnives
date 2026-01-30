export default function Center({
  children,
  className = "",
  fullScreen = true,
}) {
  return (
    <div
      className={`grid place-items-center ${
        fullScreen ? "min-h-screen" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
