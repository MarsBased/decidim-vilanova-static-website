//= require jquery/dist/jquery
//= require what-input/dist/what-input.min
//= require js-cookie
//= require cookies
//= require foundation_requires
//= require appendAround.js
//= require svg4everybody.min.js
//= require progressFixed.js

//= require new-proposal-form

$(document).foundation();

$(".js-append").appendAround();

$(function(){
  svg4everybody();
  progressFixed();
  newProposalForm();
});
