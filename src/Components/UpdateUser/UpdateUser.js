import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Styles/updateuser.module.css'

const UpdateUser = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const {id} = useParams();
    const [user, setUser]= useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    const handleName=e=>{
        const name = e.target.value;
        const newName={email:user.email,name:name}
        setUser(newName)
    }
    const handleEmail=e=>{
        const email = e.target.value;
        const newEmail = {...user}
        newEmail.email = email;
        setUser(newEmail)
    }

    const handelUserUpdate=e=>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data => {
            if (data.modifiedCount>0){
                alert('updated successfully')
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <div className='container'>
            <h1 className={styles.headerText}>Please update user</h1>
            <form onSubmit={handelUserUpdate} className={styles.inputForm}>
                <input onChange={handleName} value={user.name || ' '} required  className={styles.inputData} placeholder='Name' type="text" name="" id="" />
                <input onChange={handleEmail} required value={user.email || ' '} className={styles.inputData} placeholder='Email' type="text" name="" id="" />
                <input className={styles.submitBtn} type="submit" value='Update Now' />
            </form>
        </div>
        </div>
    );
};

export default UpdateUser;