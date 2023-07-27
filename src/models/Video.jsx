export default function Video({ src, type }) {
  let url = () => `%PUBLIC_URL%/assets/videos/${src}`;

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src={url()}
        type={type}
      />
    </video>
  );
}
