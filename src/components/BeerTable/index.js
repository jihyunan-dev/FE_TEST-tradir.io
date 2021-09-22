import React, { useState } from "react";
import MaterialTable from "material-table";
import { tableIcons } from "./BeerTable.icons";

const BeerTable = ({ beerlist }) => {
  const [columns, setColumn] = useState([
    { title: "Beer", field: "name" },
    {
      title: "Image",
      field: "image_url",
      render: (rowData) => (
        <img
          src={rowData.image_url}
          style={{ height: 100 }}
          alt={rowData.name}
        />
      ),
    },
    { title: "abv", field: "abv" },
    { title: "Brewers tips", field: "brewers_tips" },
    { title: "Description", field: "description" },
  ]);

  const option = {
    icons: tableIcons,
    title: "맥주 리스트",
    columns,
    data: beerlist,
  };

  return <MaterialTable {...option} />;
};

export default BeerTable;
