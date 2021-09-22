import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from "material-table";
import { tableIcons } from "./BeerTable.icons";
import { updateColumns } from "../../Modules/beerlist.action";

const BeerTable = () => {
  const dispatch = useDispatch();

  const { beerlist, columns } = useSelector((state) => state.beerlist);

  const handleOrderChange = (srcIdx, destIdx) => {
    const newColumns = columns.slice();
    const targetColumn = newColumns.splice(srcIdx, 1)[0];
    newColumns.splice(destIdx, 0, targetColumn);
    dispatch(updateColumns(newColumns));
  };

  const option = {
    icons: tableIcons,
    title: "맥주 리스트",
    columns,
    onColumnDragged: handleOrderChange,
    data: beerlist,
  };

  return <MaterialTable {...option} />;
};

export default BeerTable;
