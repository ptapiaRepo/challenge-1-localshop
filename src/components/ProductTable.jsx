import React from "react";

function ProductTable(props) {

    let orderedProducts = (props.products).sort( (a,b) => {return b.key - a.key;})

    return (
        <div className="productComponent">
            <header className="header">
                <h2>Products Table</h2>
            </header>
            <table className="tableHeader">
                    <tr>
                    <td className="tableProductNameHeader">
                            <h5>Name</h5>
                        </td>
                        <td className="tablePrice">
                            <h5>Price</h5>
                        </td>
                        <td className="tableStockHeader">
                            <h4>Stock</h4>
                        </td>
                    </tr>
                </table>
            <div className="tableContainer">
                <table>
                    {orderedProducts.map((data, key) => {
                        return (
                            <div key={key}>
                                <Stock
                                    key={key}
                                    productName={data.name}
                                    price={data.price}
                                    stock={data.stock}
                                />
                            </div>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}

function Stock({ productName, price, stock}) {
    if (!productName) return <div />;
    return (
                <tbody>
                    <tr>
                        <td className="tableProductName">
                            <h5>{productName}</h5>
                        </td>
                        <td className="tablePrice">
                            <h5>{price}</h5>
                        </td>
                        <td className="tableStock">
                            <h4>{stock}</h4>
                        </td>
                    </tr>
                </tbody>
    );
  };

export default ProductTable;