(function(){

  function successCallback(){
    $("#new-proposal-form input,#new-proposal-form textarea").val('');
    $('.callout').hide();
    $('#new-proposal-form-callout-success').show();
    $(window).scrollTop(0);
  }

  function errorCallback(){
    $('.callout').hide();
    $('#new-proposal-form-callout-error').show();
    $(window).scrollTop(0);
  }

  function newProposalForm(){
    $("#new-proposal-form").submit(function(e) {
      e.preventDefault();
      var $form = $(this);
      $.post($form.attr('action'), $form.serialize())
       .then(successCallback)
       .fail(errorCallback);
    });
  }

  window.newProposalForm = newProposalForm;

})();
