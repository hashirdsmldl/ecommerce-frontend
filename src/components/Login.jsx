import React from 'react';
import { useFormik } from 'formik';
import AuthServices from '../services/AuthService';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../Store/userslice';

const Login = () => {
    const success = (x) =>  toast.success(x, {
        position: toast.POSITION.TOP_CENTER
      });;
      const failure = (y) =>  toast.error(y, {
        position: toast.POSITION.TOP_CENTER
      });
    
        const navigate=useNavigate();

        const dispatch = useDispatch()
      const  formik =useFormik({
        initialValues: {
          phone: '',
        
          password: '',
        },
        validate: values => {
          const errors = {};
    
          if (!values.phone) {
            errors.phone = 'Required';
          } else if (!/^\d{3}-\d{3}-\d{5}$/.test(values.phone)) {
            errors.phone = '000-111-22222 format required';
          }
    
        
    
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 6) {
            errors.password = 'Must be at least 6 characters';
          }
    
          return errors;
        },
        onSubmit:async values => {
    
          try{
            const response=await AuthServices.loginUser(values)
            const data=await response.json();
            if(response.ok)
            {
             success(data.message);
             
             dispatch(
              setUser({
                phone:data.phone,
                username:data.username,
                token:data.token
              }),
            )
            const timer = setTimeout(() => {
              navigate('/');
            }, 6000);
            return () => clearTimeout(timer);

            }
            else{
             failure(data.message);
            }
          }
          catch(err)
          {
    
          }
          
          },
      });
    
      return (
        <div className='container'>
          <form onSubmit={formik.handleSubmit} className="flex-form">
            <h1 className='form-heading'>Login Form</h1>
            <div className="phone-div">
              <input
                type="tel"
                name="phone"
                id="phone_id"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="input-field"
                placeholder='enter phone no'
              />
              {formik.errors.phone && formik.touched.phone && (
                <div className="error error-white">{formik.errors.phone}</div>
              )}
            </div>
           
            <div className="password-div">
              <input
                type="password"
                name="password"
                id="password_id"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="input-field"
                placeholder='enter password'
              />
              {formik.errors.password && formik.touched.password && (
                <div className="error error-white">{formik.errors.password}</div>
              )}
            </div>
            <input type="submit" value="Submit" className="submit-button" />
            <p style={{color:'white'}}>Already Have an Account <Link style={{color:'lightseagreen'}} to={'/signup'}>Signup</Link></p>
          </form>
     
          <ToastContainer />
        </div>
      );
}
 
export default Login;