import React from "react";

function Paragraf({
  title,
  paragraf,
  title2,
  paragraf2,
  link,
  link2,
  link3,
  paragraf3,
  title3,
  title_link,
  title_link2,
  title_link3,
}) {
  return (
    <div className="paragraf">
      <h2 className="About-title">{title}</h2>
      <p className="About-para">{paragraf}</p>
      <a href={link} className="Link-Aboute">
        {title_link}
      </a>
      <h2 className="About-title">{title2}</h2>
      <p className="About-para">{paragraf2}</p>
      <a href={link2} className="Link-Aboute">
        {title_link2}
      </a>
      <h2 className="About-title">{title3}</h2>
      <p className="About-para">{paragraf3}</p>
      <a href={link3} className="Link-Aboute">
        {title_link3}
      </a>
    </div>
  );
}

export default Paragraf;
