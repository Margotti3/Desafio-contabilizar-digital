import React, { useState, FormEvent, useEffect, ChangeEvent } from 'react';
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

const EditRelated: React.FC<RouteComponentProps<Id>> = (props) => {

    const history = useHistory();

    const idRelated = props.match.params;

    const [form, setForm] = useState<Form>({
        nome: "",
        telefone: "",
        CPF: "",
        email: "",
        data_nascimento: ""
    });

    useEffect(() => {
        api.get(`related/${idRelated.id}`).then(response =>{
            setForm(response.data);
        });
    }, []);
    
    const handleChange = (value: string, name: string) => {
        setForm({...form, [name]: value});
    };
    
    async function submitForm(event: FormEvent){
        event.preventDefault();
        
        console.log(form);
        await api.put(`/related/${idRelated.id}`, form);
        
        alert("Pessoa relacionada atualizada");
        history.push('/home');

    }

    return (
        <>
            <Header />
            <form className="body" onSubmit={submitForm}>
                <h1 className="titleForm">Ediçaõ de pessoa relacionada</h1>
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
                            value={form.nome}
                            onChange={handleChange}
                        />
                        <Input
                            name="CPF"
                            placeholder="99999999999999" 
                            type="number"
                            label="CPF"
                            className="formCadastro"
                            value={form.CPF}
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
                            name="data_nascimento"
                            placeholder="00/00/0000" 
                            type="date"
                            label="Data de Nascimento"
                            value={form.data_nascimento.substr(0, 10)}
                            onChange={handleChange}
                        />
                    </fieldset>
                    <button type="submit" className="addClientsForm">
                        EDITAR PESSOA
                    </button>
                </div>
            </form>
        </>
    );
};

export default EditRelated;