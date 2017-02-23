$(document).ready(function(){
});

window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('out');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			//var textType = /text.*/;
			var textType = /.*/

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					//fileDisplayArea.innerText = reader.result;
					//fileDisplayArea.innerText=reader.result.split('\n')[0];
					var doc=reader.result.split('\n');
					run_file(doc,0,doc.length);
				}

				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});
};

function run_file(doc,start, end)
{
	//this function gets the array representing the file and iterated through the lines
	init();
	for(var i=start; i<end; i++)
	{
		doc[i]=doc[i].concat(" ");
		var args=doc[i].split(" "); //split up the line on spaces
		//var params=args.join("",2,args.length-1); //conjoin the remainder of the array to create the parameter
		var params=args.splice(1,args.length).join(" ");
		var opperation=args[0]; //the first element in the args array is the function to call
		
		if(opperation.includes("goto"))
		{
			//should not return
			var s=doc.indexof("label "+params);
			run_file(doc,s+1,end);
			return 0;
		}
		else if(opperation.includes("return") )
		{
			
		}
		call(opperation,params);
	}
	
	
}