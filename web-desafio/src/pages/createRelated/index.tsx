import React, {useState, FormEvent} from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import Header from '../../components/header';
import Input from '../../components/input';
import api from '../../services/api';

import '../createClient/styles.css';

interface Form{
    nome: string;
    telefone: string;
    CPF: string;
    email: string;
    data_nascimento: string;
}

interface Id{
    id: string;
}

const CreateRelated: React.FC<RouteComponentProps<Id>> = (props) => {

    const id_cliente = props.match.params;

    const history = useHistory();

    const [form, setForm] = useState<Form>({
        nome: "",
        telefone: "",
        CPF: "",
        email: "",
        data_nascimento: ""
    });
    
    const handleChange = (value: string, name: string) => {
        setForm({...form, [name]: value});
    };

    async function submitForm(event: FormEvent){
        event.preventDefault();
        const data = {
            ...form,
            id_cliente: id_cliente.id
        }
        console.log(data);
        await api.post("/related", data);
        
        alert("Pessoa relacionada cadastrada");
        history.push('/home');

    }

    return (
        <>
            <Header />
            <form className="body" onSubmit={submitForm}>
                <h1 className="titleForm">Cadastro de Pessoa Relacionada</h1>
                <div className="form">

                    <fieldset>
                        <legend>
                            <h2>Pessoa Relacionadas</h2>
                        </legend>
                        <Input
                            name="nome"
                            placeholder="João" 
                            type="text"
                            label="Nome"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="CPF"
                            placeholder="99999999999999" 
                            type="number"
                            label="CPF"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="email"
                            placeholder="exemplo@gmail.com" 
                            type="email"
                            label="Email"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="telefone"
                            placeholder="(00) 00000-0000" 
                            type="number"
                            label="Telefone"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="data_nascimento"
                            placeholder="00/00/0000" 
                            type="date"
                            label="Data de Nascimento"
                        onChange={handleChange}
                        />
                    </fieldset>
                    <button type="submit" className="addClientsForm">
                        CADASTRAR PESSOA
                    </button>
                </div>
            </form>
        </>
    );
};

export default CreateRelated;