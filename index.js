function scuberGreetingForFeet(rideDistance) {
  if (rideDistance <= 400) {
    return `This one is on me!`;
  } else if (2000 < rideDistance && rideDistance < 2500) {
    return `I will gladly take your thirty bucks.`;
  } else if (rideDistance >= 2500) {
    return `No can do.`;
  }
}

function ternaryCheckCity(destCity) {
  let destMessage = destCity === `NYC` ? `Ok, sounds good.` : `No go.`;
  return destMessage
}

function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case `generous`:
      return `Thank you so much.`;
      break;
    case `not as generous`:
      return `Thank you.`;
      break;
    default:
      return `Bye.`;
      break;
  }
}