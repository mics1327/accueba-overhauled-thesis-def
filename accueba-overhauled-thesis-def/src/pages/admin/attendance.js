import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Calendar from "react-calendar";

import NavigationAdmin from "./components/admin-nav";
import LeaveRequestsModal from "./components/requests-modal";

import { primaryColor } from "../../utilities/color-schema";
import { getMilitaryTime } from "../../utilities/getMilitaryTime";
import axios from "../../utilities/axios";

const AttendanceAdmin = () => {
  const [date, setDate] = useState(new Date());
  const [employees, setEmployees] = useState([]);
  const [selectedEmpPosition, setSelectedEmpPosition] = useState("");
  const [selectedEmpDocId, setSelectedEmpDocId] = useState("");
  const [timeClockData, setTimeClockData] = useState([]);
  const requestsModal = useDisclosure();
  const [leaveRequestType, setLeaveRequestType] = useState("");

  const filteredEmployees = employees.filter((emp) => {
    if (selectedEmpPosition === "") return true;
    if (emp.position === selectedEmpPosition) return true;
    return false;
  });

  const handleModalOpen = (requestType) => {
    setLeaveRequestType(requestType);
    requestsModal.onOpen();
  };

  const handleTileContent = ({ date }) => {
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

  useEffect(() => {
    axios.post("/get-employees").then(({ data }) => setEmployees(data.result));
  }, []);

  useEffect(() => {
    if (!selectedEmpDocId) return;
    axios
      .post("/getAttendance", {
        employeeID: selectedEmpDocId,
      })
      .then(({ data }) => {
        // console.log("data.result :>> ", data.result);
        if (!data.result?.timeClock) return alert("No Timeclock");
        setTimeClockData(data.result.timeClock);
      });
  }, [selectedEmpDocId]);

  return (
    <>
      <NavigationAdmin />

      <Flex>
        <Stack>
          <Box p={5}>
            <Box border="1px solid gray">
              <Menu>
                <MenuButton borderBottom="1px solid gray" width="100%">
                  Employee Position
                </MenuButton>

                <MenuList>
                  <MenuItem
                    onClick={() => setSelectedEmpPosition("Driver")}
                    justifyContent="center"
                  >
                    Driver
                  </MenuItem>
                  <MenuItem
                    onClick={() => setSelectedEmpPosition("Helper")}
                    justifyContent="center"
                  >
                    Helper
                  </MenuItem>
                  <MenuItem
                    onClick={() => setSelectedEmpPosition("Mechanic")}
                    justifyContent="center"
                  >
                    Mechanic
                  </MenuItem>
                  <MenuItem
                    onClick={() => setSelectedEmpPosition("Office Staff")}
                    justifyContent="center"
                  >
                    Office Staff
                  </MenuItem>
                  <MenuItem
                    onClick={() => setSelectedEmpPosition("")}
                    justifyContent="center"
                  >
                    All
                  </MenuItem>
                </MenuList>
              </Menu>
              <Box minH="200px">
                <Box>
                  {filteredEmployees.map((emp) => (
                    <Text
                      as="button"
                      display="block"
                      w="100%"
                      textAlign="left"
                      onClick={() => setSelectedEmpDocId(emp.docId)}
                      key={emp.docId}
                    >
                      {emp.name}
                    </Text>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box pl="1em" pr="1em">
            <Button
              color="white"
              backgroundColor={primaryColor}
              variant="solid"
              height="3em"
              width={60}
              borderRadius="20px"
              onClick={() => handleModalOpen("Vacation Leave")}
            >
              <Text as="b" fontSize={20} _hover={{ color: primaryColor }}>
                VL Requests
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
              onClick={() => handleModalOpen("Sick Leave")}
            >
              <Text as="b" fontSize={20} _hover={{ color: primaryColor }}>
                SL Requests
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

      <LeaveRequestsModal
        isOpen={requestsModal.isOpen}
        onClose={requestsModal.onClose}
        requestType={leaveRequestType}
      />
    </>
  );
};

export default AttendanceAdmin;
