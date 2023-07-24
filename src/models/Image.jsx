export default function Image({ src, alt }) {
  let url = () => `/assets/images/${src}`;

  return (
    <img
      src={url()}
      alt={alt}
    />
  );
}
