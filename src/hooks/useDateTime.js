import { useState, useEffect, useContext } from "react";
import { ConfigContext } from "../contexts/ConfigContext";
import moment from 'moment-timezone';

export default function useDateTime() {
  const { timezone, is12h } = useContext(ConfigContext);
  const [date, setDate] = useState(updateDate());

  let interval;

  function updateDate() {
    const formattedDate = moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
    const date = moment(formattedDate, 'YYYY-MM-DD HH:mm:ss').toDate();
    return date;
  }

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, [timezone, is12h]);

  const startTimer = () => {
    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      setDate(updateDate());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  };

  return { startTimer, date };
}
