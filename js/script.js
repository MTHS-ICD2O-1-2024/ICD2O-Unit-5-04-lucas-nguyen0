// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html



function enterClicked() {
  const inputAge = document.getElementById('input-age').value
  const inputDay = document.getElementById('input-day').value

  if (((inputDay == "Tuesday") || (inputDay == "Tuesday")) || ((inputAge > 12) && (inputAge < 21))) {
    document.getElementById('answer').innerHTML =
    "You're eligible for student pricing!"
  } else {
    document.getElementById("answer").innerHTML =
    'You must pay regular price.'
  }
}
