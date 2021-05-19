import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { newRequest } from "../store/specificRequest/actions";
import { Button, Container, Form, Col } from "react-bootstrap";

export default function NewRequestPage() {
  const dispatch = useDispatch();
  const [careType, setCareType] = useState("");
  const [clientName, setClientName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [extraInformation, setExtraInformation] = useState("");

  console.log(careType, clientName, startDate, endDate, extraInformation);

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      newRequest({
        careType,
        startDate,
        endDate,
        clientName,
        extraInformation,
      })
    );
    setCareType("");
    setClientName("");
    setStartDate("");
    setEndDate("");
    setEndDate("");
    setExtraInformation("");
  }

  return (
    <div>
      <h1>New Request</h1>
      <Container className="newrequest">
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group controlId="formBasic">
            <Form.Label>Care Type</Form.Label>
            <select
              onChange={(e) => {
                setCareType(e.target.value);
              }}
            >
              <option>choose here</option>
              <option value={"medical"}>medical</option>
              <option value={"household"}>household</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>start date and time </Form.Label>
            <Form.Control
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              type="datetime-local"
            />
          </Form.Group>
          <Form.Group controlId="formBasic">
            <Form.Label>end date and time</Form.Label>
            <Form.Control
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              type="datetime-local"
            />
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label> your name</Form.Label>
            <Form.Control
              value={clientName}
              onChange={(event) => setClientName(event.target.value)}
              type="text"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>extra information</Form.Label>
            <Form.Control
              value={extraInformation}
              onChange={(event) => setExtraInformation(event.target.value)}
              type="text"
              required
            />
          </Form.Group>

          <Button type="submit" onClick={submitForm}>
            Create New Request
          </Button>
        </Form>
      </Container>
    </div>
  );
}
