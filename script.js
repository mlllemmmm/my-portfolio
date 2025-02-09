function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");

  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() !== "") {
    console.log("New recommendation added");

    // Call showPopup function (assuming it's defined elsewhere)
    showPopup(true);

    // Create a new div for the recommendation
    let newRec = document.createElement("div");
    newRec.classList.add("recommendation");
    newRec.innerHTML = `<span>&#8220;</span> ${recommendation.value} <span>&#8221;</span>`;

    // Append it to the recommendations section
    document.getElementById("all_recommendations").appendChild(newRec);

    // Clear the textarea after adding recommendation
    recommendation.value = "";
  }
}

    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  
    function showPopup(show) {
        let popup = document.getElementById("popup");
        if (show) {
          popup.style.display = "block"; // Ensure pop-up is shown
        } else {
          popup.style.display = "none"; // Hide pop-up
        }
      }