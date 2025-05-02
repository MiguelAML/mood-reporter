// Mood Reporter
// Your Name
// Date

let userName = "Miguel";
let moodToday = "happy";

function respondToMood(name, mood) {
  console.log("Hi " + name + "!");

  if (mood === "happy") {
    console.log("That’s awesome. Keep it going!");
  } else if (mood === "tired") {
    console.log("Don’t forget to rest. You’ve earned it.");
  } else if (mood === "frustrated") {
    console.log("Take a breath. Better days are ahead.");
  } else {
    console.log("Thanks for checking in. Keep being you.");
  }
}

respondToMood(userName, moodToday);

for (let i = 0; i < 3; i++) {
  console.log("You've got this, " + name + "!");
}


