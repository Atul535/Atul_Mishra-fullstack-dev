import React from 'react'
import { useState } from 'react';

const Search = ({ productdata }) => {
  const [srch, setsrch] = useState('');
  const [searchdata, setsearchdata] = useState([]);


  let a=document.getElementById('inner2');
  const searchinput = () => {
    const res = productdata.filter((e) => e.name.toLowerCase().includes(srch.toLowerCase()));
    setsearchdata(res);
    a.style.display='block';
    setsrch('');

  }
  return (
    <>
      <input type="search" value={srch} onChange={(e) => setsrch(e.target.value)} id="srch" placeholder='Search Here' />
      <i onClick={searchinput} class="fa-solid fa-magnifying-glass search"></i>

      <div id="inner2">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {searchdata.map((product) => (
              <tr >
                <td>{product.name}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Search
