import React, { useState, FormEvent, useEffect, ChangeEvent } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import Header from '../../components/header';
import Input from '../../components/input';
import api from '../../services/api';

import '../createClient/styles.css';

interface Form{
    nome: string;
    CNPJ: string;
    email: string;
    telefone: string;
    data_fundacao: string;
    CEP: string;
    estado: string;
    cidade: string;
    logradouro: string;
    bairro: string;
    numero: string;
}

interface Id{
    id: string;
}

const EditClient: React.FC<RouteComponentProps<Id>> = (props) => {

    const history = useHistory();

    const idClient = props.match.params;

    const [select, setSelect] = useState('regular');

    const [form, setForm] = useState<Form>({
        nome: "",
        CNPJ: "",
        email: "",
        telefone: "",
        data_fundacao: "",
        CEP: "",
        estado: "",
        cidade: "",
        logradouro: "",
        bairro: "",
        numero: "",
    });

    useEffect(() => {
        api.get(`clients/${idClient.id}`).then(response =>{
            setForm(response.data);
        });
    }, []);
    
    const handleChange = (value: string, name: string) => {
        setForm({...form, [name]: value});
    };

    function handleSelect(event: ChangeEvent<HTMLSelectElement>){
        setSelect(event.target.value);
    }

    async function submitForm(event: FormEvent){
        event.preventDefault();
        
        console.log(form);
        await api.put(`/clients/${idClient.id}`, {
            ...form,
            tipo: select
        });
        
        alert("Cliente atualizado");
        history.push('/home');

    }

    return (
        <>
            <Header />
            <form className="body" onSubmit={submitForm}>
                <h1 className="titleForm">Edição de cliente</h1>
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
                            value={form.nome}
                            onChange={handleChange}
                        />
                        <Input
                            name="CNPJ"
                            placeholder="99999999999999" 
                            type="number"
                            label="CNPJ"
                            className="formCadastro"
                            value={form.CNPJ}
                            onChange={handleChange}
                        />
                        <Input
                            name="email"
                            placeholder="exemplo@gmail.com" 
                            type="email"
                            label="Email"
                            className="formCadastro"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <Input
                            name="telefone"
                            placeholder="(00) 00000-0000" 
                            type="number"
                            label="Telefone"
                            className="formCadastro"
                            value={form.telefone}
                            onChange={handleChange}
                        />
                        <Input
                            name="data_fundacao"
                            placeholder="00/00/0000" 
                            type="date"
                            label="Data Fundação"
                            className="formCadastro"
                            value={form.data_fundacao.substr(0, 10)}
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
                            value={form.CEP}
                            onChange={handleChange}
                        />
                        <Input
                            name="estado"
                            placeholder="Minas Gerais" 
                            type="text"
                            label="Estado"
                            className="formCadastro"
                            value={form.estado}
                            onChange={handleChange}
                        />
                        <Input
                            name="Cidade"
                            placeholder="Divinópolis" 
                            type="text"
                            label="Cidade"
                            className="formCadastro"
                            value={form.cidade}
                            onChange={handleChange}
                        />
                        <Input
                            name="bairro"
                            placeholder="centro" 
                            type="text"
                            label="Bairro"
                            className="formCadastro"
                            value={form.bairro}
                            onChange={handleChange}
                        />
                        <Input
                            name="logradouro"
                            placeholder="rua Goiás" 
                            type="text"
                            label="Logradouro"
                            className="formCadastro"
                            value={form.logradouro}
                            onChange={handleChange}
                        />
                        <Input
                            name="numero"
                            placeholder="1203" 
                            type="number"
                            label="Número (Nº)"
                            className="formCadastro"
                            value={form.numero}
                            onChange={handleChange}
                        />
                    </fieldset>

                    <button type="submit" className="addClientsForm">
                        EDITAR CLIENTE
                    </button>
                </div>
            </form>
        </>
    );
};

export default EditClient;