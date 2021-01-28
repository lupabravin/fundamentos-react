import './Mega.css'
import React, { useState } from 'react'

export default props => {


    function onSetQtdNumeros(e) {
        setQtdNumeros(e.target.value)
    }

    function gerarNumeros(qtde) {
        const numeros =
            Array(parseInt(qtdNumeros))
                .fill(0)
                .reduce((nums) => {
                    const novoNumero = gerarNumeroNaoContido(1, 60, nums);
                    return [...nums, novoNumero ]
                }, []).sort((n1, n2) => n1 - n2)
        
        return numeros;
    }

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * ((max - min) + min))
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }

    const qtde = props.qtde || 6
    const numerosIniciais = Array(qtde).fill(0)
    const [qtdNumeros, setQtdNumeros] = useState()
    const [numerosGerados, setNumerosGerados] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <div>
                <label htmlFor="qtdNumeros">Quantidade de números: </label>
            </div>
            <div>
                <input
                    id="qtdNumeros"
                    type="number"
                    min="1"
                    max="15"
                    value={props.qtdNumeros}
                    onChange={onSetQtdNumeros} />
            </div>
            <h3>{numerosGerados.join(' ')}</h3>
            <div>
                <button onClick={_ => setNumerosGerados(gerarNumeros(qtde))}>Gerar Números</button>
            </div>
        </div>
    )
}