import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BeerTable from "../components/BeerTable";
import { getBeerlist } from "../Modules/beerlist.action";

const BeerList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeerlist());
  }, [dispatch]);

  return <BeerTable />;
};

export default BeerList;
