import React from 'react';
import './sketch.css';

function DevItem({ dev }) {
    return(
        <li className="dev-item">
            <header>
            <img src={dev.avatar_url} alt={dev.name}></img>
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
            </header>
            <p>descricao</p>
            <a href={`http://github.com/${dev.github_username}`}>Acessar Perfil</a>
        </li>
    );
}

export default DevItem;