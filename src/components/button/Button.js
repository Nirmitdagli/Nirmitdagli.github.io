import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, download}) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"} download={download}>
        {text}
      </a>
    </div>
  );
}
