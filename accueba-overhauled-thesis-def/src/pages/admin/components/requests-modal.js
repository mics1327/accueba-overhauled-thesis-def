import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  Stack,
  AccordionPanel,
  ButtonGroup,
} from "@chakra-ui/react";
import { primaryColor } from "../../../utilities/color-schema";
import axios from "../../../utilities/axios";

const LeaveRequestsModal = ({ isOpen, onClose, requestType }) => {
  const [leaves, setLeaves] = useState([]);
  const [selectedLeaveRequest, setSelectedLeaveRequest] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  useEffect(() => {
    if (!requestType) return;
    const getRequests = async () => {
      const { data } = await axios.post("/get-leave-requests", {
        requestType: requestType,
      });
      setLeaves(data.result);
    };

    getRequests();
  }, [requestType]);

  useEffect(() => {
    if (!selectedLeaveRequest) return;
    axios
      .post("get-employee-by-doc-id", {
        docId: selectedLeaveRequest.empDocId,
      })
      .then((resp) => setEmployeeName(resp.data.result.empFN));
  }, [selectedLeaveRequest]);

  const handleModalClose = () => {
    onClose();
  };

  const handleApproval = async (approval) => {
    const { empDocId, monthGroup, date } = selectedLeaveRequest;
    const resp = await axios.post("/approve-leave-request", {
      employeeID: empDocId,
      monthGroup,
      leaveDate: date,
      status: approval,
    });

    if (resp.data.status !== 200) return alert(resp.data.message);

    setLeaves((v) =>
      v.filter((leave) => {
        if (
          leave.empDocId === empDocId &&
          leave.monthGroup === monthGroup &&
          leave.date === date
        )
          return false;
        return true;
      })
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose} size="lg">
      <ModalOverlay />

      <ModalContent>
        <ModalCloseButton />
        <ModalBody py={6}>
          <Stack>
            <Accordion allowToggle>
              {leaves.map((leave) => {
                return (
                  <AccordionItem
                    key={`${leave.empDocId}-${leave.monthGroup}-${leave.date}`}
                  >
                    <Text as="h2">
                      <AccordionButton
                        onClick={() => {
                          setSelectedLeaveRequest(leave);
                        }}
                      >
                        Employee ID:
                      </AccordionButton>
                    </Text>
                    <AccordionPanel>
                      <Text>Employee Name: {employeeName}</Text>
                      {requestType === "Vacation Leave" ? (
                        <Flex mb={4} flexFlow="row wrap" columnGap="20px">
                          <Text
                            as="b"
                            color={primaryColor}
                            flex="0 1 calc(50% - 20px)"
                          >
                            Available VL days
                          </Text>
                          <Text as="b" color={primaryColor} flex="0 1 50%">
                            VL Type
                          </Text>
                          <Text
                            as="b"
                            color={primaryColor}
                            flex="0 1 calc(50% - 20px)"
                          >
                            Start Date
                          </Text>
                          <Text as="b" color={primaryColor} flex="0 1 50%">
                            End Date
                          </Text>
                        </Flex>
                      ) : (
                        <>
                          <Text>Available SL days</Text>
                          <Text>Submitted Documents</Text>
                        </>
                      )}
                      <ButtonGroup gap="4" justifyContent="center" w="100%">
                        <Button
                          color="white"
                          backgroundColor={primaryColor}
                          borderRadius="20px"
                          onClick={() => handleApproval("approved")}
                        >
                          Approve
                        </Button>
                        <Button
                          color="white"
                          backgroundColor={primaryColor}
                          borderRadius="20px"
                          onClick={() => handleApproval("rejected")}
                        >
                          Reject
                        </Button>
                      </ButtonGroup>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LeaveRequestsModal;
