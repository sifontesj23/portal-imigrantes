import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function CadastrarCurriculo() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    area: "",
    experiencia: "",
    pdf: null, // pode manter, mas não será usado
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMensagem("Enviando...");
  console.log("Iniciando envio...");

  try {
    const dataToSave = {
      nome: form.nome || "",
      email: form.email || "",
      area: form.area || "",
      experiencia: form.experiencia || "",
      criadoEm: new Date(),
    };

    console.log("Dados a salvar:", dataToSave);
    console.log("Dados a salvar:", JSON.stringify(dataToSave));

    await addDoc(collection(db, "curriculos"), dataToSave);

    console.log("Documento salvo com sucesso.");

    setMensagem("Currículo enviado com sucesso!");
    setForm({
      nome: "",
      email: "",
      area: "",
      experiencia: "",
      pdf: null,
    });
  } catch (error) {
    console.error("Erro ao enviar currículo:", error);
    setMensagem("Erro ao enviar currículo. Tente novamente.");
  }
};


  return (
    <div>
      <h2>Cadastrar Currículo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={form.nome}
          onChange={handleChange}
          required
        /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        /><br />

        <input
          type="text"
          name="area"
          placeholder="Área de interesse"
          value={form.area}
          onChange={handleChange}
          required
        /><br />

        <textarea
          name="experiencia"
          placeholder="Experiência profissional"
          value={form.experiencia}
          onChange={handleChange}
          required
          rows={4}
        /><br />

        {/* O campo de PDF pode continuar aparecendo, opcional */}
        <label>
          Currículo em PDF (opcional):
          <input
            type="file"
            name="pdf"
            accept="application/pdf"
            disabled // desabilita para evitar confusão
          />
        </label><br /><br />

        <button type="submit">Enviar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
