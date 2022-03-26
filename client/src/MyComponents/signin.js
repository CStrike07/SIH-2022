import React , {useState} from 'react';
import img from '../myImages/sportify.jpeg';


export default function Signin() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry , setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = {email: email , password: password};

        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
    }

    return (
        <div class="container ms-auto me-auto mt-5 mb-5">
            <section className="mb-4">
                <div className="row">

                    <div className="col-lg-9 mb5 mt-5">
                        <img src={img} className="img-responsive mt-5" alt="..." />
                    </div>

                    <div className="col-lg-3 mb-5">
                        <h1 className="h1-responsive fs-1 fw-bold text-center">Sign In</h1>
                        <form  action='' onSubmit={submitForm}>
                            <div className="row mt-5 mb-5">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" placeholder='Email'
                                            autoComplete='off'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="password" id="password" name="password" className="form-control" placeholder='Password'
                                            autoComplete='off'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}

                                        />
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="d-grid gap-2 mb-5">
                            <button class="btn btn-primary" type="submit">Submit</button>
                        </div>
                        <div className="status"></div>
                        <span>Don't have an account yet    </span>
                        <a className="btn btn-dark" href="signup">  Sign Up</a>
                  
                    </div>


                </div>

            </section>
        </div>
    
       );
}; 
