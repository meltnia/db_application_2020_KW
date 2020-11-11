import React from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import './Sections/Navbar.css';


function NavBar(props) {
  const { login, admin, _login, _logout }  = props;   // props 사용
  return (
    <nav className="menu">
      <div className="menu__container">             {/*left menu 설정 */}
          <div className="menu_left">
            <LeftMenu mode="horizontal" />          
          </div>
          <div className="menu_rigth">
            <RightMenu login={login} _logout={_logout} mode="horizontal" /> {/*left menu 설정, Login상태에 따라 변함 */}
          </div>
        </div>
    </nav>
  )
}

export default NavBar