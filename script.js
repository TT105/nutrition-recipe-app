// --------------------
// 食材データ（カテゴリ別）
const foodData = {
  meat: {
    "牛もも肉": { cal: 183, protein: 20.7, fat: 10.6, carb: 0.3 },
    "豚ロース": { cal: 263, protein: 20, fat: 20, carb: 0 },
    "鶏むね肉": { cal: 165, protein: 31, fat: 3.6, carb: 0 },
    "鶏もも肉": { cal: 200, protein: 17, fat: 14, carb: 0 }
  },
  fish: {
    "鮭": { cal: 133, protein: 22.5, fat: 4.5, carb: 0.1 },
    "さば": { cal: 202, protein: 20.7, fat: 13.9, carb: 0.3 },
    "えび": { cal: 84, protein: 18.4, fat: 0.6, carb: 0.3 }
  },
  veg: {
    "にんじん": { cal: 37, protein: 0.6, fat: 0.1, carb: 8.7 },
    "玉ねぎ": { cal: 37, protein: 1.0, fat: 0.1, carb: 8.8 },
    "キャベツ": { cal: 23, protein: 1.3, fat: 0.2, carb: 5.2 },
    "ブロッコリー": { cal: 33, protein: 4.3, fat: 0.5, carb: 5.2 }
  },
  grain: {
    "ごはん": { cal: 168, protein: 2.5, fat: 0.3, carb: 37 },
    "うどん": { cal: 105, protein: 2.6, fat: 0.4, carb: 21.6 },
    "パスタ": { cal: 149, protein: 5.0, fat: 0.9, carb: 30.9 }
  },
  other: {
    "たまご": { cal: 155, protein: 13, fat: 11, carb: 1.1 },
    "豆腐": { cal: 72, protein: 6.6, fat: 3.5, carb: 1.7 },
    "牛乳": { cal: 67, protein: 3.3, fat: 3.8, carb: 4.8 }
  }
};

// --------------------
// レシピデータ
const recipes = [
  { name: "牛丼", ingredients: ["牛もも肉", "玉ねぎ", "ごはん"] },
  { name: "鶏の照り焼き", ingredients: ["鶏もも肉", "しょうゆ", "みりん"] },
  { name: "野菜炒め", ingredients: ["キャベツ", "にんじん", "豚ロース"] },
  { name: "鮭のムニエル", ingredients: ["鮭", "バター"] },
  { name: "たまごスープ", ingredients: ["たまご", "ブロッコリー"] }
];

// --------------------
// 栄養合計
let total = { cal: 0, protein: 0, fat: 0, carb: 0 };

// --------------------
// Datalistをカテゴリに応じて更新
function updateDatalist(category) {
  const datalist = document.getElementById("food-options");
  datalist.innerHTML = "";
  const data = category === "all"
    ? Object.assign({}, ...Object.values(foodData))
    : foodData[category];
  Object.keys(data).forEach(food => {
    const opt = document.createElement("option");
    opt.value = food;
    datalist.appendChild(opt);
  });
}
updateDatalist("all");

// --------------------
// タブ切り替え
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    updateDatalist(tab.dataset.category);
  });
});

// --------------------
// 合計更新
function updateSummary() {
  const s = document.getElementById("summary");
  s.textContent = `カロリー: ${total.cal.toFixed(1)} kcal｜たんぱく質: ${total.protein.toFixed(1)}g｜脂質: ${total.fat.toFixed(1)}g｜炭水化物: ${total.carb.toFixed(1)}g`;
}

// --------------------
// 食材リスト（期限順ソート）
function renderFoodList() {
  const ul = document.getElementById("food-list");
  const items = Array.from(ul.querySelectorAll("li"));
  items.sort((a, b) => {
    const da = new Date(a.dataset.expiry);
    const db = new Date(b.dataset.expiry);
    return da - db;
  });
  ul.innerHTML = "";
  items.forEach(i => ul.appendChild(i));
}

// --------------------
// レシピ提案
function suggestRecipes(ingredients) {
  return recipes
    .map(r => ({ ...r, match: r.ingredients.filter(i => ingredients.includes(i)).length }))
    .filter(r => r.match > 0)
    .sort((a, b) => b.match - a.match);
}

function updateRecipes() {
  const ingredients = Array.from(document.querySelectorAll("#food-list li")).map(li => li.dataset.name);
  const result = suggestRecipes(ingredients);
  const box = document.getElementById("recipe-list");
  box.innerHTML = result.length
    ? result.map(r => `<div>${r.name}（一致: ${r.match}/${r.ingredients.length}）</div>`).join("")
    : "<p>食材を追加してください</p>";
}

// --------------------
// 食材追加フォーム
document.getElementById("food-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);
  const expiry = document.getElementById("food-expiry").value;

  const allFoods = Object.assign({}, ...Object.values(foodData));
  if (!allFoods[name]) return alert("その食材はデータベースにありません");
  if (isNaN(weight) || weight <= 0) return alert("重量を正しく入力してください");

  const f = weight / 100;
  total.cal += allFoods[name].cal * f;
  total.protein += allFoods[name].protein * f;
  total.fat += allFoods[name].fat * f;
  total.carb += allFoods[name].carb * f;
  updateSummary();

  const li = document.createElement("li");
  li.dataset.name = name;
  li.dataset.expiry = expiry;
  li.innerHTML = `${name}：${weight}g（賞味期限: ${expiry}） <button class="delete-btn">🗑</button>`;

  // 賞味期限が近い場合は赤
  const diff = (new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24);
  if (diff <= 2) li.style.color = "red";

  // 削除ボタン
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    updateRecipes();
    recalcTotal();
  });

  document.getElementById("food-list").appendChild(li);
  renderFoodList();
  updateRecipes();
  e.target.reset();
});

// --------------------
// 栄養再計算
function recalcTotal() {
  total = { cal: 0, protein: 0, fat: 0, carb: 0 };
  const allFoods = Object.assign({}, ...Object.values(foodData));
  document.querySelectorAll("#food-list li").forEach(li => {
    const name = li.dataset.name;
    const weight = parseFloat(li.textContent.match(/(\d+)g/)[1]);
    if (allFoods[name]) {
      const f = weight / 100;
      total.cal += allFoods[name].cal * f;
      total.protein += allFoods[name].protein * f;
      total.fat += allFoods[name].fat * f;
      total.carb += allFoods[name].carb * f;
    }
  });
  updateSummary();
}

// --------------------
// 初期起動
updateSummary();
