import React, { useState } from 'react';

function AdivinaComponent() {
    const [numero, setNumero] = useState(1); //creamos el estado "numero" (el nro que elije el usuario)
    const [sorteo, setSorteo] = useState(0); //creamos el estado "sorteo" (el nro que sale del sorteo)
    const [result, setResult] = useState(false); //creamos el estado "result" (para saber si ya se sorteó)
    const [jugadas, setJugadas] = useState(0); //creamos el estado "jugadas" (para contar las jugadas)
    const [ganadas, setGanadas] = useState(0); //creamos el estado "ganadas" (para contar las ganadas)
    const [perdidas, setPerdidas] = useState(0); //creamos el estado "perdidas" (para contar las perdidas)

    const sortear = () => { //se ejecuta al clickear "SORTEAR", genera un nro random del 1 al 10. Guarda el nro sorteado en el estado "sorteo" y cambia el estado "result" a true
        const winner = Math.floor(Math.random() * 10) + 1;
        setSorteo(winner); //asigno valor por función
        setResult(true) //asigno valor por función, en true muestra el resultado
        setJugadas(jugadas + 1); //incrementa jugadas en 1

        if (winner == numero) {
            setGanadas(ganadas + 1); //incrementa ganadas en 1
        } else {
            setPerdidas(perdidas + 1); //incrementa perdidas en 1
        }
    }

    const colorResultado = sorteo === numero ? 'green' : 'red'; //si gana, el texto será verde, si pierde, rojo

    return (
        <div style={{ margin: 30 }}>
            {!result ? //mientras aun no se haya sorteado (result=false), muestra el input y el botón para que el usuario ingrese su número
                <div>
                    <h4>Adivina el Número del 1 al 10</h4>
                    <input 
                        type='number'
                        min="1" 
                        max="10"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}></input>
                    <br />
                    <button onClick={() => {
                        if (numero < 1 || numero > 10) {
                            alert("Por favor ingrese un número válido entre 1 y 10");
                            return;
                        }
                        sortear();
                        }}>
                        SORTEAR
                    </button>
                </div>
                : //si ya se sorteó (result=true), muestra el resultado de este proximo bloque de codigo
                <>
                    <hr />
                    <h3>Usted eligió el {numero}</h3>
                    <h3>Salió el número: {sorteo}</h3>
                    <h3 style={{ color: colorResultado }}>{sorteo == numero ? "Ha Ganado!" : "Siga participando"}</h3>
                    <br />
                    <h3>Veces jugadas: {jugadas}</h3>
                    <h3>Veces ganadas: {ganadas}</h3>
                    <h3>Veces perdidas: {perdidas}</h3>
                    <button onClick={() => {
                        setResult(false)
                        setNumero(1)
                    }}>Volver a jugar</button>

                </>
            }
        </div>
    );
}

export default AdivinaComponent;

//ejercicio
// 1- contar cuantas veces jugó, cuantas ganó y cuantas perdió
// 2- mostrar en rojo cuando pierda y en verde cuando gana
// 3- validar el ingreso a número del 1 al 10
