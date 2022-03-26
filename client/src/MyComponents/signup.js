import React, { useState } from 'react';
import img from '../myImages/sportify.jpeg';


export default function Signup() {

    const [userRegistration, setuserRegistration] = useState({
        name:"",
        email:"",
        password:""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setuserRegistration({ ...userRegistration , [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {...userRegistration}
    }

    return (
        <div className="container ms-auto me-auto mt-5 mb-5">
            <section className="mb-4">
                <div className="row">

                    <div className="col-lg-9 mb5 mt-5">
                        <img src={img} className="img-responsive mt-5" alt="..." />
                    </div>

                    <div className="col-lg-3 mb-5">
                        <h1 className="h1-responsive fs-1 fw-bold text-center">Sign Up</h1>
                        <form action='' onSubmit={handleSubmit}>
                        <div className="row mt-5 mb-5">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" name="name" placeholder='Name' autoComplete="off"
                                        value={userRegistration.name}
                                        onChange={handleInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" name="email"  placeholder='Email' autoComplete="off"
                                        value={userRegistration.email}
                                        onChange={handleInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text"  name="password"  placeholder='Password' autoComplete="off"
                                        value={userRegistration.password}
                                        onChange={handleInput}
                                        />
                                    </div>
                                </div>
                            </div>
    
                        </form>

                        <div className="d-grid gap-2 mb-5">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                        <div className="status"></div>
                    </div>


                </div>

            </section>
        </div>
    
       );
  }; 
