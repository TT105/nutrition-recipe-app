// script.js

// ✅ 食材データ：100gあたりの栄養素データ（cal: kcal, protein: g, fat: g, carb: g）
const foodData = {
  "にんじん": { cal: 41, protein: 0.9, fat: 0.2, carb: 10.0 },
  "鶏むね肉": { cal: 165, protein: 31.0, fat: 3.6, carb: 0.0 },
  "たまご": { cal: 155, protein: 13.0, fat: 11.0, carb: 1.1 },
  "ごはん": { cal: 168, protein: 2.5, fat: 0.3, carb: 37.0 },
  "キャベツ": { cal: 23, protein: 1.3, fat: 0.1, carb: 5.2 },
  "さつまいも": { cal: 132, protein: 1.2, fat: 0.2, carb: 31.5 },
  "アボカド": { cal: 187, protein: 2.5, fat: 18.0, carb: 6.7 },
  "れんこん": { cal: 66, protein: 1.9, fat: 0.1, carb: 16.0 },
  "トマト": { cal: 19, protein: 0.7, fat: 0.1, carb: 4.7 },
  "バナナ": { cal: 93, protein: 1.1, fat: 0.2, carb: 22.5 },
  "りんご": { cal: 54, protein: 0.2, fat: 0.2, carb: 14.6 },
　"マジパンプレート": { cal: 777, protein: 77 fat: 0.2, carb: 14.6 },
};

// 合計栄養素
let total = { cal: 0, protein: 0, fat: 0, carb: 0 };

// フォーム処理
const form = document.getElementById("food-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);

  if (!foodData[name]) {
    alert("その食材はデータベースに登録されていません。");
    return;
  }

  if (weight <= 0 || isNaN(weight)) {
    alert("使用量(g)は正の数で入力してください。");
    return;
  }

  const food = foodData[name];
  const factor = weight / 100;

  total.cal += food.cal * factor;
  total.protein += food.protein * factor;
  total.fat += food.fat * factor;
  total.carb += food.carb * factor;

  const li = document.createElement("li");
  li.textContent = `${name}：${weight}g`;
  document.getElementById("food-list").appendChild(li);

  updateSummary();
  form.reset();
});

function updateSummary() {
  const p = document.getElementById("summary");
  p.textContent = `カロリー: ${total.cal.toFixed(1)} kcal ｜たんぱく質: ${total.protein.toFixed(1)}g ｜脂質: ${total.fat.toFixed(1)}g ｜炭水化物: ${total.carb.toFixed(1)}g`;
}
