import React, { Component } from 'react';

class Property extends Component {
  render() {
    return(
      <div className="property">
        <img src="http://www.maz-online.de/var/storage/images/maz/lokales/teltow-flaeming/ludwigsfelde/ludwigsfelde-stadtteil-ludwigsdorf-waechst-rasant/700854226-2-ger-DE/Neuer-Stadtteil-waechst-rasant_big_teaser_article.jpg" alt="" className="img-property"/>
        <ul>
          <li>Flurstücknr: 817</li>
          <li>Grundstucksgrosse: 550m2</li>
          <li>GRZ: 0,3</li>
          <li>GFZ: 0,5</li>
        </ul>
      </div>
    )
  }
}

export default Property;
