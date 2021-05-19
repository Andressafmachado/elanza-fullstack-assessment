import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchTodayRequests } from "../store/todayRequests/actions";
import { selectTodayRequests } from "../store/todayRequests/selectors";
import { useSelector, useDispatch } from "react-redux";
import RequestCard from "../components/requestCard";
import Button from "react-bootstrap/Button";

export default function HomePage() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const today = startDate.toLocaleDateString().split("/").reverse().join("-");
  const todayRequests = useSelector(selectTodayRequests);

  useEffect(() => {
    dispatch(fetchTodayRequests(today));
  }, [today]);

  return (
    <div>
      <h1>Open Requests:</h1>
      <p>choose a date to see the requests</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
      />
      {!todayRequests || todayRequests < 1 ? (
        <p>there is no requests for the selected day</p>
      ) : (
        todayRequests.map((request) => {
          return (
            <div>
              <RequestCard request={request} />
            </div>
          );
        })
      )}
      <Button>create new request</Button>
    </div>
  );
}
