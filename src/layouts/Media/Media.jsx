import MediaFactory from "../../factories/MediaFactory";

export default function Media({ customClass, children }) {
  return (
    <div className={`photos_${customClass}`}>
      {children.map((media, mediaIndex) => {
        let key = `media-${mediaIndex}`;
        console.log(key);
        return <div key={key}>{<MediaFactory media={media} />}</div>;
      })}
    </div>
  );
}
