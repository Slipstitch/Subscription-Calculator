//Select your elements
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

//Create change event listeners
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});
//Use a function to calculate the cost
var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});
//Use a function to calculate the cost
