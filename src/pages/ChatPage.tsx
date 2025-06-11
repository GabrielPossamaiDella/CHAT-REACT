import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  sender: string;
  isCurrentUser: boolean;
}

function ChatPage() {
  const { username } = useParams<{ username: string }>();

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: `Bem-vindo, ${username}!`, sender: 'Sistema', isCurrentUser: false },
  ]);

  const [newMessage, setNewMessage] = useState('');


  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && username) {
      const message: Message = {
        id: Date.now(), 
        text: newMessage,
        sender: username,
        isCurrentUser: true,
      };
      
      setMessages([...messages, message]);
      setNewMessage(''); 
    }
  };

  return (
    <div className="page-container chat-container">
      <div className="chat-header">
        <h2>Bem-vindo, {username}!</h2>
        <Link to="/" className="back-button">Sair</Link>
      </div>

      <div className="message-list">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`message-bubble ${msg.isCurrentUser ? 'current-user' : 'other-user'}`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="message-input"
        />
        <button type="submit" className="send-button">Enviar</button>
      </form>
    </div>
  );
}

export default ChatPage;