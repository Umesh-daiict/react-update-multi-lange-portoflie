import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Connect = () => {

    return (
        <section id='about'>
            <div className='col-md-12 mx-auto'>
                <h1 style={{ color: 'black' }}>
                    {/* <span>{sectionName}</span> */}
                    <span>Contact Me</span>
                </h1>
                <div className='row center mx-auto mb-5'>
                    <Container style={{ maxWidth: '768px' }}>
                        <Form className="contact-form">
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
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
