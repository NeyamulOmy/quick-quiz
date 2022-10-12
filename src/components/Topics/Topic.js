import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white', justifyContent: 'center' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Total questions: {total}
                </Card.Text>
                <Button variant="primary">Take quiz</Button>
            </Card.Body>
        </Card>
    );
};

export default Topic;