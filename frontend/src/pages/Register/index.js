import React, {useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
//useHistory é para eretorna a pagina após o cadastro
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

export default function Register() {

    //criar um estado para armazenar cada variavel do formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    //criar uma função para mudar a variavel de acordo com o input

    const history = useHistory();
    /**
     * função para comunicar com a api,
     * recebe o evento de sunmit do form e previne que ele
     * aconteça
    */
   async function hadleRegister(e) {
        e.preventDefault();
        const data = ({
           name,
           email,
           whatsapp,
           city,
           uf
        });

        try {
            const response = await api.post('ongs',data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert('Erro no cadastro, tente novamente');
        }
   }

    return (
        <div className="register-container">
            <div className="content" >
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre e ajude pessoas a
                    encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/"> 
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={hadleRegister}>
                    {/*
                        acessa o input por meio do evento e mudar
                        o valor do estado de cada variavel
                    */}
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <input 
                        placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} 
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}     
                        />
                        
                        <input 
                            placeholder="UF" 
                            style={{width: 80}} 
                            value={uf}
                            onChange={e => setUf(e.target.value)} 
                        />
                    </div>
                    <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    );
}