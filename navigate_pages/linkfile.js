function link(){
var name=document.myform.txt1.value;
var pass=document.myform.txt2.value;
	if(name==""){
	alert("please enter name");
return true;
	}
 if(pass==""){
	alert("please enter pass");
return true;
	}

	if(name==pass){
	window.location="form1.html";
	}
	if(name!=pass){
	alert("values must be same!.");
	return true;
	}
}
