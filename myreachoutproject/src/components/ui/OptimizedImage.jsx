import { forwardRef, memo, useEffect, useState } from "react";

const OptimizedImage = forwardRef(function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
  priority = false,
  srcSet,
  sizes,
  objectFit = "cover",
  style = {},
  ...props
}, ref) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const resolvedLoading = priority ? "eager" : loading;
  const resolvedFetchPriority = priority ? "high" : fetchPriority;

  return (
    <img
      {...props}
      ref={ref}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={resolvedLoading}
      decoding={decoding}
      fetchPriority={resolvedFetchPriority}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      className={[
        className,
        "transition-opacity duration-500 motion-safe:transform-gpu",
        isLoaded ? "opacity-100" : "opacity-0",
        !isLoaded && !hasError ? "animate-pulse bg-[#f5efe5]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        objectFit,
        willChange: "opacity",
        ...style,
      }}
    />
  );
});

export default memo(OptimizedImage);
