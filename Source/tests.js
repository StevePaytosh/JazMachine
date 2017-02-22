function runTests()
{
	console.log("starting unit tests\n");
	console.log("starting stack tests\n");
}

function stackTests()
{
	init();
	
	lvalue("f");
	lvalue("x");
	
	rvalue(1);
	rvalue(2);
	
	setScope("begin"); // lvaues are not inner, rvalues are now outer
	
	rvalue(11);
	lvalue("ff");
	set(); //ff=11
	
	setScope("end");
	set(); //x=2
	pop(); //pop 1
	
}