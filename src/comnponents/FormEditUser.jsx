import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

export function FormEditUser({ id }) {
  const navigate = useNavigate();
  const { users, setUsers } = useUsers();
  

  const user = users.find((usuario) => usuario.id === id);

  const [nombre, setNombre] = useState(user?.nombre);
  const [correo, setCorreo] = useState(user?.correo);
  const [ciudad, setCiudad] = useState(user?.ciudad);

  if (!user) {
    navigate("/lista");
   
  }

  const limpiar = () => {
    setNombre("");
    setCorreo("");
    setCiudad("");
  };
  const crearUsuario = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !ciudad) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevoUsuario = {
      id: Date.now().valueOf,
      nombre: nombre,
      correo: correo,
      ciudad: ciudad,
    };
    setUsers([...users, nuevoUsuario]);
    limpiar();
    navigate("/lista");
  };
  const editarUsuario = (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      id: id,
      nombre: nombre,
      correo: correo,
      ciudad: ciudad,
    };
    const filterUsuario = users.filter((usuario) => usuario.id !== id);

    setUsers([...filterUsuario, nuevoUsuario]);
    limpiar();
    navigate("/lista");
  };

  const etiqueta = "text-blue-700 py-3 px-2 w-[70px]";
  const entrada =
    " bg-blue-100 text-gray-600  py-2 px-4 border border-gray-200 rounded-md m-3";
  const boton =
    "px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition mx-3 my-3 cursor-pointer";

  return (
    <>
      <main>
        <div className=" flex  flex-col items-center  justify-center h-auto  p-5">
          <h2 className="text-blue-800 font-bold font-mono text-3xl  text-center m-4">
            FORMULARIO USUARIO
          </h2>
          <form
            action="GET"
            className="bg-blue-100 p-6 rounded shadow-sky-600 shadow-lg w-full max-w-md"
          >
            <label className={etiqueta} htmlFor="nombre">
              Nombre{" "}
            </label>
            <input
              className={entrada}
              type="text"
              id="nombre"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
            <b></b>
            <br></br>
            <label className={etiqueta} htmlFor="correo">
              Email{" "}
            </label>
            <input
              className={entrada}
              type="email"
              id="correo"
              placeholder="Ingrese su Email"
              value={correo}
              onChange={(event) => setCorreo(event.target.value)}
            />
            <b></b>
            <br></br>
            <label className={etiqueta} htmlFor="ciudad">
              Ciudad{" "}
            </label>
            <input
              className={entrada}
              type="text"
              id="ciudad"
              placeholder="Ingrese ciudad"
              value={ciudad}
              onChange={(event) => setCiudad(event.target.value)}
            />
            <b></b>
            <br></br>
            <button onClick={crearUsuario} className={boton}>
              Crear
            </button>
            <button onClick={editarUsuario} className={boton}>
              Guardar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
