console.log("Entro al main.js");

const randomImage = () => {
  console.log("Entró a la función randomImage");
  // Función para traer la API
  fetch("https://picsum.photos/200/300")
    // Trae la data de la API
    .then((data) => {
      console.log(data);
      // Tomamos la imagen por ID y reescribirmos la URL que trae la API
      document.getElementById("imgRandom").src = data.url;
    })
    .catch((error) => {
      console.log("Ocurrió un error");
    });
};
