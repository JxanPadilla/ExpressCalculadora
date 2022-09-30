import React, { useState } from 'react';

function Calculadora() {
    const [result, setResult] = useState("");
    const [divi, setDivision] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
        setDivision(divi.concat(e.target.name));
    }

    const handlerDiv = (e) => {
        setResult(result.concat(e.target.name));
        setDivision(divi.concat("%2F"));
    }

    const potencia = () => {
        setResult(result * result);
    }
    const clear = () => {
        setResult("")
        setDivision("")

    }
    const backspace = () => {
        setResult(result.slice(0, -1));
        setDivision(divi.slice(0, -1))
    }
    const calculate = async () => {
        const opp = { operacion: divi }
        const parseJson = JSON.stringify(opp)
        try {
            const res = await fetch(`https://serviexpress23.herokuapp.com/operacion/${parseJson}`)
            const resultado = await res.json();
            setResult(resultado.resultado);
        } catch (err) {
            setResult("Error");
        }
    }

    return (


        <div id='calculator'>

            <form>
                <input type="text" value={result} />
            </form>
            <div id='grid'>
                <input type="button" id='escu' />
                <button id="sigc" onClick={backspace} name="C"></button>
                <button id="sigac" onClick={clear}></button>
                <button id="sigm" onClick={handleClick} name="+"></button>
                <button id="btn1" onClick={handleClick} name="1"></button>
                <button id="btn2" onClick={handleClick} name="2"></button>
                <button id="btn3" onClick={handleClick} name="3"></button>
                <button id="sigr" onClick={handleClick} name="-"></button>
                <button id="btn4" onClick={handleClick} name="4"></button>
                <button id="btn5" onClick={handleClick} name="5"></button>
                <button id="btn6" onClick={handleClick} name="6"></button>
                <button id="sigx" onClick={handleClick} name="*"></button>
                <button id="btn7" onClick={handleClick} name="7"></button>
                <button id="btn8" onClick={handleClick} name="8"></button>
                <button id="btn9" onClick={handleClick} name="9"></button>
                <button id="sig÷" onClick={handlerDiv} name="/"></button>
                <button id="btn0" onClick={handleClick} name="0"></button>
                <button id="sig2" onClick={potencia} name="^2"></button>
                <button id="sigco" onClick={handleClick} name=","></button>
                <button id="sigi" onClick={calculate} name="="></button>
            </div>
        </div>

    )
}

export default Calculadora