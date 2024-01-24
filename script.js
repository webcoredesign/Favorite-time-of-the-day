document.querySelectorAll(".option").forEach(function(option) {
  option.addEventListener("click", function() {
    document.querySelectorAll(".option").forEach(function(element) {
      element.classList.remove("active");
    });
    this.classList.add("active");
    var type = this.getAttribute("data-option");
    setTimeout(function() {
      var timeElement = document.querySelector(".time");
      if (type === "day") {
        timeElement.className = "time day";
      } else if (type === "night") {
        timeElement.className = "time night";
      } else if (type === "dusk") {
        timeElement.className = "time dusk";
      } else if (type === "sunset") {
        timeElement.className = "time sunset";
      }
    }, 500);
  });
});