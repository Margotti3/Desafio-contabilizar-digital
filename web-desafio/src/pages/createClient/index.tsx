import React, {useState, FormEvent, ChangeEvent} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';
import Input from '../../components/input';
import api from '../../services/api';

import './styles.css';

interface Form{
    nome: string;
    CNPJ: string;
    email: string;
    telefone: string;
    datafundacao: string;
    CEP: string;
    estado: string;
    cidade: string;
    logradouro: string;
    bairro: string;
    numero: string;
    nome1: string;
    telefone1: string;
    CPF: string;
    email1: string;
    datanascimento: string;
}

const CreateClient = () => {

    const history = useHistory();

    const [select, setSelect] = useState('regular');

    const [form, setForm] = useState<Form>({
        nome: "",
        CNPJ: "",
        email: "",
        telefone: "",
        datafundacao: "",
        CEP: "",
        estado: "",
        cidade: "",
        logradouro: "",
        bairro: "",
        numero: "",
        nome1: "",
        telefone1: "",
        CPF: "",
        email1: "",
        datanascimento: ""
    });
    
    const handleChange = (value: string, name: string) => {
        setForm({...form, [name]: value});
    };

    function handleSelect(event: ChangeEvent<HTMLSelectElement>){
        setSelect(event.target.value);
    }

    async function submitForm(event: FormEvent){
        event.preventDefault();

        const data = {
            nome: form.nome,
            CNPJ: form.CNPJ,
            email: form.email,
            telefone: form.telefone,
            data_fundacao: form.datafundacao,
            tipo: select,
            CEP: form.CEP,
            estado: form.estado,
            cidade: form.cidade,
            logradouro: form.logradouro,
            bairro: form.bairro,
            numero: form.numero,
            pessoasRelacionadas:[{
                nome: form.nome1,
                telefone: form.telefone1,
                CPF: form.CPF,
                email: form.email1,
                data_nascimento: form.datanascimento
            }]
            
        };
        
        console.log(data);
        await api.post("/clients", data);
        
        alert("Cliente cadastrado");
        history.push('/home');

    }

    return (
        <>
            <Header />
            <form className="body" onSubmit={submitForm}>
                <h1 className="titleForm">Cadastro de cliente</h1>
                <div className="form">
                    <fieldset>
                        <legend>
                            <h2>Cliente</h2>
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
                            name="CNPJ"
                            placeholder="99999999999999" 
                            type="number"
                            label="CNPJ"
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
                            name="datafundacao"
                            placeholder="00/00/0000" 
                            type="date"
                            label="Data Fundação"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <div className="select">
                            <label htmlFor="tipo" className="label">Tipo: </label>
                            <select name="tipo" className="formCadastro input" onChange={handleSelect}>
                                <option value="regular">regular</option>
                                <option value="avulso">avulso</option>
                            </select>
                        </div>
                    </fieldset>
                    
                    <fieldset>
                        <legend>
                            <h2>Endereço</h2>
                        </legend>
                        <Input
                            name="CEP"
                            placeholder="00000-000" 
                            type="number"
                            label="CEP"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="estado"
                            placeholder="Minas Gerais" 
                            type="text"
                            label="Estado"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="cidade"
                            placeholder="Divinópolis" 
                            type="text"
                            label="Cidade"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="bairro"
                            placeholder="centro" 
                            type="text"
                            label="Bairro"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="logradouro"
                            placeholder="rua Goiás" 
                            type="text"
                            label="Logradouro"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="numero"
                            placeholder="1203" 
                            type="number"
                            label="Número (Nº)"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>Pessoa Relacionadas</h2>
                        </legend>
                        <Input
                            name="nome1"
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
                            label="CNPJ"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="email1"
                            placeholder="exemplo@gmail.com" 
                            type="email"
                            label="Email"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="telefone1"
                            placeholder="(00) 00000-0000" 
                            type="number"
                            label="Telefone"
                            className="formCadastro"
                        onChange={handleChange}
                        />
                        <Input
                            name="datanascimento"
                            placeholder="00/00/0000" 
                            type="date"
                            label="Data de Nascimento"
                        onChange={handleChange}
                        />
                    </fieldset>
                    <button type="submit" className="addClientsForm">
                        CADASTRAR CLIENTE
                    </button>
                </div>
            </form>
        </>
    );
};

export default CreateClient;