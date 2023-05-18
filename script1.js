const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const initialPosition = {
    x: Math.floor(Math.random() * 90),
    y: Math.floor(Math.random() * 90)
  };

  card.style.bottom = initialPosition.y + '%';
  card.style.left = initialPosition.x + '%';

  function rotateElement() {
    var angle = Math.floor(Math.random() * 360);
    document.querySelector("").style.transform = "rotate(" + angle + "deg)";
  }
  
const container = document.querySelector('.container');
const intervalTime = 2000; // 每秒

const objects = container.querySelectorAll('*');
objects.forEach(object => {

  const angle = Math.floor(Math.random() * 360) - 180;
  object.style.transform = `rotate(${angle}deg)`;
});

setInterval(() => {
  const objects = container.querySelectorAll('*');

  objects.forEach(object => {
    const angle = Math.floor(Math.random() * 360) - 180;
    object.style.transform = `rotate(${angle}deg)`;
  });
}, intervalTime);


  window.addEventListener("load", rotateElement);
  
  card.addEventListener('mouseenter', () => {
    cards.forEach(otherCard => {
      if (otherCard !== card) {
        const dx = Math.abs(parseFloat(card.style.left) - parseFloat(otherCard.style.left));
        const dy = Math.abs(parseFloat(card.style.bottom) - parseFloat(otherCard.style.bottom));
        if (dx <= 10 && dy <= 30) {
          if (parseFloat(card.style.left) < parseFloat(otherCard.style.left)) {
            otherCard.style.left = (parseFloat(otherCard.style.left) + 5) + '%';
          } else {
            otherCard.style.left = (parseFloat(otherCard.style.left) - 5) + '%';
          }

          if (parseFloat(card.style.bottom) < parseFloat(otherCard.style.bottom)) {
            otherCard.style.bottom = (parseFloat(otherCard.style.bottom) + 5) + '%';
          } else {
            otherCard.style.bottom = (parseFloat(otherCard.style.bottom) - 5) + '%';
          }
        }
      }
    });

    card.style.zIndex = 1;
    card.style.transform = 'translate(20px, -20px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.zIndex = '';
    card.style.transform = '';
  });
});

// 獲取輸入框元素
const nameInput = document.querySelector("#input1");
const yearInput = document.querySelector("#input2");
const output = document.querySelector("#output");

// 綁定按钮點擊事件
document.querySelector("#searchBtn").addEventListener("click", (event) => {
  event.preventDefault(); // 阻止數據自動提交
  output.innerHTML = ""; // 清空輸出框中的内容

  // 用戶输入的名字和年份
  const name = nameInput.value.trim();
  const year = parseInt(yearInput.value.trim());

  if (!name || isNaN(year)) {
    // 提示用戶輸入合法值
    const errorEl = document.createElement("p");
    errorEl.textContent = "Please enter a valid name and year.";
    output.appendChild(errorEl);
  } else {
    // 查詢同名人数
    const sameNameCount = nameData[name]?.[year] ?? 0;

    // search結果
    const resultEl = document.createElement("p");
    resultEl.textContent = `In ${year}, ${sameNameCount} NYC babies received ${name} as their first gift.`;
    output.appendChild(resultEl);

    // 清空輸入框的内容
    nameInput.value = "";
    yearInput.value = "";

    // 將光標設定回第一個輸入框
    nameInput.focus();
  }
});
