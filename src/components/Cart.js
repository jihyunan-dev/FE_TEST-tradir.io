import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { TiTimes } from "react-icons/ti";
import { deleteCart } from "../Modules/cart.action";

const Cart = ({ toggleCart }) => {
  const dispatch = useDispatch();

  const { beerlist } = useSelector((state) => state.beerlist);
  const { cart } = useSelector((state) => state.cart);

  const [targetList, setTargetList] = useState([]);

  useEffect(() => {
    const newList = beerlist.filter((beer) =>
      cart.some((itemId) => itemId === beer.id)
    );
    setTargetList(newList);
  }, [beerlist, cart]);

  const deleteItem = (id) => {
    dispatch(deleteCart(id));
  };

  // 장바구니 이외의 곳 클릭시 닫기
  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      e.stopPropagation();
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        toggleCart();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [cartRef]);

  return (
    <Container ref={cartRef}>
      <Title>장바구니</Title>
      <List>
        {targetList.length === 0 && <Message>장바구니가 비어있습니다.</Message>}
        {targetList.length !== 0 &&
          targetList.map((item) => (
            <Item key={item.id}>
              <ImgBox>
                <CartImg src={item.image_url} alt={item.name} />
              </ImgBox>
              <Name>{item.name}</Name>
              <DeleteBtn>
                <TiTimes onClick={() => deleteItem(item.id)} />
              </DeleteBtn>
            </Item>
          ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 400px;
  height: auto;
  max-width: 100vw;
  min-height: 150px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transform: translate(0, 100%);
  z-index: 20;
`;

const Title = styled.h4`
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
`;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;

  &:hover {
    background-color: var(--white);
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  margin-right: 10px;
`;

const CartImg = styled.img`
  height: 50px;
`;

const Name = styled.p`
  font-size: 14px;
  margin-right: 10px;
`;

const Message = styled.div`
  font-size: 14px;
  color: #636e72;
`;

const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export default Cart;
