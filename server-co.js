/**
 * node服务器，co模块实践
 */

let a = 'test';
console.log(a);

function* gen(x) {
    let y = yield x + 2;
    return y;
}
let g = gen(1);
console.log(g);
let h = g.next();
console.log(h); // value:3表示yield后面x+2的值，既yield后的异步任务（x+2）的返回结果

let k = g.next(2); // g.next()此时value的值应该时undefined,因为此阶段异步任务没有返回结果；但是可以next(2)来出入参数
console.log(k); // value:2 表示该阶段返回结果是2，既y值是2



let co = require('co');
let promiseDemo = require('./manager/demo/PromiseDemo');
function* test() {
    let a = yield promiseDemo.genPromise(5); // generator函数
    console.log(a);
    console.log('sss');
}
co(test());
