function run_file(doc,start, end)
{
	//this function gets the array representing the file and iterated through the lines
	for(var i=start; i<end; i++)
	{
		doc[i]=doc[i].trim();
		var args=doc[i].split(" "); //split up the line on spaces
		args = args.map(item => { return item.trim() })
		//var params=args.join("",2,args.length-1); //conjoin the remainder of the array to create the parameter
		var params=args.splice(1,args.length).join(" ");
		var opperation=args[0]; //the first element in the args array is the function to call
		
		if(opperation.includes("goto"))
		{
			//should not return
			var s=getLabel(params);
			run_file(doc,s,end);
			return 0;
		}
		
		call(opperation,params);
		
		if(opperation.includes("call"))
		{
			//should return after call
			var s=getLabel(params);
			run_file(doc,s,end);
		}
		else if(opperation.includes("return") )
		{
			return;
		}
	}
	
	
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
		case "+": add(pop(),pop()); break;
		case "-": subtract(pop(),pop()); break;
		case "*": mult(pop(),pop()); break;
		case "/": divide(pop(),pop()); break;
		case "div": div-mod(pop(),pop()); break;
		case "&": logic_AND(pop(),pop()); break;
		case "!": negate(pop()); break;
		case "|": logic_OR(pop(),pop()); break;
		case "print": print(); break;
		case "show": show(param); break;
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