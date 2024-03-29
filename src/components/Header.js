import React, { useState, useEffect } from 'react';
// import menuLinksData from './data/menu_links.json'

export const Header = () => {

  const [menuLinksData, setMenuLinksData] = useState([]);

  const loadMenuLinksData = async () => {
    const response = await fetch('https://2feazvvhfi.execute-api.ap-south-1.amazonaws.com/Production/menulinks');
    const data = await response.json();
    setMenuLinksData(data);
  };

  useEffect(() => {
    //Load the menu links data from the API
    loadMenuLinksData();
  }, []);
  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
          <ul>
            {
              menuLinksData.map((link) =>
                <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
              )
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}
