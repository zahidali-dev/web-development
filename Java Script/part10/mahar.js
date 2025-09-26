document.getElementById("calcBtn").addEventListener("click", () => {
  const dobValue = document.getElementById("dob").value;
  const resultEl = document.getElementById("result");
  
  if (!dobValue) {
    resultEl.textContent = "Please choose your birthdate.";
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  if (dob > today) {
    resultEl.textContent = "That date is in the future. Try again.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  resultEl.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});
