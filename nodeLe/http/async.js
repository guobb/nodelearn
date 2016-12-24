// <script scr='a.js'></script>
// <script scr='a.js'></script>
// <script scr='a.js'></script>

var c = 0;

function print() {
    console.log(c);
}

function  plus(callback){

    setTimeout(function () {
        c+=1;
        callback()
    }, 1000);
}

plus(print);
//print();