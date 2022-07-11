import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './create-account.css';

function CreateAccount() {

    const [accountData, setAccountData] = useState({
        email: "",
        password: ""
    });

    function onChange (e) {
        setAccountData({[e.target.name]: e.target.value});
    };

    function newUser (e) {
        
        fetch('http://localhost:4000/signup', {   
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(useState)
        })
        .then((response) => response.json())
        .then((result) => {
        console.log(result)
        })
    }

    return (
        <div class="center">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={onChange} name="email" sizetype="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={onChange} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={newUser} variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default CreateAccount;