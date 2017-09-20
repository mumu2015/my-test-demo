/**
 * PromiseDemo promise实践
 */

class PromiseDemo {
    static genPromise(x){
        let y = x + 2;
        console.log('yield  first, y = ' + y);
        return new Promise(function (resolve, reject) {
            if(y>5){
                resolve(y); // 无下面的then语句时会直接返回y的值，结束函数，有then之后，直接在then里处理
            } else {
                reject();
            }
        }).then((data)=> {
            console.log('y>5');
            return data; // 这里的data就是resolve里的y的值
        }).catch(()=> {
            console.log('y <= 5');
        });
    }
}
module.exports = PromiseDemo;