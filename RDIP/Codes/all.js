var main=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"	,"yesterday I bought a book that I told her"]]
var maineng=["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]


var main1=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है	","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]]
var mainhin=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"	,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है	"]



function fun1()
{
	 y=mainhin[Math.floor(Math.random() * mainhin.length)];
            y1=y.split(" ");
            	x=maineng[Math.floor(Math.random() * maineng.length)];
x1=x.split(" ");
	document.getElementById("demo3").innerHTML=""
	document.getElementById("demo5").innerHTML=""
	document.getElementById("demo4").innerHTML=""


	document.getElementById("b3").style.visibility="hidden";
	document.getElementById('b4').style.visibility="hidden"

	count=0
	

if(document.getElementById("eng").selected)
{


	document.getElementById("demo").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("demo1").innerHTML="(select the buttons in proper order)";
	
	let body = document.getElementsByTagName("p")[3];
	
	for(i=0;i<x1.length;i++)
{
	j=Math.floor(Math.random()*x1.length)
	x2=x1[i];
	x1[i]=x1[j]
	x1[j]=x2;
}


for(i=0;i<x1.length;i++)
{
		 let button = document.createElement("button");
		 button.id='button'+i;
	
  button.innerHTML = x1[i]
  body.appendChild(button);
     
button.addEventListener ("click", function() {
	document.getElementById("demo4").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("demo5").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    count=count+1;
 
    if (count>0 ) 
     {
     	document.getElementById("b3").style.visibility="visible";
     }
     var v=String(document.getElementById("demo5").innerHTML).replace(/\s+$/, '');
     v1=v.split(" ")
  
     
     if(x1.length==v1.length)
     {
     	document.getElementById("b4").style.visibility="visible";
     }


});

}
}

   

else if (document.getElementById("hin").selected) 
{ 
	

	document.getElementById("demo").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("demo1").innerHTML="(select the buttons in proper order)";
	
	let body = document.getElementsByTagName("p")[3];
	for(i=0;i<y1.length;i++)
{
	j=Math.floor(Math.random()*y1.length)
	x2=y1[i];
	y1[i]=y1[j]
	y1[j]=x2;

}
for(i=0;i<y1.length;i++)
{
		 let button = document.createElement("button");
		 button.id='button'+i
  button.innerHTML = y1[i]
  body.appendChild(button)

button.addEventListener ("click", function() {
	document.getElementById("demo4").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("demo5").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    count=count+1;

    if (count>0) 
     {
     	document.getElementById("b3").style.visibility="visible";
     }
      var v=String(document.getElementById("demo5").innerHTML).replace(/\s+$/, '');
     v1=v.split(" ")
    if (y1.length==v1.length) 
     {
     	document.getElementById("b4").style.visibility="visible";
     
     }
});

}
}


else
{
	document.getElementById("demo").innerHTML=""
	document.getElementById("demo1").innerHTML=""
	document.getElementById("demo3").innerHTML=""
}
}
function reset()

{

  for(i=0;i<x1.length||i<y1.length;i++)
  {
    if(document.getElementById('button'+i).style.visibility=="hidden")
    {
   document.getElementById('button'+i).style.visibility="visible";
    document.getElementById('demo4').innerHTML=""
    document.getElementById('demo5').innerHTML=""
    document.getElementById('b3').style.visibility="hidden"
     document.getElementById('b4').style.visibility="hidden"   
}
}
}
    

  
  




