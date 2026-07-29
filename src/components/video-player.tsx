"use client";

interface VideoPlayerProps {
  src: string;
  title: string;
}

export function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoSrc = src.includes("?")
    ? `${src}&autoplay=1`
    : `${src}?autoplay=1`;
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border">
      <iframe
        src={videoSrc}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
      ></iframe>
    </div>
  );
}
