import React, {useState} from "react";
import Field from "./Field";
import products from "../products";

function NewProductForm(props) {

    return (
        <div className="form">
            <label>Name: </label>
            <input onChange={event => props.onChange(event.target.name, event.target.value)} name="name" value={props.value.name} type="text" />
            <label>Price: </label>
            <input onChange={event => props.onChange(event.target.name, event.target.value)} name="price" value={props.value.price} type="number" />
            <label>Stock: </label>
            <input onChange={event => props.onChange(event.target.name, event.target.value)} name="stock" value={props.value.stock} type="number" />
                <button onClick={event => props.onClick()}>Submit</button>
        </div>
    );
}

export default NewProductForm;