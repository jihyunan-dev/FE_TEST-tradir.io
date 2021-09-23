import React from "react";
import styled from "styled-components";

const BeerModal = ({ data, toggleModal }) => {
  const {
    name,
    image_url,
    abv,
    description,
    tagline,
    first_brewed,
    contributed_by,
  } = data;

  const dataAry = [
    { title: "Name", desc: name },
    { title: "abv", desc: abv },
    { title: "Description", desc: description },
    { title: "Tagline", desc: tagline },
    { title: "First brewed", desc: first_brewed },
    { title: "Contributed By", desc: contributed_by },
  ];

  return (
    <>
      <Overlay onClick={toggleModal} />
      <ModalContainer>
        <BeerImg src={image_url} alt={name} />
        <dl>
          {dataAry.map((row) => (
            <ItemBox key={row.title}>
              <ItemTitle>{row.title}</ItemTitle>
              <ItemDesc>{row.desc}</ItemDesc>
            </ItemBox>
          ))}
        </dl>
      </ModalContainer>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.3;
`;

const ModalContainer = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 40;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  min-width: 320px;
  padding: 20px;
  background-color: var(--white);
  min-height: 60vh;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

const BeerImg = styled.img`
  height: 100px;
  margin-bottom: 20px;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin-bottom: 10px;
`;

const ItemTitle = styled.dt`
  margin-bottom: 5px;
  border-bottom: 1px solid var(--dark);
  font-size: 14px;
  font-weight: 600;
`;

const ItemDesc = styled.dd`
  font-size: 14px;
`;

export default BeerModal;
