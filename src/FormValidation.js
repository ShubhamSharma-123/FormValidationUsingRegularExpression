import React from 'react'
import { useState } from 'react'

function FormValidation() {
  const [formData, setFormData] = useState({ Fname: "", Lname: "", Email: "", Number: "", Password: "" })
  const [formError, setFormError] = useState({ Fname: false, Lname: false, Email: false, Number: false, Password: false })

  const inputHandle = (e) => {
    // console.log(e.target);
    const { title, value } = e.target;
    // console.log(title,value);
    setFormData({
      ...formData,
      [title]: value
    })
    // console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { Fname, Lname, Email, Number, Password } = formData
    if (Fname.length <= 2) {
      setFormError((prev) => {
        return {
          ...prev,
          Fname: true
        }
        // console.log(prev);
      })
    }



    if (Lname.length < 2) {


      setFormError((prev) => {
        return {
          ...prev,
          Lname: true
        }
        // console.log(prev);
      })
      
    }


    if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(Email)) {
      setFormError((prev) => {
        return {
          ...prev,
          Email: true
        }
        // console.log(prev);
      })
    }
    if (Number.length < 10) {
      setFormError((prev) => {
        return {
          ...prev,
          Number: true
        }
        // console.log(prev);
      })
    }
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(Password)) {
      setFormError((prev) => {
        return {
          ...prev,
          Password: true
        }
        // console.log(prev);
      })
    }
    console.log(formError);
  }



  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input type="text" id='fname' title='Fname' placeholder='write your first name' onChange={inputHandle} />
        <br />
        <span style={{ color: "red" }}>{formError.Fname ? "First Name length should be more then two" : ""}</span>
        <br />
        <br />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id='lname' title='Lname' placeholder='write your last name' onChange={inputHandle} />
        <br />
        <span style={{ color: "red" }}>{formError.Lname ? "Last Name length should be more then two" : ""}</span>
        <br />
        <br />
        <label htmlFor="email">Email :</label>
        <input type="email" id='email' title='Email' placeholder='write your email' onChange={inputHandle} />
        <br />

        <span style={{ color: "red" }}>{formError.Email ? "Email should be correct" : ""}</span>
        <br /><br />
        <label htmlFor="number">Number</label>
        <input type="number" id='number' title='Number' placeholder='write your phone no.' onChange={inputHandle} />
        <br />
        <span style={{ color: "red" }}>{formError.Number ? "Number should be correct" : ""}</span>
        <br /><br />
        <label htmlFor="password">Password</label>
        <input type="password" id='password' title='Password' placeholder='write your password' onChange={inputHandle} />
        <br />
        <span style={{ color: "red" }}>{formError.Password ? "Password should be correct" : ""}</span>
        <br /><br />
        <button>Submit</button>

      </form>
    </div>
  )
}

export default FormValidation;