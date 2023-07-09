import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ccc',
  };

  const textStyles = {
    color: '#555',
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyles}>
        &copy; {new Date().getFullYear()} Exerease. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
