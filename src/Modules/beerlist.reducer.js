import ModalBtn from "../components/ModalBtn";
import {
  GET_BEERLIST,
  GET_BEERLIST_FAILED,
  GET_BEERLIST_SUCCESS,
  UPDATE_COLUMNS,
  PLUS_FILTER,
  MINUS_FILTER,
  TOGGLE_MODAL,
  SET_MODAL_ID,
  RESET_MODAL_ID,
} from "./beerlist.action";

const initialState = {
  isLoading: false,
  beerlist: [],
  error: null,
  columns: [
    {
      title: "Beer",
      field: "name",
      render: (rowData) => <ModalBtn id={rowData.id}>{rowData.name}</ModalBtn>,
    },
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
  currentFilter: [],
  isShowBeerModal: false,
  modalId: null,
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
    case PLUS_FILTER:
      return {
        ...state,
        currentFilter: [...state.currentFilter, action.payload],
      };
    case MINUS_FILTER:
      return {
        ...state,
        currentFilter: state.currentFilter.filter(
          (id) => id !== action.payload
        ),
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isShowBeerModal: !state.isShowBeerModal,
      };
    case SET_MODAL_ID:
      return { ...state, modalId: action.payload };
    case RESET_MODAL_ID:
      return { ...state, modalId: null };
    default:
      return state;
  }
};

export default beerlist;
