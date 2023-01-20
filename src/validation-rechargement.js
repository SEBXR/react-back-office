import { url } from './url.js';
import "./Stats.css";
import React, { useState, useEffect } from 'react';


import SideBar from "./SideBar";
function valider(idClient , budget , demande) {
    let xhr = new XMLHttpRequest()
    let form = new FormData()
    form.append("idClient" , idClient)
    form.append("budget" , budget)
    form.append("demande" , demande)
    xhr.onreadystatechange = function () {
        console.log(this.status)
        if(this.readyState === 4 && this.status === 200){
            let response = this.responseText;
            if(response != 0){
                alert("Demande accepté !")
                window.location.reload()
            }else{
                alert("Une erreur inattendue s'est produite !")
            }
        }
    };
    xhr.open("POST", url+"updatebudget", true);
    xhr.send(form);
}

function Validation() {
    const [listeDemandes, setlisteDemandes] = useState([])
    useEffect(() => {
        fetch(url + 'listedemande')
            .then((response) => response.json())
            .then((data) => setlisteDemandes(data))
    }, []);
    return (
        <div className="Validation">
            <SideBar />
            <h1>Liste des rechargements de compte</h1>
            <div class="tabG">
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Nom Client</th>
                        <th>Budget</th>
                        <th>Demande</th>
                        <th>Action</th>
                    </tr>
                    {listeDemandes.map((demande) => (
                        <tr>
                            <td data-idClient={demande.idClient}>{demande.idClient}</td>
                            <td>{demande.nom}</td>
                            <td>{demande.budget}</td>
                            <td>{demande.demande}</td>
                            <td><button onClick={() => valider(demande.idClient , demande.budget , demande.demande)}>Valider</button></td>
                        </tr>
                    )

                    )}

                    <tr>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Validation