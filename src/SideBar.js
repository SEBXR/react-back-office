import "./SideBar.css";
import { Link } from 'react-router-dom';
function SideBar(){
    return(
        <div className="">
            <div id="sidebar">
                <h2>HOME</h2>
                <ul>
                    <button id="mon-bouton"><Link to="https://react-back-office-production.up.railway.app/stats">Statistiques</Link></button>
                    <button id="mon-bouton"><Link to="https://react-back-office-production.up.railway.app/validation">Validation</Link></button>
                    <button id="mon-bouton"><Link to="https://react-back-office-production.up.railway.app/GestionElement">Gestion des Elements</Link></button>
                    <button id="deconnexion"><Link to="https://react-back-office-production.up.railway.app/">Se déconnecter</Link></button>
                </ul>
            </div>
        </div>
    );
}

export default SideBar