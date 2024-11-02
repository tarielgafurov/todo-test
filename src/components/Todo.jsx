import React, { useState } from 'react'
import classes from "./Todo.module.css"

const Todo = (props) => {

    

    const [email , setemail] = useState("")

    const onSubmitHnalder = (e) => {
        e.preventDefault()
    }

    const emailStateChangeHandler = (e) => {
        setemail(e.target.value)
    }

    const saveUserEmailHanlder = () => {

        const userEmail = {
            email,
            id: Math.random().toString()
        }

        props.save(userEmail)
        // console.log(userEmail);

        setemail("")

    }

  return (
    <form onSubmit={onSubmitHnalder} className={classes.form} >
        <h1>FORM</h1>
        <input onChange={emailStateChangeHandler} value={email} type="text" />
        <div>
        <button onClick={saveUserEmailHanlder} >Log-in</button>
        </div>
    </form>
  )
}

export default Todo
