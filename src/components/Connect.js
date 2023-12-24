import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Connect = () => {
    const [formData, setFormData] = useState({
        title: '',
        message: '',
    });
    const handleChange = (e) => {
			const { name, value } = e.target;
			setFormData({
				...formData,
				[name]: value,
			});
		};
		const handleSendEmail = (e) => {
			e.preventDefault();

			const recipient = 'umeshsavaliya007@gmail.com';
			const subject = encodeURIComponent(formData.title);
			const body = encodeURIComponent(formData.message);

			// Construct the mailto link with subject and body
			const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

			// Open the user's default email client with the mailto link
			window.location.href = mailtoLink;
		};
    return (
        <section id='about'>
            <div className='col-md-12 mx-auto'>
                <h1 style={{ color: 'black' }}>
                    <span>Contact Me</span>
                </h1>
                <div className='row center mx-auto mb-5'>
                    <Container style={{ maxWidth: '768px' }}>
                        <Form className="contact-form" onSubmit={handleSendEmail}>
                            <Form.Group controlId="sendto">
                                <Form.Label>To:-</Form.Label>
                                <a href='mailto:aaa@yopmail.com' className='pl-2' title='mainlink' aria-label='mailto'>aaa@yopmail.com</a>
                            </Form.Group>

                            <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter your title" name="title" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" onChange={handleChange} />
                            </Form.Group>
                            <div className="text-center">
                                {/* <a href={`mailto:aaa@yopmail.com?subject=${formData.name}&body=${formData.message}`}> */}
                                <Button className="btn-custom" variant="primary" type="submit">
                                    Submit
                                </Button>
                                {/* </a> */}
                            </div>
                        </Form>
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default Connect;
