var formValidation = {
  init: function(options) {

    this.options = options;

    var _self = this;
    var eleArr = Object.keys(options);
    var elements = [];

    for (var i = 0; i <= eleArr.length; i++) {
      var el = $("#" + eleArr[i]);

      el.blur(function() {
        var element = $(this);
        _self.checkField(element);
      });
    }
  },

  checkField: function(element) {
    var rule = this.options[$(element).attr("id")];

    if ($(element).hasClass("alert-danger")) {
      this.closeColorBox(element);
    }

    this.removeError(element);

    var truthyEl =
      $(element).val() === null ? true : $(element).val().length <= 1;

    if (truthyEl && rule.req === "required") {
      this.addError(element, rule.msg);
    } else {
      this.removeError(element);
    }
  },

  addError: function(element, msg) {
    var alertElement =
      '<div class="modal-header">' +
      "<strong class='text-center  center-block alert-danger alert_extend'>There is an error in your Form</strong>" +
      "</div>" +
      '<div class="modal-body">' +
      "<span>" +
      msg +
      "</span>" +
      "</div>";

    if (
      $(element)
        .parent("div")
        .find(".error").length === 0
    ) {
      $(element).addClass("alert-danger");
      $.colorbox({
        html: alertElement,
        className: "modal-content",
        top: 30,
        closeButton: true,
        returnFocus: true
      });
    }
  },

  removeError: function(element) {
    $(element).removeClass("alert-danger");
  },

  
  closeColorBox: function(element) {
    $(document).bind("cbox_closed.myInput", function(elenent) {
      $(element).focus();
      $(document).unbind("cbox_closed.myInput");
    });
    $.colorbox.close();
  }
};
