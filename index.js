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
$(function () {
  let body = $("body").html();
  for (var i = 0, len = chars.length; i < len; i++) {
    const re = new RegExp(chars[i], "g");
    body = body.replace(re, "🥺");
  }
  $("body").html(body);
});
