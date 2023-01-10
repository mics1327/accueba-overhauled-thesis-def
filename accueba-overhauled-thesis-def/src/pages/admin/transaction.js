import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Flex,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import NavigationAdmin from "./components/admin-nav";
import ViewTransactionModal from "./components/view-transaction-modal";
import AddTransactionModal from "./components/add-transaction-modal";

import { primaryColor } from "../../utilities/color-schema";
import axios from "../../utilities/axios";

import { setTransactions } from "../../redux/transactions-slice";

const Transaction = () => {
  const [transactionNumber, setTransactionNumber] = useState("");
  const [transaction, setTransaction] = useState({});
  const transactions = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();
  const addModal = useDisclosure();
  const viewModal = useDisclosure();

  useEffect(() => {
    axios("/getTransactions").then(({ data }) => {
      const filteredTransactions = data.result.filter(
        (t) => t.date && t.transactionNumber
      );
      dispatch(setTransactions(filteredTransactions));
    });
  }, [dispatch]);

  const handeSearch = async () => {
    const resp = await axios.post("/getTransactionById", {
      transactionNumber: transactionNumber,
    });
    console.log("resp :>> ", resp);
    setTransaction(resp.data.result);
  };

  return (
    <>
      <NavigationAdmin />
      <Flex
        display="flex"
        // alignItems="center"
        py={2}
        px={8}
        gap={2}
        height="calc(98vh - 100px)"
      >
        {/* Left Side */}
        <Box mr={4}>
          <Box textAlign="center" mb={4}>
            <Text as="b" color={primaryColor}>
              Transaction Number
            </Text>
            <Input
              // placeholder="N/A"
              my={5}
              onChange={(e) => {
                setTransactionNumber(e.target.value);
              }}
              value={transactionNumber}
            />
            <Button
              color="white"
              backgroundColor={primaryColor}
              variant="solid"
              borderRadius="20px"
              onClick={handeSearch}
            >
              <Text as="b" _hover={{ color: primaryColor }}>
                Search Transaction
              </Text>
            </Button>
          </Box>

          <Box>
            <Box>
              <Text as="b" color={primaryColor}>
                Recipient
              </Text>
              <Input
                placeholder="Kyle Company"
                _placeholder={{
                  fontWeight: "bold",
                }}
                readOnly
                value={transaction.clientName || ""}
                // value=
              />
            </Box>

            <Box>
              <Text as="b" color={primaryColor}>
                Contact Number
              </Text>
              <Input
                _placeholder={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                placeholder="09123456789"
                readOnly
                value={transaction.clientContact || ""}
              />
            </Box>

            <Box>
              <Text as="b" color={primaryColor}>
                Recipient Address
              </Text>
              <Input
                _placeholder={{
                  fontWeight: "bold",
                }}
                placeholder="511 Vibora St. Caloocan City"
                readOnly
                value={transaction.clientAddress || ""}
              />
            </Box>

            <Box>
              <Text as="b" color={primaryColor}>
                Driver ID
              </Text>
              <Input readOnly value={transaction.driverId || ""} />
            </Box>

            <Box mb={4}>
              <Text as="b" color={primaryColor}>
                Helper ID
              </Text>
              <Input readOnly value={transaction.helperId || ""} />
            </Box>

            <Button
              color="white"
              backgroundColor={primaryColor}
              variant="solid"
              borderRadius="20px"
              onClick={viewModal.onOpen}
            >
              <Text as="b" _hover={{ color: primaryColor }}>
                View Full Details
              </Text>
            </Button>
          </Box>
        </Box>

        {/* Right Side */}
        <TableContainer w="100%">
          <Table>
            <Thead>
              <Tr>
                <Th>Transactions</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((t) => (
                <Tr key={t.transactionNumber}>
                  <Td>{t.transactionNumber}</Td>
                  <Td>{t.date}</Td>
                </Tr>
              ))}
              <Tr>
                <Td colSpan={2} textAlign="center">
                  <Button
                    color="white"
                    backgroundColor={primaryColor}
                    variant="solid"
                    borderRadius="20px"
                    onClick={addModal.onOpen}
                  >
                    <Text as="b" _hover={{ color: primaryColor }}>
                      Add Transaction
                    </Text>
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <AddTransactionModal
          isOpen={addModal.isOpen}
          onClose={addModal.onClose}
        />
        <ViewTransactionModal
          isOpen={viewModal.isOpen}
          onClose={viewModal.onClose}
          transaction={transaction}
        />
      </Flex>
    </>
  );
};

export default Transaction;
