import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import axios from "../../../utilities/axios";
import { setDeductions } from "../../../redux/adjustments-slice";

const DeductionModal = ({ isOpen, onClose }) => {
  const [deductionsInForm, setDeductionsInForm] = useState({
    salaryAdvance: 0,
    debt: 0,
    excess: 0,
    loan: 0,
    pagibig: 0,
    sss: 0,
    philhealth: 0,
    others: 0,
  });
  const { employee, deductions } = useSelector((state) => state.adjustments);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDeductionsInForm((val) => ({ ...val, [name]: Number(value) }));
  };

  const handleAddDeduction = async () => {
    if (!employee) return;
    const resp = await axios.post("/addDeduction", {
      employeeId: employee.empId,
      docId: employee.docId,
      data: deductionsInForm,
    });

    console.log("resp", resp);

    if (resp.data.status === 200) {
      dispatch(setDeductions(deductionsInForm));
      return onClose();
    }

    alert(resp.data.message);
  };

  const handleModalClose = () => {
    setDeductionsInForm(deductions);
    onClose();
  };

  useEffect(() => {
    if (!deductions) return;
    setDeductionsInForm(deductions);
  }, [deductions]);

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose} size="lg">
      <ModalOverlay />

      <ModalContent>
        <ModalCloseButton />
        <ModalBody py={6}>
          <Flex flexFlow="row wrap" justifyContent="center" mb={4}>
            <Box mr={6}>
              <Text>Salary Advance</Text>
              <Input
                name="salaryAdvance"
                // placeholder="N/A"
                onChange={handleChange}
                value={deductionsInForm.salaryAdvance || 0}
              />
            </Box>

            <Box>
              <Text>Debt</Text>
              <Input
                name="salaryAdvance"
                onChange={handleChange}
                value={deductionsInForm.debt || 0}
              />
            </Box>

            <Box mr={6}>
              <Text>Excess</Text>
              <Input
                onChange={handleChange}
                name="excess"
                value={deductionsInForm.excess || 0}
              />
            </Box>

            <Box>
              <Text>Loan</Text>
              <Input
                onChange={handleChange}
                name="loan"
                value={deductionsInForm.loan || 0}
              />
            </Box>

            <Box mr={6}>
              <Text>Pag-ibig</Text>
              <Input
                onChange={handleChange}
                name="pagibig"
                value={deductionsInForm.pagibig || 0}
              />
            </Box>

            <Box>
              <Text>SSS</Text>
              <Input
                onChange={handleChange}
                name="sss"
                value={deductionsInForm.sss || 0}
              />
            </Box>

            <Box mr={6}>
              <Text>Driver Id</Text>
              <Input
                onChange={handleChange}
                name="philhealth"
                value={deductionsInForm.philhealth || 0}
              />
            </Box>

            <Box></Box>

            <Box>
              <Text>Helper ID</Text>
              <Input
                onChange={handleChange}
                name="others"
                value={deductionsInForm.others || 0}
              />
            </Box>
          </Flex>

          <Box textAlign="center">
            <Button colorScheme="blue" mr={3} onClick={handleAddDeduction}>
              Add Transaction
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeductionModal;
