function learn(something) {
    console.log(something);
}

function me(callback, something){
    something += ' is cool';

    callback(something);
}

me(learn, 'Nodejs');

me(function (something) {
    console.log(something);
},'jade');