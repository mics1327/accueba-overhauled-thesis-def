import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

import { nanoid } from "nanoid";
import dayjs from "dayjs";

import { primaryColor } from "../../../utilities/color-schema";
import axios from "../../../utilities/axios";
import { addTransaction } from "../../../redux/transactions-slice";

const dateToday = dayjs().date();
const initialTransactionState = {
  transactionNumber: "",
  date: "",
  clientName: "",
  clientAddress: "",
  clientContactNumber: "",
  totalDeliveryHours: "",
  driverId: "",
  helperId: "",
  status: "",
  reasonForDelay: "",
  totalDeliveryPaid: 0,
};

const AddTransactionModal = ({ isOpen, onClose }) => {
  const [transaction, setTransaction] = useState({
    ...initialTransactionState,
    transactionNumber: `${nanoid()}-${dayjs().format("MMM")}${
      dateToday < 15 ? "01-15" : "16-31"
    }`,
  });
  const dipatch = useDispatch();

  const handleModalClose = () => {
    setTransaction({
      ...initialTransactionState,
      transactionNumber: `${nanoid()}-${dayjs().format("MMM")}${
        dateToday < 15 ? "01-15" : "16-31"
      }`,
    });
    onClose();
  };

  const handleTransactionChanges = (e) => {
    setTransaction((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleAddTransaction = async () => {
    try {
      const resp = await axios.post("/createTransaction", {
        data: transaction,
      });

      if (resp.data.status === 200) {
        dipatch(addTransaction(transaction));
        onClose();
      }
      // console.log("resp :>> ", resp);
    } catch (error) {
      alert("error", error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose} size="lg">
      <ModalOverlay />

      <ModalContent>
        <ModalCloseButton />
        <ModalBody py={6}>
          <Flex flexFlow="row wrap" justifyContent="center" mb={6}>
            <Box mr={6}>
              <Text>Transaction Number</Text>
              <Input
                // placeholder="N/A"
                // onChange={handleTransactionChanges}
                readOnly
                value={transaction.transactionNumber}
              />
            </Box>

            <Box>
              <Text>Date</Text>
              <Input
                name="date"
                onChange={handleTransactionChanges}
                value={transaction.date}
              />
            </Box>

            <Box mr={6}>
              <Text>Client Name</Text>
              <Input
                name="clientName"
                onChange={handleTransactionChanges}
                value={transaction.clientName}
              />
            </Box>

            <Box>
              <Text>Client Address</Text>
              <Input
                name="clientAddress"
                onChange={handleTransactionChanges}
                value={transaction.clientAddress}
              />
            </Box>

            <Box mr={6}>
              <Text>Client Contact Number</Text>
              <Input
                name="clientContactNumber"
                onChange={handleTransactionChanges}
                value={transaction.clientContactNumber}
              />
            </Box>

            <Box>
              <Text>Delivery Hours</Text>
              <Input
                name="totalDeliveryHours"
                onChange={handleTransactionChanges}
                value={transaction.totalDeliveryHours}
              />
            </Box>

            <Box mr={6}>
              <Text>Driver Id</Text>
              <Input
                name="driverId"
                onChange={handleTransactionChanges}
                value={transaction.driverId}
              />
            </Box>

            <Box>
              <Text>Helper ID</Text>
              <Input
                name="helperId"
                onChange={handleTransactionChanges}
                value={transaction.helperId}
              />
            </Box>

            <Box mr={6}>
              <Text>Status</Text>
              <Input
                name="status"
                onChange={handleTransactionChanges}
                value={transaction.status}
              />
            </Box>

            <Box>
              <Text>Reason for delay</Text>
              <Input
                name="reasonForDelay"
                onChange={handleTransactionChanges}
                value={transaction.reasonForDelay}
              />
            </Box>

            <Box mr={6}>
              <Text>Total Delivery Paid</Text>
              <Input
                min={0}
                name="totalDeliveryPaid"
                onChange={handleTransactionChanges}
                value={transaction.totalDeliveryPaid}
                type="number"
              />
            </Box>
          </Flex>

          <Box textAlign="center">
            <Button colorScheme="blue" mr={3} onClick={handleAddTransaction}>
              Add Transaction
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddTransactionModal;
