
var number = prompt("Please enter your 10 digit phone number with dashes. (XXX-XXX-XXXX)");

if (number.charAt(3) === "-" && number.charAt(7) === "-") {
    alert("Valid phone number!  Thank you.")
  } else {alert("Invalid phone number.")
}


// birthdate code//

var birthdate = prompt("Please enter your birth date in month/date/year format. (xx/xx/xx)");

if (birthdate.charAt(2) === "/" && birthdate.charAt(5) === "/") {
    alert("Valid birthdate!  Thank you.")
  } else {alert("Invalid birthdate.")
}

// Postal code//
var postal = prompt("Please enter your postal code (xxxxx OR xxxxx-xxxx)");

if (postal.charAt(5) === "" || postal.charAt(5) === "-") {
    alert("Valid postal code!  Thank you.")
  } else {alert("Invalid postal code.")
}
// State Abbreviation//
var state = prompt("Please enter your state abbreviation (XX)");

if (state.charAt(3) === "") {
    alert("Valid state abbreviation!  Thank you.")
  } else {alert("Invalid abbreviation.")
}

// Married//

var married = prompt("Are you married?");

if (married === "yes" || "YES" || "Yes") {
  alert("Lucky you!  I hope you have a long and happy marriage.")
  } else if (married === "no" || "NO" || "No") {
    alert("All the single ladies!")
  } else {
    alert("Invalid answer")
}
