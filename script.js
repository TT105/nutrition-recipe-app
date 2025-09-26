// 栄養データ（100gあたり）
const foodData = {
  "にんじん": { cal: 37, protein: 0.6, fat: 0.1, carb: 8.7 },
  "たまご": { cal: 155, protein: 13, fat: 11, carb: 1.1 },
  "鶏むね肉": { cal: 165, protein: 31, fat: 3.6, carb: 0 },
  "ごはん": { cal: 168, protein: 2.5, fat: 0.3, carb: 37 },
  "玉ねぎ": { cal: 40, protein: 1.3, fat: 0.1, carb: 9.3 },
  "キャベツ": { cal: 23, protein: 1.3, fat: 0.2, carb: 5.2 },
  "トマト": { cal: 18, protein: 0.9, fat: 0.2, carb: 3.9 }
  // 必要に応じて追加
};

// オートコンプリート
const datalist = document.getElementById("food-options");
Object.keys(foodData).forEach(food => {
  const option = document.createElement("option");
  option.value = food;
  datalist.appendChild(option);
});

let total = { cal: 0, protein: 0, fat: 0, carb: 0 };

// フォーム送信
document.getElementById("food-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);

  if (!foodData[name]) { alert("その食材はデータベースにありません。"); return; }
  if (isNaN(weight) || weight <= 0) { alert("正の数を入力してください。"); return; }

  const factor = weight / 100;
  const food = foodData[name];

  const item = {
    name, weight,
    cal: food.cal * factor,
    protein: food.protein * factor,
    fat: food.fat * factor,
    carb: food.carb * factor
  };

  total.cal += item.cal;
  total.protein += item.protein;
  total.fat += item.fat;
  total.carb += item.carb;

  const li = document.createElement("li");
  li.textContent = `${item.name}：${item.weight}g`;
  li.title = "クリックで削除";
  li.addEventListener("click", function () {
    total.cal -= item.cal;
    total.protein -= item.protein;
    total.fat -= item.fat;
    total.carb -= item.carb;
    li.remove();
    updateSummary();
  });
  document.getElementById("food-list").appendChild(li);

  updateSummary();
  document.getElementById("food-form").reset();
  document.getElementById("food-weight").value = 100;
});

// 栄養合計表示
function updateSummary() {
  const p = document.getElementById("summary");
  p.textContent =
    `カロリー: ${total.cal.toFixed(1)} kcal｜` +
    `たんぱく質: ${total.protein.toFixed(1)}g｜` +
    `脂質: ${total.fat.toFixed(1)}g｜` +
    `炭水化物: ${total.carb.toFixed(1)}g`;
}

// 重量調整ボタン
document.querySelectorAll(".adjust").forEach(button => {
  button.addEventListener("click", () => {
    const diff = parseInt(button.dataset.diff);
    const input = document.getElementById("food-weight");
    let value = parseInt(input.value) || 0;
    value = Math.max(0, value + diff);
    input.value = value;
  });
});
