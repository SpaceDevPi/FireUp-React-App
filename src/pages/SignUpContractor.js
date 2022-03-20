import React from 'react'
import { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../services/auth/authSlice';
import Spinner from '../components/Spinner'
// import MultiStep from '../components/ContractorForm/MultiStep'

const SignUpContractor = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    // phone: '',
    // address: '',
    // city: '',
    // state: '',
    // zip: '',
    // companyName: '',
    // companyAddress: '',
    // companyCity: '',
    // companyState: '',
    // companyZip: '',
    // companyPhone: '',
    // companyEmail: '',
    // companyWebsite: '',
    // companyDescription: '',
    // companySize: '',
    // companyIndustry: '',
    // companyType: '',
  })

  const {username, email, password, confirmPassword} = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if(isSuccess || user ) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, dispatch, navigate])

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== confirmPassword) {
      toast.error('Passwords do not match')
    }else {
      const userData = {
        username,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  // spinner loading
  if(isLoading) {
    return <Spinner />
  }

  return (
    // <MultiStep />
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={onChange} />
          </div>
         
          <div className="form-group">
            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className='btn btn-block'>Sign Up</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default SignUpContractor;
