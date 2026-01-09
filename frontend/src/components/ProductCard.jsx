import { Link } from "react-router-dom";

export default function ProductCard({
  title,
  description,
  image,
  to = "/",
  compact = false,
}) {
  return (
    <Link
      to={to}
      className="block group bg-surface rounded-lg overflow-hidden transition hover:shadow-accent"
    >
      
      <div className={compact ? "p-4" : "p-6"}>
        <h2
          className={`font-semibold mb-1 ${
            compact ? "text-lg" : "text-xl"
          } group-hover:text-accent transition`}
        >
          {title}
        </h2>

        {description && (
          <p className="text-secondaryText text-sm">{description}</p>
        )}
      </div>

      {image && (
        <div className="h-40 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      )}
    </Link>
  );
}
