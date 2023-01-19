import SideBar from "./SideBar";
import { Link } from 'react-router-dom';
import "./Stats.css";
import { url } from './url.js';
import React, { useState, useEffect } from "react";
function GestionElement() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(url + 'elements')
            .then((response) => response.json())
            .then((data) => setCategories(data))
    }, []);
    return (
        <div className="Categories">
            <SideBar />
            <h1>Gestion des Elements</h1>
            <table class="TableGeneral">
                <tr>
                    <th>Id</th>
                    <th>Categories</th>
                    <th>Dureé Enchere</th>
                    <th>Pourcentage Commission</th>
                </tr>
                {
                    categories.map((categ) => {
                        let link = "/DetailTypeProduit?id="+categ.id
                        return (
                            <tr>
                                <td>{categ.id}</td>
                                <td>{categ.nom}</td>
                                <td>{categ.dureenchere} h</td>
                                <td>{categ.pourcentage}%</td>
                                <td><Link to={link}>Voir plus</Link></td>
                            </tr>
                        )
                    }
                    )
                }
            </table>
        </div>
    );
}

export default GestionElement