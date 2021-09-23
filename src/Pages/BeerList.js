import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AbvFilter from "../components/AbvFilter";
import BeerTable from "../components/BeerTable";
import { getBeerlist } from "../Modules/beerlist.action";

const BeerList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeerlist());
  }, [dispatch]);

  return (
    <>
      <AbvFilter />
      <BeerTable />
    </>
  );
};

export default BeerList;
