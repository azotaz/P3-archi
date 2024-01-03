import { Apifin } from "./cheminapi.js";

const ajoutphoto = document.getElementById("formulairemodale")
function envoidephoto() {
        const titres = document.getElementById('titres').text;
        const categories = document.getElementById('categories').value;

        fetch(Apifin("/works"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    titre: titres,
                    category: categories,
                }),
            })
            .then((response) => response.json())
        }


        ajoutphoto.addEventListener("submit", (e) => {
           envoidephoto();
          });
        