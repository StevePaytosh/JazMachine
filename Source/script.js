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
					run_file(reader.result.split('\n'));
				}

				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});
};

function run_file(doc)
{
	//this function gets the array representing the file and iterated through the lines
	init();
	for(var i=0; i<doc.length; i++)
	{
		var args=doc[i].split(' '); //split up the line on spaces
		//var params=args.join("",2,args.length-1); //conjoin the remainder of the array to create the parameter
		var params=args.splice(1,args.length-1);
		var opperation=args[0]; //the first element in the args array is the function to call
		
		call(opperation,params[0]);
	}
	
	
}