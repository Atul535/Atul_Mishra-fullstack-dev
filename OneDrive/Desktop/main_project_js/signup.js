document.getElementById("head").innerHTML=`
<div class="logo"><img src="https://images.pexels.com/photos/4503735/pexels-photo-4503735.jpeg" alt="error"></div>
      <div class="menu">
         <ul>
            <li><a href="main.js">Home</a></li>
            <li><a href="Product_2.html">Product</a></li>
            <li><a href="">Games</a></li>
            <li><input type="search"></li>
         </ul>
      </div>`;

document.getElementById("sign_home").innerHTML=`
    <div class="sign_main">
        <div class="formdata">
            <form action="" id="form_section" >
                <input type="text" placeholder="Name" required class="form_input" id="name" name="fname">
                <input type="email" placeholder="@gmail.com" required class="form_input" id="mail" name="mail">
                <input type="text" placeholder="username" required class="form_input" id="username" name="user">
                <input type="password" placeholder="create password" required class="form_input" id="pswd1" name="pswd1">
                <input type="password" placeholder="re-enter password" required class="form_input" id="pswd2" name="pswd2">
                <button class="form_submit">Signup</button>
            </form>
        </div>
    </div>
`;

let formdetail=document.getElementById("form_section");
let fname=formdetail["fname"];
let email=formdetail["mail"];
let username=formdetail["user"];
let pswd=formdetail["pswd1"];
let re_pswd=formdetail["pswd2"];

let signuprecord= JSON.parse(localStorage.getItem("record")) || [];

const addrec=(fname,email,username,pswd,re_pswd)=>{
    signuprecord.push(
        {
            fname,
            email,
            username,
            pswd,
            re_pswd,
        }
    );
    localStorage.setItem("record",JSON.stringify(signuprecord));
    // return {fname,email,username,pswd,re_pswd};
};



    formdetail.onsubmit=(e)=>{
        e.preventDefault();
        if(signuprecord.some((v)=>{
            return v.email==email.value;
        })){
            alert("email exist");
        }
        else{
            addrec(
                email.value,
                fname.value,
                username.value,
                pswd.value,
                re_pswd.value
            )
            let size=pswd.value.length;
            let lc=0,uc=0,sc=0,num=0;
            for(let i=0; i<size; i++)
            {
                if(pswd.value[i]>='a' && pswd.value[i]<='z')
                {
                    lc++;
                }
                else if(pswd.value[i]>='A' && pswd.value[i]<='Z')
                {
                    uc++;
                }
                else if(pswd.value[i]>='0' && pswd.value[i]<='9')
                {
                    num++;
                }
                else
                {
                    sc++;
                }
            }
            if(size>=8)
            {
                if(lc>=1 && uc>=1 && sc>=1 && num>=1)
                {
                    alert("Strong password");
                    if(pswd.value==re_pswd.value)
                        {
                            window.location.assign("Login.html");
                        }
                        else
                        {
                            alert("Password and confirm password should be same");
                        }
                    }
                    else
                    {
                        alert("passsword should hae atleast 1 upper case, 1 lowercase, 1 spcl char and number");
                    }
            }
            else
            {
                alert("Weak password");
            }
            
        }
    };

//alert inside the tag
// create the cart and fetch the file from json
