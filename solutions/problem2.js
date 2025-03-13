
function getCarSpeed() {
  if (carSpeed <= 70) {
    console.log("ok");
  } else {
    let points = Math.floor((carSpeed - 70) / 5);
    console.log(`points: ${points}`);

    if (points >= 12) {
      console.log("License suspended");
    }

  }
}

getCarSpeed(80);
getCarSpeed(70);
getCarSpeed(130);