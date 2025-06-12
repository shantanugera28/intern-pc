import React, { useEffect, useState } from 'react'

const FormWithoutYup = () => {

  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:"",
    age:"",
    gender:"",
    interests:[],
    birthDate:""
  });

  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e)
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };


  const handleChange=(e)=>{
    const {name,value}=e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange=(e)=>{
    const {name,checked}=e.target;
    let updatedInterests=[...formData.interests];
    if(checked){
      updatedInterests.push(name);
    }else{
      updatedInterests=updatedInterests.filter(
        (interests)=>interests!==name
      );
    }

    setFormData({
      ...formData,
      interests:updatedInterests,
    });
  };

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formData)
    }
  },[formErrors])

  const validate=(values)=>{
    const errors={}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.firstName){
      errors.firstName='First Name is required'
    }
    if(!values.lastName){
      errors.lastName='Last Name is required'
    }
    if(!values.phoneNumber){
      errors.phoneNumber='Phone number Name is required'
    }
    if(!values.email){
      errors.email='Email is required'
    }else if(!regex.test(values.email)){
      errors.email='This is not a valid email format'
    }
    if(!values.password){
      errors.password='password is required'
    }else if(values.password.length<4){
      errors.password='Password must be more than 4 charcters'
    }else if(values.password.length>10){
      errors.password='Password cannot exceed more than 10 charcters'
    }
    return errors;
  }

  return (
    <div>
      {Object.keys(formErrors).length===0 && isSubmit ? (<div className='ui message success'>Form submitted succesfully</div>
      ):(
        <pre>{JSON.stringify(formData,undefined,2)}</pre>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className='form' >
          <label>First Name:</label>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            placeholder='Enter your first name'
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.firstName}</p>
        <div>
          <label>Last Name:</label>
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            placeholder='Enter your last name'
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.lastName}</p>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            placeholder='Enter your email'
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div>
          <label>Phone Number:</label>
          <input
            type='text'
            name='phoneNumber'
            value={formData.phoneNumber}
            placeholder='Enter your phone number'
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.phoneNumber}</p>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            placeholder='Enter your password'
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <div>
          <label>Confirm Password:</label>
          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            placeholder='Confirm your password'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type='number'
            name='age'
            value={formData.age}
            placeholder='Enter your age'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name='gender'value={formData.gender} onChange={handleChange}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div>
          <label>Interests:</label>
          <label>
            <input
              type='checkbox'
              name='coding'
              checked={formData.interests.includes('coding')}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <label>
            <input
              type='checkbox'
              name='sports'
              checked={formData.interests.includes('sports')}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          <label>
            <input
              type='checkbox'
              name='reading'
              checked={formData.interests.includes('reading')}
              onChange={handleCheckboxChange}
            />
            Reading
          </label>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type='date'
            name='birthDate'
            value={formData.birthDate}
            placeholder='Enter your date of birth'
            onChange={handleChange}
          />
        </div>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default FormWithoutYup
