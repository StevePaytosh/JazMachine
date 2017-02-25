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
					var doc=reader.result.split('\n');
 					init(doc);
 					run_file(doc,0,doc.length);
				}

				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});
};

function print()
{
	//gets the top of the stack and prints italics
	var top=top();
	var element=$("#out");
	element.innerHTML=element.innerHTML+cont;
}

function show(cont)
{
	//gets the top of the stack and prints italics
	var top=top();
	var element=$("#out");
	element.innerHTML=element.innerHTML+cont+"\n";
	
}