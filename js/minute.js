function Minute(number) {
  this.new(number);
}

Minute.prototype = {
  new: function(number) {
    this.number = number
  },
  toWord: function() {
    var minutesWords = this.castMinutesToWord();
    var sentence = this.minutesSentence();
    if(minutesWords == null)
      return sentence;
    else
      return minutesWords + " " + sentence;
  },
  minutesSentence: function () {
    var sentence = "";
    if(this.number == 0)
      return "o'clock";
    else if (this.number % 15 == 0)
      sentence = this.quarterToWords();
    else {
      sentence = "minutes"
      if(this.number == 1 || this.minute == 59) sentence = "minute";
    }
    return sentence + " " + this.halfHourIdentifier();
  },
  castMinutesToWord: function () {
    if(this.number == 0 || this.number % 15 == 0) return null;
    var number = this.number;
    if(number > 30) number = 60 - number;
    if(number > 20) return castNumberTable[number - number % 20] + " " + castNumberTable[number % 20];
    return castNumberTable[number];
  },
  halfHourIdentifier: function () {
    if(this.number > 30)
      return "to";
    else
      return "past";
  },
  quarterToWords: function() {
    if(this.number == 30)
      return "half";
    else
      return "quarter";
  },
  hourFirst: function () {
    return this.number == 0;
  }
};
