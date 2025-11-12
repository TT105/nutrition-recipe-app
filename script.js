// ==== 栄養管理＆レシピ提案アプリ（完成版） ====

// 1) 既定の賞味期限：常に「今日 + 7日」
const DEFAULT_EXPIRY = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

// 2) 作ったレシピ履歴（localStorage 永続化）
let recipeHistory = JSON.parse(localStorage.getItem("recipeHistory") || "[]");

function renderHistory() {
  const ul = document.getElementById("recipe-history");
  if (!ul) return;
  ul.innerHTML = "";
  recipeHistory.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.date}｜${item.name}`;
    ul.appendChild(li);
  });
}

function addHistoryEntry(name) {
  const now = new Date();
  const date =
    `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(
      now.getDate()
    ).padStart(2, "0")} ` +
    `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  recipeHistory.unshift({ name, date });
  recipeHistory = recipeHistory.slice(0, 100); // 最大100件
  localStorage.setItem("recipeHistory", JSON.stringify(recipeHistory));
  renderHistory();
}

// 3) 食材データ（カテゴリ構造：最小サンプル）※自由に増やしてOK
const foodData = {
  meat: { "牛もも肉": { cal: 140, protein: 19, fat: 6, carb: 0.1 } },
  fish: { "鮭": { cal: 100, protein: 20, fat: 2, carb: 0.1 } },
  veg: {
    "玉ねぎ": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "にんじん": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "ブロッコリー": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
  },
  grain: { "ごはん": { cal: 110, protein: 3, fat: 0.5, carb: 22 } },
  other: {
    "しょうゆ": { cal: 60, protein: 5, fat: 0.1, carb: 5 },
    "みりん": { cal: 230, protein: 0, fat: 0, carb: 50 },
    "こしょう": { cal: 0, protein: 0, fat: 0, carb: 0 },
  },
};

// 4) レシピデータ（最小サンプル）※自由に増やしてOK
const recipes = [
  { name: "牛丼", ingredients: ["牛もも肉", "玉ねぎ", "ごはん", "しょうゆ", "みりん"] },
  { name: "焼き鮭定食", ingredients: ["鮭", "ごはん", "しょうゆ"] },
  { name: "にんじんサラダ", ingredients: ["にんじん", "しょうゆ"] },
];

// 5) 合計栄養
let total = { cal: 0, protein: 0, fat: 0, carb: 0 };

// 6) カスタム食材（localStorage永続化）
let customFoods = JSON.parse(localStorage.getItem("customFoods") || "{}");

// 7) カスタムレシピ（localStorage永続化）
let customRecipes = JSON.parse(localStorage.getItem("customRecipes") || "[]");

// === ユーティリティ ===
// 既存 + カスタムを合成して“全食材”を返す（name -> 栄養）
function computeAllFoods() {
  const base = Object.assign({}, ...Object.values(foodData));
  return { ...base, ...customFoods };
}
// 既存 + カスタムの全レシピを返す
function getAllRecipes() {
  // customRecipes: [{name, ingredients:[]}]
  return [...recipes, ...customRecipes];
}

// 8) Datalist をカテゴリに応じて更新
function updateDatalist(category) {
  const datalist = document.getElementById("food-options");
  if (!datalist) return;
  datalist.innerHTML = "";

  const all = computeAllFoods();
  const entries = Object.entries(all).filter(([name]) => {
    if (category === "all") return true;
    // カスタムは customFoods の category を見る
    if (customFoods[name]) return customFoods[name].category === category;
    // 既存カテゴリ（foodData側）
    return foodData[category] && foodData[category][name];
  });

  entries
    .map(([name]) => name)
    .sort()
    .forEach((food) => {
      const opt = document.createElement("option");
      opt.value = food;
      datalist.appendChild(opt);
    });
}
updateDatalist("all");

// 9) カテゴリタブ切替
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateDatalist(tab.dataset.category);
  });
});

// 10) 合計表示更新
function updateSummary() {
  const s = document.getElementById("summary");
  if (!s) return;
  s.textContent =
    `カロリー: ${total.cal.toFixed(1)} kcal｜` +
    `たんぱく質: ${total.protein.toFixed(1)}g｜` +
    `脂質: ${total.fat.toFixed(1)}g｜` +
    `炭水化物: ${total.carb.toFixed(1)}g`;
}

// 11) 並び順（期限順/入力順）保持
let sortMode = localStorage.getItem("sortMode") || "expiry";

// 食材リストの並べ替え
function renderFoodList() {
  const ul = document.getElementById("food-list");
  if (!ul) return;
  const items = Array.from(ul.querySelectorAll("li"));
  items.sort((a, b) => {
    if (sortMode === "input") {
      return Number(a.dataset.addedAt || 0) - Number(b.dataset.addedAt || 0);
    } else {
      const da = new Date(a.dataset.expiry);
      const db = new Date(b.dataset.expiry);
      return da - db;
    }
  });
  ul.innerHTML = "";
  items.forEach((i) => ul.appendChild(i));
}

// 並び順セレクト連携
document.addEventListener("DOMContentLoaded", () => {
  const sortSelect = document.getElementById("sort-mode");
  if (sortSelect) {
    sortSelect.value = sortMode;
    sortSelect.addEventListener("change", () => {
      sortMode = sortSelect.value;
      localStorage.setItem("sortMode", sortMode);
      renderFoodList();
    });
  }
});

// 12) レシピ提案
function suggestRecipes(ingredients) {
  const pool = getAllRecipes();
  return pool
    .map((r) => ({ ...r, match: r.ingredients.filter((i) => ingredients.includes(i)).length }))
    .filter((r) => r.match > 0)
    .sort((a, b) => b.match - a.match);
}

function updateRecipes() {
  const ingredients = Array.from(document.querySelectorAll("#food-list li")).map(
    (li) => li.dataset.name
  );
  const box = document.getElementById("recipe-list");
  if (!box) return;
  const result = suggestRecipes(ingredients);

  box.innerHTML = "";
  if (result.length === 0) {
    box.innerHTML = "<p>食材を追加してください</p>";
    return;
  }

  result.forEach((r) => {
    const div = document.createElement("div");
    div.classList.add("recipe-item");
    div.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
        <h3 class="recipe-title" style="cursor:pointer; color:#0077cc; margin:0;">${r.name}</h3>
        <button class="cook-btn">✅ 作った</button>
      </div>
      <p style="margin:.3em 0 .4em 0;">一致: ${r.match}/${r.ingredients.length}</p>
      <div class="recipe-ingredients" style="display:none; margin-left:1em; color:#333;">
        <strong>必要な材料:</strong> ${r.ingredients.join("、 ")}
      </div>
    `;

    // ✅ 作った → 履歴に追加
    const cookBtn = div.querySelector(".cook-btn");
    cookBtn.addEventListener("click", () => {
      addHistoryEntry(r.name);
      cookBtn.textContent = "✅ 追加済み";
      cookBtn.disabled = true;
      cookBtn.style.opacity = "0.7";
    });

    // 材料の開閉
    const title = div.querySelector(".recipe-title");
    const ingDiv = div.querySelector(".recipe-ingredients");
    title.addEventListener("click", () => {
      ingDiv.style.display = ingDiv.style.display === "none" ? "block" : "none";
    });

    box.appendChild(div);
  });
}

// 13) 栄養再計算
function recalcTotal() {
  total = { cal: 0, protein: 0, fat: 0, carb: 0 };
  const allFoods = computeAllFoods();
  document.querySelectorAll("#food-list li").forEach((li) => {
    const name = li.dataset.name;
    const m = li.textContent.match(/(\d+(?:\.\d+)?)g/);
    const weight = m ? parseFloat(m[1]) : 0;
    if (allFoods[name]) {
      const f = weight / 100;
      total.cal += allFoods[name].cal * f;
      total.protein += allFoods[name].protein * f;
      total.fat += allFoods[name].fat * f;
      total.carb += allFoods[name].carb * f;
    }
  });
  updateSummary();
  renderRemaining();
}

// 14) 食材追加フォーム
const foodForm = document.getElementById("food-form");
if (foodForm) {
  foodForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("food-name").value.trim();
    const weight = parseFloat(document.getElementById("food-weight").value);
    const expiry = document.getElementById("food-expiry").value || DEFAULT_EXPIRY;

    const allFoods = computeAllFoods();
    if (!allFoods[name]) return alert("その食材はデータベースにありません（カスタムで追加してください）");
    if (isNaN(weight) || weight <= 0) return alert("重量を正しく入力してください");

    // 合計へ加算
    const f = weight / 100;
    total.cal += allFoods[name].cal * f;
    total.protein += allFoods[name].protein * f;
    total.fat += allFoods[name].fat * f;
    total.carb += allFoods[name].carb * f;
    updateSummary();

    // リストへ追加
    const ul = document.getElementById("food-list");
    const li = document.createElement("li");
    li.dataset.name = name;
    li.dataset.expiry = expiry;
    li.dataset.addedAt = Date.now(); // 入力順用タイムスタンプ
    li.innerHTML = `${name}：${weight}g（賞味期限: ${expiry}） <button class="delete-btn">🗑</button>`;

    // 期限が近い場合の見た目
    const diff = (new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24);
    if (diff <= 2) li.classList.add("expiring");

    // 削除
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
      updateRecipes();
      recalcTotal();
    });

    ul.appendChild(li);
    renderFoodList(); // 現行の sortMode に従って並べ替え
    updateRecipes();

    e.target.reset();
    document.getElementById("food-expiry").value = DEFAULT_EXPIRY; // 期限をデフォルトに戻す
  });
}

// 15) 重量調整ボタン
document.querySelectorAll(".adjust").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById("food-weight");
    if (!input) return;
    let v = parseInt(input.value || "0", 10) + parseInt(btn.dataset.diff, 10);
    if (v < 0) v = 0;
    input.value = v;
  });
});

// 16) 🔍 食材検索（全カテゴリ + カスタム込み）
const searchInput = document.getElementById("food-name");
const datalist = document.getElementById("food-options");
if (searchInput && datalist) {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    datalist.innerHTML = "";
    const allFoods = computeAllFoods();
    const results = Object.keys(allFoods).filter((food) => food.toLowerCase().includes(value));
    results.slice(0, 12).forEach((food) => {
      const opt = document.createElement("option");
      opt.value = food;
      datalist.appendChild(opt);
    });
  });
}

// 17) 1日目安（Mifflin-St Jeor + 活動係数）
const ACTIVITY_FACTOR = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very: 1.9,
};
let targets = { kcal: 0, P: 0, F: 0, C: 0 };

function calcTargets() {
  const h = parseFloat(document.getElementById("p-height")?.value || 0); // cm
  const w = parseFloat(document.getElementById("p-weight")?.value || 0); // kg
  const a = parseFloat(document.getElementById("p-age")?.value || 0);
  const sex = document.getElementById("p-sex")?.value;
  const act = document.getElementById("p-activity")?.value;
  if (!h || !w || !a || !sex || !act) return;

  const BMR = sex === "male" ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
  const TDEE = BMR * (ACTIVITY_FACTOR[act] || 1.55);

  const P_g = 1.6 * w; // たんぱく質 1.6 g/kg
  const P_kcal = P_g * 4;
  const F_kcal = TDEE * 0.25; // 脂質 25%
  const F_g = F_kcal / 9;
  const C_kcal = Math.max(TDEE - (P_kcal + F_kcal), 0);
  const C_g = C_kcal / 4;

  targets = { kcal: TDEE, P: P_g, F: F_g, C: C_g };
  renderTargets();
  renderRemaining();
}
function renderTargets() {
  const el = document.getElementById("target-summary");
  if (!el) return;
  el.textContent =
    `目安: カロリー ${targets.kcal.toFixed(0)} kcal / ` +
    `たんぱく質 ${targets.P.toFixed(1)} g / ` +
    `脂質 ${targets.F.toFixed(1)} g / ` +
    `炭水化物 ${targets.C.toFixed(1)} g`;
}
function renderRemaining() {
  const el = document.getElementById("remaining-summary");
  if (!el) return;
  const remain = {
    kcal: Math.max(targets.kcal - total.cal, 0),
    P: Math.max(targets.P - total.protein, 0),
    F: Math.max(targets.F - total.fat, 0),
    C: Math.max(targets.C - total.carb, 0),
  };
  el.textContent =
    `残り: カロリー ${remain.kcal.toFixed(0)} kcal / ` +
    `たんぱく質 ${remain.P.toFixed(1)} g / ` +
    `脂質 ${remain.F.toFixed(1)} g / ` +
    `炭水化物 ${remain.C.toFixed(1)} g`;
}

// 入力変更で即時再計算
["p-height", "p-weight", "p-age", "p-sex", "p-activity"].forEach((id) => {
  const node = document.getElementById(id);
  if (node) node.addEventListener("input", calcTargets);
});

// 18) カスタム食材フォーム
const cfForm = document.getElementById("custom-food-form");
if (cfForm) {
  cfForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cf-name").value.trim();
    const category = document.getElementById("cf-category").value;
    const cal = parseFloat(document.getElementById("cf-cal").value);
    const pro = parseFloat(document.getElementById("cf-pro").value);
    const fat = parseFloat(document.getElementById("cf-fat").value);
    const carb = parseFloat(document.getElementById("cf-carb").value);

    if (!name) return alert("食材名を入力してください");
    if ([cal, pro, fat, carb].some((v) => isNaN(v) || v < 0)) {
      return alert("栄養は0以上の数値で入力してください（100gあたり）");
    }

    // 同名の既存食材と衝突を禁止（上書き許可はここを変える）
    const all = computeAllFoods();
    if (all[name] && !customFoods[name]) {
      return alert("同名の食材が既にあります（別名にしてください）");
    }

    customFoods[name] = { category, cal, protein: pro, fat, carb };
    localStorage.setItem("customFoods", JSON.stringify(customFoods));

    const activeTab = document.querySelector(".tab.active")?.dataset.category || "all";
    updateDatalist(activeTab);

    alert(`「${name}」を追加しました！候補から選べます。`);
    cfForm.reset();
  });
}

// 19) カスタムレシピフォーム
const crForm = document.getElementById("custom-recipe-form");
const crList = document.getElementById("custom-recipe-list");

function renderCustomRecipes() {
  if (!crList) return;
  crList.innerHTML = "";
  customRecipes.forEach((r, idx) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.gap = "8px";
    li.style.padding = "6px 0";
    li.innerHTML = `
      <span><strong>${r.name}</strong>（材料: ${r.ingredients.join("、 ")}）</span>
      <button data-idx="${idx}" class="delete-btn">削除</button>
    `;
    crList.appendChild(li);
  });

  // 削除ハンドラ
  crList.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.idx, 10);
      customRecipes.splice(idx, 1);
      localStorage.setItem("customRecipes", JSON.stringify(customRecipes));
      renderCustomRecipes();
      updateRecipes();
    });
  });
}

if (crForm) {
  crForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cr-name").value.trim();
    const ingsStr = document.getElementById("cr-ings").value.trim();
    if (!name) return alert("レシピ名を入力してください");
    if (!ingsStr) return alert("材料を入力してください（読点/カンマ区切り）");

    const sep = /[、,]/;
    const ingredients = ingsStr.split(sep).map((s) => s.trim()).filter(Boolean);

    // 重複名チェック（既存 + カスタム）
    const all = getAllRecipes();
    if (all.some((r) => r.name === name)) {
      return alert("同名のレシピが既にあります（別名にしてください）");
    }

    customRecipes.unshift({ name, ingredients });
    localStorage.setItem("customRecipes", JSON.stringify(customRecipes));
    renderCustomRecipes();
    updateRecipes();
    crForm.reset();
  });
}

// 20) 履歴全削除ボタン
const clearBtn = document.getElementById("clear-history");
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    if (confirm("履歴をすべて削除しますか？")) {
      localStorage.removeItem("recipeHistory");
      recipeHistory = [];
      renderHistory();
    }
  });
}

// 21) 初期起動
(function init() {
  const expInput = document.getElementById("food-expiry");
  if (expInput) expInput.value = DEFAULT_EXPIRY;
  updateDatalist("all");
  updateSummary();
  renderHistory();
  renderCustomRecipes();
  calcTargets();
  updateRecipes();
})();
