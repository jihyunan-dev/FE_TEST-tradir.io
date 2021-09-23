import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { minusFilter, plusFilter } from "../Modules/beerlist.action";

const AbvFilter = () => {
  const dispatch = useDispatch();

  const filterStep = [
    { title: "5 미만", id: "abv1", range: [0, 5] },
    { title: "5 이상 - 7 미만", id: "abv2", range: [5, 7] },
    { title: "7 이상 - 9 미만", id: "abv3", range: [7, 9] },
    { title: "9 이상 - 11 미만", id: "abv4", range: [9, 11] },
    { title: "11 이상", id: "abv5", range: [11, Infinity] },
  ];

  const toggleFilter = (checked, range) => {
    if (checked) dispatch(plusFilter(range));
    else dispatch(minusFilter(range));
  };

  return (
    <FilterBox>
      {filterStep.map((step) => (
        <CheckContainer key={step.id}>
          <input
            type="checkbox"
            id={step.id}
            onChange={(e) => toggleFilter(e.target.checked, step.range)}
          />
          <FilterLabel htmlFor={step.id}>{step.title}</FilterLabel>
        </CheckContainer>
      ))}
    </FilterBox>
  );
};

const FilterBox = styled.article`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 50px;
  padding: 0 40px;
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
  color: var(--red);
`;

export default AbvFilter;
