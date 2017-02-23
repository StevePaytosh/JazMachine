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