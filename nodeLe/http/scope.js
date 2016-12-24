var globalVariable = ' This is global variable';

function globalfunction(){
    var localVariable = 'This is local variable';

    console.log('Vist global/lacal variable');
    console.log(globalVariable);
    console.log(localVariable);

    globalVariable = 'This is changed variable';

    console.log(globalVariable);

    function localFunction() {

        var innerLocalVariable = 'this is inner local';

        console.log('Visit global/local/innerLocal variable');
        console.log(globalVariable);
        console.log(localVariable);
        console.log(innerLocalVariable);
    }

    localFunction();

}

globalfunction();