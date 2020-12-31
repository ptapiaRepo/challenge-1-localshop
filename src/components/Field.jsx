import React, { useState } from "react";

function Field(props) {

    const [inputText, setInputText] = useState({

    });

    function handleChange(event) {
        const {name, value} = event.target;

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <div>
        <label>{props.labelName}</label>
        <input name={props.name} value={props.value} type={props.type}></input>
        </div>
    );
}

export default Field;