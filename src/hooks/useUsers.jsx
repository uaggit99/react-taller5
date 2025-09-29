import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export const useUsers=()=>{
    const context = useContext(UserContext);
    if(!context){
        throw new Error("Usecontext debe usarse dentro de use Porvider")
    }
    return context;
}