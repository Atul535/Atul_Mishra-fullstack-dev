import React, { useState } from 'react'

const ProductListing = ({ productdata, removeProduct }) => {

    return (
        <div id="inner1">
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {productdata.length > 0 ? (
                        productdata.map((pro) => (
                            <tr >
                                <td>{pro.name}</td>
                                <td>${pro.price}</td>
                                <td>
                                    <button onClick={() => removeProduct(pro)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">
                                <h3>No Product Found</h3>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default ProductListing
