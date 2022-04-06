import React from "react";
import { Link } from "react-router-dom";
import "./../../Styles/global.css";
import styles from "./../../Styles/navbar.module.css";


const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbg}>
        <div className="container">
          <div className={styles.itemscontainer}>
            <div>
              <h2 className={styles.logo}>Crud App</h2>
            </div>
            <ul className={styles.navitems}>
            <li className={styles.navitem}>
                <Link to="/">All User</Link>
              </li>
              <li className={styles.navitem}>
                <Link to="/adduser">Add User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
