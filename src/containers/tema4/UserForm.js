import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./form.css";
import { useState } from "react";

const UserForm = ({ onAdd }) => {
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [email, setEmail] = useState("");
  const [varsta, setVarsta] = useState("");
  const [adresa, setAdresa] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ nume, prenume, email, varsta, adresa });
    setNume("");
    setPrenume("");
    setEmail("");
    setVarsta("");
    setAdresa("");
  };
  const btnClear = (e) => {
    e.preventDefault();

    setNume("");
    setPrenume("");
    setEmail("");
    setVarsta("");
    setAdresa("");
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
      <br />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Prenume</InputGroup.Text>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={prenume}
          onChange={(e) => setPrenume(e.target.value)}
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Varsta</InputGroup.Text>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={varsta}
          onChange={(e) => setVarsta(e.target.value)}
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Adresa</InputGroup.Text>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={adresa}
          onChange={(e) => setAdresa(e.target.value)}
        />
      </InputGroup>
      <br />
      <Button variant="primary" onClick={onSubmit}>
        Add User
      </Button>
      <Button variant="danger" onClick={btnClear}>
        Cancel
      </Button>
    </div>
  );
};

export default UserForm;
