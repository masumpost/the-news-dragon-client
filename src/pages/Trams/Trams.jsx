import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <Container>
            <h2>Read Our Trams and Conditions </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo quod deleniti doloremque? Ipsum neque distinctio consectetur deleniti unde? Consequuntur voluptate iste, earum labore quis commodi! Incidunt nemo dolor libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, soluta veniam quisquam aspernatur consequatur, cupiditate aut labore dolor tempora assumenda expedita tempore, sint veritatis atque quasi ratione doloribus molestias aperiam?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Trams;