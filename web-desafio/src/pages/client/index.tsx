import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps, useHistory  } from 'react-router-dom';
import { BsFillPersonPlusFill, 
    BsFilePlus,
    BsTrash,
    BsPencilSquare
} from 'react-icons/bs';
import Header from '../../components/header';
import InformationGroup from '../../components/informationGroup';
import api from '../../services/api';

import '../home/styles.css';

interface Client{
    client: {
        nome: string;
        CNPJ: string;
        email: string;
        telefone: string;
        data_fundacao: string;
        tipo: string;
        CEP: string;
        estado: string;
        cidade: string;
        logradouro: string;
        bairro: string;
        numero: string;
    }
    related:[
        {
            id: string;
            CPF: string;
            nome: string;
            data_nascimento: string;
            telefone: string;
            email: string;
            id_cliente: string;
        }
    ]
}

interface Id{
    id: string;
}

const Client: React.FC<RouteComponentProps<Id>> = (props) => {
    
    const [data, setData] = useState<Client>({
        client: {
            nome: "",
            CNPJ: "",
            email: "",
            telefone: "",
            data_fundacao: "",
            tipo: "",
            CEP: "",
            estado: "",
            cidade: "",
            logradouro: "",
            bairro: "",
            numero: "",
        },
        related:[
            {
                id: "",
                CPF: "",
                nome: "",
                data_nascimento: "",
                telefone: "",
                email: "",
                id_cliente: "",
            }
        ]
    });
    
    const history = useHistory();

    const idClient = props.match.params.id;

    useEffect(() => {
        api.get(`clients/all/${idClient}`).then(response =>{
            setData(response.data);
        });
    }, []);

    function deleteClient(id: string){
        if(window.confirm("Deseja excluir esse cliente?")){
            api.delete(`clients/${id}`).then();
            history.push('/home');
        }
    }

    function deleteRelated(id: string){
        if(window.confirm("Deseja excluir essa pessoa relacionada?")){
            api.delete(`related/${id}`).then();
            document.getElementById("r"+id)!.remove();
        }
    }

    return (
        <>
        <Header />
        <h1 className="titleForm" style={{textAlign:"center"}}>Dados do cliente</h1>
        <div className="listClients">
            <div className="clients" id={idClient}>
                <h2>{data.client.nome} (desde {data.client.data_fundacao.substr(0, 4)})</h2>
                <InformationGroup 
                    title1="Telefone"
                    information1={data.client.telefone}
                    title2="Email"
                    information2={data.client.email}
                />
                <InformationGroup 
                    title1="CNPJ"
                    information1={data.client.CNPJ}
                    title2="Tipo"
                    information2={data.client.tipo}
                />
                <h3>Endereço</h3>
                <InformationGroup 
                    title1="CEP"
                    information1={data.client.CEP}
                    title2="UF"
                    information2={data.client.estado}
                />
                <InformationGroup 
                    title1="Cidade"
                    information1={data.client.cidade}
                    title2="Bairro"
                    information2={data.client.bairro}
                />
                <InformationGroup 
                    title1="Logradouro"
                    information1={data.client.logradouro}
                    title2="Número"
                    information2={data.client.numero}
                />
                <h3>Pessoas Relacionadas</h3>
                {data.related.map((pessoa) => (
                <div id={`r${pessoa.id}`} key={`r${pessoa.id}`}>
                    <div className="relatedGroup">
                        <h4>{pessoa.nome}</h4>
                        <div className="buttons-p">
                            <Link to={`/edit-related/${pessoa.id}`}  className="edit button-p">
                                <span>
                                    <BsPencilSquare />
                                </span>
                            </Link>
                            <button className="delete button-p" onClick={() => deleteRelated(pessoa.id)}>
                                <span>
                                    <BsTrash />
                                </span>
                            </button>
                        </div>
                    </div>
                    <InformationGroup 
                        title1="CPF"
                        information1={pessoa.CPF}
                        title2="nascimento"
                        information2={pessoa.data_nascimento.substr(0, 10)}
                    />
                    <InformationGroup 
                        title1="Telefone"
                        information1={pessoa.telefone}
                        title2="Email"
                        information2={pessoa.email}
                    />
                </div>
                ))}
                <hr/>
                <div className="buttons">
                    <Link to={`/create-related/${idClient}`} className="related button">
                        <p>
                            RELACIONADOS
                        </p>
                        <span>
                            <BsFillPersonPlusFill />
                        </span>
                    </Link>
                    <Link to={`/edit-client/${idClient}`} className="edit button">
                        <p>
                            EDITAR
                        </p>
                        <span>
                            <BsPencilSquare />
                        </span>
                    </Link>
                    <button className="delete button" onClick={() => deleteClient(idClient)}>
                        <p>
                            EXCLUIR
                        </p>
                        <span>
                            <BsTrash />
                        </span>
                    </button>
                </div>
            </div>            
        </div>
        </>
    );
}

export default Client;