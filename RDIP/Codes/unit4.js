var stemmer = new Snowball('English');
stemmer.setCurrent('asked');     
stemmer.stem();
console.log(stemmer.getCurrent());  
