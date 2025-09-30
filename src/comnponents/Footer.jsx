import { useState } from "react";

export function Footer() {

  const [year] = useState(new Date().getFullYear());

  return (
    <>
      <footer className="bg-blue-300 text-blue-700 text-center py-4 mt-auto w-full border rounded-2xl">
        <p>
          Copyrigth © {year} Uberney Acero Gomez. Todos los derechos reservados.
        </p>
        <p>Colsubsidio - Universidad de los Andes - React</p>
      </footer>
    </>
  );
}
