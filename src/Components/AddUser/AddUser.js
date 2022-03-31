import React, { useRef } from 'react';
import styles from './../Styles/adduser.module.css'

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser=e=>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const addedUser = {name,email}

        fetch('http://localhost:5000/users',{
            method:'post',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addedUser)
        })
        console.log(addedUser)
        alert('User Added Successfully')
        e.preventDefault()
    }
    return (
        <div className='container'>
            <h1 className={styles.headerText}>Please add an user</h1>
            <form onSubmit={handleAddUser} className={styles.inputForm}>
                <input required ref={nameRef} className={styles.inputData} placeholder='Name' type="text" name="" id="" />
                <input required ref={emailRef} className={styles.inputData} placeholder='Email' type="text" name="" id="" />
                <input className={styles.submitBtn} type="submit" value='Add Now' />
            </form>
        </div>
    );
};

export default AddUser;