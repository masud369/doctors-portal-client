import React from 'react';
import Appointment from '../../Appointment/Appointment';
import Doctors from '../../Doctors/Doctors';
import ExceptionalCare from '../../ExceptionalCare/ExceptionalCare';
import Footer from '../../Footer/Footer';
import Form from '../../Form/Form';
import Blogs from '../../OurBlogs/Blogs';
import Services from '../../ServicesSection/Services';
import Testimonials from '../../Testimonials/Testimonials';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
               <Header/>
               <Services />
               <ExceptionalCare />
               <Appointment />
               <Testimonials />
               <Blogs />
               <Doctors />
               <Form />
               <Footer />
        </div>
    );
};

export default Home;