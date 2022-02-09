module.exports={
    f1:function(x){
    return x*x;
}
}

"noImplicitUseStrict";


const f1=require('./test').f1;

var assert=require('chai').assert;
const describe=require('./node_modules/describe/describe.js');
//assert.equal(f1(2),3);

var aa=f1(6);
assert.equal(aa,36);


function f(){
describe('app',function(){
    describe("#f1(x)",function(){
    it('return the true square of the done value',function(){
	var a=f1(6);
	assert.equal(a,4);
    });
    });

});
	   

}
f();
