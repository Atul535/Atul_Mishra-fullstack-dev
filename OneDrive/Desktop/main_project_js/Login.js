document.getElementById("head").innerHTML=`
<div class="logo"><img src="https://images.pexels.com/photos/4503735/pexels-photo-4503735.jpeg" alt="error"></div>
      <div class="menu">
         <ul>
            <li><a href="main.js">Home</a></li>
            <li><a href="Product.html">Product</a></li>
            <li><a href="">Games</a></li>
            <li><input type="search"></li>
         </ul>
      </div>`;

      document.getElementById("login_home").innerHTML=`
        <div class="login_main">
            <div class="formdata">
                <form action="" id="form_section" >
                    <input type="text" placeholder="Name" required class="form_input" id="name">
                    <input type="password" placeholder="enter password" required class="form_input" id="pswd1">
                    <label for="check"><input type="checkbox" name="" id="check" class="check">Remember me</label>
                    <button class="form_submit">Login</button>
                </form>
            </div>
        </div>
      `;

    