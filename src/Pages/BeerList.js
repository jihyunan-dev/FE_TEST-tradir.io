import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BeerTable from "../components/BeerTable";
import { getBeerlist } from "../Modules/beerlist.action";

const BeerList = () => {
  const dispatch = useDispatch();

  const { beerlist } = useSelector((state) => state.beerlist);

  useEffect(() => {
    dispatch(getBeerlist());
  }, [dispatch]);

  return <BeerTable beerlist={beerlist} />;
};

export default BeerList;
