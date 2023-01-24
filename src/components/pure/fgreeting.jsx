import React, {useState} from 'react';
import PropTypes from 'prop-types';




const Fgreeting = (props) => {

//Breve introduccion a Use State

// const [variable, metodo para actualizarlo]= useState(valorInicial)
    const [age, setAge]= useState(26)

const birthday = ()=>{
    setAge(age +1 )
}
    return (
        <div class="bg-yellow">
            <h1>Hola {props.name} desde componente funcional</h1>
            <h2>Tu edad es de: {age}</h2>

                <div>
                    <button onClick={birthday}>Cumplir años</button>
                </div>
        </div>
    );
};


Fgreeting.propTypes = {
    name:PropTypes.string
};


export default Fgreeting;
