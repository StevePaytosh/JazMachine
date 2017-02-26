var vars=[]; //stack for variables, index of type string: vars["f"]=0 , vars["ff"]=15
var d=[];
var v=[];
var t=[]; //transfer stack
var current_var; //pointer(string index) to the current var
var labels=[]; //holds strings that act as sections of code identified by labels
var routines=[]; //holds strings that acts sections of code that act as routines (consider using an object)
var data_scope=0;
var vars_scope=0;


function init(docs)
{
	d.push([]);
	v.push([]);
	
	
	for(var i=0; i<docs.length; i++)
	{
		docs[i]=docs[i].trim();
		var args=docs[i].split(" "); //split up the line on spaces
		args = args.map(item => { return item.trim() })
		if(args[0]=="label")
		{
			var params=args.splice(1,args.length).join(" ");
			labels[params]=i+1;
		}
	}
}
function lvalue(newVar)
{
	current_var=newVar;
	v[vars_scope][newVar]=0;
	
};

function  rvalue(val)
{
	if(!isNaN(parseFloat(val)) && isFinite(val))
		d[data_scope].push(val);
	else
	{
		//place variable value onto the data stack
		if(data_scope<vars_scope)
		{
			//transfer into function phase, can read vars from outer scope
			d[data_scope].push(v[vars_scope-1][val]);
		}
		else if(data_scope>vars_scope)
		{
			//transfer back to outer scope, can read vars from inner scope
			d[data_scope].push(v[vars_scope+1][val]);
		}
		else
		{
			if(v[vars_scope][val]==null)
			{
				//if the variable referenced does not exist, initialize it to zero
				v[vars_scope][val]=0;
				d[data_scope].push(0);
			}
			d[data_scope].push(v[vars_scope][val]);
		}
			
	}
		
};

function  set()
{
	v[vars_scope][current_var]=pop();
	console.log(current_var + " equals "+v[vars_scope][current_var]);
};

function getVar(name)
{
	return v[vars_scope][name];
}
function  setLabel(name,code)
{
	labels[name]=code;
}

function  pop()
{
	var r=d[data_scope].pop();
	console.log("popped: " + r + " from the stack\n");
	return r;
}

function push(val)
{
	return d[data_scope].push(val);
}

function  topOfStack()
{
	return d[data_scope][d[data_scope].length-1];
}

function  call_goto(name)
{
	return labels[name];
}

function setScope(val)
{
	val=val.toLowerCase()
	if(val=="begin")
	{
		var stack_copy=v[vars_scope];
		vars_scope++;

	/*	for (var property in stack_copy) 
		{
			if (stack_copy.hasOwnProperty(property)) 
			{
				stack_copy[property]=0;
			}
		}
		*/
		//v.push(stack_copy);
		v.push([]);
	}
	
	if(val=="call")
	{
		data_scope++;
		d.push([]);
	}
	
	if(val=="return")
	{
		vars_scope--;
	}
	
	if(val=="end")
	{
		data_scope--;
		d.pop(); //don't pop inner arrays unit the function is completely done
		v.pop();
	}
	
	if(data_scope<0) //prevent the scopes from going negative
		data_scope=0;
	
	if(vars_scope<0)
		data_scope=0;
}

function getLabel(label)
{
	return labels[label];
}