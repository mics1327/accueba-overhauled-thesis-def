import { Box, Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import { primaryColor } from "../../utilities/color-schema";
import "./calendar.css";
import { EmployeeNavigation } from "./components/employee-nav";
const apiUrl = "http://localhost:3030";
const timeClock = [
  {
    dateNow: "Dec1",
    timeIn: new Date("Dec 1 2022, 8:00 am"),
  },
  {
    dateNow: "Dec2",
    timeOut: new Date("Dec 2 2022, 8:00 am"),
    timeIn: new Date("Dec 2 2022, 10:00 am"),
  },
  {
    dateNow: "Dec3",
    timeOut: new Date("Dec 3 2022, 8:00 am"),
    timeIn: new Date("Dec 3 2022, 10:00 am"),
  },
  {
    dateNow: "Dec4",
    leave: "Sick Leave",
    timestamp: new Date("Dec 4, 2022"),
  },
  {
    dateNow: "Dec5",
    leave: "Vacation Leave",
    timestamp: new Date("Dec 5, 2022"),
  },
];
export const Attendance = (props) => {
  const [date, setDate] = useState(new Date());
  const login = useSelector((state) => state.login);
  const [timeClockData, setTimeClockData] = useState([]);
  useEffect(() => {
    axios
      .post(
        `${apiUrl}/getAttendance`,
        {
          employeeID: login.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setTimeClockData(res.data.result.timeClock);
      });
  }, []);
  const handleTimeIn = () => {
    console.log(login.id);
    axios
      .post(
        `${apiUrl}/timeInAttendance`,
        {
          employeeID: login.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        console.log(result);
      });
  };
  const handleTimeOut = () => {
    console.log(login.id);
    axios
      .post(
        `${apiUrl}/timeOutAttendance`,
        {
          employeeID: login.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        console.log(result);
      });
  };
  const handleSickLeave = () => {
    console.log(login.id);
    axios
      .post(
        `${apiUrl}/sickLeaveAttendance`,
        {
          employeeID: login.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        console.log(result);
      });
  };

  const handleVacationLeave = () => {
    console.log(login.id);
    axios
      .post(
        `${apiUrl}/vacationLeaveAttendance`,
        {
          employeeID: login.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        console.log(result);
      });
  };

  const handleTileContent = ({ activeStartDate, date, view }) => {
    for (let i = 0; i <= timeClockData?.length; i++) {
      // ? CONVERT INTO FIREBASE TIMESTAMP
      let timeInConvert = new Date(
        timeClockData[i]?.timeIn?._seconds * 1000 +
          timeClockData[i]?.timeIn?._nanoseconds / 1000000
      );

      let timeOutConvert = new Date(
        timeClockData[i]?.timeOut?._seconds * 1000 +
          timeClockData[i]?.timeOut?._nanoseconds / 1000000
      );
      let timeStampConvert = new Date(
        timeClockData[i]?.timeStamp?._seconds * 1000 +
          timeClockData[i]?.timeStamp?._nanoseconds / 1000000
      );
      // ? TERNARY OPERATOR FOR INVALID DATE = NULL
      timeInConvert = timeInConvert !== "Invalid Date" ? timeInConvert : null;
      timeOutConvert =
        timeOutConvert !== "Invalid Date" ? timeOutConvert : null;
      timeStampConvert =
        timeStampConvert !== "Invalid Date" ? timeStampConvert : null;
      // ? CHECKERS
      let isDayEqualTimeIn = date.getDate() === timeInConvert?.getDate();
      let isDayMonthTimeIn = date.getMonth() === timeInConvert?.getMonth();
      let isDayEqualTimeOut = date.getDate() === timeOutConvert?.getDate();
      let isDayMonthTimeOut = date.getMonth() === timeOutConvert?.getMonth();
      let isTimestamp = date.getDate() === timeStampConvert?.getDate();
      let isVacationLeave =
        timeClockData[i]?.leave === "Vacation Leave" && isTimestamp;
      let isSickLeave = timeClockData[i]?.leave === "Sick Leave" && isTimestamp;

      if (
        (isDayEqualTimeIn && isDayMonthTimeIn) ||
        (isDayEqualTimeOut && isDayMonthTimeOut) ||
        isVacationLeave ||
        isSickLeave
      ) {
        return (
          <>
            <p className="timeIn">
              {isDayEqualTimeIn && isDayMonthTimeIn !== undefined
                ? getMilitaryTime(timeInConvert)
                : ""}
            </p>
            <p className="timeOut">
              {isDayEqualTimeOut && isDayMonthTimeOut
                ? getMilitaryTime(timeOutConvert)
                : ""}
            </p>
            <p className="leave">
              {isVacationLeave ? timeClockData[i]?.leave : ""}
            </p>
            <p className="leave">
              {isSickLeave ? timeClockData[i]?.leave : ""}
            </p>
          </>
        );
      }

      // view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null;
    }
    return;
  };
  const getMilitaryTime = (date) => {
    const getHour1 = date.getHours();
    const getMinute1 = date.getMinutes();
    return `${getHour1}:${getMinute1}:00`;
  };
  return (
    <>
      <EmployeeNavigation />

      <Flex>
        <Stack>
          <Box h="50px" />
          <Box pl="1em" pr="1em">
            <Button
              color="white"
              backgroundColor={primaryColor}
              variant="solid"
              height="3em"
              width={60}
              borderRadius="20px"
              onClick={() => {
                handleTimeIn();
              }}
            >
              <Text as="b" fontSize={20} _hover={{ color: primaryColor }}>
                Clock In
              </Text>
            </Button>
          </Box>
          <Box pl="1em">
            <Button
              color="white"
              backgroundColor={primaryColor}
              variant="solid"
              height="3em"
              width={60}
              borderRadius="20px"
              onClick={() => {
                handleTimeOut();
              }}
            >
              <Text as="b" fontSize={20} _hover={{ color: primaryColor }}>
                Clock Out
              </Text>
            </Button>
          </Box>
          <Box h="15em" />
          <Box pl="1em" pr="1em">
            <Button
              color="white"
              backgroundColor={primaryColor}
              variant="solid"
              height="3em"
              width={60}
              borderRadius="20px"
              onClick={handleVacationLeave}
            >
              <Text as="b" fontSize={20} _hover={{ color: primaryColor }}>
                Request for <br />
                Vacation Leave
              </Text>
            </Button>
          </Box>
          <Box pl="1em">
            <Button
              color="white"
              backgroundColor={primaryColor}
              variant="solid"
              height="3em"
              width={60}
              borderRadius="20px"
              onClick={handleSickLeave}
            >
              <Text as="b" fontSize={20} _hover={{ color: primaryColor }}>
                Fill Sick Leave
              </Text>
            </Button>
          </Box>
        </Stack>
        <Spacer />
        <Box w="80em">
          <Box h="1em" />
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={handleTileContent}
          />
        </Box>
        <Box w="2em" />
      </Flex>
    </>
  );
};

// https://www.npmjs.com/package/react-calendar
