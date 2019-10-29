// Create today's date with european notation
function createTodaysDate() {
  const today = new Date();
  const europeanNotation =
    today.getDay() + "." + today.getMonth() + "." + today.getFullYear();
  return europeanNotation;
}

export const todaysDate = createTodaysDate();
