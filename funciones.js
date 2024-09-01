


const listabusqueda= document.querySelector("#listabusqueda");
const descripcion = document.querySelector("#descripcion-Starwar");
const botonesHeader = document.querySelectorAll(".submenu__item");



var URL= "https://swapi.py4e.com/api/people/"
    for(let i = 1; i<= 88; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarListasPeople(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }



//     "films": "https://swapi.py4e.com/api/films/",
//     "people": "https://swapi.py4e.com/api/people/",
//     "planets": "https://swapi.py4e.com/api/planets/",
//     "species": "https://swapi.py4e.com/api/species/",
//     "starships": "https://swapi.py4e.com/api/starships/",
//     "vehicles": "https://swapi.py4e.com/api/vehicles/"


function people(){
    var URL= "https://swapi.py4e.com/api/people/"
    for(let i = 1; i<= 88; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarListasPeople(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function peopleHombre(){
    var URL= "https://swapi.py4e.com/api/people/"
    for(let i = 1; i<= 88; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarPeopleHombre(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function peopleMujer(){
    var URL= "https://swapi.py4e.com/api/people/"
    for(let i = 1; i<= 88; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarPeopleMujer(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}


function films(){
    var URL= "https://swapi.py4e.com/api/films/"
    for(let i = 1; i<= 7; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarListasPeliculas(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function filmsDirector(){
    var URL= "https://swapi.py4e.com/api/films/"
    for(let i = 1; i<= 7; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarPeliculasDirector(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
    
}
function filmsProductor(){
    var URL= "https://swapi.py4e.com/api/films/"
    for(let i = 1; i<= 7; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarPeliculasProductor(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}


function planets(){
    var URL= "https://swapi.py4e.com/api/planets/"
    for(let i = 1; i<= 88; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarListasPlanetas(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function planetsClima(){
    var URL= "https://swapi.py4e.com/api/planets/"
    for(let i = 1; i<= 88; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarPlanetasClima(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function planetsDiametro(){
    var URL= "https://swapi.py4e.com/api/planets/"
    for(let i = 1; i<= 88; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarPlanetasDiametro(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}


function species(){
    var URL= "https://swapi.py4e.com/api/species/"
    for(let i = 1; i<= 37; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarListasEspecies(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function speciesClasificacion(){
    var URL= "https://swapi.py4e.com/api/species/"
    for(let i = 1; i<= 37; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarEspeciesClasificacion(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function speciesDesignacion(){
    var URL= "https://swapi.py4e.com/api/species/"
    for(let i = 1; i<= 37; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarEspeciesDesignacion(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}


function starships(){
    var URL= "https://swapi.py4e.com/api/starships/"
    for(let i = 1; i<= 77; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarListasNaves(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function starshipsModelo(){
    var URL= "https://swapi.py4e.com/api/starships/"
    for(let i = 1; i<= 77; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarNavesModelo(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function starshipsFabricante(){
    var URL= "https://swapi.py4e.com/api/starships/"
    for(let i = 1; i<= 77; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarNavesFabricante(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}


function vehicles(){
    var URL= "https://swapi.py4e.com/api/vehicles/"
    for(let i = 1; i<= 39; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarListasVehiculos(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function vehiclesPasajeros(){
    var URL= "https://swapi.py4e.com/api/vehicles/"
    for(let i = 1; i<= 39; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarVehiculosPasajeros(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}
function vehiclesTripulantes(){
    var URL= "https://swapi.py4e.com/api/vehicles/"
    for(let i = 1; i<= 39; i++){
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es correcta, lanzamos un error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => mostrarVehiculosTripulantes(data))
            .catch(error => {
                // Capturamos el error para evitar que el código se detenga
                console.error(`Error fetching data for person ${i}:`, error);
            });
    }
}

function filmsCampoEspecifico(llave,valor,titulo) {
    var URL = "https://swapi.py4e.com/api/films/";
    document.getElementById('contenedorTarjetas').innerHTML = "";
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos recibidos:", data); // Verifica los datos recibidos en la consola

            data.results.forEach(film => {
                if (film[llave] === valor) {
                    mostrarPeliculasCampoEspecifico(film,llave,titulo);
                }
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
/*PELICULAS DECADA ESPECIFICO--------------------------------------------------------------*/
function filmsDecadaEspecifico(decada, llave, titulo) {
    var URL = "https://swapi.py4e.com/api/films/";
    
    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Datos recibidos:", data);

        data.results.forEach(film => {

            const año = parseInt(film.release_date.split("-")[0]);


            if (decada === 70 && año >= 1970 && año < 1980) {
                mostrarPeliculasDecadaEspecifico(film, llave, titulo);
            } else if (decada === 80 && año >= 1980 && año < 1990) {
                mostrarPeliculasDecadaEspecifico(film, llave, titulo);
            } else if (decada === 90 && año >= 1990 && año < 2000) {
                mostrarPeliculasDecadaEspecifico(film, llave, titulo);
            } else if (decada === 2000 && año >= 2000 && año < 2010) {
                mostrarPeliculasDecadaEspecifico(film, llave, titulo);
            }
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}

/*PERSONAJES CAMPO ESPECIFICO--------------------------------------------------------------*/

function PeopleCampoEspecifico(llave, valor, titulo) {
    var URL = "https://swapi.py4e.com/api/people/";
    for (let i = 1; i <= 88; i++) {
        fetch(URL + i)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Datos recibidos:", data); 
                if (data[llave] === valor) {
                    mostrarPersonajeCampoEspecifico(data, llave, titulo);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
}


/*ESPECCIES CAMPO ESPECIFICO--------------------------------------------------------------*/
function especieCampoEspecifico(llave, valor, titulo) {
    var URL = "https://swapi.py4e.com/api/species/";
    for (let i = 1; i <= 37; i++) {
        fetch(URL + i)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Datos recibidos:", data); 
                if (data[llave] === valor) {
                    mostrarEspeciesCampoEspecifico(data, llave, titulo);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
}


/*NAVES CAMPO ESPECIFICO--------------------------------------------------------------*/

function navesCampoEspecifico(llave, valor, titulo) {
    var URL = "https://swapi.py4e.com/api/starships/";
    for (let i = 1; i <= 77; i++) {
        fetch(URL + i)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Datos recibidos:", data); 
                if (data[llave] === valor) {
                    mostrarNavesCampoEspecifico(data, llave, titulo);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
}



/*VEHICULO CAMPO ESPECIFICO--------------------------------------------------------------*/
function vehiculoCampoEspecifico(llave, valor, titulo) {
    var URL = "https://swapi.py4e.com/api/vehicles/";
    for (let i = 1; i <= 39; i++) {
        fetch(URL + i)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Datos recibidos:", data); 
                if (data[llave] === valor) {
                    mostrarVehiculoCampoEspecifico(data, llave, titulo);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
}

/*PLANETA CAMPO ESPECIFICO--------------------------------------------------------------*/
function planetaCampoEspecifico(llave, valor, titulo) {
    var URL = "https://swapi.py4e.com/api/planets/";
    for (let i = 1; i <= 61; i++) {
        fetch(URL + i)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Datos recibidos:", data); 

                
                if (data[llave] === valor) {
                    mostrarPlanetaCampoEspecifico(data, llave, titulo);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
}


// --------------


function mostrarListasPeople(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton personajes.png" alt="Personajes" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Gender:<br>${data.gender}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">${data.height}cm</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarPeopleHombre(data){
    if(data.gender==="male"){
        const div = document.createElement("div");
        div.classList.add("tarjeta");
            div.innerHTML = ` 
                <div class="busqueda-imagen">
                    <img src="./imagenes/menu/boton personajes.png" alt="Personajes" class="Logos" />
                </div>
                <div class="tarjeta-info">
                    <div class="nombre-contenedor">
                        <p class="busqueda-nombre">${data.name}</p>
                    </div>
                    <div class="contenedor-primer-dato">
                        <p class="primer-dato">Gender:<br>${data.gender}</p>
                    </div>
                    <div class="contenedor-segundo-dato">
                        <p class="segundo-dato">Altura:<br>${data.height}cm</p>
                    </div>
                </div>
            `;
        listabusqueda.append(div);
    }
}
function mostrarPeopleMujer(data){
    console.log(data);
    if(data.gender==="female"){
        const div = document.createElement("div");
        div.classList.add("tarjeta");
            div.innerHTML = ` 
                <div class="busqueda-imagen">
                    <img src="./imagenes/menu/boton personajes.png" alt="Personajes" class="Logos" />
                </div>
                <div class="tarjeta-info">
                    <div class="nombre-contenedor">
                        <p class="busqueda-nombre">${data.name}</p>
                    </div>
                    <div class="contenedor-primer-dato">
                        <p class="primer-dato">Gender:<br>${data.gender}</p>
                    </div>
                    <div class="contenedor-segundo-dato">
                        <p class="segundo-dato">Altura:<br>${data.height}cm</p>
                    </div>
                </div>
            `;
        listabusqueda.append(div);
    }
}


function mostrarListasPeliculas(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton peliculas.png" alt="Peliculas" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.title}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Episodio:<br>${data.episode_id}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Año:<br>${data.release_date}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarPeliculasDirector(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton peliculas.png" alt="Peliculas" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.title}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Director:<br>${data.director}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Año:<br>${data.release_date}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarPeliculasProductor(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton peliculas.png" alt="Peliculas" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.title}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Productor:<br>${data.producer}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Año:<br>${data.release_date}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}


function mostrarListasEspecies(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton especies.png" alt="Especies" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Altura:<br>${data.average_height}cm</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Lenguaje:<br>${data.language}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarEspeciesClasificacion(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton especies.png" alt="Especies" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Clasificación:<br>${data.classification}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Lenguaje:<br>${data.language}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarEspeciesDesignacion(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton especies.png" alt="Especies" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Designación:<br>${data.designation}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Lenguaje:<br>${data.language}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}


function mostrarListasNaves(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton naves.png" alt="Naves" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Cargo:<br>${data.cargo_capacity}kg</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Tamaño:<br>${data.length}m</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarNavesModelo(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton naves.png" alt="Naves" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Modelo:<br>${data.model}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Tamaño:<br>${data.length}m</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarNavesFabricante(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton naves.png" alt="Naves" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Fabricante:<br>${data.manufacturer}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Tamaño:<br>${data.length}m</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}


function mostrarListasVehiculos(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton vehiculos.png" alt="Vehiculos" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Modelo:<br>${data.model}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Clase:<br>${data.vehicle_class}m</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarVehiculosPasajeros(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton vehiculos.png" alt="Vehiculos" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Pasajeros:<br>${data.passengers}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Clase:<br>${data.vehicle_class}m</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarVehiculosTripulantes(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton vehiculos.png" alt="Vehiculos" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Tripulantes:<br>${data.crew}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Clase:<br>${data.vehicle_class}m</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}


function mostrarListasPlanetas(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton planetas.png" alt="Planetas" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Terreno:<br>${data.terrain }</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Población:<br>${data.population}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarPlanetasClima(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton planetas.png" alt="Planetas" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Clima:<br>${data.climate }</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Población:<br>${data.population}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
function mostrarPlanetasDiametro(data){
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton planetas.png" alt="Planetas" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">Diametro:<br>${data.diameter}km</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Población:<br>${data.population}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}


/*MOSTRAR--------------------------------------------------------------*/
/*MOSTRAR PELICULAS CAMPO ESPECIFICO--------------------------------------------------------------*/
function mostrarPeliculasCampoEspecifico(data, llave,titulo) {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton peliculas.png" alt="Peliculas" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.title}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">${titulo}:<br>${data[llave]}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Año:<br>${data.release_date}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
/*MOSTRAR PELICULAS DECADA ESPECIFICO--------------------------------------------------------------*/
function mostrarPeliculasDecadaEspecifico(data, llave, titulo) {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton peliculas.png" alt="Peliculas" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.title}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">${titulo}:<br>${data[llave]}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Año:<br>${data.release_date}</p>
            </div>
        </div>
    `;
    document.getElementById("listabusqueda").append(div); 
}

/*MOSTRAR PERSONAJE CAMPO ESPECIFICO--------------------------------------------------------------*/
function mostrarPersonajeCampoEspecifico(data, llave,titulo) {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton personajes.png" alt="Personajes" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">${titulo}:<br>${data[llave]}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">${data.height}cm</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}
/*MOSTRAR ESPECIE CAMPO ESPECIFICO--------------------------------------------------------------*/

function mostrarEspeciesCampoEspecifico(data, llave,titulo) {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton especies.png" alt="Especies" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">${titulo}:<br>${data[llave]}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Lenguaje:<br>${data.language}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}

/*MOSTRAR NAVES CAMPO ESPECIFICO--------------------------------------------------------------*/

function mostrarNavesCampoEspecifico(data, llave,titulo) {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton naves.png" alt="Naves" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">${titulo}:<br>${data[llave]}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Tamaño:<br>${data.length}m</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}

/*MOSTRAR VEHICULOS CAMPO ESPECIFICO--------------------------------------------------------------*/

function mostrarVehiculoCampoEspecifico(data, llave,titulo) {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = `
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton vehiculos.png" alt="Vehiculos" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">${titulo}:<br>${data[llave]}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Tripulacion:<br>${data.passengers}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}

/*MOSTRAR VEHICULOS CAMPO ESPECIFICO--------------------------------------------------------------*/

function mostrarPlanetaCampoEspecifico(data, llave,titulo) {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = ` 
        <div class="busqueda-imagen">
            <img src="./imagenes/menu/boton planetas.png" alt="Planetas" class="Logos" />
        </div>
        <div class="tarjeta-info">
            <div class="nombre-contenedor">
                <p class="busqueda-nombre">${data.name}</p>
            </div>
            <div class="contenedor-primer-dato">
                <p class="primer-dato">${titulo}:<br>${data[llave]}</p>
            </div>
            <div class="contenedor-segundo-dato">
                <p class="segundo-dato">Población:<br>${data.population}</p>
            </div>
        </div>
    `;
    listabusqueda.append(div);
}




// People 88 --name /--gender /--height 
// Planets 61 --name/--diameter &--climate /--population 
// Species 37 --name/--language  /--designation &--classification 
// Films 7  --opening_crawl//--title/--producer &--director/--release_date
// Vehicles 39 --name/ --crew &--passengers  /--vehicle_class 
// Starships 77 --name/--manufacturer &--model /--length 
// 

// -------------- Cambio seccion Izquierda


function cambioPersonajes(){
    const div = document.createElement("div");
    div.classList.add("busqueda-titulo");
    div.innerHTML = `
        <h3>PERSONAJES</h3>
    `;
    const div1 = document.createElement("div");
    div1.classList.add("descripcion-imagen");
    div1.innerHTML = `
        <img src="./imagenes/carrusel/2.png" alt="Personajes"/>
    `;
    const div2 = document.createElement("div");
    div2.classList.add("busqueda-descripcion");
    div2.innerHTML = `
        <p class="descripcion-de-busqueda">
        Dentro de la franquicia de medios Star Wars, existe una gran cantidad de personajes, en este anexo se listan y describen tanto a los personajes principales como a otros menores parte del canon oficial de Star Wars, a partir de los cambios realizados por Lucasfilm en abril de 2014. Luego de su adquisición por parte de The Walt Disney Company en 2012, Lucasfilm cambió el nombre de la mayoría de las novelas, cómics, videojuegos y otros trabajos producidos desde la película original de 1977 Star Wars como Star Wars Legends y los declaró no canónicos para el resto de la franquicia.<br>

        Algunos de estos personajes solo pertenecen a la continuidad alternativa "Leyendas", material previo al reinicio del canon en 2014, por tanto no forman parte de la historia oficial de la saga.
        </p>
    `;
    descripcion.append(div,div1,div2);
}
function cambioPelicula(){
    const div = document.createElement("div");
    div.classList.add("busqueda-titulo");
    div.innerHTML = `
        <h3>PELICULAS</h3>
    `;
    const div1 = document.createElement("div");
    div1.classList.add("descripcion-imagen");
    div1.innerHTML = `
        <img src="./imagenes/carrusel/4.png" alt="Peliculas"/>
    `;
    const div2 = document.createElement("div");
    div2.classList.add("busqueda-descripcion");
    div2.innerHTML = `
        <p class="descripcion-de-busqueda">
        Star Wars, conocida también en español como La guerra de las galaxias, es una franquicia y universo compartido de fantasía compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas inicialmente por 20th Century Fox y posteriormente por The Walt Disney Company a partir de 2012.<br>
        Su trama describe las vivencias de un grupo de personajes que habitan en una galaxia ficticia e interactúan con elementos como «la Fuerza», un campo de energía metafísico y omnipresente que posee un «lado luminoso» impulsado por la sabiduría, la nobleza y la justicia y utilizado por los Jedi, y un «lado oscuro» usado por los Sith y provocado por la ira, el miedo, el odio y la desesperación.
        </p>
    `;
    descripcion.append(div,div1,div2);
}
function cambioEspecie(){
    const div = document.createElement("div");
    div.classList.add("busqueda-titulo");
    div.innerHTML = `
        <h3>ESPECIES</h3>
    `;
    const div1 = document.createElement("div");
    div1.classList.add("descripcion-imagen");
    div1.innerHTML = `
        <img src="./imagenes/carrusel/8.png" alt="Peliculas"/>
    `;
    const div2 = document.createElement("div");
    div2.classList.add("busqueda-descripcion");
    div2.innerHTML = `
        <p class="descripcion-de-busqueda">
        Las formas predominantes de vida inteligente en la galaxia eran formas de vida basadas en el carbono. Pero también existieron otras formas de vida, basadas en el silicio o en energía. Informes de zonas remotas de la galaxia hasta han dicho que nubes gigantes de gas interestelar habían evolucionado a una forma de inteligencia basada en campos de fuerza internos.<br> La mayoría de las especies respiraban oxígeno, aunque muchas respiraban otras sustancias como amonio, cianógeno, metano, helio y gas de Dorin.
        </p>
    `;
    descripcion.append(div,div1,div2);
}
function cambioNaves(){
    const div = document.createElement("div");
    div.classList.add("busqueda-titulo");
    div.innerHTML = `
        <h3>NAVES</h3>
    `;
    const div1 = document.createElement("div");
    div1.classList.add("descripcion-imagen");
    div1.innerHTML = `
        <img src="./imagenes/carrusel/7.png" alt="Peliculas"/>
    `;
    const div2 = document.createElement("div");
    div2.classList.add("busqueda-descripcion");
    div2.innerHTML = `
        <p class="descripcion-de-busqueda">
        Teniendo en cuenta que la franquicia de Lucasfilm se llama literalmente La Guerra de las Galaxias, es bastante obvio que uno de los aspectos más destacados de la producción sean sus naves espaciales interplanetarias. Al fin y al cabo, el ser humano siempre ha soñado con conquistar el espacio. 
        </p>
    `;
    descripcion.append(div,div1,div2);
}
function cambioVehiculo(){
    const div = document.createElement("div");
    div.classList.add("busqueda-titulo");
    div.innerHTML = `
        <h3>VEHICULOS</h3>
    `;
    const div1 = document.createElement("div");
    div1.classList.add("descripcion-imagen");
    div1.innerHTML = `
        <img src="./imagenes/carrusel/9.png" alt="Peliculas"/>
    `;
    const div2 = document.createElement("div");
    div2.classList.add("busqueda-descripcion");
    div2.innerHTML = `
        <p class="descripcion-de-busqueda">
        En Star Wars existen inumerables vehículos y formas de propulsión. La mayoría de estos suelen tener un sistema de "repulsión" que los hace literalmente flotar sobre el suelo. Además, también hay una gran variedad de vehículos tanto aéreos como espaciales. Otros vehículos son sencillamente tanques zoomorfos que caminan como animales sobre los suelos de los más inhóspitos planetas.
        </p>
    `;
    descripcion.append(div,div1,div2);
}
function cambioPlanetas(){
    const div = document.createElement("div");
    div.classList.add("busqueda-titulo");
    div.innerHTML = `
        <h3>PLANETAS</h3>
    `;
    const div1 = document.createElement("div");
    div1.classList.add("descripcion-imagen");
    div1.innerHTML = `
        <img src="./imagenes/carrusel/1.png" alt="Peliculas"/>
    `;
    const div2 = document.createElement("div");
    div2.classList.add("busqueda-descripcion");
    div2.innerHTML = `
        <p class="descripcion-de-busqueda">
        El universo ficticio de la franquicia Star Wars presenta múltiples planetas y lunas. Si bien solo los largometrajes y otras obras seleccionadas se consideran canon de la franquicia desde la adquisición de Lucasfilm por parte de The Walt Disney Company en 2012, algunos planetas canónicos fueron nombrados o explorados por primera vez en obras del universo expandido no canónico de Star Wars, ahora rebautizado como Star Wars Legends.<br>

        En las películas teatrales de Star Wars, muchas escenas ambientadas en estos planetas y lunas se filmaron en locaciones en lugar de en un escenario de sonido.
        </p>
    `;
    descripcion.append(div,div1,div2);
}







/*------------------------------------------------------------------------------------*/

// Añadir eventos a los botones
botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    function limpiarPantalla() {
        console.log('Limpiando listabusqueda y descripcion');
        listabusqueda.innerHTML = "";
        descripcion.innerHTML = "";
    }

    // Limpiar pantalla antes de realizar las acciones
    limpiarPantalla();

    switch (botonId) {
        case "ver-todo-pelicula":
            films();
            cambioPelicula();
            break;
        case "director":
            filmsDirector();
            cambioPelicula();
            break;
        case "george":
            filmsCampoEspecifico("director", "George Lucas", "Director");
            cambioPelicula();
            break;
        case "irvin":
            filmsCampoEspecifico("director", "Irvin Kershner", "Director");
            cambioPelicula();
            break;
        case "richard":
            filmsCampoEspecifico("director", "Richard Marquand", "Director");
            cambioPelicula();
            break;
        case "Abrams":
            filmsCampoEspecifico("director", "J. J. Abrams", "Director");
            cambioPelicula();
            break;
        case "producer":
            filmsProductor();
            cambioPelicula();
            break;
        case "gary":
            filmsCampoEspecifico("producer", "Gary Kurtz, Rick McCallum", "Productor");
            cambioPelicula();
            break;
        case "howard":
            filmsCampoEspecifico("producer", "Howard G. Kazanjian, George Lucas, Rick McCallum", "Productor");
            cambioPelicula();
            break;
        case "rick":
            filmsCampoEspecifico("producer", "Rick McCallum", "Productor");
            cambioPelicula();
            break;
        case "kathleen":
            filmsCampoEspecifico("producer", "Kathleen Kennedy, J. J. Abrams, Bryan Burk", "Productor");
            cambioPelicula();
            break;
        case "release_date":
            films();
            cambioPelicula();
            break;
        case "70":
            filmsDecadaEspecifico(70, 'director', 'Director');
            cambioPelicula();
            break;
        case "80":
            filmsDecadaEspecifico(80, 'director', 'Director');
            cambioPelicula();
            break;
        case "90":
            filmsDecadaEspecifico(90, 'director', 'Director');
            cambioPelicula();
            break;
        case "2000":
            filmsDecadaEspecifico(2000, 'director', 'Director');
            cambioPelicula();
            break;
        case "ver-todo-personaje":
            people();
            cambioPersonajes();
            break;
        case "cabello":
            people();
            cambioPersonajes();
            break;
        case "rubio":
            PeopleCampoEspecifico("hair_color", "blond", "Color de Cabello");
            cambioPersonajes();
            break;
        case "Blanco":
            PeopleCampoEspecifico("hair_color", "white", "Color de Cabello");
            cambioPersonajes();
            break;
        case "Negro":
            PeopleCampoEspecifico("hair_color", "black", "Color de Cabello");
            cambioPersonajes();
            break;
        case "Gris":
            PeopleCampoEspecifico("hair_color", "grey", "Color de Cabello");
            cambioPersonajes();
            break;
        case "Genero":
            people();
            cambioPersonajes();
            break;
        case "genderM":
            peopleMujer();
            cambioPersonajes();
            break;
        case "genderH":
            peopleHombre();
            cambioPersonajes();
            break;
        case "Indefinido":
            PeopleCampoEspecifico("gender", "n/a", "Genero");
            cambioPersonajes();
            break;
        case "Ojos":
            people();
            cambioPersonajes();
            break;
        case "Amarillo":
            PeopleCampoEspecifico("eye_color", "yellow", "Color de Ojos");
            cambioPersonajes();
            break;
        case "Azul":
            PeopleCampoEspecifico("eye_color", "blue", "Color de Ojos");
            cambioPersonajes();
            break;
        case "Rojo":
            PeopleCampoEspecifico("eye_color", "red", "Color de Ojos");
            cambioPersonajes();
            break;
        case "Cafes":
            PeopleCampoEspecifico("eye_color", "brown", "Color de Ojos");
            cambioPersonajes();
            break;
        case "ver-todo-especie":
            species();
            cambioEspecie();
            break;
        case "classification":
            speciesClasificacion();
            cambioEspecie();
            break;
        case "Mamifero":
            especieCampoEspecifico("classification", "mammal", "CLASIFICACION");
            cambioEspecie();
            break;
        case "Artificial":
            especieCampoEspecifico("classification", "artificial", "CLASIFICACION");
            cambioEspecie();
            break;
        case "Reptil":
            especieCampoEspecifico("classification", "reptile", "CLASIFICACION");
            cambioEspecie();
            break;
        case "Anfibio":
            especieCampoEspecifico("classification", "amphibian", "CLASIFICACION");
            cambioEspecie();
            break;
        case "designation":
            speciesDesignacion();
            cambioEspecie();
            break;
        case "Reptiliano":
            especieCampoEspecifico("designation", "reptilian", "DESIGNACION");
            cambioEspecie();
            break;
        case "Sintiente":
            especieCampoEspecifico("designation", "Sentient", "DESIGNACION");
            cambioEspecie();
            break;
        case "ver-todo-nave":
            starships();
            cambioNaves();
            break;
        case "model":
            starshipsModelo();
            cambioNaves();
            break;
        case "CR90":
            navesCampoEspecifico("model", "CR90 corvette", "MODELO");
            cambioNaves();
            break;
        case "Imperial":
            navesCampoEspecifico("model", "Imperial I-class Star Destroyer", "MODELO");
            cambioNaves();
            break;
        case "Sentinel":
            navesCampoEspecifico("model", "Sentinel-class landing craft", "MODELO");
            cambioNaves();
            break;
        case "T-65":
            // Implementa la lógica específica para el modelo T-65
            cambioNaves();
            break;
        case "manufacturer":
            starshipsFabricante();
            cambioNaves();
            break;
        case "Sienar":
            navesCampoEspecifico("manufacturer", "Sienar Fleet Systems", "FABRICANTE");
            cambioNaves();
            break;
        case "Incom":
            navesCampoEspecifico("manufacturer", "Incom Corporation", "FABRICANTE");
            cambioNaves();
            break;
        case "Koensayr":
            navesCampoEspecifico("manufacturer", "Koensayr Manufacturing", "FABRICANTE");
            cambioNaves();
            break;
        case "Kuat":
            navesCampoEspecifico("manufacturer", "Kuat Drive Yards", "FABRICANTE");
            cambioNaves();
            break;
        case "ver-todo-vehiculos":
            vehicles();
            cambioVehiculo();
            break;
        case "passengers":
            vehiclesPasajeros();
            cambioVehiculo();
            break;
        case "crew":
            vehiclesTripulantes();
            cambioVehiculo();
            break;
        case "Caminante":
            vehiculoCampoEspecifico("vehicle_class", "walker", "CLASE");
            cambioVehiculo();
            break;
        case "Aerodeslizador":
            vehiculoCampoEspecifico("vehicle_class", "airspeeder", "CLASE");
            cambioVehiculo();
            break;
        case "Submarina":
            vehiculoCampoEspecifico("vehicle_class", "submarinem", "CLASE");
            cambioVehiculo();
            break;
        case "Propulcion":
            vehiculoCampoEspecifico("vehicle_class", "repulsorcraftm", "CLASE");
            cambioVehiculo();
            break;
        case "Digger":
            vehiculoCampoEspecifico("model", "Digger Crawler", "CLASE");
            cambioVehiculo();
            break;
        case "t-47":
            vehiculoCampoEspecifico("model", "t-47 airspeeder", "MODELO");
            cambioVehiculo();
            break;
        case "Storm":
            vehiculoCampoEspecifico("model", "Storm IV Twin-Pod", "MODELO");
            cambioVehiculo();
            break;
        case "Modified":
            vehiculoCampoEspecifico("model", "Modified Luxury Sail Barge", "MODELO");
            cambioVehiculo();
            break;
        case "ver-todo-planetas":
            planets();
            cambioPlanetas();
            break;
        case "climate":
            planetsClima();
            cambioPlanetas();
            break;
        case "Arido":
            planetaCampoEspecifico("climate", "arid", "MODELO");
            cambioPlanetas();
            break;
        case "Congelado":
            planetaCampoEspecifico("climate", "frozen", "MODELO");
            cambioPlanetas();
            break;
        case "Caliente":
            planetaCampoEspecifico("climate", "hot", "MODELO");
            cambioPlanetas();
            break;
        case "Templado":
            planetaCampoEspecifico("climate", "temperate", "MODELO");
            cambioPlanetas();
            break;
        case "Bosques":
            planetaCampoEspecifico("climate", "forests, mountains, lakes", "MODELO");
            cambioPlanetas();
            break;
        case "Gigante":
            planetaCampoEspecifico("climate", "gas giant", "MODELO");
            cambioPlanetas();
            break;
        case "Desierto":
            planetaCampoEspecifico("climate", "desert", "MODELO");
            cambioPlanetas();
            break;
        case "Tundra":
            planetaCampoEspecifico("climate", "tundra, ice caves, mountain ranges", "MODELO");
            cambioPlanetas();
            break;
        case "diameter":
            planetsDiametro();
            cambioPlanetas();
            break;
    }
}));
