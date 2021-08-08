const Footer = () => {
 const d = new Date().getFullYear();
 return (
  <div className="footer">
   <p>Developed by <a href="https://frankofficial.netlify.com">Chitech-Group</a></p>
   <p>All Rights Reserved &copy; {d} </p>
  </div>
 );
}
 
export default Footer;
