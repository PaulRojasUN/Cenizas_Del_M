import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "/src/css/login.css";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const onHandleGoogle = async (e) => {
        e.preventDefault();
        const result = await auth.loginWithGoogle();
        
        if (result.success) {
            navigate("/profile-user");
        } else {
            console.log(result.error);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onHandleGoogle}>
                <div>
                  <span>Inicia con tu cuenta de Google</span>
                </div>
                
                <button >
                    Iniciar sesión
                </button>
            </form>
        </div>
    )
}

export default Login;