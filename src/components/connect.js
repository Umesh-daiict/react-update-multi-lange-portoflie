import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Connect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    console.log('aaaaaaaa', formData);
    const handleSendEmail = (e) => {
        e.preventDefault()
        const recipient = 'aaa@yopmail.com';
        const subject = encodeURIComponent(formData.name);
        const body = encodeURIComponent(formData.message);
        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };
    return (
        <section id='about'>
            <div className='col-md-12 mx-auto'>
                <h1 style={{ color: 'black' }}>
                    {/* <span>{sectionName}</span> */}
                    <span>Contact Me</span>
                </h1>
                <div className='row center mx-auto mb-5'>
                    <Container style={{ maxWidth: '768px' }}>
                        <Form className="contact-form" onSubmit={handleSendEmail}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" onChange={handleChange} />
                            </Form.Group>
                            <div className="text-center">
                                <Button className="btn-custom" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default Connect;
