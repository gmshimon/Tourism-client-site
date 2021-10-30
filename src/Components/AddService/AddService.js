import React, {useRef} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';


const AddService = () => {

    const nameRef = useRef('');
    const priceRef = useRef(0);
    const imageRef = useRef('');
    const descriptionRef = useRef('');


    const handleAddService = e => {
        e.preventDefault();
        const tourName = nameRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;
        const description = descriptionRef.current.value;
        const newService = {tourName, price, image, description}
        console.log(newService);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newService),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Inserted');
                    nameRef.current.value = '';
                    priceRef.current.value = '';
                    imageRef.current.value = '';
                    descriptionRef.current.value = '';
                }
                console.log(data);
            })

    }
    return (
        <div>
            <Form onSubmit={handleAddService} className="w-50 mx-auto">
                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label column sm={2}>Tour name</Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={nameRef} type="text" placeholder="Tour name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label column sm={2}>Price</Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={priceRef} type="number" placeholder="price" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label column sm={2}>Image</Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={imageRef} type="text" placeholder="image url" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label column sm={2}>Description</Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={descriptionRef} as="textarea" rows={3} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{span: 10, offset: 2}}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default AddService;