import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from "material-table";
import { tableIcons } from "./BeerTable.icons";
import { updateColumns } from "../../Modules/beerlist.action";

const BeerTable = () => {
  const dispatch = useDispatch();

  const { beerlist, columns, currentFilter } = useSelector(
    (state) => state.beerlist
  );

  const handleOrderChange = (srcIdx, destIdx) => {
    const newColumns = columns.slice();
    const targetColumn = newColumns.splice(srcIdx, 1)[0];
    newColumns.splice(destIdx, 0, targetColumn);
    dispatch(updateColumns(newColumns));
  };

  const [targetList, setTargetList] = useState(beerlist);

  useEffect(() => {
    if (currentFilter.length === 0) setTargetList(beerlist);
    else {
      const newList = beerlist.filter((beer) =>
        currentFilter.some(
          (range) => beer.abv >= range[0] && beer.abv < range[1]
        )
      );
      setTargetList(newList);
    }
  }, [currentFilter, beerlist]);

  const option = {
    icons: tableIcons,
    title: "맥주 리스트",
    columns,
    onColumnDragged: handleOrderChange,
    data: targetList,
  };

  return <MaterialTable {...option} />;
};

export default BeerTable;
