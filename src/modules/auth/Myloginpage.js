import React from 'react'
import {  Link,useNavigate } from 'react-router-dom'
import logo from "../images/zencode.png"
import {ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form';
function Myloginpage() {

    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm();
    const  mysubmit = (myform)=>{
        
        if(myform)
          {
            toast.success("successfully registor page");
           setTimeout(()=>{
            navigate("/");
           },2000);
          
          }
  
  }
  return (
    <form onSubmit={handleSubmit(mysubmit)}>
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-5  p-3 rounded shadow login'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div class="mb-3">
                          <img src={logo} alt='Company logo' className='c-logo' />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" className="form-control" {...register("email",{required:true})}/>
                            {errors.email?.type==="required" && <p className='error-code'>@email id required!</p>}
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" />
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div class="mb-3">
                           <button className='btn c-btn'>Login</button>
                           <Link to="/Myregistorpage" className="btn">Registor Now</Link>
                           <Link to="/" className="btn">Go back..</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<ToastContainer/>
</form>
  )

}


export default Myloginpage