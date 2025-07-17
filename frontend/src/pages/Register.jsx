import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErro("");

    if (senha !== confirmaSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigate("/"); // Redireciona para home após cadastro
    } catch (error) {
      setErro("Falha no cadastro: " + error.message);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label><br />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <div>
          <label>Confirme a senha:</label><br />
          <input
            type="password"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
            required
            minLength={6}
          />
        </div>
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
