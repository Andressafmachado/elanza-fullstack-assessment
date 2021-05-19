import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSpecificRequest } from "../store/specificRequest/actions";
import { selectSpecificRequest } from "../store/specificRequest/selectors";
import Button from "react-bootstrap/Button";

export default function RequestDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const request = useSelector(selectSpecificRequest);
  console.log(request);

  useEffect(() => {
    dispatch(fetchSpecificRequest(id));
  }, [id]);

  return (
    <div>
      <br /> <h1>Request Details</h1>
      <br />
      care type: {request.careType} <br />
      client name: {request.clientName}
      <br />
      start date: {request.startDate} <br />
      end date: {request.endDate} <br />
      extra information: {request.extraInformation}
      <br />
      <br />
      {request.open ? <Button> apply</Button> : <Button> reopen</Button>}
    </div>
  );
}
