import React from 'react';
const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer text-center mt-10">
      <p>
        Copyright &copy; {currYear}, Made with ❣️ by <strong>Ayushman</strong>
      </p>
    </footer>
  );
};

export default Footer;