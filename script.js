// 栄養データ（100gあたり） ※必要に応じて追加・編集可能
const foodData = {
  "にんじん": { cal: 37, protein: 0.6, fat: 0.1, carb: 8.7 },
  "たまご": { cal: 151, protein: 12.3, fat: 10.3, carb: 0.3 },
  "牛肉": { cal: 250, protein: 17, fat: 20, carb: 0 },
  "ごはん": { cal: 168, protein: 2.5, fat: 0.3, carb: 37 },
  "キャベツ": { cal: 23, protein: 1.3, fat: 0.2, carb: 5.2 },
  "トマト": { cal: 18, protein: 0.9, fat: 0.2, carb: 3.9 },
  "玉ねぎ": { cal: 40, protein: 1.3, fat: 0.1, carb: 9.3 },
  "じゃがいも": { cal: 76, protein: 2.0, fat: 0.1, carb: 17 },
  "鶏むね肉": { cal: 165, protein: 31, fat: 3.6, carb: 0 },
  "豆腐": { cal: 72, protein: 7, fat: 4.3, carb: 1.9 }
  // もっと食材を追加可能
};

// オートコンプリート候補生成
const datalist = document.getElementById("food-options");
Object.keys(foodData).forEach(food => {
  const option = document.createElement("option");
  option.value = food;
  datalist.appendChild(option);
});

let total = { cal: 0, protein: 0, fat: 0, carb: 0 };

// 登録済み食材の追加処理
document.getElementById("food-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);

  if (!foodData[name]) {
    alert("その食材はデータベースにありません。");
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    alert("使用量（g）は正の数で入力してください。");
    return;
  }

  const factor = weight / 100;
  const food = foodData[name];

  const item = {
    name,
    weight,
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
  li.style.cursor = "pointer";
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
  document.getElementById("food-weight").value = 100; // デフォルト値に戻す
});

// 栄養合計を表示
function updateSummary() {
  const p = document.getElementById("summary");
  p.textContent =
    `カロリー: ${total.cal.toFixed(1)} kcal｜` +
    `たんぱく質: ${total.protein.toFixed(1)}g｜` +
    `脂質: ${total.fat.toFixed(1)}g｜` +
    `炭水化物: ${total.carb.toFixed(1)}g`;
}

// 重量調整ボタンの処理
document.querySelectorAll(".adjust").forEach(button => {
  button.addEventListener("click", () => {
    const diff = parseInt(button.dataset.diff);
    const input = document.getElementById("food-weight");
    let value = parseInt(input.value) || 0;
    value = Math.max(0, value + diff);
    input.value = value;
  });
});
