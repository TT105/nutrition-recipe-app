// --------------------
// 栄養データ（100gあたり）
const foodData = {
  // 🥩 肉類
  "牛もも肉": { cal: 183, protein: 20.7, fat: 10.6, carb: 0.3 },
  "牛バラ肉": { cal: 371, protein: 14.4, fat: 34.4, carb: 0.2 },
  "豚ロース": { cal: 263, protein: 20, fat: 20, carb: 0 },
  "豚バラ": { cal: 386, protein: 14, fat: 35, carb: 0 },
  "鶏むね肉": { cal: 165, protein: 31, fat: 3.6, carb: 0 },
  "鶏もも肉": { cal: 200, protein: 17, fat: 14, carb: 0 },
  "ひき肉（合挽き）": { cal: 230, protein: 17.7, fat: 17, carb: 0.5 },

  // 🐟 魚介類
  "鮭": { cal: 133, protein: 22.5, fat: 4.5, carb: 0.1 },
  "まぐろ": { cal: 125, protein: 26, fat: 1.4, carb: 0.2 },
  "さば": { cal: 202, protein: 20.7, fat: 13.9, carb: 0.3 },
  "サンマ": { cal: 310, protein: 18.5, fat: 25.6, carb: 0.3 },
  "えび": { cal: 84, protein: 18.4, fat: 0.6, carb: 0.3 },
  "いか": { cal: 88, protein: 18.1, fat: 1.2, carb: 0.2 },

  // 🥚 乳・卵
  "たまご": { cal: 155, protein: 13, fat: 11, carb: 1.1 },
  "牛乳": { cal: 67, protein: 3.3, fat: 3.8, carb: 4.8 },
  "ヨーグルト": { cal: 62, protein: 5, fat: 3, carb: 4.9 },
  "チーズ": { cal: 356, protein: 22.7, fat: 27.4, carb: 1.3 },

  // 🌾 穀類
  "ごはん": { cal: 168, protein: 2.5, fat: 0.3, carb: 37 },
  "うどん": { cal: 105, protein: 2.6, fat: 0.4, carb: 21.6 },
  "そば": { cal: 132, protein: 4.8, fat: 1.0, carb: 24.0 },
  "パスタ": { cal: 149, protein: 5, fat: 0.9, carb: 30.9 },
  "食パン": { cal: 264, protein: 9.3, fat: 4.4, carb: 46.7 },

  // 🥦 野菜
  "にんじん": { cal: 37, protein: 0.6, fat: 0.1, carb: 8.7 },
  "玉ねぎ": { cal: 37, protein: 1.0, fat: 0.1, carb: 8.8 },
  "じゃがいも": { cal: 76, protein: 1.6, fat: 0.1, carb: 17.6 },
  "キャベツ": { cal: 23, protein: 1.3, fat: 0.2, carb: 5.2 },
  "ブロッコリー": { cal: 33, protein: 4.3, fat: 0.5, carb: 5.2 },
  "ピーマン": { cal: 22, protein: 0.9, fat: 0.2, carb: 5.1 },
  "トマト": { cal: 18, protein: 0.7, fat: 0.1, carb: 4.0 },
  "なす": { cal: 22, protein: 1.1, fat: 0.1, carb: 5.1 },
  "レタス": { cal: 12, protein: 0.9, fat: 0.1, carb: 2.8 },
  "ほうれん草": { cal: 20, protein: 2.2, fat: 0.4, carb: 3.1 },

  // 🍄 きのこ
  "しいたけ": { cal: 18, protein: 3, fat: 0.5, carb: 4.9 },
  "しめじ": { cal: 24, protein: 2.7, fat: 0.5, carb: 4.3 },
  "えのき": { cal: 37, protein: 2.7, fat: 0.2, carb: 7.8 },
  "まいたけ": { cal: 16, protein: 2, fat: 0.3, carb: 3.3 },

  // 🍎 果物
  "りんご": { cal: 56, protein: 0.2, fat: 0.1, carb: 14.6 },
  "バナナ": { cal: 86, protein: 1.1, fat: 0.2, carb: 22.5 },
  "みかん": { cal: 45, protein: 0.6, fat: 0.1, carb: 11.3 },
  "いちご": { cal: 34, protein: 0.9, fat: 0.1, carb: 8.5 },
  "ぶどう": { cal: 60, protein: 0.6, fat: 0.1, carb: 15.7 },

  // 🫘 豆・大豆製品
  "豆腐": { cal: 72, protein: 6.6, fat: 3.5, carb: 1.7 },
  "納豆": { cal: 200, protein: 16.5, fat: 10, carb: 12.1 },
  "豆乳": { cal: 46, protein: 3.6, fat: 2, carb: 3.1 }
};



// --------------------
// レシピデータ（実際の料理名に修正）
const recipes = [
  { name: "牛丼", ingredients: ["牛もも肉", "玉ねぎ", "ごはん"] },
  { name: "豚の生姜焼き", ingredients: ["豚ロース", "玉ねぎ"] },
  { name: "鶏むね肉の照り焼き", ingredients: ["鶏むね肉", "しょうゆ", "みりん"] },
  { name: "親子丼", ingredients: ["鶏もも肉", "たまご", "玉ねぎ", "ごはん"] },
  { name: "鮭のムニエル", ingredients: ["鮭", "バター"] },
  { name: "麻婆豆腐", ingredients: ["ひき肉（合挽き）", "豆腐", "ねぎ"] },
  { name: "オムライス", ingredients: ["たまご", "ごはん", "ケチャップ"] },
  { name: "肉じゃが", ingredients: ["牛もも肉", "じゃがいも", "にんじん", "玉ねぎ"] },
  { name: "豚汁", ingredients: ["豚ロース", "にんじん", "玉ねぎ", "じゃがいも"] },
  { name: "野菜炒め", ingredients: ["キャベツ", "にんじん", "もやし", "豚ロース"] },
  { name: "ブロッコリーサラダ", ingredients: ["ブロッコリー", "たまご", "マヨネーズ"] },
  { name: "ナポリタン", ingredients: ["パスタ", "ピーマン", "玉ねぎ", "ケチャップ"] },
  { name: "ハンバーグ", ingredients: ["ひき肉（合挽き）", "玉ねぎ", "パン粉"] },
  { name: "ポテトサラダ", ingredients: ["じゃがいも", "にんじん", "マヨネーズ"] },
  { name: "カレーライス", ingredients: ["牛もも肉", "にんじん", "じゃがいも", "玉ねぎ", "ごはん"] },
  { name: "親子スープ", ingredients: ["たまご", "鶏むね肉", "ねぎ"] },
  { name: "ブリの照り焼き", ingredients: ["ブリ", "しょうゆ", "みりん"] },
  { name: "きんぴらごぼう", ingredients: ["ごぼう", "にんじん", "しょうゆ"] },
  { name: "ミートスパゲッティ", ingredients: ["パスタ", "ひき肉（合挽き）", "トマト"] },
  { name: "たまごスープ", ingredients: ["たまご", "ねぎ"] }
];


// --------------------
// 食材オートコンプリート設定
const datalist = document.getElementById("food-options");
Object.keys(foodData).forEach(food => {
  const option = document.createElement("option");
  option.value = food;
  datalist.appendChild(option);
});


// --------------------
// 栄養素合計表示用
let total = { cal: 0, protein: 0, fat: 0, carb: 0 };

function updateSummary() {
  const s = document.getElementById("summary");
  s.textContent = `カロリー: ${total.cal.toFixed(1)} kcal｜たんぱく質: ${total.protein.toFixed(1)}g｜脂質: ${total.fat.toFixed(1)}g｜炭水化物: ${total.carb.toFixed(1)}g`;
}


// --------------------
// レシピ履歴保存
function loadHistory() {
  const history = JSON.parse(localStorage.getItem("recipeHistory") || "[]");
  const ul = document.getElementById("recipe-history");
  ul.innerHTML = "";
  history.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    ul.appendChild(li);
  });
}

function addHistory(recipeName) {
  let history = JSON.parse(localStorage.getItem("recipeHistory") || "[]");
  if (!history.includes(recipeName)) {
    history.unshift(recipeName);
    if (history.length > 20) history.pop();
    localStorage.setItem("recipeHistory", JSON.stringify(history));
    loadHistory();
  }
}


// --------------------
// レシピ提案
function suggestRecipes(userIngredients) {
  return recipes
    .map(r => {
      const match = r.ingredients.filter(i => userIngredients.includes(i)).length;
      return { ...r, match };
    })
    .filter(r => r.match > 0)
    .sort((a, b) => b.match - a.match);
}

function updateRecipes() {
  const userIngredients = Array.from(document.querySelectorAll("#food-list li")).map(li => li.textContent.split("：")[0]);
  const suggested = suggestRecipes(userIngredients);
  const container = document.getElementById("recipe-list");
  container.innerHTML = "";
  if (suggested.length === 0) {
    container.innerHTML = "<p>食材を追加してください</p>";
    return;
  }
  suggested.forEach(r => {
    const div = document.createElement("div");
    div.textContent = `${r.name}（一致: ${r.match}/${r.ingredients.length}）`;
    container.appendChild(div);
    addHistory(r.name);
  });
}


// --------------------
// 食材追加フォーム処理
document.getElementById("food-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);
  const expiry = document.getElementById("food-expiry").value || "2025-10-01"; // ← 固定日付

  if (!foodData[name]) return alert("その食材はデータベースにありません");
  if (isNaN(weight) || weight <= 0) return alert("使用量（g）は正の数で入力してください");

  const factor = weight / 100;
  total.cal += foodData[name].cal * factor;
  total.protein += foodData[name].protein * factor;
  total.fat += foodData[name].fat * factor;
  total.carb += foodData[name].carb * factor;
  updateSummary();

  const li = document.createElement("li");
  li.textContent = `${name}：${weight}g（賞味期限: ${expiry}）`;

  const days = (new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24);
  if (days <= 2) li.style.color = "red";

  document.getElementById("food-list").appendChild(li);

  updateRecipes();
  document.getElementById("food-form").reset();
});


// --------------------
// 重量調整ボタン
document.querySelectorAll(".adjust").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = document.getElementById("food-weight");
    let v = parseInt(input.value) + parseInt(btn.dataset.diff);
    if (v < 0) v = 0;
    input.value = v;
  });
});


// --------------------
// 初期ロード
window.addEventListener("load", () => {
  loadHistory();
  updateSummary();

  // 初期賞味期限を2025-10-01に設定
  document.getElementById("food-expiry").value = "2025-10-01";
});
