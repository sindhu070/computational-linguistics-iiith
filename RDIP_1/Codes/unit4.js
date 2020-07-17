var stemmer = new Snowball('English');
stemmer.setCurrent('asked');     
stemmer.stem();
console.log(stemmer.getCurrent());  


corpus=['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole.Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough.When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole."How shall I climb out?" said the mouse. "oh, how shall I climb out?Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.','A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.','A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field."I only did what the dog does," said the donkey,"and yet they make a pet of the dog, and they beat me with sticks. It is not fair.']
function fun1()
{
document.getElementById("p2").style.visibility="hidden"
document.getElementById("t1").style.visibility="hidden"
document.getElementById("b1").style.visibility="hidden"
document.getElementById("t11").value=""
document.getElementById("t12").value=""
document.getElementById("t11").style.backgroundColor=""
document.getElementById("t12").style.backgroundColor=""
document.getElementById('p3').innerHTML=''
document.getElementById('b2').style.visibility='hidden'
if(document.getElementById("c1").selected)
{
	document.getElementById("p1").innerHTML='A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.'
document.getElementById("p2").style.visibility="visible"
	document.getElementById("t1").style.visibility="visible"


	document.getElementById("b1").style.visibility="visible"


}
else if(document.getElementById("c2").selected)
{
	document.getElementById("p1").innerHTML='A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
document.getElementById("p2").style.visibility="visible"
	document.getElementById("t1").style.visibility="visible"
	document.getElementById("b1").style.visibility="visible"
}
else if(document.getElementById("c3").selected)
{
	
	document.getElementById("p1").innerHTML='A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair."'
document.getElementById("p2").style.visibility="visible"
	document.getElementById("t1").style.visibility="visible"
	document.getElementById("b1").style.visibility="visible"
}
else
{
document.getElementById("p1").innerHTML=''

}
}
function token_check()
{
	count=0
	var p=document.getElementById("p1").innerHTML

	res=p.split(" ")
	const p1 = res.filter(res1=> res1.trim() !== '"');
	
	for(i=0;i<p1.length;i++)
	{
		count+=1;
	}

	console.log(p1)
	return p1.length
}
function type_check()
{
	count1=0
	var p=document.getElementById("p1").innerHTML.toLowerCase().replace(/[^\w\s]/gi, '')

	res=p.split(" ")
	const p1 = res.filter(res1=> res1.trim().length>0);

y=removeDuplicates(p1)
	function removeDuplicates(array) {
x= (array.filter((value, index) => array.indexOf(value) ===index ).length);
return x
};

return y
}
