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
import { setBonuses } from "../../../redux/adjustments-slice";

const BonusesModal = ({ isOpen, onClose }) => {
  const [bonusInForm, setBonusInForm] = useState({
    overtime: 0,
    holidaysWorked: 0,
    thirteenthMonthPay: 0,
    others: 0,
  });
  const { employee, bonuses } = useSelector((state) => state.adjustments);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBonusInForm((val) => ({ ...val, [name]: Number(value) }));
  };

  const handleModalClose = () => {
    setBonusInForm(bonuses);
    onClose();
  };

  const handleAddBonuses = async () => {
    const resp = await axios.post("/addBonus", {
      employeeId: employee.empId,
      docId: employee.docId,
      data: bonusInForm,
    });

    console.log("resp", resp);

    if (resp.data.status === 200) {
      dispatch(setBonuses(bonusInForm));
      return onClose();
    }

    alert(resp.data.message);
  };

  useEffect(() => {
    if (!bonuses) return;
    setBonusInForm(bonuses);
  }, [bonuses]);

  // useEffect(() => {
  //   console.log("bonusInForm", bonusInForm);
  // }, [bonusInForm]);

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose} size="lg">
      <ModalOverlay />

      <ModalContent>
        <ModalCloseButton />
        <ModalBody py={6}>
          <Flex flexFlow="row wrap" justifyContent="center" mb={4}>
            <Box mr={6}>
              <Text>Overtime Hours</Text>
              <Input
                name="overtime"
                onChange={handleChange}
                value={bonusInForm.overtime || 0}
              />
            </Box>

            <Box>
              <Text>No. of Holidays Worked</Text>
              <Input
                name="holidaysWorked"
                onChange={handleChange}
                value={bonusInForm.holidaysWorked || 0}
              />
            </Box>

            <Box mr={6}>
              <Text>13th Month Pay</Text>
              <Input
                onChange={handleChange}
                name="thirteenthMonthPay"
                value={bonusInForm.thirteenthMonthPay || 0}
              />
            </Box>

            <Box>
              <Text>Others</Text>
              <Input
                onChange={handleChange}
                name="others"
                value={bonusInForm.others || 0}
              />
            </Box>
          </Flex>

          <Box textAlign="center">
            <Button colorScheme="blue" mr={3} onClick={handleAddBonuses}>
              Add Bonuses
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BonusesModal;
