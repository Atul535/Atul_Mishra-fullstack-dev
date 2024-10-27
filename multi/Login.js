fetch("Login.json").then((res) => {
    return res.json();
}).then((item) => {
    let data = "";
    item.nav.map((e) => {
        data = `<img src="${e.logo}" class="img" alt="error">`;
    });

    document.getElementById("image").innerHTML = data;
    document.getElementById("side1").innerHTML = `<select name="" id="" class="lang">
            <option value="" class="option1">Eng</option>
            <option value="" class="option1">Hin</option>
            <option value="" class="option1">Telgu</option>
            <option value="" class="option1">Tamil</option>
        </select>
        <div class="help">
            <label for="anch" class="lab">
                <a href="Help.html" id="anch" target=""><i class="fa-solid fa-circle-question"></i>Help</a>
            </label>
        </div>`;
    document.getElementById("home").innerHTML = `<div class="left" id="left">
        </div>`;
    document.getElementById("left").innerHTML = `<form action="f1" class="form" id="f1" onsubmit="fun()">
            <input type="text" class="input" placeholder="username" id="ip1" required>
            <input type="password" class="input" placeholder="password" id="ip2" required>
            <label for="check"><input type="checkbox" name="check" id="check" class="check">Remember me</label>
            <input type="submit" class="sub">
            </form>`;
})
function fun() {
    var data1 = document.getElementById("ip1").value;
    var data2 = document.getElementById("ip2").value;
    fetch("Login.json").then((res) => {
        return res.json();
    }).then((item) => {

        console.log(data1);
        console.log(data2);
        for (const x of item.log) {
            if (data1 === x.username && data2 === x.pass) {
                window.location.assign("Project2.html")
            }
        }
    })

}