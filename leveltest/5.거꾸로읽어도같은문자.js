// 거꾸로 읽어도 같은 문자열인지 (재귀함수)

function ta(word) {
  return taHelper(word, 0, word.length - 1);
}

function taHelper(word, beginPos, endPos) {
  if (word[beginPos] == word[endPos] && word.length > 0) {
    return ta(word.slice(1, word.length - 1));
  } else if (word.length > 0 || word.length == 1) {
    return false;
  } else {
    return true;
  }
}

console.log(ta("appleelpa"));
console.log(ta("racecar"));
