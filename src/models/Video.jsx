export default function Video({ src, type }) {
  let url = () => `https://clementaver.github.io/AgatheBrutt-React/assets/videos/${src}`;

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
