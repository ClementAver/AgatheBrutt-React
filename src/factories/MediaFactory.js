import Image from "../models/Image";
import Video from "../models/Video";

export default function MediaFactory({ media }) {
  if (media.type) {
    return (
      <Video
        src={media.src}
        type={media.type}
      />
    );
  } else {
    return (
      <Image
        src={media.src}
        alt={media.alt}
      />
    );
  }
}
