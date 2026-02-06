function capitalizeSecondWord(text){
    let words = text.split(" ");
    let result = []

    for (let i = 0; i < words.length; i++){
        let word = words[i]

        if (i % 3 === 2 && word.length > 1){
            result.push(word[0] + word[1].toUpperCase() + word.slice(2));


        } else {
            result.push(word);
        }
    }
    return result.join(" ")

}


console.log(capitalizeSecondWord("one two three four five six seven "))