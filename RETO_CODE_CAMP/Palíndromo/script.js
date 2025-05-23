function isPalindrome(text) {
  const clean = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}

document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (input === "") {
    alert("Please input a value.");
    return;
  }

  if (isPalindrome(input)) {
    result.textContent = input + " is a palindrome.";
  } else {
    result.textContent = input + " is not a palindrome.";
  }
});
