
const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer> 
    <a href="https://github.com/Whitney-Simpson"><img src="./Portfolio/github logo.jpg" alt="Profile Photo"/></a>{`Copyright © ${year}`}</footer>;
  };
  
  export default Footer;