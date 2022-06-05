import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../../features/auth/authSlice.js'
//import Spinner from '../components/Spinner'
import classnames from "classnames";

import {
  Button,
  Card,

  CardBody,
  FormGroup,
  Form,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  
} from "reactstrap";
function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    dob: '',
    email:'',
    password: '',
  })

  const { firstname,lastname,gender,dob, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/patientregister')
    }

    // dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      //toast.error('Passwords do not match')
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        gender,
        dob,
        password
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    //return <Spinner />
  }

  return (
    <>
        
    <section className="section section-shaped section-lg mt-5">
    <Container className="pt-lg-1" fluid ="md">
    <Row className="justify-content-center">
    <Col  fluid ="md">
      <section className='heading'>
        <h1>
           Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='firstname'
              name='firstname'
              value={firstname}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='lastname'
              name='lastname'
              value={lastname}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>

            {/* <Button
                className="mt-4"
                color="primary"
                type="submit"
            >
                Create account
            </Button> */}

          </div>
        </form>
      </section>
      </Col>
      </Row>
      </Container>
      </section>
   
        
    </>
  )
}
export default Register;


