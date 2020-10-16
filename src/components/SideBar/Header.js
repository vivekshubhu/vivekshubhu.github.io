import React from 'react';
// import { Link } from 'gatsby';

export default function Footer({ title, heading, avatar }) {
  return (
    <div id="logo">
        <img style = {{'height': '80px', 'width':'80px', 'borderRadius': '50%'}} src={avatar} alt="" />
        <h1 id="title">{title}</h1>
        <p>{heading}</p>
    </div>
  );
}
