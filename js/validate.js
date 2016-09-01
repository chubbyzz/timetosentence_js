var Validate = function() {
  return {
    between: function (field, min, max) {
        $('#' + field).focusout(function() {
            var val = $(this).val();
            if (isNaN(val) || val < min || val > max) {
              $(this).parents('.form-group').addClass('has-error');
              $(this).next().show();
            }
            else {
              $(this).parents('.form-group').removeClass('has-error');
              $(this).next().hide();
            }
        });
    }
  }
}();
