import "./navbar.css";
import {Search,Person, Chat,Notifications} from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <div className="navbarLeft">
          <span className="logo">GNDU <FavoriteBorderIcon className="heart"/>Tinder</span>
          
        </div>
        <div className="navbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Search for user post anything" className="searchInput" />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarLinks">
            <span className="navbarLink">Home</span>
            <span className="navbarLink">TimeLine</span>
          </div>
          <div className="navbarIcons">
            <div className="navbarIconItem">
              <Person/>
              <span className="navbarIconBadge">1</span>
            </div>
            <div className="navbarIconItem">
              <Chat/>
              <span className="navbarIconBadge">2</span>
            </div>
            <div className="navbarIconItem">
              <Notifications/>
              <span className="navbarIconBadge">3</span>
            </div>
          </div>
          <img src="/assests/person/1.png" alt="" className="navbarImg"/>
        </div>
      </div>
    </>
  )
}
