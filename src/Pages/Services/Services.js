import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import useTitle from '../../hooks/useTitle';

const Services = () => {
    useTitle('service')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://swipy-server-anas-mahmud.vercel.app/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='my-16'>
                <p className='text-xl font-bold text-emerald-700'>WHAT WE DO</p>
                <h2 className='text-5xl font-bold text-slate-800'>Services we can <br /> help you.</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;