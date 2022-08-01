import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './log-in.css';

function App() {

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    const login = () => {
        Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/login",
        }).then((res) => console.log(res));
    };
    return (
        <div class="center">
            <Form>
            <h1 class="header">Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control placeholder="Enter email"
                        onChange={(e) => setLoginUsername(e.target.value)} name="email" value={loginUsername} sizetype="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter password"
                        onChange={(e) => setLoginPassword(e.target.value)} name="email" value={loginPassword} sizetype="email" />
                </Form.Group>
                <Button variant="secondary" type="submit" onClick={login}>Submit</Button>
            </Form>
        </div>

    );

}

export default App;