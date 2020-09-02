var chars = [
  "殺す",
  "ころす",
  "死ね",
  "しね",
  "馬鹿",
  "バカ",
  "ばか",
  "アホ",
  "あほ",
  "糞",
  "クソ",
  "くそ",
];

var elements = document.getElementsByTagName("*");

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var re = new RegExp(chars.join("|"), "g");
      var replacedText = text.replace(re, "🥺");

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
