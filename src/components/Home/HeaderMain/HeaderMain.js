import React from 'react';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    console.log(chair)
    return (
        <main style={{height: 600}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your new smile <br /> starts here</h1>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat earum accusantium modi saepe provident.</p>
                <button className="btn btn-primary">Get Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;