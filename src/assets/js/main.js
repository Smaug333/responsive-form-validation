var formValidation = function( options ) {
    this.options = options;
    var _self = this;
    var eleArr = Object.keys( this.options );

    for ( var i = 0; i <= eleArr.length; i++ ) {
      var el = $( "#" + eleArr[ i ] );

      el.blur( function() {
        var element = $( this );
        _self.checkField( element );
      } );
    }
  };

  formValidation.prototype.checkField = function( element ) {
    var rule = this.options[ $( element ).attr( "id" ) ];

    if ( $( element ).hasClass( "alert-danger" ) ) {
      this.closeColorBox( element );
    }

    this.removeError( element );

    var boolEl =
      $( element ).val() === null ? true : $( element ).val().length <= 1;

    if ( boolEl && rule.required ) {
      this.addError( element, rule.msg );
    } else {
      this.removeError( element );
    }
  };

  formValidation.prototype.addError = function( element, msg ) {
    var alertElement =
      "<div class=\"modal-header\">" +
      "<strong class='text-center  center-block alert-danger alert_extend'>" +
      "There is an error in your Form" +
      "</strong>" +
      "</div>" +
      "<div class=\"modal-body\">" +
      "<span>" +
      msg +
      "</span>" +
      "</div>";

    if (
      $( element )
        .parent( "div" )
        .find( ".error" ).length === 0
    ) {
      $( element ).addClass( "alert-danger" );
      $.colorbox( {
        html: alertElement,
        className: "modal-content",
        top: 30,
        closeButton: true,
        returnFocus: true
      } );
    }
  };

  formValidation.prototype.removeError = function( element ) {
    $( element ).removeClass( "alert-danger" );
  };

  formValidation.prototype.closeColorBox = function( element ) {
    $( document ).bind( "cbox_closed.myInput", function() {
        console.log( "bind", element );
      $( element ).focus();
      $( document ).unbind( "cbox_closed.myInput" );
    } );
    $.colorbox.close();
  };
