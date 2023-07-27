export default function Image({ src, alt }) {
  let url = () => `%PUBLIC_URL%/assets/images/${src}`;

  return (
    <img
      src={url()}
      alt={alt}
    />
  );
}
