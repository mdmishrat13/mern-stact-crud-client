import React, { useEffect, useRef, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import "./../Styles/global.css";
import styles from "./../Styles/allusers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const AllUser = () => {
  const [filtered, setFiltered] = useState('');
  const [isLoading,setIsLoading] = useState(false)
  const [users, setUsers] = useState([]);
  const [inputsearch, setInputSearch] = useState("");

  const searched = users.filter(item=>item.email.toLocaleLowerCase().includes(inputsearch.toLocaleLowerCase()))

  const search = data =>{
    return data.filter(item=>item.email.toLocaleLowerCase().includes(inputsearch.toLocaleLowerCase()))
  }
  const inputemail = (e) => {
    const email = e.target.value;
    setInputSearch(email)
  };

  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(()=>setIsLoading(false))
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/users/${id}`;
    const confirm = window.confirm("Are you sure want to delete?");
    if (confirm) {
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully!");
            const remainingUser = users.filter((user) => user._id !== id);
            setUsers(remainingUser);
          }
        });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className={styles.allusers}>
        <h2 className={styles.heading}>Total users found : {users.length}</h2>
        <form onSubmit={handleSearch}className={styles.searchform}>
          <input
            required
            onChange={inputemail}
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
          {isLoading&&<div> <h1>Loading .....</h1> </div>}
          {!isLoading&&!users.length&& <h1>No user found! </h1>}
          {users.length && <table>
            {!searched.length&& <h1>No user found</h1>}
            {searched.length&& <div>
              <thead>
          <tr className={styles.tableHeading}>
              <th > <p className={styles.useritem}>Id</p></th>
              <th> <p className={styles.useritem}>Name</p></th>
              <th><p className={styles.useritem}>Email</p></th>
              <th> <p className={styles.useritem}>Update</p></th>
              <th > <p className={styles.useritem}>Delete</p></th>
            </tr>
          </thead>
            <tbody>
            {users.filter(user=>user.email.toLocaleLowerCase().includes(inputsearch.toLocaleLowerCase())).map((user) => (
           <tr key={user._id} className={styles.user}>
             <td> <p  className={styles.useritem}>{user._id} </p></td>
             <td className={styles.useritem}>{user.name}</td>
             <td className={styles.useritem}>{user.email}</td>
              <td><Link to={`/updateuser/${user._id}`}>  
              <FontAwesomeIcon className={styles.updateIconStyle}  icon={faPenToSquare}/></Link></td>
             <td> <p className={styles.deleteIconStyle} onClick={() => handleDelete(user._id)}> <FontAwesomeIcon icon={faTrashCan} /></p>
               
             </td>
           </tr>
         ))}
          </tbody>
              </div>}
          
        </table>}
        </div>
      </div>
    </div>
  );
};

export default AllUser;
