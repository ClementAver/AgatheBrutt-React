import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function PageStart() {
  const [className, setClassName] = useState("cInvisible");

  const handleScroll = () => {
    setClassName(window.pageYOffset > 100 ? "cVisible" : "cInvisible");
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <HashLink
      id="cRetour"
      smooth
      className={className}
      to="#top"
    ></HashLink>
  );
}
