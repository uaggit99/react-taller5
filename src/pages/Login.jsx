import { useState} from "react";
import { useNavigate } from "react-router-dom";
import sesion from "../assets/logo.png"


export function Login() {
  const datos = [
    { username: "admin", password: "123456" },
    { username: "user", password: "789012" },
  ];
  const inicioSesion = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // enviar y validar datos
  const validandoDatos = (e) => {
    e.preventDefault();
    // evalua datos
    if (username === "" || password === "") {
      setError(true);
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }

    // busca usuario en la base de datos
    const user = datos.find(
      (u) => u.username === username && u.password === password
    );
    // si el usuario existe, lo establece como usuario activo
    if (user) {
      setError(false);
      //setUser(username)
      inicioSesion("/lista");
    }
    // si el usuario no existe, muestra mensaje de error
    else {
      setError(true);
      setErrorMessage("Nombre de usuario o contraseña incorrectos");
    }
    // limpia los campos
    setUsername("");
    setPassword("");
  };
  
  const etiqueta = "text-blue-700 py-3 px-2 w-[70px] font-semibold";
  const entrada =
    " bg-cian-400 text-gray-600  py-2 px-4 border border-gray-400 rounded-md m-3";
    const boton =
    "px-6 py-2 bg-blue-700 text-white rounded-2xl hover:bg-orange-400 transition mx-3 my-3 cursor-pointer";

  return (
    <>
      <div className="bg-blue-100   rounded-3xl w-1/3  mx-auto  my-5 p-5 ">
        <h1 className="text-center m-5 text-3xl text-blue-800 font-semibold" t>Iniciar Sesión</h1>
        <img src={sesion} alt=""  className="w-[200px] mx-auto  rounded-full"/>
        <form action="GET" onSubmit={validandoDatos} className="flex  flex-col items-center mb-1/3   h-auto  p-5">
            <div className="m-5"> 
          <label className={etiqueta} >Usuario</label>
          <input
          className={entrada}
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            name="username"
          />
          </div>
          <div className="m-3">
          <label className={etiqueta} >Password</label>
          <input
          className={entrada}
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
          />
          </div>
          <button type="submit" className={boton}>Iniciar Sesión</button>
        </form>
      </div>
     <div className="m-5 text-red-500 text-center" > 
      {error && <p> {errorMessage} </p>}
      </div>
    </>
  );
}
