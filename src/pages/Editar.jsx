import { FormEditUser } from "../comnponents/FormEditUser";
import { useParams } from "react-router-dom";



export function Editar(){
    const {id} =useParams();
     
    return(
        <>
        <main>
            <FormEditUser id={id}/>
        </main>
        
        </>
    )

}