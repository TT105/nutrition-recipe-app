// --------------------
// 栄養データ（100gあたり）
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

// --------------------
// レシピデータ（50品、調理方法なし）
const recipes = [
  { name: "鶏むね肉とにんじん", ingredients: ["鶏むね肉","にんじん"] },
  { name: "牛もも肉とにんじん", ingredients: ["牛もも肉","にんじん"] },
  { name: "豚肉ロースとキャベツ", ingredients: ["豚肉（ロース）","キャベツ"] },
  { name: "たまごとごはん", ingredients: ["たまご","ごはん"] },
  { name: "鶏むね肉とキャベツ", ingredients: ["鶏むね肉","キャベツ"] },
  { name: "牛もも肉とブロッコリー", ingredients: ["牛もも肉","ブロッコリー"] },
  { name: "豚肉ロースとにんじん", ingredients: ["豚肉（ロース）","にんじん"] },
  { name: "たまごとにんじん", ingredients: ["たまご","にんじん"] },
  { name: "鶏むね肉とブロッコリー", ingredients: ["鶏むね肉","ブロッコリー"] },
  { name: "牛もも肉と玉ねぎ", ingredients: ["牛もも肉","玉ねぎ"] },
  { name: "豚肉ロースとじゃがいも", ingredients: ["豚肉（ロース）","じゃがいも"] },
  { name: "鶏むね肉と玉ねぎ", ingredients: ["鶏むね肉","玉ねぎ"] },
  { name: "たまごとキャベツ", ingredients: ["たまご","キャベツ"] },
  { name: "牛もも肉とにんじんと玉ねぎ", ingredients: ["牛もも肉","にんじん","玉ねぎ"] },
  { name: "鶏むね肉とじゃがいもとブロッコリー", ingredients: ["鶏むね肉","じゃがいも","ブロッコリー"] },
  { name: "豚肉ロースとキャベツとにんじん", ingredients: ["豚肉（ロース）","キャベツ","にんじん"] },
  { name: "たまごとブロッコリーとにんじん", ingredients: ["たまご","ブロッコリー","にんじん"] },
  { name: "牛もも肉とごはん", ingredients: ["牛もも肉","ごはん"] },
  { name: "鶏むね肉とごはん", ingredients: ["鶏むね肉","ごはん"] },
  { name: "豚肉ロースとごはん", ingredients: ["豚肉（ロース）","ごはん"] },
  { name: "たまごとじゃがいも", ingredients: ["たまご","じゃがいも"] },
  { name: "鶏むね肉とにんじんと玉ねぎ", ingredients: ["鶏むね肉","にんじん","玉ねぎ"] },
  { name: "牛もも肉とブロッコリーとにんじん", ingredients: ["牛もも肉","ブロッコリー","にんじん"] },
  { name: "豚肉ロースと玉ねぎとブロッコリー", ingredients: ["豚肉（ロース）","玉ねぎ","ブロッコリー"] },
  { name: "たまごとごはんとにんじん", ingredients: ["たまご","ごはん","にんじん"] },
  { name: "鶏むね肉とキャベツとにんじん", ingredients: ["鶏むね肉","キャベツ","にんじん"] },
  { name: "牛もも肉とじゃがいもと玉ねぎ", ingredients: ["牛もも肉","じゃがいも","玉ねぎ"] },
  { name: "豚肉ロースとごはんとブロッコリー", ingredients: ["豚肉（ロース）","ごはん","ブロッコリー"] },
  { name: "たまごとキャベツとブロッコリー", ingredients: ["たまご","キャベツ","ブロッコリー"] },
  { name: "鶏むね肉とごはんと玉ねぎ", ingredients: ["鶏むね肉","ごはん","玉ねぎ"] },
  { name: "牛もも肉とにんじんとごはん", ingredients: ["牛もも肉","にんじん","ごはん"] },
  { name: "豚肉ロースとにんじんと玉ねぎ", ingredients: ["豚肉（ロース）","にんじん","玉ねぎ"] },
  { name: "たまごとじゃがいもとキャベツ", ingredients: ["たまご","じゃがいも","キャベツ"] },
  { name: "鶏むね肉とブロッコリーと玉ねぎ", ingredients: ["鶏むね肉","ブロッコリー","玉ねぎ"] },
  { name: "牛もも肉とキャベツとにんじん", ingredients: ["牛もも肉","キャベツ","にんじん"] },
  { name: "豚肉ロースとごはんと玉ねぎ", ingredients: ["豚肉（ロース）","ごはん","玉ねぎ"] },
  { name: "たまごとごはんとブロッコリー", ingredients: ["たまご","ごはん","ブロッコリー"] },
  { name: "鶏むね肉とじゃがいもとにんじん", ingredients: ["鶏むね肉","じゃがいも","にんじん"] },
  { name: "牛もも肉とブロッコリーとごはん", ingredients: ["牛もも肉","ブロッコリー","ごはん"] },
  { name: "豚肉ロースとキャベツとごはん", ingredients: ["豚肉（ロース）","キャベツ","ごはん"] },
  { name: "たまごとにんじんと玉ねぎ", ingredients: ["たまご","にんじん","玉ねぎ"] },
  { name: "鶏むね肉とキャベツとごはん", ingredients: ["鶏むね肉","キャベツ","ごはん"] },
  { name: "牛もも肉とごはんと玉ねぎ", ingredients: ["牛もも肉","ごはん","玉ねぎ"] },
  { name: "豚肉ロースとじゃがいもとブロッコリー", ingredients: ["豚肉（ロース）","じゃがいも","ブロッコリー"] },
  { name: "たまごとキャベツとごはん", ingredients: ["たまご","キャベツ","ごはん"] },
  { name: "鶏むね肉とにんじんとブロッコリー", ingredients: ["鶏むね肉","にんじん","ブロッコリー"] },
  { name: "牛もも肉と玉ねぎとブロッコリー", ingredients: ["牛もも肉","玉ねぎ","ブロッコリー"] },
  { name: "豚肉ロースとキャベツとじゃがいも", ingredients: ["豚肉（ロース）","キャベツ","じゃがいも"] },
  { name: "たまごとごはんとじゃがいも", ingredients: ["たまご","ごはん","じゃがいも"] },
  { name: "鶏むね肉とブロッコリーとごはん", ingredients: ["鶏むね肉","ブロッコリー","ごはん"] },
  { name: "牛もも肉とキャベツとブロッコリー", ingredients: ["牛もも肉","キャベツ","ブロッコリー"] },
  { name: "豚肉ロースと玉ねぎとごはん", ingredients: ["豚肉（ロース）","玉ねぎ","ごはん"] }
];

// --------------------
// オートコンプリート設定
const datalist = document.getElementById("food-options");
Object.keys(foodData).forEach(food => {
  const option = document.createElement("option");
  option.value = food;
  datalist.appendChild(option);
});

// --------------------
// 登録済み食材リストと栄養素計算
let total = { cal:0, protein:0, fat:0, carb:0 };

function updateSummary() {
  const summary = document.getElementById("summary");
  summary.textContent = `カロリー: ${total.cal.toFixed(1)} kcal｜たんぱく質: ${total.protein.toFixed(1)}g｜脂質: ${total.fat.toFixed(1)}g｜炭水化物: ${total.carb.toFixed(1)}g`;
}

// --------------------
// レシピ履歴
function loadHistory() {
  const history = JSON.parse(localStorage.getItem("recipeHistory")||"[]");
  const ul = document.getElementById("recipe-history");
  ul.innerHTML = "";
  history.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    ul.appendChild(li);
  });
}

function addHistory(recipeName){
  let history = JSON.parse(localStorage.getItem("recipeHistory")||"[]");
  if(!history.includes(recipeName)){
    history.unshift(recipeName);
    if(history.length>20) history.pop();
    localStorage.setItem("recipeHistory", JSON.stringify(history));
    loadHistory();
  }
}

// --------------------
// レシピ提案（部分一致対応）
function suggestRecipes(userIngredients) {
  return recipes
    .map(r => {
      const matchCount = r.ingredients.filter(i => userIngredients.includes(i)).length;
      return {...r, matchCount};
    })
    .filter(r => r.matchCount > 0)
    .sort((a,b)=>b.matchCount - a.matchCount);
}

function updateRecipes() {
  const userIngredients = Array.from(document.querySelectorAll("#food-list li"))
                               .map(li=>li.textContent.split("：")[0]);
  const suggested = suggestRecipes(userIngredients);
  const container = document.getElementById("recipe-list");
  container.innerHTML = "";

  if(suggested.length===0){ 
    container.innerHTML="<p>食材を追加してください</p>"; 
    return; 
  }

  suggested.forEach(r=>{
    const div = document.createElement("div");
    div.textContent = r.name + `（持っている食材: ${r.matchCount}/${r.ingredients.length}）`;
    container.appendChild(div);
    addHistory(r.name);
  });
}

// --------------------
// 食材追加フォーム
document.getElementById("food-form").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);
  const expiry = document.getElementById("food-expiry").value;

  if(!foodData[name]) { alert("その食材はデータベースにありません"); return; }
  if(isNaN(weight)||weight<=0) { alert("使用量（g）は正の数で入力してください"); return; }
  if(!expiry) { alert("賞味期限を入力してください"); return; }

  // 栄養素加算
  const factor = weight/100;
  total.cal += foodData[name].cal * factor;
  total.protein += foodData[name].protein * factor;
  total.fat += foodData[name].fat * factor;
  total.carb +=
