import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const FormSearch = () => {

    const [title, setTitle] = useState("");

    const { data } = useFetch("&s=batman");
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("title :", title);
        
    }

    return ( 
        <div className="form-search">
            <h2>Old Movies Finder</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Titulo de la pelicula" onChange={e=>setTitle(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
        </div>
     );
}
 
export default FormSearch;