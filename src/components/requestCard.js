import React from "react";
import "./requestCard.css";
import Button from "react-bootstrap/Button";

export default function RequestCard({ request }) {
  return (
    <div id="requestcard">
      care type: {request.careType} <br />
      client name: {request.clientName}
      <br />
      start date: {request.startDate.substr(0, 10)} <br />
      <Button> more info</Button>
    </div>
  );
}
