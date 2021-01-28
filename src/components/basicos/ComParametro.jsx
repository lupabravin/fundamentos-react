import React from 'react';

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'aprovado' : 'de recuperação'
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>{ props.aluno } tem nota {props.nota} e está {status}!</p>
        </div>
    )
}