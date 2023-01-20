import "./Stats.css";
import { Link } from 'react-router-dom';
import {url} from './url.js'; 
import SideBar from "./SideBar";
import React ,{useState,useEffect} from "react";

function DetailTypeProduit() {
    const link = new URL(window.location.href)
    let id = link.searchParams.get("id")
    const[typeProduits,setTypeProduits] = useState([])
    useEffect(() =>{
        fetch(url+'typeCategories/'+id)
        .then((response) =>response.json())
        .then((data) => setTypeProduits(data))
    },[]);
    return(
        <div className="">
            <SideBar />
            <h1>Les types de produits de cette catégorie</h1>
            <div  className = "tabila">
                <table>
                    <tr>
                        <th>Type produit</th>
                    </tr>
                    {typeProduits.map((type) => (
                    <tr>
                        <td> {type.nom} </td>
                    </tr>))}
                </table>
                <Link to="https://react-back-office-production.up.railway.app/GestionElement">Retour</Link>
            </div>
        </div>
    );
}

export default DetailTypeProduit