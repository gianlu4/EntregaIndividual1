//dirección para obtener el listado en formato json:
const LIST_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

//const LIST_URL ="https://japdevdep.github.io/ecommerce-api/category/all.json";

//función para mostrar el spinner de carga: 
function showSpinner(){
  document.getElementById("spinner-wrapper").style.display = "block"; 
}

//función para ocultar el spinner de carga:
function hideSpinner(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

//función que realiza el fetch() a la url recibida y devuelve un objeto con los datos y el estado de la respuesta:
function getJSONData(LIST_URL){
    let result = {};
    showSpinner(); 
    return fetch(LIST_URL) 
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner(); 
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner(); 
        return result;
    });
}
