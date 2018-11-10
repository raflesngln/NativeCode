// Nilai awal contactID
let currentID = 0;
let idpr=0;


// contact actions
  export function addContact(contact) {
            const { name, phone } = contact;
            currentID += 1;
            return {
              type: "ADD_CONTACT",
              id: currentID,
              name,
              phone
            };
          }
  export function removeContact(id) {
            return {
              type: "REMOVE_CONTACT",
              id
            };
          }

// Product actions
  export function addProduct(product) {
            const { nmProduct, descProduct,stockProduct,priceProduct } = product;
            idpr += 1;

            return {
              type: "ADD_PRODUCT",
              idProduct: idpr,
              nmProduct,
              descProduct,
              stockProduct,
              priceProduct
            };
          }

  export function updateProduct(product) {
            const { nmProduct, descProduct,stockProduct,priceProduct } = product;
            idpr += 1;

            return {
              type: "UPDATE_PRODUCT",
              idProduct: idpr,
              nmProduct,
              descProduct,
              stockProduct,
              priceProduct
            };
          }

  export function removeProduct(idProduct) {
            return {
              type: "DELETE_PRODUCT",
              idProduct
            };
    }
export function LoginStatus(idProduct) {
      return {
        type: "DELETE_PRODUCT",
        idProduct
      };
}
export function cekLogin(infoLogin) {
  const { statusLogin,username, password } = infoLogin;
  return {
    type: "CHECK_LOGIN",
    statusLogin,
    username,
    password
  };
}