$(function() {
  var rules = {
    title: { req: "optional" },
    firstname: {
      req: "required",
      msg: "first name requires at least two letters"
    },
    lastname: {
      req: "required",
      msg: "last name requires at least two letters"
    },
    gender: { req: "required", msg: "gender required" },
    birth: { req: "optional" },
    city: { req: "optional" },
    state: { req: "optional" },
    postcode: { req: "optional" },
    country: { req: "optional" }
  };

  var eleArr = Object.keys(rules);
  var elements = [];

  for (var i = 0; i <= eleArr.length; i++) {
    var el = $("#" + eleArr[i]);

    el.blur(function() {
      var element = $(this);
      checkField(element);
    });
  }

  var checkField = function(element) {
    var rule = rules[$(element).attr("id")];

    if ($(element).hasClass("alert-danger")) {
      closeColorBox(element);
    }

    removeError(element);

    var truthyEl = $(element).val() === null ? true : $(element).val().length <= 1;

    if (truthyEl && rule.req === "required") {
      addError(element, rule.msg);
    } else {
      removeError(element);
    }
  };

  function addError(element, msg) {
    var alertElement =
      '<div class="modal-header">' +
      "<strong class='text-center  center-block alert-danger alert_extend'>There is an error in your Form</strong>" +
      "</div>" +
      '<div class="modal-body">' +
      '<span>' +
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
        closeButton: false,
        returnFocus: true
      });
    }
  }

  function removeError(element) {
    $(element).removeClass("alert-danger");
  }

  function closeColorBox(element) {
    $(document).bind("cbox_closed", function(elenent) {
      $(element).focus();
      $(document).unbind("cbox_closed");
    });
    $.colorbox.close();
  }
});
