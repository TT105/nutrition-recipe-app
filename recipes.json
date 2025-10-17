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
  "ブロッコリー": { cal: 33, protein: 4.3, fat: 0.5, carb: 5.2 },
  "キャベツ": { cal: 23, protein: 1.3, fat: 0.2, carb: 5.2 }
};

// --------------------
// レシピデータ（50品）
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
  { name: "鶏むね肉とにんじんと玉ねぎ", ingredients: ["鶏むね肉","にんじん","玉ねぎ"] },
  { name: "牛もも肉とブロッコリーとごはん", ingredients: ["牛もも肉","ブロッコリー","ごはん"] },
  { name: "豚肉ロースとキャベツとごはん", ingredients: ["豚肉（ロース）","キャベツ","ごはん"] },
  { name: "たまごとキャベツとごはん", ingredients: ["たまご","キャベツ","ごはん"] },
  { name: "鶏むね肉とキャベツとごはん", ingredients: ["鶏むね肉","キャベツ","ごはん"] },
  { name: "牛もも肉とにんじんとごはん", ingredients: ["牛もも肉","にんじん","ごはん"] },
  { name: "豚肉ロースとにんじんと玉ねぎ", ingredients: ["豚肉（ロース）","にんじん","玉ねぎ"] },
  { name: "たまごとブロッコリーとにんじん", ingredients: ["たまご","ブロッコリー","にんじん"] },
  { name: "鶏むね肉とじゃがいも", ingredients: ["鶏むね肉","じゃがいも"] },
  { name: "牛もも肉とじゃがいも", ingredients: ["牛もも肉","じゃがいも"] },
  { name: "豚肉ロースと玉ねぎ", ingredients: ["豚肉（ロース）","玉ねぎ"] },
  { name: "たまごと玉ねぎ", ingredients: ["たまご","玉ねぎ"] },
  { name: "鶏むね肉とごはんと玉ねぎ", ingredients: ["鶏むね肉","ごはん","玉ねぎ"] },
  { name: "牛もも肉とごはんと玉ねぎ", ingredients: ["牛もも肉","ごはん","玉ねぎ"] },
  { name: "豚肉ロースとじゃがいも", ingredients: ["豚肉（ロース）","じゃがいも"] },
  { name: "たまごとブロッコリー", ingredients: ["たまご","ブロッコリー"] },
  { name: "鶏むね肉とキャベツとにんじん", ingredients: ["鶏むね肉","キャベツ","にんじん"] },
  { name: "牛もも肉とキャベツとブロッコリー", ingredients: ["牛もも肉","キャベツ","ブロッコリー"] },
  { name: "豚肉ロースとごはんとブロッコリー", ingredients: ["豚肉（ロース）","ごはん","ブロッコリー"] },
  { name: "たまごとじゃがいも", ingredients: ["たまご","じゃがいも"] },
  { name: "鶏むね肉とブロッコリーと玉ねぎ", ingredients: ["鶏むね肉","ブロッコリー","玉ねぎ"] },
  { name: "牛もも肉とキャベツとにんじん", ingredients: ["牛もも肉","キャベツ","にんじん"] },
  { name: "豚肉ロースとごはん", ingredients: ["豚肉（ロース）","ごはん"] },
  { name: "たまごとにんじんとごはん", ingredients: ["たまご","にんじん","ごはん"] },
  { name: "鶏むね肉とじゃがいもとにんじん", ingredients: ["鶏むね肉","じゃがいも","にんじん"] },
  { name: "牛もも肉と玉ねぎとブロッコリー", ingredients: ["牛もも肉","玉ねぎ","ブロッコリー"] },
  { name: "豚肉ロースとキャベツとじゃがいも", ingredients: ["豚肉（ロース）","キャベツ","じゃがいも"] },
  { name: "たまごとごはんとじゃがいも", ingredients: ["たまご","ごはん","じゃがいも"] },
  { name: "鶏むね肉とブロッコリーとごはん", ingredients: ["鶏むね肉","ブロッコリー","ごはん"] },
  { name: "牛もも肉とブロッコリーとにんじん", ingredients: ["牛もも肉","ブロッコリー","にんじん"] }
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
// 栄養計算・履歴・提案機能
let total = { cal: 0, protein: 0, fat: 0, carb: 0 };

function updateSummary() {
  const s = document.getElementById("summary");
  s.textContent = `カロリー: ${total.cal.toFixed(1)} kcal｜たんぱく質: ${total.protein.toFixed(1)}g｜脂質: ${total.fat.toFixed(1)}g｜炭水化物: ${total.carb.toFixed(1)}g`;
}

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

function suggestRecipes(userIngredients) {
  return recipes.map(r=>{
    const match = r.ingredients.filter(i=>userIngredients.includes(i)).length;
    return {...r, match};
  }).filter(r=>r.match>0).sort((a,b)=>b.match-a.match);
}

function updateRecipes(){
  const userIngredients = Array.from(document.querySelectorAll("#food-list li")).map(li=>li.textContent.split("：")[0]);
  const suggested = suggestRecipes(userIngredients);
  const container = document.getElementById("recipe-list");
  container.innerHTML="";
  if(suggested.length===0){ container.innerHTML="<p>食材を追加してください</p>"; return; }
  suggested.forEach(r=>{
    const div=document.createElement("div");
    div.textContent=`${r.name}（一致: ${r.match}/${r.ingredients.length}）`;
    container.appendChild(div);
    addHistory(r.name);
  });
}

// --------------------
// 食材追加フォーム
document.getElementById("food-form").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("food-name").value.trim();
  const weight=parseFloat(document.getElementById("food-weight").value);
  const expiry=document.getElementById("food-expiry").value;

  if(!foodData[name]) return alert("その食材はデータベースにありません");
  if(isNaN(weight)||weight<=0) return alert("使用量（g）は正の数で入力してください");
  if(!expiry) return alert("賞味期限を入力してください");

  const factor=weight/100;
  total.cal+=foodData[name].cal*factor;
  total.protein+=foodData[name].protein*factor;
  total.fat+=foodData[name].fat*factor;
  total.carb+=foodData[name].carb*factor;
  updateSummary();

  const li=document.createElement("li");
  li.textContent=`${name}：${weight}g（賞味期限: ${expiry}）`;
  const days=(new Date(expiry)-new Date())/(1000*60*60*24);
  if(days<=2) li.style.color="red";
  document.getElementById("food-list").appendChild(li);

  updateRecipes();
  document.getElementById("food-form").reset();
});

// --------------------
// 重量ボタン
document.querySelectorAll(".adjust").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const input=document.getElementById("food-weight");
    let v=parseInt(input.value)+parseInt(btn.dataset.diff);
    if(v<0) v=0;
    input.value=v;
  });
});

// --------------------
// 初期ロード
window.addEventListener("load",()=>{
  updateSummary();
  loadHistory();
});
