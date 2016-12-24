var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter;

//设置事件监听最大值
life.setMaxListeners(11);

// addEventListener

life.on('求安慰', function (who) {
    console.log('gei' + who + '倒水' );

});

life.emit('求安慰','汉子');

//返回值判断该事件是否监听 布尔值
var haslife = life.emit('求安慰','汉子');

//移除事件

life.removeListener('求安慰',water);

//不传参数移除所有的监听事件 添加指定的参数 只移除指定的所有事件

life.removeAllListener();