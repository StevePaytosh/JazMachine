var data=[]; //general stack for numbers
var vars=[]; //stack for variables, index of type string: vars["f"]=0 , vars["ff"]=15
var current_var; //pointer(string index) to the current var
var labels=[]; //holds strings that act as sections of code identified by labels
var routines=[]; //holds strings that acts sections of code that act as routines (consider using an object)

function lvalue(newVar)
{
	current_var=newVar;
};

function  rvalue(val)
{
	data.push(val);
};

function  set()
{
	vars[current_var]=data.pop();
	console.log(current_var + " equals "+vars[current_var]);
};

function getVar(name)
{
	return vars[name];
}
function  setLabel(name,code)
{
	labels[name]=code;
}

function  pop()
{
	var r=data.pop();
	console.log("poped: " + r + " from the stack\n");
}

function push(val)
{
		data.push(val);
}

function  topOfStack()
{
	return data[0];
}

function  call_goto(name)
{
	return labels[name];
}