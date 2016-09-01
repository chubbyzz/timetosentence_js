
function Form() {
    this.new();
}
Form.prototype = {
  new: function() {
    this.setElements();
    this.validate();
    this.setEvents();
  },
  setElements: function() {
    this.tb_hour = $('#tb-hour');
    this.tb_minute = $('#tb-minute');
    this.bt_show = $('#bt-show');
    this.box_time_words = $('#time-words')
  },
  setEvents: function() {
    this.bt_show.click($.proxy(this.showTime, this));
  },
  showTime: function() {
    this.validate();
    if(this.isValid()) {
      var time = new Timer(this.tb_hour.val(), this.tb_minute.val()).toWord();
      this.box_time_words.html(time);
      this.box_time_words.parent().show();
    } else {
      this.box_time_words.parent().hide();
    }
  },
  validate: function () {
    var rules = this.rules();
    for(var id in rules) {
      this.fireValidation(rules[id].type, id, rules[id].params.toString())
    }
  },
  isValid: function () {
    return $('.has-error').length == 0;
  },
  rules: function () {
    return {
      "tb-hour" : {
                  "type" : "between",
                  "params": [1,12]
                },
      "tb-minute" : {
                  "type" : "between",
                  "params": [0,59]
                },
    }
  },
  fireValidation: function(name,field, params) {
    eval('Validate.' + name + "('" + field + "'," + params + ")");
  }
};

new Form();
