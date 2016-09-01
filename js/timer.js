function Timer(hour, minute) {
  this.new(hour, minute);
}

Timer.prototype = {
  new: function(hour, minute) {
    this.hour = new Hour(hour);
    this.minute = new Minute(minute);
  },
  toWord: function (){
    if(this.minute.halfHourIdentifier() == "to") this.hour.addOneMore();
    if(this.minute.hourFirst())
      return this.hour.toWord() + " " + this.minute.toWord();
    else
      return this.minute.toWord() + " " + this.hour.toWord();
  }
};
