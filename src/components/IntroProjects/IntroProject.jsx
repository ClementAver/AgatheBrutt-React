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
          return index !== 0 ? <span key={key}>, {tag}</span> : <span key={key}>{tag}</span>;
        })}
        {" ● "}
        {date}
        <br />
        {furtherInformation.map((info, index) => {
          let key = `further-${index}`;
          return (
            <Fragment key={key}>
              <span>{info}</span>
              <br />
            </Fragment>
          );
        })}
      </p>
    </div>
  );
}
