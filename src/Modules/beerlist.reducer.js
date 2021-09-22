import {
  GET_BEERLIST,
  GET_BEERLIST_FAILED,
  GET_BEERLIST_SUCCESS,
  UPDATE_COLUMNS,
} from "./beerlist.action";

const initialState = {
  isLoading: false,
  beerlist: [],
  error: null,
  columns: [
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
  ],
};

const beerlist = (state = initialState, action) => {
  switch (action.type) {
    case GET_BEERLIST:
      return { ...state, isLoading: true };
    case GET_BEERLIST_SUCCESS:
      return { ...state, isLoading: false, beerlist: action.payload };
    case GET_BEERLIST_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    case UPDATE_COLUMNS:
      return { ...state, columns: action.payload };
    default:
      return state;
  }
};

export default beerlist;
