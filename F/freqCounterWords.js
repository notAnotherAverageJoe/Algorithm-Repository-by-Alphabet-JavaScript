// finnd the frequency of words within a string
// example count - "hello world" = 1: hello , 1: world

function wordFreq(str) {
  let counter = {};
  // Remove punctuation and split the string into words
  let words = str.replace(/[.,]/g, "").toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    // Check if the word is not empty
    if (words[i]) {
      counter[words[i]] = (counter[words[i]] || 0) + 1;
    }
  }

  return counter;
}

const sent1 =
  "this will be the test string, it will count the frequency of words within the string";
console.log(wordFreq(sent1));
