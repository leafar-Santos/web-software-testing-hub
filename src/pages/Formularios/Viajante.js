import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { useFetch } from '../../hooks/useFetch';
import './Viajante.css';

const url = "http://localhost:8080/viajante";

const Viajante = () => {
  const [viajante, setViajante] = useState([]);
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // Preparando os dados
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destiny, setDestiny] = useState("");
  const [reasonTravel, setReasonTravel] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [observation, setObservation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\(\d{2}\) \d{4,5}-\d{4}$/; // Formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
    return re.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação
    if (!validateEmail(email)) {
      setErrorMessage("Email inválido.");
      return;
    }
    
    if (!validatePhone(phone)) {
      setErrorMessage("Telefone inválido. Use o formato (XX) XXXXX-XXXX.");
      return;
    }

    if (name.length < 3 || name.length > 50) {
      setErrorMessage("O nome deve ter entre 3 e 50 caracteres.");
      return;
    }

    const viajante = {
      name,
      email,
      phone,
      destiny,
      reasonTravel,
      travelDate,
      peopleNumber,
      observation,
    };

    // Envia os dados
    httpConfig(viajante, "POST");

    // Limpar os campos
    setName("");
    setEmail("");
    setPhone("");
    setDestiny("");
    setTravelDate("");
    setReasonTravel("");
    setPeopleNumber("");
    setObservation("");
    setErrorMessage("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-viajante">
      
      <div className="form-container-viajante">
        <h2>Cadastro de Viajante</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <span>Nome completo</span>
            <input
              type="text"
              value={name}
              id="nome"
              name="nome"
              required
              onChange={(e) => setName(e.target.value)}
            />

            <span>Email</span>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span>Telefone</span>
            <InputMask
              mask="(99) 99999-9999"
              id="telefone"
              name="telefone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <span>Destino de Viagem</span>
            <input
              type="text"
              id="destino"
              name="destino"
              required
              value={destiny}
              onChange={(e) => setDestiny(e.target.value)}
            />

            <span>Motivo da Viagem</span>
            <select
              id="motivo"
              name="motivo"
              required
              value={reasonTravel}
              onChange={(e) => setReasonTravel(e.target.value)}
            >
              <option value="" disabled>Selecione o motivo</option>
              <option value="PASSEIO">Passeio</option>
              <option value="TRABALHO">Trabalho</option>
              <option value="NEGOCIOS">Negócios</option>
              <option value="ESTUDO">Estudo</option>
            </select>

            <span>Data da Viagem</span>
            <input
              type="date"
              id="dataViagem"
              name="dataViagem"
              required
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            />

            <span>Número de Pessoas</span>
            <input
              type="number"
              id="numPessoas"
              name="numPessoas"
              min="1"
              required
              value={peopleNumber}
              onChange={(e) => setPeopleNumber(e.target.value)}
            />

            <span>Observações</span>
            <textarea
              id="observacoes"
              name="observacoes"
              rows="4"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
            />

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {loading ? (
              <button type='submit' disabled>
                Aguarde
              </button>
            ) : (
              <button type='submit'>Cadastrar</button>
            )}
          </div>
        </form>
      </div>
      
  <div className="test-scenarios">
    <h2>Cenários de Testes</h2>

    <div className="scenario">
        <h3>Cenário 1: Cadastro de Viajante com sucesso</h3>
        <div className="step">
            <strong>Given</strong> o usuário está na tela de cadastro de viajante
        </div>
        <div className="step">
            <strong>When</strong> o usuário preenche todos os campos obrigatórios corretamente
        </div>
        <div className="step">
            <strong>Then</strong> o cadastro é realizado com sucesso e o usuário é notificado
        </div>
    </div>

    <div className="scenario">
        <h3>Cenário 2: Falha ao cadastrar viajante</h3>
        <div className="step">
            <strong>Given</strong> o usuário está na tela de cadastro de viajante
        </div>
        <div className="step">
            <strong>When</strong> o usuário deixa de preencher um campo obrigatório
        </div>
        <div className="step">
            <strong>Then</strong> uma mensagem de erro é exibida
        </div>
    </div>

    <div className="scenario">
        <h3>Cenário 3: Cadastro com e-mail inválido</h3>
        <div className="step">
            <strong>Given</strong> o usuário está na tela de cadastro de viajante
        </div>
        <div className="step">
            <strong>When</strong> o usuário preenche um e-mail com formato inválido
        </div>
        <div className="step">
            <strong>Then</strong> uma mensagem de erro é exibida informando que o e-mail é inválido
        </div>
    </div>

    <div className="scenario">
        <h3>Cenário 4: Cadastro com telefone inválido</h3>
        <div className="step">
            <strong>Given</strong> o usuário está na tela de cadastro de viajante
        </div>
        <div className="step">
            <strong>When</strong> o usuário preenche um telefone com formato inválido
        </div>
        <div className="step">
            <strong>Then</strong> uma mensagem de erro é exibida informando que o telefone é inválido
        </div>
    </div>

    <div className="scenario">
        <h3>Cenário 5: Cadastro sem selecionar o motivo da viagem</h3>
        <div className="step">
            <strong>Given</strong> o usuário está na tela de cadastro de viajante
        </div>
        <div className="step">
            <strong>When</strong> o usuário não seleciona um motivo da viagem
        </div>
        <div className="step">
            <strong>Then</strong> uma mensagem de erro é exibida informando que o motivo é obrigatório
        </div>
    </div>


    <div className="scenario">
        <h3>Cenário 6: Cadastro com motivo da viagem inválido</h3>
        <div className="step">
            <strong>Given</strong> o usuário está na tela de cadastro de viajante
        </div>
        <div className="step">
            <strong>When</strong> o usuário insere um motivo da viagem que não está na lista
        </div>
        <div className="step">
            <strong>Then</strong> uma mensagem de erro é exibida informando que o motivo é inválido
        </div>
    </div>

    <div className="scenario">
        <h3>Cenário 7: Cadastro com nome muito curto</h3>
        <div className="step">
            <strong>Given</strong> o usuário está na tela de cadastro de viajante
        </div>
        <div className="step">
            <strong>When</strong> o usuário preenche o nome com menos de 3 caracteres
        </div>
        <div className="step">
            <strong>Then</strong> uma mensagem de erro é exibida informando que o nome deve ter pelo menos 3 caracteres
        </div>
    </div>

    <div className="scenario">
        <h3>Cenário 8: Cadastro com nome muito longo</h3>
        <div className="step">
            <strong>Given</strong> o usuário está na tela de cadastro de viajante
        </div>
        <div className="step">
            <strong>When</strong> o usuário preenche o nome com mais de 50 caracteres
        </div>
        <div className="step">
            <strong>Then</strong> uma mensagem de erro é exibida informando que o nome deve ter no máximo 50 caracteres
        </div>
    </div>

    <div className="scenario">
        <h3>Cenário 9: Campos obrigatórios vazios após cadastro</h3>
        <div className="step">
            <strong>Given</strong> o usuário preenche o cadastro e submeter
        </div>
        <div className="step">
            <strong>When</strong> o usuário tenta voltar à tela de cadastro
        </div>
        <div className="step">
            <strong>Then</strong> todos os campos devem ser limpos e estarem prontos para um novo cadastro
        </div>
    </div>

 
    <div className="scenario">
        <h3>Cenário 10: Cadastro de viajante com campos opcionais vazios</h3>
        <div className="step">
            <strong>Given</strong> o usuário está na tela de cadastro de viajante
        </div>
        <div className="step">
            <strong>When</strong> o usuário deixa campos opcionais vazios
        </div>
        <div className="step">
            <strong>Then</strong> o cadastro é realizado com sucesso, ignorando os campos vazios
        </div>
    </div>

</div>

    </div>
  );
};

export default Viajante;