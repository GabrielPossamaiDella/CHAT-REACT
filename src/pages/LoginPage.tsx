import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (username.trim()) {
      navigate(`/chat/${username}`);
    } else {
      alert('Por favor, digite seu nome para entrar.');
    }
  };

  return (
    <div className="page-container">
      <h1>Trabalho Chat React</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite seu nome..."
          className="login-input"
        />
        <button type="submit" className="login-button">
          Entrar no Chat
        </button>
      </form>
    </div>
  );
}

export default LoginPage;