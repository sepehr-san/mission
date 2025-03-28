function toPersianNumber(num) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, digit => persianDigits[digit]);
}

const list = document.getElementById("persian-list");
const items = list.getElementsByTagName("li");

for (let i = 0; i < items.length; i++) {
  items[i].style.listStyleType = "none"; // Remove default numbering
  items[i].innerHTML = `<span style="margin-right: 10px;">${toPersianNumber(i + 1)}.</span> ${items[i].innerHTML}`;
}
