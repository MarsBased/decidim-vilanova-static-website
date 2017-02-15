function progressFixed(){
  var progressRef = document.querySelector("[data-progress-reference]"),
    progressFix = document.querySelector("[data-progressbox-fixed]"),
    progressVisibleClass = "is-progressbox-visible";

    if (!progressRef){
      return;
    }
    function checkProgressPosition(){
      var progressPosition = progressRef.getBoundingClientRect().bottom;
      if (progressPosition > 0) {
        progressFix.classList.remove(progressVisibleClass);
      } else {
        progressFix.classList.add(progressVisibleClass);
      }
    }

    window.addEventListener("scroll", checkProgressPosition);
}
