import React, { useEffect, useRef, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import "./../Styles/global.css";
import styles from "./../Styles/allusers.module.css";

const AllUser = () => {
  const inputRef = useRef();
  const [users,setUsers]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  const handleSearch = (e) => {
    console.log(inputRef.current.value);
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className={styles.allusers}>
        <h2 className={styles.heading}>Total users found : {users.length}</h2>
        <form onSubmit={handleSearch} className={styles.searchform}>
          <input required
            ref={inputRef}
            className={styles.userinputfieldinput}
            placeholder="Email"
            type="text"
          />
          <input
            className={styles.userinputfieldbtn}
            type="submit"
            value="Search"
          />
        </form>
        <div className={styles.users}>
          {users.map((user) => (
            <div key={user.id} className={styles.user}>
              <p className={styles.useritem}>ID: {user.id} </p>
              <p className={styles.useritem}>{user.name}</p>
              <p className={styles.useritem}>{user.email}</p>
              <button className={styles.useritem}>Update</button>
              <button className={styles.useritem}> Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUser;
