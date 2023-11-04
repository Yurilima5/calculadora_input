import { useState } from 'react'
import React, { Component } from 'react';
import './App.css'

function App() {
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  const [operator, setOperator] = useState('')
  const [resultado, setResultado] = useState('')

  const capturarSinal = (item) => {
   setOperator(item.target.value)
  }

  const capturarValor1 = (event) => {
    setValor1(event.target.value)
  }

  const capturarValor2 = (event) => {
    setValor2(event.target.value)
  }

  const calcular = () => {
    if (operator === '+') {
      const resultado = parseFloat(valor1) + parseFloat(valor2);
      setResultado(resultado);
    } else if (operator === '-') {
      const resultado = parseFloat(valor1) - parseFloat(valor2);
      setResultado(resultado);
    }else if (operator === 'x') {
      const resultado = parseFloat(valor1) * parseFloat(valor2);
      setResultado(resultado);
    }else if (operator === '÷') {
      const resultado = parseFloat(valor1) / parseFloat(valor2);
      setResultado(resultado);
    }else if (operator === '%') {
      const resultado = parseFloat(valor1) % parseFloat(valor2);
      setResultado(resultado);
    }
  }

  const limpar = () =>{
  setValor1 ('')
  setValor2 ('')
  setResultado ('')
  setOperator ('')

    
  }

  return (
    <>
      <body>
        <header>
          <h2>Calculadora!</h2>
          <p>Insira os valores desejados no input escolha uma operação e veja o resultado!</p>
        </header>

        <main>
          <section class="operacao">
          <h1>{valor1}</h1>
          <h1>{operator}</h1>
          <h1>{valor2}</h1>
          <h1>{resultado}</h1>
          </section>

         <section class="valores">
          <input onChange={capturarValor1} type="number" />
          <input onChange={capturarValor2} type="number" />
         </section>
         
        <section class="botoes">
          <button onClick={capturarSinal} value={"+"}>+</button>
          <button onClick={capturarSinal} value={"-"}>-</button>
          <button onClick={capturarSinal} value={"÷"}>÷</button>
          <button onClick={capturarSinal} value={"x"}>x</button>
          <button onClick={capturarSinal} value={"%"}>%</button>
          <button onClick={limpar} value={"ac"} >AC</button>
          <button onClick={calcular} value={"="}>=</button>
          </section>
        </main>
      </body>
    </>
  );
}

export default App