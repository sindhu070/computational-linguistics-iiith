var english=['The child liked the chocolate.','She was stopped by the bravest knight.','Mary baked a cake for his birthday','She decorated the cake carefully','Mary wore a dress with polka dots.']
var hindi=['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए']
//console.log(hindi)
//console.log(english)
function fun1()
{
document.getElementById("edrop").style.display="none"
document.getElementById("hdrop").style.display="none"
	if(document.getElementById("eng").selected)
	{
      document.getElementById("edrop").style.display="block"

	}
	else if(document.getElementById("hin").selected)
	{
		  document.getElementById("hdrop").style.display="block"
	}
}