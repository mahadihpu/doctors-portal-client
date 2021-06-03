import React from 'react';
import illustration from '../../../../images/illustration.png';
const Login = () => {
    
    return (
        <section className="row">
            <div className="col-md-6">
                <div className="card p-4" style={{width: '80%',margin:'35% 0 0 10%'}}>
                    <div className="card-body">
                        <h5 className="text-center mb-5">Login</h5>
                        <form>
                            <input type="email" className="form-control mb-2 pt-2 pb-2" placeholder="Enter Email"/>
                            <br />
                            <input type="password" name="" id="" className="form-control mb-2 pt-2 pb-2" placeholder="Enter password"/>
                            <br />
                            <label><p className="text-danger ">Forgot password?</p></label>
                            <input type="submit" value="Sign In" className="btn btn-brand form-control"/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={illustration} alt="" />
            </div>
        </section>
    );
};

export default Login;