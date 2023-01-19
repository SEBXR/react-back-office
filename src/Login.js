import {url} from './url.js'; 
import "./Login.css";
function login(event) {
    event.preventDefault();
    let form = new FormData(document.getElementById("log"))
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            let response = this.responseText;
            if(response != 0){
                window.location.href="/stats"
            }else{
                alert('Erreur de Mot de passe ou email')
            }
        }
    };
    xhr.open("POST", url+"login", true);
    xhr.send(form);
    
}

function Login() {

    return (
        <div className="Login">
            <form onSubmit={login} id="log">
                <div className="h11">
                    <h1>Login</h1>
                </div>                
                <p>Email : <input type="text" name="email" value="jean@gmail.com" /></p>
                <p>Password : <input type="password" name="password" value="123456" /></p>
                <input type="submit" value="Se connecter" />
            </form>
        </div>
    );
}

export default Login;