import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonPlusFill, 
    BsFilePlus,
    BsTrash,
    BsPencilSquare
} from 'react-icons/bs';
import Header from '../../components/header';
import InformationGroup from '../../components/informationGroup';
import api from '../../services/api';

import './styles.css';

interface Client{
    id: string;
    nome: string;
    CNPJ: string;
    email: string;
    telefone: string;
    data_fundacao: string;
    tipo: string;
}

const Home = () => {
    const [clients, setClient] = useState<Client[]>([]);

    useEffect(() => {
        api.get('clients').then(response =>{
            setClient(response.data);
        });
    }, []);

    function deleteClient(id: string){
        if(window.confirm("Deseja excluir esse cliente?")){
            api.delete(`clients/${id}`).then();
            document.getElementById(id)!.remove();
        }
    }

    return(
        <>
            <Header />
            <div className="clientsTitle">
                <h1>Clientes</h1>
                <Link to="/create-client" className="addClients">
                    ADICIONAR
                    <span>
                        <BsFilePlus />
                    </span>
                </Link>
            </div>
            <div className="listClients">
                {clients.map(client => (
                <div className="clients" key={client.id} id={client.id}>
                    <h2>{client.nome} (desde {client.data_fundacao.substr(0, 4)})</h2>
                    <InformationGroup 
                        title1="Telefone"
                        information1={client.telefone}
                        title2="Email"
                        information2={client.email}
                    />
                    <InformationGroup 
                        title1="CNPJ"
                        information1={client.CNPJ}
                        title2="Tipo"
                        information2={client.tipo}
                    />
                    <hr/>
                    <div className="buttons">
                        <Link className="seeMore button"
                            to={`/client/${client.id}`}>
                            <p id={`${client.id}title`}>
                                VER MAIS
                            </p>
                            <span>
                                <b id={`${client.id}icon`}>+</b>
                            </span>
                        </Link>
                        <Link to={`/create-related/${client.id}`} className="related button">
                            <p>
                                RELACIONADOS
                            </p>
                            <span>
                                <BsFillPersonPlusFill />
                            </span>
                        </Link>
                        <Link to={`/edit-client/${client.id}`} className="edit button">
                            <p>
                                EDITAR
                            </p>
                            <span>
                                <BsPencilSquare />
                            </span>
                        </Link>
                        <button className="delete button" onClick={() => deleteClient(client.id)}>
                            <p>
                                EXCLUIR
                            </p>
                            <span>
                                <BsTrash />
                            </span>
                        </button>
                    </div>
                </div>
                ))}
                
            </div>
        </>
    );
};

export default Home;