function Hour(number) {
  this.new(number);
}

Hour.prototype = {
  new: function(number) {
    this.number = number
  },
  addOneMore: function() {
    if(this.number == 12) this.number = 1;
    else this.number++;
  },
  toWord: function() {
    return castNumberTable[this.number];
  }
};
