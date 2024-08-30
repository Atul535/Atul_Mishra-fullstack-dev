var video = document.getElementById("vid");

document.addEventListener('keydown', event => {
    console.log(event.code)
    var car = document.querySelector("#img");
    var a = 'KeyA';
    var d = 'KeyD';
    var w = 'KeyW';
    var s = 'KeyS';
    var space = 'Space';

    car.style.position = 'absolute';
    var lout=380+"px";
    var rout=-380+"px";
    var speed = 1;
    switch (event.code) {
        case d:
            car.style.left = parseInt(car.style.left || 0) + 10 + 'px';
            // console.log(car.style.left);
            if(car.style.left==lout)
            {
                alert("Out");
            }
            break;

        case a:
            car.style.left = parseInt(car.style.left || 0) - 10 + 'px';
            // console.log(car.style.left); 
            if(car.style.left==rout)
                {
                    alert("Out");
                }
            break;

        case w:
            while (speed >=1 && speed<=5) {
                video.playbackRate = speed;
                speed++;
                console.log(speed);
            }
            break;

        case s:
            while (speed >=1 && speed <=5) {
                video.playbackRate = speed;
                speed--;
                console.log(speed);
            }
            break;

        case space:
                video.playbackRate = 0;
            break;
    }
})