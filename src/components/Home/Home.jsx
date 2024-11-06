
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex flex-row justify-content-around mb-3">

          <div className="col-12 col-md-6 col-lg-6 mt-lg-3 mt-md-3 mt-2">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <div>
              <img src={logo} alt="Logo" height={80} className="m-auto" />
            </div>
            <h1 className="heading_top">అన్నపూర్ణ మ్యారేజైన్</h1>
          </div>
          </div>

         <div className="col-12 col-md-6 col-lg-6 mt-3 d-flex flex-row justify-content-center">
         <div className="login-container">
            <div className="input-group">
                <select name="" id="" className='select-no-icon'>
                    <option value="">AM</option>
                    <option value="">PM</option>
                </select>
              <input type="text" placeholder="Enter ID / E-MAIL / MOBILE" className="form-control_1" />
              <input type="password" placeholder="Enter password" className="form-control_1" />
              <button className="login-button">LOGIN</button>
            </div>
            <div className="forgot-password d-flex flex-row justify-content-between align-items-center">
            <i className="bi bi-lock-fill"></i>
              <a href="#" className='ms-3'>Forgot password?</a>
            </div>
          </div>
         </div>
        </div>
        <div className="container-fluid container-fluid_2">
            <div className="container_fluid_3">
                <div className="row d-flex flex-row justify-content-between align-items-center p-lg-2 p-md-1 p-2">
                    <div className='col-6'>
                        <ul className=' list-unstyled d-flex flex-row justify-content-center align-items-center text-white ms-4 ms-lg-0 ms-md-0'>
                            <li className='mx-1'>Home</li>
                            <li className='mx-1'>About </li>
                            <li className='mx-1'>Careers</li>
                            <li className='mx-1'>Contact </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul className=' list-unstyled d-flex flex-row justify-content-center align-items-center text-white'>
                            <li className='mx-1'>CMD Desk</li>
                            <li className='mx-1'>Help</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row d-flex flex-row justify-content-lg-end justify-content-md-end me-md-4 justify-content-center">
            <div className="col-11 col-md-9 col-lg-6 bg-white me-lg-5 mt-1 p-lg-3 p-md-3 p-3">
                <form action="" className='form_side'>
                    <h1 className='heading_form_1 mb-lg-2'>Register free & get your matched partener</h1>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" placeholder='Enter your name' className='input_form'/>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Surname</label>
                        <input type="text" name="" id="" placeholder='Enter your Surname' className='input_form'/>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Mobile Number <span className='text-danger'><i className="bi bi-star-fill"></i></span></label>
                        <input type="text" name="" id="" placeholder='Enter Numner'className='input_form'/>
                    </div>
                   <div>
                   <h1 className='form_heading_2 text-end me-lg-5 me-md-5 pe-md-5 pe-lg-2 my-2'>Click <span>Here</span> To Verify Mobile</h1>
                   </div>
                   <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Email</label>
                        <input type="text" name="" id="" placeholder='Enter your Email'className='input_form'/>
                    </div>
                   <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Gender</label>
                        <div className='me-lg-5 pe-lg-5 pe-md-5 me-md-5 me-5 pe-3'>
                        
                        <input type="radio" name="" id=""  className=' '/>
                        <label htmlFor="" className='mx-1 me-lg-4 me-md-4 pe-lg-4 pe-md-4 ms-2'>Male</label>
                        
                        <input type="radio" name="" id=""  className=' '/>
                        <label htmlFor="" className='mx-1 me-lg-4 me-md-4'>Female</label>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Date of Birth</label>
                        <input type="date" name="" id="" placeholder='Enter your name' className='input_form'/>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Marital Status</label>
                        <select name="" id="" className='input_form'>
                            <option value="">Unmarried</option>
                            <option value="">Married</option>
                        </select>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Qualifaction</label>
                        <select name="" id="" className='input_form'>
                            <option value="">Bachloers</option>
                            <option value="">HSCE</option>
                            <option value="">10th</option>
                        </select>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Height</label>
                        <select name="" id=""className='input_form'>
                            <option value="">173 cm</option>
                            <option value="">155 cm</option>
                            <option value="">150 cm</option>
                        </select>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Religion</label>
                        <select name="" id=""className='input_form'>
                            <option value="">Hindu</option>
                            <option value="">Other</option>
                            
                        </select>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Caste</label>
                        <select name="" id=""className='input_form'>
                            <option value="">Hindu</option>
                            <option value="">Other</option>
                            
                        </select>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Porfession</label>
                        <select name="" id=""className='input_form'>
                            <option value="">Job </option>
                            <option value="">None</option>
                            
                        </select>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center my-1'>
                        <label htmlFor="">Enter Captha <span className='text-danger'><i className="bi bi-star-fill"></i></span></label>
                        <div>
                        <h3 className='captch'>OZH8M2</h3>
                        <input type="text" placeholder='Type the text displayed above'className='input_form'/>
                        </div>
                    </div>
                    <div className='text-end'>
                        <button className='btn btn-danger'>REGISTER</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        <div className="container_fluid_4"></div>
      </div>
    </>
  );
};

export default Home;
