// 栄養データ
const foodData = {
  "牛もも肉": { cal: 183, protein: 20.7, fat: 10.6, carb: 0.3 },
  "にんじん": { cal: 37, protein: 0.6, fat: 0.1, carb: 8.7 },
  "たまご": { cal: 155, protein: 13, fat: 11, carb: 1.1 },
  "鶏むね肉": { cal: 165, protein: 31, fat: 3.6, carb: 0 },
  "豚肉（ロース）": { cal: 263, protein: 20, fat: 20, carb: 0 },
  "ごはん": { cal: 168, protein: 2.5, fat: 0.3, carb: 37 }
};

// レシピデータ
const recipes = [
  { name: "鶏肉とにんじんの炒め物", ingredients: ["鶏むね肉","にんじん"], steps: ["鶏肉を切る","にんじんを切る","炒める"] },
  { name: "卵かけご飯", ingredients: ["たまご","ごはん"], steps: ["ごはんを盛る","卵をかける"] },
  { name: "牛もも肉のステーキ", ingredients: ["牛もも肉"], steps: ["牛もも肉を焼く","塩胡椒で味付け"] }
];

// オートコンプリート
const datalist = document.getElementById("food-options");
Object.keys(foodData).forEach(food => {
  const option = document.createElement("option");
  option.value = food;
  datalist.appendChild(option);
});

let total = { cal:0, protein:0, fat:0, carb:0 };

// --------------------
// レシピ履歴（localStorage）
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
    history.unshift(recipeName); // 新しいものを先頭
    if(history.length>20) history.pop(); // 最大20件
    localStorage.setItem("recipeHistory", JSON.stringify(history));
    loadHistory();
  }
}

// --------------------
// レシピ提案（自力版）
function suggestRecipes(userIngredients) {
  return recipes
    .map(r => {
      const matchCount = r.ingredients.filter(i => userIngredients.includes(i)).length;
      return { ...r, matchCount };
    })
    .filter(r => r.matchCount>0)
    .sort((a,b)=>b.matchCount-a.matchCount);
}

function updateRecipesLocal() {
  const userIngredients = Array.from(document.querySelectorAll("#food-list li"))
                               .map(li=>li.textContent.split("：")[0]);
  const suggested = suggestRecipes(userIngredients);
  const container = document.getElementById("recipe-list");
  container.innerHTML = "";

  if(suggested.length===0){ container.innerHTML="<p>食材を追加してください</p>"; return; }

  suggested.forEach(r=>{
    const div = document.createElement("div");
    div.innerHTML=`<h3>${r.name}</h3>
                   <p>材料: ${r.ingredients.join(", ")}</p>
                   <p>作り方: ${r.steps.join(" → ")}</p>`;
    container.appendChild(div);
    addHistory(r.name); // 作ったレシピとして履歴追加
  });
}

// --------------------
// 食材追加処理（消費期限対応）
document.getElementById("food-form").addEventListener("submit",function(e){
  e.preventDefault();
  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);
  const expiry = document.getElementById("food-expiry").value;

  if(!foodData[name]){ alert("その食材はデータベースにありません"); return; }
  if(isNaN(weight)||weight<=0){ alert("使用量（g）は正の数で入力してください"); return; }
  if(!expiry){ alert("賞味期限を入力してください"); return; }

  const factor = weight/100;
  const food = foodData[name];
  const item = {
   
