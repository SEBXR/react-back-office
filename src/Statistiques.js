import "./Stats.css";
import { url } from './url.js';
import React, { useState, useEffect } from 'react';
import SideBar from "./SideBar";


function Stats() {
    const [plusVendus, setPlusVendus] = useState([])
    useEffect(() => {
        fetch(url + 'plusvendu')
            .then((response) => response.json())
            .then((data) => setPlusVendus(data))
    }, []);
    const [plusArgent, setPlusArgent] = useState([])
    useEffect(() => {
        fetch(url + 'argentgenere')
            .then((response) => response.json())
            .then((data) => setPlusArgent(data))
    }, []);
    return (
        <div className="Stats">
            <SideBar />
            <h1>Les  statistiques  générales  du  site</h1>
            <div class="tab1">
                <p>Catégories ayant le plus de ventes</p>
                <table>
                    <tr>
                        <th>Categories</th>
                        <th>Nombre de ventes</th>
                    </tr>
                    {plusVendus.map((categ) => (
                        <tr>
                            <td>{categ.nom}</td>
                            <td>{categ.nbr_ventes}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div class="tab2">
                <p>Catégories ayant générer le plus d'argent</p>
                <table className="t2">
                    <tr>
                        <th>Categories</th>
                        <th>Montant en ar</th>
                    </tr>
                    {plusArgent.map((categ) => (
                        <tr>
                            <td>{categ.nom}</td>
                            <td>{categ.argent_genere}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Stats