import { combineReducers } from "redux";

function contacts(state = [], action) {
  switch (action.type) {
    case "ADD_CONTACT":
      // Menambahkan kontak baru kedalam daftar
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          phone: action.phone
        },
      ];
    case "REMOVE_CONTACT":
      // Menghapus kontak dari daftar
      return state.filter(contact => contact.id !== action.id);
    default:
      return state;
  }
}
function login(state = [], action) {
  switch (action.type) {
    case "CHECK_LOGIN":
      // cek login
      return [
        {
          statusLogin:'true',
          username: action.username,
          password: action.password
        },
      ];
    default:
      return state;
  }
}

function products(state=[],action){
  switch(action.type){
    case "ADD_PRODUCT":
    return[ ...state,
      {
        idProduct:action.idProduct,
        nmProduct:action.nmProduct,
        descProduct:action.descProduct,
        stockProduct:action.stockProduct,
        priceProduct:action.priceProduct
      }

    ];

    case "UPDATE_PRODUCT":
    return [...state,
      {
        idProduct:action.idProduct,
        nmProduct:action.nmProduct,
        descProduct:action.descProduct,
        stockProduct:action.stockProduct,
        priceProduct:action.priceProduct
      }
    ];
    case "DELETE_PRODUCT":
      // Menghapus product dari daftar
      return state.filter(product => product.idProduct !== action.idProduct);
    default:
      return state;
  }

}

const Reducers = combineReducers({
  contacts,
  login,
  products
  // Reducer lain yang mungkin kamu butuhkan
});

export default Reducers;