import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from "material-table";
import { tableIcons } from "./BeerTable.icons";

import BeerModal from "../BeerModal";

// redux
import {
  updateColumns,
  resetModalId,
  toggleModal,
} from "../../Modules/beerlist.action";

const BeerTable = () => {
  const dispatch = useDispatch();

  const { beerlist, columns, currentFilter, isShowBeerModal, modalId } =
    useSelector((state) => state.beerlist);

  const [modalData, setModalData] = useState(null);

  const handleModal = (e) => {
    e.stopPropagation();
    dispatch(toggleModal());
    dispatch(resetModalId());
  };

  // modalId 변화에 따라 현재 modalId에 맞는 데이터 추출
  useEffect(() => {
    if (!modalId) setModalData(null);
    else setModalData(beerlist.find((beer) => beer.id === modalId));
  }, [beerlist, modalId]);

  // drag로 column의 순서를 바꿀 때 redux의 column 순서도 바꿔주는 함수
  const handleOrderChange = (srcIdx, destIdx) => {
    const newColumns = columns.slice();
    const targetColumn = newColumns.splice(srcIdx, 1)[0];
    newColumns.splice(destIdx, 0, targetColumn);
    dispatch(updateColumns(newColumns));
  };

  const [targetList, setTargetList] = useState(beerlist);

  // currentFilter의 값이 바뀔 때마다 렌더할 데이터를 바꿔줌
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

  return (
    <>
      {isShowBeerModal && modalData && (
        <BeerModal toggleModal={handleModal} data={modalData} />
      )}
      <MaterialTable {...option} />
    </>
  );
};

export default BeerTable;
