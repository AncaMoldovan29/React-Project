import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

const UserForm = (props) => {
    const {onSubmit} = props;
    const [nume, setNume] = useState("");
    const [prenume, setPrenume] = useState("");
    const [email, setEmail] = useState("");
    const [varsta, setVarsta] = useState("");
    const [adresa, setAdresa] = useState("");


    const clearInputs = () => {
        setNume('');
        setPrenume('');
        setEmail('');
        setVarsta('');
        setAdresa('');
    }

    const submitHandler = () => {
        const newUser = {nume, prenume, email, varsta, adresa};
        onSubmit(newUser);
        clearInputs();
    };

    return (
        <div className="form-class m-5">
            Add User:
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Nume</InputGroup.Text>
                <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={nume}
                    onChange={(e) => setNume(e.target.value)}
                />
            </InputGroup>
            <br/>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Prenume</InputGroup.Text>
                <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={prenume}
                    onChange={(e) => setPrenume(e.target.value)}
                />
            </InputGroup>
            <br/>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputGroup>
            <br/>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Varsta</InputGroup.Text>
                <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={varsta}
                    onChange={(e) => setVarsta(e.target.value)}
                />
            </InputGroup>
            <br/>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Adresa</InputGroup.Text>
                <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={adresa}
                    onChange={(e) => setAdresa(e.target.value)}
                />
            </InputGroup>
            <br/>
            <Button variant="primary" onClick={submitHandler}>
                Add User
            </Button>
            <Button variant="danger" onClick={clearInputs}>
                Cancel
            </Button>
        </div>
    );

};

export default UserForm;
