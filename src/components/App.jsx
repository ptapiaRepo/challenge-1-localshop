import React, {useState} from "react";
import NewProductForm from "./NewProductForm";
import ProductTable from "./ProductTable";
import products from "../products";

function App() {
    const [inputText, setInputText] = useState({
        name: "",
        price: 0,
        stock: 0
    });
    const [storedProducts, setStoredProducts] = useState(products);

    function handleChange(name, value) {

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleSubmit() {
        const max = storedProducts.reduce( (prevValue, currentValue) => {
            if(currentValue.key > prevValue) {
                return currentValue.key;
            } else {
                return prevValue;
            }
        },0);
        const newId = max + 1;
        
        console.log(inputText);
        setStoredProducts(prevValues => {
            return [...prevValues, {key: newId, ...inputText}]
        });
        console.log(products);
    }

    return (
        <div>
            <NewProductForm 
                stored={storedProducts}
                onClick={handleSubmit}
                onChange={handleChange}
                value={inputText}
            />
            <ProductTable products={storedProducts}/>
        </div>
    );
}

export default App;