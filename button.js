function AskUser()
{
  console.log("button.js loaded")
  let wordarray = [];
  let numarray = [];
  
 wordarray.push(prompt("Enter a noun."));
 wordarray.push(prompt("Enter a verb."));
 wordarray.push(prompt("Enter an adjective."));
 wordarray.push(prompt("Enter a pronoun."));
 
 numarray.push(prompt("Enter a number."));
 numarray.push(prompt("Enter one more number."));
 
 let result = "The " + wordarray[3]+" "+ wordarray[0]+" "+  wordarray[1] +" "+ numarray[0] +" "+ "steaks from " +" "+ wordarray[3] +" "+ numarray[1]  +" times ";
 
 alert(result); 
}

