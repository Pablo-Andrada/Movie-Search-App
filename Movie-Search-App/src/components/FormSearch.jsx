import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {

    const [title, setTitle] = useState("");
    const { setQuery, error } = useContext(DataContext);

   // const { data } = useFetch("&s=titanic");
    
    const handleSubmit = e => {
        e.preventDefault();
        setQuery(title);
        //console.log("title :", title);
        
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