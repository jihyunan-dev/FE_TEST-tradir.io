import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBeerlist } from "../Modules/beerlist.action";

const BeerList = () => {
  const dispatch = useDispatch();

  const { beerlist } = useSelector((state) => state.beerlist);
  console.log(beerlist);

  useEffect(() => {
    dispatch(getBeerlist());
  }, [dispatch]);

  return "Beerlist";
};

export default BeerList;
