import { Link } from "react-router-dom";
import "./topbar.css"

const Topbar = () => {
  const user = false;

  // Fungsi untuk mengarahkan ke website resmi sosial media
  const redirectToWebsite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i
          className="topIcon fa-brands fa-facebook-square"
          onClick={() => redirectToWebsite("https://www.facebook.com/wihan.wihan.98031/")}
        ></i>
        <i
          className="topIcon fa-brands fa-twitter-square"
          onClick={() => redirectToWebsite("https://www.instagram.com/muh.faiz.wihan/")}
        ></i>
        <i
          className="topIcon fa-brands fa-pinterest-square"
          onClick={() => redirectToWebsite("https://www.pinterest.com")}
        ></i>
        <i
          className="topIcon fa-brands fa-instagram-square"
          onClick={() => redirectToWebsite("https://www.instagram.com/muh.faiz.wihan/")}
        ></i>
      </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
                <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
                <li className="topListItem"><Link to="/contact" className="link">CONTACT</Link></li>
                <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            {user ? 
            (<img className="topImg" src="https://naturalpod.com/wp-content/uploads/2016/02/Salt-Spring-Dina-Ottoni-Battistessa.jpg" alt="" />) 
            :
            (
              <ul className="topList">
                <Link to="/login" className="link topListItem">LOGIN</Link>
                <Link to="/register" className="link topListItem">REGISTER</Link>
              </ul>
            )
          } 
          <i className="topSeachIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar

