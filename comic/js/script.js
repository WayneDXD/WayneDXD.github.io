

var comic = ["sleep.png", "two.png", "three.png",]; /* the variables are global meaning that they are allowed to be called to from any function in this script.*/

var toast = ["squad.png","fries.png"] /* the use of [] allows us to use the array function. this means that if we state a var =[] with values contained in [] like 
                                         how it is being used in this script it allows us to call to them via value and not name this is useful for squential functions such as math related functions or buttons functions.*/

var takeout = ["washroom.png"]

var counter = 0;     /* this states that the counter will start at 0 */



function nextPanel(){


	document.getElementById("pan").src = "pics/" +comic [counter];  /*this function lets us call to array via div/id= "pan" and .src ="folder/" + "name or var array"[counter].*/


counter = counter + 1;  /* states how the counter will function ie counter = x or 0 +1 = 1+1 = 2+1 etc after each function is executed this is in realtion to the values in the array [1,2,3,etc]*/

if(counter == 3) {  /* this allows us to execute a new function when the array is "true" or equates to 3*/

	document.getElementById("opt1").style.display = "block";  /* style.display allows us to execute a function that takes or adds a style such as colour or size or font style/size etc */
	document.getElementById("opt2").style.display = "block";
	document.getElementById("fridge").style.display = "block";
	document.getElementById("phone").style.display = "none";
	document.getElementById("next").style.display = "none";
 
  }


if (counter == 1){

document.getElementById("alarm").style.display ="block";
document.getElementById("intro").style.display ="none";


}




if(counter == 2){

document.getElementById("phone").style.display ="block";
document.getElementById("alarm").style.display ="none";

}






}

 function newPanel(){


	document.getElementById("broke").src = "pics/" + toast[counter];

    counter = counter + 1;

   if(counter == 2){

   	 document.getElementById("noFries").style.display = "block";
   	 document.getElementById("squad").style.display = "none";
   	 document.getElementById("path").style.display ="none";

}

  if(counter == 1){


     document.getElementById("squad").style.display = "block";
   	 document.getElementById("sad").style.display = "none";

  }

  
  
}


function newStrip(){


	document.getElementById("food").src = "pics/" + takeout[counter];

    counter = counter + 1;

    if (counter == 1){ 
    
    document.getElementById("ohh").style.display ="block";
    document.getElementById("yum").style.display ="none";
    document.getElementById("path2").style.display ="none";

    }
 
    if (counter == 0){

    document.getElementById("yum").style.display ="block";
   
    }

}




















