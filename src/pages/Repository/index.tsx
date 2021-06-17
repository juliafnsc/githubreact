import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo } from './styles';

interface RepositoryParams {
    repository: string;
}


const Repository: React.FC = () => {
 const { params } = useRouteMatch<RepositoryParams>();

    return (
    <>
        <Header>
        <img src={logoImg}
        alt="Github Explorer"/>
        <Link to="/dashboard">
        <FiChevronLeft size={16}/>
        Voltar
        </Link>
        </Header>

        <RepositoryInfo>
        <header>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnuLXUcL8tsF5nJNELZfuUgJTwfHrTohfQw&usqp=CAU"
            alt="Rocketseat"/>
        <div>
        <strong>rocketseat/unform</strong>
        <p>descrição do repositório</p>
        </div>
        </header>
        <ul>
            <li>
            <strong>1888</strong>
            <span>Stars</span>
            </li>
            <li>
            <strong>48</strong>
            <span>Forks</span>
            </li>
            <li>
            <strong>67</strong>
            <span>Issues</span>
            </li>
            </ul>
        </RepositoryInfo>
        </>
        );
    }; 
    export default Repository;