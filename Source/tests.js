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
	
	setScope("begin"); // lvaues are now inner, rvalues are outer
	
	rvalue(11);
	lvalue("ff");
	set(); //ff=11
	
	setScope("call"); //l&r values are both inner
	lvalue("lp");
	lvalue("zz");
	rvalue(12);
	rvalue(13);
	set(); //zz=13
	
	setScope("return"); //lvalue outer, rvalue inner
	lvalue("lp1");
	set(); // lpl=12
	
	setScope("end"); //outer, outer
	set(); //x=2
	
	set(); //x=2
	rvalue(99);
	pop(); //pop 1
	
}

function call(opp,param)
{
	switch(opp)
	{
		case "lvalue": lvalue(param);break;
		case "rvalue": rvalue(param);break;
		case ":=": set(); break;
		case "push": push(param); break;
		case "pop": pop(); break;
		case "call":
		case "return":
		case "end":	
		case "begin": setScope(opp); break;
		default:
		{
			if(opp.includes(":="))
				set();
			else if(opp.includes("push"))
				push(param);
			else if(opp.includes("pop"))
				pop();
			else if(opp.includes("call") || opp.includes("return") || opp.includes("end")  || opp.includes("begin"))
				setScope(param);
		}
	
	}
	
}