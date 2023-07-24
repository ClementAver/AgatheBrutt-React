import { Fragment } from "react";

export default function IntroProject({ title, summary, date, tags, furtherInformation }) {
  return (
    <div
      className="intro"
      id="haut"
    >
      <h2>{title}</h2>
      <p className="intro_texte">{summary}</p>
      <p className="caps">
        {tags.map((tag, index) => {
          let key = `tag-${index}`;
          console.log(key);
          return index !== 0 ? <span key={key}>, {tag}</span> : <span key={key}>{tag}</span>;
        })}
        {" ● "}
        {date}
        <br />
        {furtherInformation.map((info, index) => {
          let key = `further-${index}`;
          console.log(key);
          return (
            <Fragment key={key}>
              {" "}
              {/* Added the key to the enclosing fragment */}
              <span>{info}</span>
              <br />
            </Fragment>
          );
        })}
      </p>
    </div>
  );
}
