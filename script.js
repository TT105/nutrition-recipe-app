// 食材ごとの栄養データ（100gあたり）を拡充
const foodData = {
  "にんじん":     { cal: 37, protein: 0.6, fat: 0.1, carb: 8.7 },
  "ごはん":       { cal: 168, protein: 2.5, fat: 0.3, carb: 37 },
  "たまご":       { cal: 155, protein: 13, fat: 11, carb: 1.1 },
  "キャベツ":     { cal: 23, protein: 1.3, fat: 0.1, carb: 5.2 },
  "鶏むね肉":     { cal: 165, protein: 31, fat: 3.6, carb: 0 },
  "玉ねぎ":       { cal: 37, protein: 1.0, fat: 0.1, carb: 8.8 },
  "じゃがいも":   { cal: 76, protein: 1.6, fat: 0.1, carb: 17.6 },
  "さつまいも":   { cal: 132, protein: 1.2, fat: 0.2, carb: 31.5 },
  "ブロッコリー": { cal: 33, protein: 4.3, fat: 0.4, carb: 6.6 },
  "ピーマン":     { cal: 20, protein: 0.9, fat: 0.2, carb: 4.8 },
  "トマト":       { cal: 19, protein: 0.7, fat: 0.1, carb: 4.7 },
  "豚バラ肉":     { cal: 386, protein: 14.4, fat: 35.4, carb: 0.1 },
  "牛もも肉":     { cal: 183, protein: 20.7, fat: 10.6, carb: 0.3 },
  "豆腐":         { cal: 55, protein: 4.9, fat: 3.0, carb: 1.7 },
  "納豆":         { cal: 200, protein: 16.5, fat: 10.0, carb: 12.0 },
  "ヨーグルト":   { cal: 62, protein: 3.6, fat: 3.0, carb: 4.9 },
  "牛乳":         { cal: 67, protein: 3.3, fat: 3.8, carb: 4.8 },
  "食パン":       { cal: 264, protein: 9.3, fat: 4.3, carb: 44.4 },
  "うどん":       { cal: 105, protein: 2.6, fat: 0.4, carb: 21.6 },
  "そば":         { cal: 130, protein: 4.8, fat: 0.9, carb: 26.0 },
  "パスタ":       { cal: 149, protein: 5.5, fat: 0.9, carb: 30.9 },
  "みそ":         { cal: 217, protein: 12.8, fat: 6.0, carb: 26.0 },
  "砂糖":         { cal: 384, protein: 0, fat: 0, carb: 99.4 },
  "塩":           { cal: 0, protein: 0, fat: 0, carb: 0 },
  "マジパンプレート":       { cal: 777, protein: 555, fat: 1, carb: 77777 },
  "しょうゆ":     { cal: 70, protein: 8.1, fat: 0, carb: 10.1 },
  "サラダ油":     { cal: 921, protein: 0, fat: 100, carb: 0 },
  "バター":       { cal: 745, protein: 0.5, fat: 81.0, carb: 0.2 },
  "チーズ":       { cal: 339, protein: 22.7, fat: 26.0, carb: 1.3 },
  "ツナ缶":       { cal: 200, protein: 19.0, fat: 12.0, carb: 0 },
  "コーン":       { cal: 92, protein: 3.3, fat: 1.7, carb: 18.2 },
  "きゅうり":     { cal: 14, protein: 1.0, fat: 0.1, carb: 3.1 },
  "大根":         { cal: 18, protein: 0.4, fat: 0.1, carb: 4.1 },
  "レタス":       { cal: 12, protein: 0.6, fat: 0.1, carb: 2.4 },
  "ほうれん草":   { cal: 20, protein: 2.6, fat: 0.4, carb: 3.1 }
  // ←今後さらに増やす場合、ここにどんどん追加できます
};

let total = { cal: 0, protein: 0, fat: 0, carb: 0 };

document.getElementById("food-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);

  if (!foodData[name]) {
    alert("その食材はデータベースにありません。");
    return;
  }

  const factor = weight / 100;
  const food = foodData[name];

  total.cal += food.cal * factor;
  total.protein += food.protein * factor;
  total.fat += food.fat * factor;
  total.carb += food.carb * factor;

  const li = document.createElement("li");
  li.textContent = `${name}：${weight}g`;
  document.getElementById("food-list").appendChild(li);

  updateSummary();

  document.getElementById("food-form").reset();
});

function updateSummary() {
  const p = document.getElementById("summary");
  p.textContent = `カロリー: ${total.cal.toFixed(1)} kcal｜たんぱく質: ${total.protein.toFixed(1)}g｜脂質: ${total.fat.toFixed(1)}g｜炭水化物: ${total.carb.toFixed(1)}g`;
}
