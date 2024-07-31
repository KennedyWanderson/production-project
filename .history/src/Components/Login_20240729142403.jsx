import axios from "axios";


export default function Login() {

    const [username, setUsername] = use('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            // Armazenar o token no local storage ou em um estado global
            console.log(response.data);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    )
}