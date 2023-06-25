/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  return (
    // <!-- =====================Navigation=========== -->
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="logo logo-nav">
            <Link to="/" className="logo-link">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <img src="./images/close.svg" alt="" />
            </div>
            <ul className="menu-nav-ul">
              <li className="nav-list">
                <HashLink to="/" className="nav-link" onClick={_toggleSidebar}>
                  <img src="images/btn-bg.svg" alt="" />
                  <span>HOME</span>
                </HashLink>
              </li>
              <li className="nav-list">
                <HashLink
                  to="/white-paper"
                  className="nav-link"
                  onClick={_toggleSidebar}
                >
                  <img src="images/btn-bg.svg" alt="" />
                  <span>ABOUT US</span>
                </HashLink>
              </li>

              <li className="nav-list">
                <Link to="/" className="logo-link">
                  <img src="/images/logo.png" alt="" />
                </Link>
              </li>
              <li className="nav-list">
                <HashLink
                  to="/white-paper"
                  className="nav-link"
                  onClick={_toggleSidebar}
                >
                  <img src="images/btn-bg.svg" alt="" />
                  <span> ROADMAP</span>
                </HashLink>
              </li>
              <li className="nav-list">
                <HashLink
                  to="/white-paper"
                  className="nav-link"
                  onClick={_toggleSidebar}
                >
                  <img src="images/btn-bg.svg" alt="" />
                  <span>TEAM</span>
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <img src="./images/menu.svg" alt="" />
          </div>
        </nav>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
