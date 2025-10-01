import { FormEditUser } from "../comnponents/FormEditUser";
import { useParams } from "react-router-dom";
import { Navbar } from "../comnponents/Navbar";


export function Editar() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <main>
        <FormEditUser id={id} />
      </main>
      

    </>
  );
}
