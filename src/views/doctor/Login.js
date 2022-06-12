import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
//import { useNavigate } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
//import { useSelector, useDispatch } from 'react-redux'
//import { logout, reset } from '../features/auth/authSlice'
import { login, reset } from '../../features/auth/authSlice'
import Sidebar from "components/Sidebar/Sidebar.js";

import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    Alert,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";
  import Register from "views/patient/Register.js";
 // import { Link } from "react-router-dom"
  const Login = (prop) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
    
      const { email, password } = formData
    
      const navigate = useNavigate()
      const dispatch = useDispatch()
    
      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )
    
      useEffect(() => {
        if (isError) {
          <Alert className="alert-default">
          <strong>Error</strong> {message}
        </Alert>
          console.log('error');

        }
    
        if (isSuccess || user) {
            console.log(user)
          navigate('/doctorprofile')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
    
        const userData = {
          email,
          password,
        }
    
        dispatch(login(userData))
      }
    
      if (isLoading) {
       //return <Spinner />
      }
    return (
      <>
        <Col lg="5" md="7">
        <section className='heading'>
        <h1>
          Login
        </h1>
       
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
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
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
          <Row className="mt-3">
            <Col xs="">
              <a
                className="text-light"
                href="#pablo"
                
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Link to="/doctorregister">
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                // href="/auth/register"
              >
                <small>Create new account</small>
              </a>
            </Col>
            </Link>
          </Row>
        </Col>
      </>
    );
  };
  
  export default Login;
  