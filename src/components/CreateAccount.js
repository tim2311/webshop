import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './create-account.css';


function CreateAccount() {

    const [accountData, setAccountData] = useState({
        email: "",
        password: ""
    });

    const updateAccountData = (event) => {
        setAccountData((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    function submitAccountData() {
        
        console.log(accountData);
        fetch('http://localhost:4000/signup', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(accountData)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
            })
    }

    return (
        <div class="center">
            <Form onSubmit={submitAccountData}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={updateAccountData} name="email" value={accountData.email} sizetype="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={updateAccountData} value={accountData.password} name="password" type="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default CreateAccount;