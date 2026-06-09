import { useState } from "react";

export default function ServiceMedia({ video, fallback, alt }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // fallback if no video or error
  if (!video || error) {
    return (
      <img
        src={fallback}
        alt={alt}
        className="w-full h-full object-contain"
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* optional loader */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-400">
          Loading...
        </div>
      )}

      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setLoaded(true)}
        onError={() => setError(true)}
        className="w-full h-full object-contain"
      />
    </div>
  );
}