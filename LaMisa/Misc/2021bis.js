function giorno()
{
var today = new Date();
var first = new Date(today.getFullYear(), 0, 1);
var theDay = Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0);
var oggi = ("#d" + (theDay));
window.location = oggi
}


function MostraNascondiCommento() {
	    var myClasses = document.querySelectorAll('.Commento'),
        i = 0,
        l = myClasses.length;
  
  for (i; i < l; i++) {
	  if (myClasses[i].style.display === "none") {
			myClasses[i].style.display = "block";
			document.getElementById("myBtn1").disabled = false;
			document.getElementById("myBtn2").disabled = true;
	  } else {
			myClasses[i].style.display = 'none';
			document.getElementById("myBtn1").disabled = true;
			document.getElementById("myBtn2").disabled = false;
	  }
  }
  //*Rende visibili le rubriche dentro oBienDiv
	CambiaCommento()
}


function CambiaCommento() {
//* Questo funziona	per child di oBienDiv
  var listDiv = 0,
  listDivLeng = 0,
  i = 0,
  iCom = 0,
  listCom = 0
  listComLeng = 0;
  
	listDiv = document.getElementsByClassName("oBienDiv");
	listDivLeng=listDiv.length
		
	for (i; i < listDiv.length; i++) {
 	listCom = listDiv[i].getElementsByClassName("Commento");
	listComLeng=listCom.length
		iCom = 0;
		for (iCom; iCom < listComLeng; iCom++) {
			listCom[iCom].style.display = "block";
		}
	}
}



function SantoMostra() {
	    var myClasses = document.querySelectorAll('.Feria'),
		sanctus=document.querySelectorAll('.Santo'),
        i = 0,
        l = myClasses.length;

  
  for (i; i < l; i++) {
	  if (myClasses[i].style.display === "none") {
			myClasses[i].style.display = "block";
			sanctus[i].style.display = "none";
			document.getElementById("myBtn1").disabled = false;
			document.getElementById("myBtn2").disabled = true;
	  } else {
			myClasses[i].style.display = 'none';
			sanctus[i].style.display = "block";
			document.getElementById("myBtn1").disabled = true;
			document.getElementById("myBtn2").disabled = false;
	  }
  }

}


function nascondiBienDiv() {
	var x = document.getElementsByClassName("oBienDiv"),
	    i = 0,
        l = x.length;
  
	for (i; i < l; i++) {
		x[i].style.display = 'none';
 		document.getElementById("myBtn3").disabled = true;

		document.getElementById("myBtn4").disabled = false;

  }
}

function mostraBienDiv() {
 	var x = document.getElementsByClassName("oBienDiv"),
	    i = 0,
        l = x.length;
  
	for (i; i < l; i++) {
		x[i].style.display = 'block';
		document.getElementById("myBtn3").disabled = false;
		document.getElementById("myBtn4").disabled = true;
  }
}

function caricaBottoni() {
	 	document.getElementById("myBtn2").disabled = true;
		document.getElementById("myBtn4").disabled = true;
		document.getElementById("myBtn1").disabled = false;
		document.getElementById("myBtn3").disabled = false;

	
	
	}
