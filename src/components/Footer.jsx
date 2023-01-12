import React from "react";
import moment from "moment/moment";

function Footer() {
  const currentYear = moment().format('YYYY');
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
