export default function Video({
  src,
  title = undefined,
}: {
  src: string;
  title?: string;
}) {
  return (
    <video
      controls
      title={title}
      preload="metadata"
      className="my-8 w-full rounded-sm border border-sand-200"
    >
      <source
        src={src}
        type="video/mp4"
      />
    </video>
  );
}
