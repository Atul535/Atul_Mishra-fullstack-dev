document.getElementById("head").innerHTML=`
<div class="logo"><img src="https://images.pexels.com/photos/4503735/pexels-photo-4503735.jpeg" alt="error"></div>
      <div class="menu">
         <ul>
            <li><a href="main.html">Home</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">Games</a></li>
            <li><input type="search"></li>
            <li><a href="">Profile</a></li>
         </ul>
      </div>`;

      fetch("Product.json").then((pro)=>{
        return pro.json();
      }).then((item)=>{
        let x="";
        item.product.map((data)=>{
            x+=`<img src="${data.image}" alt="error">
        <p class="title">${data.title}</p>
        <p class="price">Price : ${data.price}</p>
        <p class="rate">Rating : ${data.rating}</p>
        <span class="desc">Description : ${data.desc}</span>
        <button class="cart">Add to cart</button>
        <br>
        `;
      })
      document.getElementById("show").innerHTML=x;
      })