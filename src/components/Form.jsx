import React, { useState } from 'react'

const Form = () => {

  const [user,setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  console.log(user);

  const [error,setError] = useState('');
  const [success,setSuccess] = useState('')

  /*
  console.log(user)
  function handlename(e){
    setUser({...user,name:e.target.value})
  }
  function handleemail(e){
    setUser({...user,email:e.target.value})
  }
  function handlepass(e){
    setUser({...user,password:e.target.value})
  }
  function handleconfirm(e){
    setUser({...user,confirmPassword:e.target.value})
  }*/

  function handleAll(e){
      let val = e.target.value;
      let key = e.target.name
      setUser({...user,[key]:val})
      console.log(val,name)
      console.log(user)
  }

  let {name,email,password,confirmPassword} = user;
  console.log('---',name,email,password,confirmPassword)
  function handleSubmit(e){
    e.preventDefault();


    if(!name || !email || !password || !confirmPassword){
      // alert('All fields are required');
      setError('All fields are required')
      return;
    }

    if(!name.includes(' ')){
      // alert('Please enter full name');
      setError('Please enter full name')
      return;
    }

    if(!email.includes('@')){
      // alert('Please Enter valid email');
      setError('Please Enter valid email')
      return;
    }

    if(password.length < 6){
      // alert('Password must be 6 digit');
      setError('Password must be 6 digit')
      return;
    }

    if(password !== confirmPassword){
      // alert('Password and Confirm password must be same');
      setError('Password and Confirm password must be same')
      return;
    }

    // alert('Form submitted successfully');
    setSuccess('Form submitted Successfully');
    setError('');
    setUser({
      name: "",
      email:"",
      password:"",
      confirmPassword:"",
    })

  }

  return (
    <div>
      <h1>Form Validation</h1>

      {error && <p style={{color:"red"}}>{error}</p>}
      {success && <p style={{color:"green"}}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Enter your name'
        onChange={handleAll}
        name='name'
        value={user.name}
        />
        <br />
        <input type="text"
        name='email'
        placeholder='Enter your email'
        onChange={handleAll}
        value={user.email}
        />
        <br />
        <input type="text" 
        name='password'
        placeholder='Enter your Password'
        onChange={handleAll}
        value={user.password}
        />
        <br />
        <input type="text" 
        name='confirmPassword'
        placeholder='Enter your Confirm password'
        onChange={handleAll}
        value={user.confirmPassword}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
