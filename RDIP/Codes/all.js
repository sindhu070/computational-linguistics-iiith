var sentence1=["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"]
var sentence2=["some students like to study in the night","at night some students like to study"]
var sentence3=["John and Mary went to church","Mary and John went to church"]
var sentence4=["John went to church after eating",	"after eating John went to church","John after eating went to church"]
var sentence5=["did he go to market","he did go to market"]
var sentence6=["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"]
var sentence7=["John goes to the library and studies","John studies and goes to the library"]
var sentence8=["John ate an apple so did she","she ate an apple so did John"]
var sentence9=["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"]
var sentence10=["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"	,"yesterday I bought a book that I told her"]
var maineng=["John ate an apple before afternoon","John goes to the library and studies","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]


var sen1=["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"]
var sen2=["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"]
var sen3=["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"]
var sen4=["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"]
var sen5=["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"]
var sen6=["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"]
var sen7=["एक बड़ी सी किताब वहाँ है	","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
var mainhin=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"	,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है	"]
function fun1()
{
	document.getElementById("demo3").innerHTML=""
	count=0

if(document.getElementById("eng").selected)
{

	document.getElementById("demo").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("demo1").innerHTML="(select the buttons in proper order)";
	var x=maineng[Math.floor(Math.random() * maineng.length)];
	let body = document.getElementsByTagName("p")[3];
	x1=x.split(" ");
	for(i=0;i<x1.length;i++)
{
	j=Math.floor(Math.random()*x1.length)
	x=x1[i];
	x1[i]=x1[j]
	x1[j]=x;
}


for(i=0;i<x1.length;i++)
{
		 let button = document.createElement("button");
  button.innerHTML = x1[i]
  body.appendChild(button);
     

}

   
}
else if (document.getElementById("hin").selected) 
{ 
	document.getElementById("demo3").innerHTML=""

	document.getElementById("demo").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("demo1").innerHTML="(select the buttons in proper order)";
	var y=mainhin[Math.floor(Math.random() * mainhin.length)];
            y1=y.split(" ");
	let body = document.getElementsByTagName("p")[3];
	for(i=0;i<y1.length;i++)
{
	j=Math.floor(Math.random()*y1.length)
	x=y1[i];
	y1[i]=y1[j]
	y1[j]=x;

}
for(i=0;i<y1.length;i++)
{
		 let button = document.createElement("button");
  button.innerHTML = y1[i]
  body.appendChild(button)
}
}

else
{
	document.getElementById("demo").innerHTML=""
	document.getElementById("demo1").innerHTML=""
	document.getElementById("demo3").innerHTML=""
}
}
