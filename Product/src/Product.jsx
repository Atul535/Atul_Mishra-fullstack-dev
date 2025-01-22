import React, { useState } from 'react'
import ProductListing from './ProductListing'
import Search from './Search'

const Product = () => {
  const[pdata,setpdata] = useState({name:'',price:''});
  const[productdata,setproduct] = useState([]);

  const handleproduct = (e) => {
    const {name,value} = e.target;
    setpdata({...pdata,[name]:value});
  };

  const addproduct = () => {
    let duplicate = productdata.find((e) => e.name.toLowerCase() === pdata.name.toLowerCase() );
    if (duplicate) {
        alert("Product already exists");
        setpdata({ name: '', price: '' });
        return;
    }
    if(pdata.name==='' || pdata.price===''){
      alert('Please fill the details');
      return;
    }
    setproduct([...productdata,pdata]);
    setpdata({ name: '', price: '' });
  };
  console.log(productdata); 


  const removeProduct = (pro) => {
    const remainings = productdata.filter((e) => e.name !== pro.name);
    setproduct(remainings);
};


  return (
    <>
      <div id="inner">
        <input type="text" required id='inp' value={pdata.name} onChange={handleproduct} name='name' placeholder='Product Name' /><br />
        <input type="text" required id='inp' value={pdata.price} onChange={handleproduct} name='price' placeholder='Product Price' /><br />
        <button onClick={addproduct}>Add Product</button>
      </div>
      <ProductListing productdata={productdata} removeProduct={removeProduct}/>
      <Search productdata={productdata} />
    </>
  )
}

export default Product
