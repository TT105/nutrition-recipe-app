// =========================
// ✅ 栄養データ
// =========================
const foodData = {
  "牛もも肉": { cal: 183, protein: 20.7, fat: 10.6, carb: 0.3 },
"にんじん": { cal: 37, protein: 0.6, fat: 0.1, carb: 8.7 },
"たまご": { cal: 155, protein: 13, fat: 11, carb: 1.1 },
"鶏むね肉": { cal: 165, protein: 31, fat: 3.6, carb: 0 },
"豚肉（ロース）": { cal: 263, protein: 20, fat: 20, carb: 0 },
"ごはん": { cal: 168, protein: 2.5, fat: 0.3, carb: 37 },

"じゃがいも": { cal: 76, protein: 1.6, fat: 0.1, carb: 17.6 },
"玉ねぎ": { cal: 37, protein: 1.0, fat: 0.1, carb: 8.8 },
"ピーマン": { cal: 22, protein: 0.9, fat: 0.2, carb: 5.1 },
"キャベツ": { cal: 23, protein: 1.3, fat: 0.2, carb: 5.2 },
"豆腐": { cal: 72, protein: 6.6, fat: 3.5, carb: 1.7 },
"納豆": { cal: 200, protein: 16.5, fat: 10, carb: 12.1 },
"鮭": { cal: 133, protein: 22.5, fat: 4.5, carb: 0.1 },
"まぐろ": { cal: 125, protein: 26, fat: 1.4, carb: 0.2 },
"えび": { cal: 84, protein: 18.4, fat: 0.6, carb: 0.3 },
"いか": { cal: 88, protein: 18.1, fat: 1.2, carb: 0.2 },
"さば": { cal: 202, protein: 20.7, fat: 13.9, carb: 0.3 },
"サンマ": { cal: 310, protein: 18.5, fat: 25.6, carb: 0.3 },
"豆乳": { cal: 46, protein: 3.6, fat: 2.0, carb: 3.1 },
"牛乳": { cal: 67, protein: 3.3, fat: 3.8, carb: 4.8 },
"ヨーグルト": { cal: 62, protein: 5.0, fat: 3.0, carb: 4.9 },
"チーズ": { cal: 356, protein: 22.7, fat: 27.4, carb: 1.3 },
"ベーコン": { cal: 405, protein: 12.5, fat: 38, carb: 1.0 },
"ウインナー": { cal: 321, protein: 12.2, fat: 28.4, carb: 1.3 },
"ハム": { cal: 116, protein: 16.5, fat: 4.6, carb: 1.5 },

"パスタ": { cal: 149, protein: 5.0, fat: 0.9, carb: 30.9 },
"うどん": { cal: 105, protein: 2.6, fat: 0.4, carb: 21.6 },
"そば": { cal: 132, protein: 4.8, fat: 1.0, carb: 24.0 },
"食パン": { cal: 264, protein: 9.3, fat: 4.4, carb: 46.7 },
"バナナ": { cal: 86, protein: 1.1, fat: 0.2, carb: 22.5 },
"りんご": { cal: 56, protein: 0.2, fat: 0.1, carb: 14.6 },
"みかん": { cal: 45, protein: 0.6, fat: 0.1, carb: 11.3 },
"いちご": { cal: 34, protein: 0.9, fat: 0.1, carb: 8.5 },
"ぶどう": { cal: 60, protein: 0.6, fat: 0.1, carb: 15.7 },

"レタス": { cal: 12, protein: 0.9, fat: 0.1, carb: 2.8 },
"きゅうり": { cal: 14, protein: 1.0, fat: 0.1, carb: 3.0 },
"トマト": { cal: 18, protein: 0.7, fat: 0.1, carb: 4.0 },
"ブロッコリー": { cal: 33, protein: 4.3, fat: 0.5, carb: 5.2 },
"ほうれん草": { cal: 20, protein: 2.2, fat: 0.4, carb: 3.1 },
"小松菜": { cal: 14, protein: 1.5, fat: 0.2, carb: 2.4 },
"もやし": { cal: 30, protein: 3.0, fat: 0.1, carb: 5.7 },
"なす": { cal: 22, protein: 1.1, fat: 0.1, carb: 5.1 },
"かぼちゃ": { cal: 66, protein: 1.9, fat: 0.1, carb: 16.0 },

"しいたけ": { cal: 18, protein: 3.0, fat: 0.5, carb: 4.9 },
"しめじ": { cal: 24, protein: 2.7, fat: 0.5, carb: 4.3 },
"えのき": { cal: 37, protein: 2.7, fat: 0.2, carb: 7.8 },
"まいたけ": { cal: 16, protein: 2.0, fat: 0.3, carb: 3.3 },
"こんにゃく": { cal: 6, protein: 0.2, fat: 0.1, carb: 2.3 },

"豆腐（木綿）": { cal: 72, protein: 6.6, fat: 4.2, carb: 1.6 },
"豆腐（絹）": { cal: 56, protein: 4.9, fat: 3.0, carb: 2.0 },
"厚揚げ": { cal: 150, protein: 10.7, fat: 10.5, carb: 4.3 }

};

// =========================
// ✅ レシピデータ
// =========================
const recipes = [
  { name: "鶏肉とにんじんの炒め物", ingredients: ["鶏むね肉","にんじん"], steps: ["鶏肉を切る","にんじんを切る","炒める"] },
  { name: "卵かけご飯", ingredients: ["たまご","ごはん"], steps: ["ごはんを盛る","卵をかける"] },
  { name: "牛もも肉のステーキ", ingredients: ["牛もも肉"], steps: ["牛もも肉を焼く","塩胡椒で味付け"] }
];

// =========================
// ✅ オートコンプリート設定
// =========================
const datalist = document.getElementById("food-options");
Object.keys(foodData).forEach(food => {
  const option = document.createElement("option");
  option.value = food;
  datalist.appendChild(option);
});

// =========================
// ✅ 合計栄養（初期値）
let total = { cal:0, protein:0, fat:0, carb:0 };

// =========================
// ✅ レシピ履歴(localStorage)
// =========================
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

// =========================
// ✅ レシピ提案ロジック
// =========================
function suggestRecipes(userIngredients) {
  return recipes
    .map(r => {
      const matchCount = r.ingredients.filter(i => userIngredients.includes(i)).length;
      return { ...r, matchCount };
    })
    .filter(r => r.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);
}

function updateRecipesLocal() {
  const userIngredients = Array.from(document.querySelectorAll("#food-list li"))
                               .map(li => li.dataset.name);
  const suggested = suggestRecipes(userIngredients);
  const container = document.getElementById("recipe-list");
  container.innerHTML = "";

  if (suggested.length === 0) {
    container.innerHTML = "<p>食材を追加してください</p>";
    return;
  }

  suggested.forEach(r => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${r.name}</h3>
      <p>材料: ${r.ingredients.join(", ")}</p>
      <p>作り方: ${r.steps.join(" → ")}</p>
    `;
    container.appendChild(div);
    addHistory(r.name);
  });
}

// =========================
// ✅ 食材追加処理
// =========================
document.getElementById("food-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);
  const expiry = document.getElementById("food-expiry").value;

  if (!foodData[name]) {
    alert("その食材はデータベースにありません");
    return;
  }
  if (isNaN(weight) || weight <= 0) {
    alert("使用量（g）は正の数で入力してください");
    return;
  }
  if (!expiry) {
    alert("賞味期限を入力してください");
    return;
  }

  const factor = weight / 100;
  const food = foodData[name];
  const item = {
    name,
    weight,
    expiry,
    cal: food.cal * factor,
    protein: food.protein * factor,
    fat: food.fat * factor,
    carb: food.carb * factor
  };

  // ✅ 合計更新
  total.cal += item.cal;
  total.protein += item.protein;
  total.fat += item.fat;
  total.carb += item.carb;

  // ✅ リストに表示
  const li = document.createElement("li");
  li.dataset.name = item.name;
  li.textContent = `${item.name}：${item.weight}g（賞味期限: ${item.expiry}）`;
  document.getElementById("food-list").appendChild(li);

  // ✅ 栄養表示更新
  document.getElementById("summary").textContent =
    `カロリー: ${Math.round(total.cal)} kcal｜` +
    `たんぱく質: ${total.protein.toFixed(1)}g｜` +
    `脂質: ${total.fat.toFixed(1)}g｜` +
    `炭水化物: ${total.carb.toFixed(1)}g`;

  // ✅ レシピ提案更新
  updateRecipesLocal();

  // ✅ 入力フォーム初期化
  document.getElementById("food-form").reset();
  document.getElementById("food-weight").value = 100;
});

// =========================
// ✅ 量調整ボタン
// =========================
document.querySelectorAll(".adjust").forEach(btn => {
  btn.addEventListener("click", () => {
    const diff = Number(btn.dataset.diff);
    const input = document.getElementById("food-weight");
    const newVal = Math.max((parseFloat(input.value) || 0) + diff, 0);
    input.value = newVal;
  });
});

// =========================
// ✅ ページ読み込み時に履歴表示
loadHistory();
