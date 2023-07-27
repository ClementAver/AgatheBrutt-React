export default function Image({ src, alt }) {
  let url = () => `https://clementaver.github.io/AgatheBrutt-React/assets/images/${src}`;

  return (
    <img
      src={url()}
      alt={alt}
    />
  );
}
