import React, { useState, useEffect } from "react";

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
} from "@chakra-ui/react";

const initialTransactionState = {
  transactionNumber: "",
  date: "",
  clientName: "",
  clientAddress: "",
  clientContact: "",
  driverId: "",
  helperId: "",
  status: "",
  reasonForDelay: "",
  salaryAdvance: 0,
  debt: 0,
  excess: 0,
  loan: 0,
  pagibig: 0,
  sss: 0,
  philhealth: 0,
  otherDeductions: 0,
  overtime: 0,
  holidaysWorked: 0,
  thirteenthMonthPay: 0,
  otherBonuses: 0,
  totalHours: 0,
};

const ViewTransactionModal = ({
  isOpen,
  onClose,
  transaction = initialTransactionState,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />

      <ModalContent>
        <ModalCloseButton />
        <ModalBody py={6}>
          <Flex flexFlow="row wrap" justifyContent="center" mb={4}>
            <Flex flexFlow="row wrap" justifyContent="center" mb={6}>
              <Box mr={6}>
                <Text>Transaction Number</Text>
                <Input readOnly value={transaction.transactionNumber} />
              </Box>

              <Box>
                <Text>Date</Text>
                <Input readOnly value={transaction.date} />
              </Box>

              <Box mr={6}>
                <Text>Client Name</Text>
                <Input readOnly value={transaction.clientName} />
              </Box>

              <Box>
                <Text>Client Address</Text>
                <Input readOnly value={transaction.clientAddress} />
              </Box>

              <Box mr={6}>
                <Text>Client Contact Number</Text>
                <Input readOnly value={transaction.clientContact} />
              </Box>

              <Box>
                <Text>Delivery Hours</Text>
                <Input readOnly value={transaction.totalHours} />
              </Box>

              <Box mr={6}>
                <Text>Driver Id</Text>
                <Input readOnly value={transaction.driverId} />
              </Box>

              <Box>
                <Text>Helper ID</Text>
                <Input readOnly value={transaction.helperId} />
              </Box>

              <Box mr={6}>
                <Text>Status</Text>
                <Input readOnly value={transaction.status} />
              </Box>

              <Box>
                <Text>Reason for delay</Text>
                <Input readOnly value={transaction.reasonForDelay} />
              </Box>
            </Flex>

            {/* transaction */}
            <Flex flexFlow="row wrap" justifyContent="center" mb={6}>
              <Box mr={6}>
                <Text>Salary Advance</Text>
                <Input readOnly value={transaction.salaryAdvance} />
              </Box>

              <Box>
                <Text>Debt</Text>
                <Input readOnly value={transaction.debt} />
              </Box>
              <Box mr={6}>
                <Text>Excess</Text>
                <Input readOnly value={transaction.excess} />
              </Box>
              <Box>
                <Text>Loan</Text>
                <Input readOnly value={transaction.loan} />
              </Box>
              <Box mr={6}>
                <Text>Pag-ibig</Text>
                <Input readOnly value={transaction.pagibig} />
              </Box>
              <Box>
                <Text>SSS</Text>
                <Input readOnly value={transaction.sss} />
              </Box>
              <Box mr={6}>
                <Text>PhilHealth</Text>
                <Input readOnly value={transaction.philhealth} />
              </Box>
              <Box>
                <Text>Others</Text>
                <Input readOnly value={transaction.otherDeductions} />
              </Box>
            </Flex>

            {/* Bonuses */}
            <Flex flexFlow="row wrap" justifyContent="center">
              <Box mr={6}>
                <Text>Overtime Hours</Text>
                <Input readOnly value={transaction.overtime} />
              </Box>

              <Box>
                <Text>No. of Holidays Worked</Text>
                <Input readOnly value={transaction.holidaysWorked} />
              </Box>

              <Box mr={6}>
                <Text>13th Month Pay</Text>
                <Input readOnly value={transaction.thirteenthMonthPay} />
              </Box>

              <Box>
                <Text>Others</Text>
                <Input readOnly value={transaction.otherBonuses} />
              </Box>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ViewTransactionModal;
