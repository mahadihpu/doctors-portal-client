import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock ,faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {
    const infoData = [
        {
            title :'Opening hours',
            description : 'We are open 24/7',
            icon : faClock,
            background : 'primary'
        },
        {
            title :'Visit Our Location',
            description : 'Brooklyn, NY 10036, United States',
            icon : faMapMarker,
            background : 'dark'
        },
        {
            title :'Contact Us Now',
            description : '+10045356465',
            icon : faPhone,
            background : 'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infoData.map(info => <InfoCard info={info} ></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;