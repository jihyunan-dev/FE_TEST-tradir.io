import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { setModalId, toggleModal } from "../Modules/beerlist.action";

const ModalBtn = ({ id, children }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModal());
    dispatch(setModalId(id));
  };

  return (
    <Btn type="button" onClick={handleClick}>
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  font-size: 16px;
  font-weight: 600;
`;

export default ModalBtn;
