// ==== 栄養管理＆レシピ提案アプリ（拡張フルデータベース版） ====
// デフォルト賞味期限
const DEFAULT_EXPIRY = "2025-10-01";

// --------------------
// 食材データ（カテゴリ別：200品以上）
const foodData = {
  meat: {
    "牛もも肉": { cal: 140, protein: 19, fat: 6, carb: 0.1 },
    "牛バラ肉": { cal: 170, protein: 21, fat: 8, carb: 0.3 },
    "牛肩ロース": { cal: 200, protein: 23, fat: 12, carb: 0.3 },
    "牛ひき肉": { cal: 240, protein: 25, fat: 16, carb: 0.3 },
    "牛タン": { cal: 290, protein: 20, fat: 22, carb: 0.3 },
    "牛ヒレ": { cal: 330, protein: 18, fat: 28, carb: 0.1 },
    "牛サーロイン": { cal: 140, protein: 19, fat: 6, carb: 0.3 },
    "牛すじ": { cal: 170, protein: 21, fat: 8, carb: 0.3 },
    "豚ロース": { cal: 200, protein: 23, fat: 12, carb: 0.3 },
    "豚バラ": { cal: 240, protein: 25, fat: 16, carb: 0.3 },
    "豚肩ロース": { cal: 290, protein: 20, fat: 22, carb: 0.1 },
    "豚ひき肉": { cal: 330, protein: 18, fat: 28, carb: 0.3 },
    "豚ヒレ": { cal: 140, protein: 19, fat: 6, carb: 0.3 },
    "豚小間切れ": { cal: 170, protein: 21, fat: 8, carb: 0.3 },
    "スペアリブ": { cal: 200, protein: 23, fat: 12, carb: 0.3 },
    "チャーシュー": { cal: 240, protein: 25, fat: 16, carb: 0.1 },
    "鶏むね肉": { cal: 290, protein: 20, fat: 22, carb: 0.3 },
    "鶏もも肉": { cal: 330, protein: 18, fat: 28, carb: 0.3 },
    "鶏ささみ": { cal: 140, protein: 19, fat: 6, carb: 0.3 },
    "鶏手羽先": { cal: 170, protein: 21, fat: 8, carb: 0.3 },
    "鶏手羽元": { cal: 200, protein: 23, fat: 12, carb: 0.1 },
    "鶏ひき肉": { cal: 240, protein: 25, fat: 16, carb: 0.3 },
    "鶏砂肝": { cal: 290, protein: 20, fat: 22, carb: 0.3 },
    "鶏レバー": { cal: 330, protein: 18, fat: 28, carb: 0.3 },
    "ラム肉": { cal: 140, protein: 19, fat: 6, carb: 0.3 },
    "マトン": { cal: 170, protein: 21, fat: 8, carb: 0.1 },
    "ターキー胸肉": { cal: 200, protein: 23, fat: 12, carb: 0.3 },
    "ターキーもも肉": { cal: 240, protein: 25, fat: 16, carb: 0.3 },
    "合挽き肉": { cal: 290, protein: 20, fat: 22, carb: 0.3 },
    "ベーコン": { cal: 330, protein: 18, fat: 28, carb: 0.3 },
    "ハム": { cal: 140, protein: 19, fat: 6, carb: 0.1 },
    "ウインナー": { cal: 170, protein: 21, fat: 8, carb: 0.3 },
    "サラミ": { cal: 200, protein: 23, fat: 12, carb: 0.3 },
    "ボロニアソーセージ": { cal: 240, protein: 25, fat: 16, carb: 0.3 },
    "ミートボール": { cal: 290, protein: 20, fat: 22, carb: 0.3 },
    "ローストビーフ": { cal: 330, protein: 18, fat: 28, carb: 0.1 },
    "ローストポーク": { cal: 140, protein: 19, fat: 6, carb: 0.3 },
    "焼き豚": { cal: 170, protein: 21, fat: 8, carb: 0.3 },
    "鴨肉": { cal: 200, protein: 23, fat: 12, carb: 0.3 },
    "馬肉": { cal: 240, protein: 25, fat: 16, carb: 0.3 }
  },
  fish: {
    "鮭": { cal: 100, protein: 20, fat: 2, carb: 0.1 },
    "さば": { cal: 120, protein: 22, fat: 4, carb: 0.2 },
    "サンマ": { cal: 150, protein: 23, fat: 8, carb: 0.2 },
    "いわし": { cal: 180, protein: 24, fat: 12, carb: 0.2 },
    "あじ": { cal: 210, protein: 21, fat: 16, carb: 0.2 },
    "ぶり": { cal: 100, protein: 20, fat: 2, carb: 0.2 },
    "まぐろ赤身": { cal: 120, protein: 22, fat: 4, carb: 0.2 },
    "まぐろトロ": { cal: 150, protein: 23, fat: 8, carb: 0.1 },
    "かつお": { cal: 180, protein: 24, fat: 12, carb: 0.2 },
    "たい": { cal: 210, protein: 21, fat: 16, carb: 0.2 },
    "ひらめ": { cal: 100, protein: 20, fat: 2, carb: 0.2 },
    "かれい": { cal: 120, protein: 22, fat: 4, carb: 0.2 },
    "タラ": { cal: 150, protein: 23, fat: 8, carb: 0.2 },
    "ホッケ": { cal: 180, protein: 24, fat: 12, carb: 0.2 },
    "にしん": { cal: 210, protein: 21, fat: 16, carb: 0.1 },
    "はまち": { cal: 100, protein: 20, fat: 2, carb: 0.2 },
    "きす": { cal: 120, protein: 22, fat: 4, carb: 0.2 },
    "こはだ": { cal: 150, protein: 23, fat: 8, carb: 0.2 },
    "キンメダイ": { cal: 180, protein: 24, fat: 12, carb: 0.2 },
    "ホタルイカ": { cal: 210, protein: 21, fat: 16, carb: 0.2 },
    "うなぎ": { cal: 100, protein: 20, fat: 2, carb: 0.2 },
    "あなご": { cal: 120, protein: 22, fat: 4, carb: 0.1 },
    "えび": { cal: 150, protein: 23, fat: 8, carb: 0.2 },
    "いか": { cal: 180, protein: 24, fat: 12, carb: 0.2 },
    "たこ": { cal: 210, protein: 21, fat: 16, carb: 0.2 },
    "ほたて": { cal: 100, protein: 20, fat: 2, carb: 0.2 },
    "あさり": { cal: 120, protein: 22, fat: 4, carb: 0.2 },
    "しじみ": { cal: 150, protein: 23, fat: 8, carb: 0.2 },
    "はまぐり": { cal: 180, protein: 24, fat: 12, carb: 0.1 },
    "牡蠣": { cal: 210, protein: 21, fat: 16, carb: 0.2 },
    "ずわいがに": { cal: 100, protein: 20, fat: 2, carb: 0.2 },
    "毛がに": { cal: 120, protein: 22, fat: 4, carb: 0.2 },
    "ほっき貝": { cal: 150, protein: 23, fat: 8, carb: 0.2 },
    "さざえ": { cal: 180, protein: 24, fat: 12, carb: 0.2 },
    "かまぼこ": { cal: 210, protein: 21, fat: 16, carb: 0.2 },
    "ちくわ": { cal: 100, protein: 20, fat: 2, carb: 0.1 },
    "魚肉ソーセージ": { cal: 120, protein: 22, fat: 4, carb: 0.2 },
    "ししゃも": { cal: 150, protein: 23, fat: 8, carb: 0.2 },
    "白身魚フライ": { cal: 180, protein: 24, fat: 12, carb: 0.2 },
    "ツナ缶": { cal: 210, protein: 21, fat: 16, carb: 0.2 }
  },
  veg: {
    "にんじん": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "玉ねぎ": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "じゃがいも": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "キャベツ": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "ブロッコリー": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "ピーマン": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 },
    "トマト": { cal: 55, protein: 3.0, fat: 0.2, carb: 10 },
    "なす": { cal: 65, protein: 1.8, fat: 0.1, carb: 12 },
    "レタス": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "きゅうり": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "ほうれん草": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "小松菜": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "もやし": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "かぼちゃ": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 },
    "大根": { cal: 55, protein: 3.0, fat: 0.2, carb: 10 },
    "ごぼう": { cal: 65, protein: 1.8, fat: 0.1, carb: 12 },
    "れんこん": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "さつまいも": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "長ねぎ": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "にら": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "セロリ": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "ズッキーニ": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 },
    "パプリカ赤": { cal: 55, protein: 3.0, fat: 0.2, carb: 10 },
    "パプリカ黄": { cal: 65, protein: 1.8, fat: 0.1, carb: 12 },
    "カリフラワー": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "アスパラガス": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "水菜": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "春菊": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "菜の花": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "クレソン": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 },
    "チンゲン菜": { cal: 55, protein: 3.0, fat: 0.2, carb: 10 },
    "ししとう": { cal: 65, protein: 1.8, fat: 0.1, carb: 12 },
    "ミョウガ": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "大葉": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "しょうが": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "にんにく": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "とうもろこし": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "枝豆": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 },
    "空芯菜": { cal: 55, protein: 3.0, fat: 0.2, carb: 10 },
    "ケール": { cal: 65, protein: 1.8, fat: 0.1, carb: 12 },
    "サニーレタス": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "白菜": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "ラディッシュ": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "ビーツ": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "里いも": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "山いも": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 },
    "長いも": { cal: 55, protein: 3.0, fat: 0.2, carb: 10 },
    "えだまめ": { cal: 65, protein: 1.8, fat: 0.1, carb: 12 },
    "芽キャベツ": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "プチトマト": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "モロヘイヤ": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "オクラ": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "ツルムラサキ": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "三つ葉": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 },
    "うど": { cal: 55, protein: 3.0, fat: 0.2, carb: 10 },
    "ふき": { cal: 65, protein: 1.8, fat: 0.1, carb: 12 },
    "たけのこ": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "さやえんどう": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "スナップえんどう": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "そら豆": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "カブ": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "かいわれ大根": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 },
    "アルファルファ": { cal: 55, protein: 3.0, fat: 0.2, carb: 10 },
    "レッドキャベツスプラウト": { cal: 65, protein: 1.8, fat: 0.1, carb: 12 },
    "ルッコラ": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "コールラビ": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "チコリ": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "エンダイブ": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "ごま葉": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "よもぎ": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 },
    "にがうり": { cal: 55, protein: 3.0, fat: 0.2, carb: 10 },
    "紫キャベツ": { cal: 65, protein: 1.8, fat: 0.1, carb: 12 },
    "黄にんじん": { cal: 15, protein: 0.8, fat: 0.1, carb: 3 },
    "紫じゃがいも": { cal: 20, protein: 1.0, fat: 0.2, carb: 4 },
    "新玉ねぎ": { cal: 25, protein: 1.2, fat: 0.3, carb: 5 },
    "新じゃがいも": { cal: 30, protein: 1.5, fat: 0.2, carb: 6 },
    "青じそ": { cal: 35, protein: 2.0, fat: 0.1, carb: 7 },
    "わさび菜": { cal: 45, protein: 2.5, fat: 0.4, carb: 8 }
  },
  grain: {
    "ごはん": { cal: 110, protein: 3, fat: 0.5, carb: 22 },
    "玄米ごはん": { cal: 150, protein: 4, fat: 1.0, carb: 28 },
    "雑穀ごはん": { cal: 180, protein: 6, fat: 1.5, carb: 35 },
    "おにぎり": { cal: 220, protein: 7, fat: 2.0, carb: 42 },
    "食パン": { cal: 260, protein: 8, fat: 3.0, carb: 50 },
    "ライ麦パン": { cal: 300, protein: 10, fat: 5.0, carb: 60 },
    "フランスパン": { cal: 330, protein: 9, fat: 6.0, carb: 68 },
    "ベーグル": { cal: 360, protein: 5, fat: 2.5, carb: 75 },
    "クロワッサン": { cal: 110, protein: 3, fat: 0.5, carb: 22 },
    "ロールパン": { cal: 150, protein: 4, fat: 1.0, carb: 28 },
    "うどん": { cal: 180, protein: 6, fat: 1.5, carb: 35 },
    "そば": { cal: 220, protein: 7, fat: 2.0, carb: 42 },
    "中華麺": { cal: 260, protein: 8, fat: 3.0, carb: 50 },
    "パスタ": { cal: 300, protein: 10, fat: 5.0, carb: 60 },
    "マカロニ": { cal: 330, protein: 9, fat: 6.0, carb: 68 },
    "フェットチーネ": { cal: 360, protein: 5, fat: 2.5, carb: 75 },
    "スパゲッティ": { cal: 110, protein: 3, fat: 0.5, carb: 22 },
    "ペンネ": { cal: 150, protein: 4, fat: 1.0, carb: 28 },
    "春雨": { cal: 180, protein: 6, fat: 1.5, carb: 35 },
    "オートミール": { cal: 220, protein: 7, fat: 2.0, carb: 42 },
    "餅": { cal: 260, protein: 8, fat: 3.0, carb: 50 },
    "米粉パン": { cal: 300, protein: 10, fat: 5.0, carb: 60 },
    "コーンフレーク": { cal: 330, protein: 9, fat: 6.0, carb: 68 },
    "グラノーラ": { cal: 360, protein: 5, fat: 2.5, carb: 75 },
    "玄米パスタ": { cal: 110, protein: 3, fat: 0.5, carb: 22 }
  },
  other: {
    "たまご": { cal: 155, protein: 13, fat: 11, carb: 1.1 },
    "卵白": { cal: 155, protein: 13, fat: 11, carb: 1.1 },
    "卵黄": { cal: 155, protein: 13, fat: 11, carb: 1.1 },
    "牛乳": { cal: 60, protein: 3.2, fat: 3.5, carb: 4.8 },
    "低脂肪乳": { cal: 356, protein: 22.7, fat: 27.4, carb: 1.3 },
    "豆乳": { cal: 120, protein: 10, fat: 6, carb: 4.5 },
    "ヨーグルト": { cal: 60, protein: 3.2, fat: 3.5, carb: 4.8 },
    "ギリシャヨーグルト": { cal: 356, protein: 22.7, fat: 27.4, carb: 1.3 },
    "生クリーム": { cal: 200, protein: 2, fat: 20, carb: 1.5 },
    "バター": { cal: 60, protein: 3.2, fat: 3.5, carb: 4.8 },
    "チーズ": { cal: 356, protein: 22.7, fat: 27.4, carb: 1.3 },
    "カッテージチーズ": { cal: 200, protein: 2, fat: 20, carb: 1.5 },
    "木綿豆腐": { cal: 85, protein: 7.5, fat: 4.5, carb: 3.0 },
    "絹ごし豆腐": { cal: 120, protein: 10, fat: 6, carb: 4.5 },
    "高野豆腐": { cal: 85, protein: 7.5, fat: 4.5, carb: 3.0 },
    "厚揚げ": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "油揚げ": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "納豆": { cal: 120, protein: 10, fat: 6, carb: 4.5 },
    "おから": { cal: 85, protein: 7.5, fat: 4.5, carb: 3.0 },
    "がんもどき": { cal: 120, protein: 10, fat: 6, carb: 4.5 },
    "枝豆（冷凍）": { cal: 85, protein: 7.5, fat: 4.5, carb: 3.0 },
    "大豆": { cal: 120, protein: 10, fat: 6, carb: 4.5 },
    "ひよこ豆": { cal: 85, protein: 7.5, fat: 4.5, carb: 3.0 },
    "レンズ豆": { cal: 120, protein: 10, fat: 6, carb: 4.5 },
    "黒豆": { cal: 85, protein: 7.5, fat: 4.5, carb: 3.0 },
    "しいたけ": { cal: 20, protein: 2.5, fat: 0.3, carb: 4.5 },
    "しめじ": { cal: 20, protein: 2.5, fat: 0.3, carb: 4.5 },
    "えのき": { cal: 20, protein: 2.5, fat: 0.3, carb: 4.5 },
    "まいたけ": { cal: 20, protein: 2.5, fat: 0.3, carb: 4.5 },
    "エリンギ": { cal: 20, protein: 2.5, fat: 0.3, carb: 4.5 },
    "松茸": { cal: 20, protein: 2.5, fat: 0.3, carb: 4.5 },
    "なめこ": { cal: 20, protein: 2.5, fat: 0.3, carb: 4.5 },
    "ポルチーニ": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "マッシュルーム": { cal: 20, protein: 2.5, fat: 0.3, carb: 4.5 },
    "トリュフ風味オイル": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "わかめ": { cal: 25, protein: 2.0, fat: 0.3, carb: 6.0 },
    "昆布": { cal: 25, protein: 2.0, fat: 0.3, carb: 6.0 },
    "ひじき": { cal: 25, protein: 2.0, fat: 0.3, carb: 6.0 },
    "のり": { cal: 25, protein: 2.0, fat: 0.3, carb: 6.0 },
    "もずく": { cal: 25, protein: 2.0, fat: 0.3, carb: 6.0 },
    "青のり": { cal: 25, protein: 2.0, fat: 0.3, carb: 6.0 },
    "りんご": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "バナナ": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "みかん": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "いちご": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "ぶどう": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "キウイ": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "パイナップル": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "マンゴー": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "ブルーベリー": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "ラズベリー": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "グレープフルーツ": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "梨": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "柿": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "桃": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "さくらんぼ": { cal: 60, protein: 0.6, fat: 0.2, carb: 15 },
    "味噌": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "しょうゆ": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "みりん": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "酒": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "ケチャップ": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "マヨネーズ": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "ウスターソース": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "中濃ソース": { cal: 100, protein: 3, fat: 5, carb: 8 },
    "オリーブオイル": { cal: 884, protein: 0, fat: 100, carb: 0 },
    "ごま油": { cal: 884, protein: 0, fat: 100, carb: 0 },
    "砂糖": { cal: 387, protein: 0, fat: 0, carb: 100 },
    "塩": { cal: 0, protein: 0, fat: 0, carb: 0 },
    "こしょう": { cal: 0, protein: 0, fat: 0, carb: 0 }
  }
};

// --------------------
// レシピデータ（161品）
const recipes = [
  { name: "牛丼", ingredients: ["牛バラ肉", "玉ねぎ", "ごはん", "しょうゆ", "みりん"] },
  { name: "親子丼", ingredients: ["鶏もも肉", "たまご", "玉ねぎ", "ごはん", "しょうゆ"] },
  { name: "豚の生姜焼き", ingredients: ["豚ロース", "しょうが", "しょうゆ", "みりん", "ごはん"] },
  { name: "筑前煮", ingredients: ["鶏もも肉", "にんじん", "ごぼう", "れんこん", "しいたけ", "しょうゆ", "みりん"] },
  { name: "肉じゃが", ingredients: ["牛もも肉", "じゃがいも", "にんじん", "玉ねぎ", "しょうゆ", "みりん"] },
  { name: "鯖の味噌煮", ingredients: ["さば", "味噌", "みりん", "しょうゆ", "しょうが"] },
  { name: "焼き魚定食", ingredients: ["鮭", "ごはん", "味噌汁", "漬物"] },
  { name: "天ぷら", ingredients: ["えび", "なす", "かぼちゃ", "ピーマン", "小麦粉", "油"] },
  { name: "かつ丼", ingredients: ["豚ロース", "たまご", "玉ねぎ", "ごはん", "パン粉", "しょうゆ"] },
  { name: "とんかつ", ingredients: ["豚ロース", "パン粉", "たまご", "小麦粉", "キャベツ"] },
  { name: "鶏の唐揚げ", ingredients: ["鶏もも肉", "しょうゆ", "しょうが", "にんにく", "片栗粉"] },
  { name: "焼き鳥", ingredients: ["鶏もも肉", "ねぎ", "しょうゆ", "みりん", "砂糖"] },
  { name: "うな重", ingredients: ["うなぎ", "ごはん", "しょうゆ", "みりん", "砂糖"] },
  { name: "すき焼き", ingredients: ["牛肩ロース", "ねぎ", "豆腐", "春菊", "しらたき", "しょうゆ", "みりん"] },
  { name: "しゃぶしゃぶ", ingredients: ["牛もも肉", "白菜", "豆腐", "しらたき", "ポン酢"] },
  { name: "おでん", ingredients: ["大根", "たまご", "こんにゃく", "ちくわ", "昆布"] },
  { name: "味噌汁", ingredients: ["豆腐", "わかめ", "ねぎ", "味噌"] },
  { name: "豚汁", ingredients: ["豚バラ", "ごぼう", "にんじん", "こんにゃく", "味噌"] },
  { name: "茶碗蒸し", ingredients: ["たまご", "鶏むね肉", "しいたけ", "かまぼこ", "だし"] },
  { name: "だし巻き卵", ingredients: ["たまご", "しょうゆ", "みりん", "砂糖", "だし"] },
  { name: "お好み焼き", ingredients: ["キャベツ", "豚バラ", "小麦粉", "たまご", "ソース"] },
  { name: "たこ焼き", ingredients: ["たこ", "小麦粉", "たまご", "ねぎ", "ソース"] },
  { name: "焼きうどん", ingredients: ["うどん", "豚小間切れ", "キャベツ", "にんじん", "ソース"] },
  { name: "焼きそば", ingredients: ["中華麺", "豚バラ", "キャベツ", "もやし", "ソース"] },
  { name: "親子煮", ingredients: ["鶏もも肉", "たまご", "しょうゆ", "みりん", "だし"] },
  { name: "鮭の塩焼き", ingredients: ["鮭", "塩", "大根おろし"] },
  { name: "いわしの梅煮", ingredients: ["いわし", "梅干し", "しょうゆ", "みりん", "しょうが"] },
  { name: "煮卵", ingredients: ["たまご", "しょうゆ", "みりん", "砂糖"] },
  { name: "きんぴらごぼう", ingredients: ["ごぼう", "にんじん", "しょうゆ", "砂糖", "ごま油"] },
  { name: "ほうれん草のおひたし", ingredients: ["ほうれん草", "しょうゆ", "かつおぶし"] },
  { name: "ひじきの煮物", ingredients: ["ひじき", "にんじん", "油揚げ", "しょうゆ", "みりん"] },
  { name: "厚揚げの煮物", ingredients: ["厚揚げ", "しょうゆ", "みりん", "だし"] },
  { name: "冷奴", ingredients: ["絹ごし豆腐", "しょうゆ", "ねぎ"] },
  { name: "納豆ごはん", ingredients: ["納豆", "ごはん", "しょうゆ"] },
  { name: "カツオのたたき", ingredients: ["かつお", "しょうが", "にんにく", "ポン酢"] },
  { name: "アジフライ", ingredients: ["あじ", "パン粉", "たまご", "小麦粉", "ソース"] },
  { name: "天丼", ingredients: ["えび", "なす", "ごはん", "天つゆ"] },
  { name: "卵焼き", ingredients: ["たまご", "砂糖", "しょうゆ"] },
  { name: "白和え", ingredients: ["木綿豆腐", "ほうれん草", "ごま", "砂糖", "しょうゆ"] },
  { name: "肉豆腐", ingredients: ["牛バラ肉", "木綿豆腐", "ねぎ", "しょうゆ", "みりん"] },
  { name: "豆腐ハンバーグ", ingredients: ["合挽き肉", "木綿豆腐", "たまねぎ", "パン粉", "しょうゆ"] },
  { name: "照り焼きチキン", ingredients: ["鶏もも肉", "しょうゆ", "みりん", "砂糖"] },
  { name: "鯖の塩焼き", ingredients: ["さば", "塩", "大根おろし"] },
  { name: "焼きおにぎり", ingredients: ["ごはん", "しょうゆ", "みそ"] },
  { name: "雑炊", ingredients: ["ごはん", "たまご", "ねぎ", "だし", "しょうゆ"] },
  { name: "卵かけご飯", ingredients: ["たまご", "ごはん", "しょうゆ"] },
  { name: "鮭フレークご飯", ingredients: ["鮭", "ごはん", "しょうゆ"] },
  { name: "天ぷらうどん", ingredients: ["うどん", "えび", "ねぎ", "だし", "しょうゆ"] },
  { name: "冷やし中華", ingredients: ["中華麺", "きゅうり", "ハム", "たまご", "しょうゆだれ"] },
  { name: "海鮮丼", ingredients: ["まぐろ赤身", "サーモン", "いくら", "ごはん", "しょうゆ"] },
  { name: "豚丼", ingredients: ["豚バラ", "玉ねぎ", "ごはん", "しょうゆ", "みりん"] },
  // --- 洋食レシピ50品 ---
{ name: "ハンバーグ", ingredients: ["合挽き肉", "玉ねぎ", "パン粉", "たまご", "ケチャップ"] },
{ name: "ビーフシチュー", ingredients: ["牛バラ肉", "玉ねぎ", "にんじん", "じゃがいも", "デミグラスソース"] },
{ name: "オムライス", ingredients: ["たまご", "ごはん", "ケチャップ", "鶏むね肉", "玉ねぎ"] },
{ name: "ナポリタン", ingredients: ["スパゲッティ", "ウインナー", "ピーマン", "玉ねぎ", "ケチャップ"] },
{ name: "カルボナーラ", ingredients: ["スパゲッティ", "ベーコン", "たまご", "生クリーム", "チーズ"] },
{ name: "ミートソースパスタ", ingredients: ["スパゲッティ", "合挽き肉", "玉ねぎ", "トマト", "ケチャップ"] },
{ name: "グラタン", ingredients: ["マカロニ", "牛乳", "チーズ", "玉ねぎ", "バター"] },
{ name: "ドリア", ingredients: ["ごはん", "ホワイトソース", "チーズ", "えび", "玉ねぎ"] },
{ name: "ハヤシライス", ingredients: ["牛バラ肉", "玉ねぎ", "デミグラスソース", "ごはん"] },
{ name: "ビーフカレー", ingredients: ["牛もも肉", "玉ねぎ", "にんじん", "じゃがいも", "カレールー"] },
{ name: "ポークカレー", ingredients: ["豚ロース", "玉ねぎ", "にんじん", "じゃがいも", "カレールー"] },
{ name: "チキンカレー", ingredients: ["鶏もも肉", "玉ねぎ", "にんじん", "カレールー"] },
{ name: "ハッシュドビーフ", ingredients: ["牛バラ肉", "玉ねぎ", "トマト", "デミグラスソース"] },
{ name: "ポトフ", ingredients: ["ソーセージ", "キャベツ", "にんじん", "じゃがいも", "スープ"] },
{ name: "ロールキャベツ", ingredients: ["キャベツ", "合挽き肉", "玉ねぎ", "パン粉", "スープ"] },
{ name: "クリームシチュー", ingredients: ["鶏むね肉", "にんじん", "じゃがいも", "玉ねぎ", "牛乳"] },
{ name: "ステーキ", ingredients: ["牛サーロイン", "塩", "こしょう", "バター"] },
{ name: "ローストビーフ", ingredients: ["牛もも肉", "塩", "こしょう", "オリーブオイル"] },
{ name: "ローストチキン", ingredients: ["鶏もも肉", "にんにく", "オリーブオイル", "塩", "こしょう"] },
{ name: "グリルサーモン", ingredients: ["鮭", "オリーブオイル", "塩", "レモン"] },
{ name: "アヒージョ", ingredients: ["えび", "にんにく", "オリーブオイル", "マッシュルーム"] },
{ name: "バターチキンカレー", ingredients: ["鶏もも肉", "トマト", "バター", "生クリーム", "カレールー"] },
{ name: "チキンソテー", ingredients: ["鶏もも肉", "塩", "こしょう", "オリーブオイル"] },
{ name: "ポークソテー", ingredients: ["豚ロース", "塩", "こしょう", "バター"] },
{ name: "サンドイッチ", ingredients: ["食パン", "ハム", "たまご", "レタス", "マヨネーズ"] },
{ name: "エッグベネディクト", ingredients: ["食パン", "たまご", "ベーコン", "バター", "レモン"] },
{ name: "クロックムッシュ", ingredients: ["食パン", "ハム", "チーズ", "ホワイトソース"] },
{ name: "ピザトースト", ingredients: ["食パン", "チーズ", "トマト", "ピーマン"] },
{ name: "ハンバーガー", ingredients: ["ハンバーグ", "パン", "レタス", "トマト", "チーズ"] },
{ name: "チーズフォンデュ", ingredients: ["チーズ", "バゲット", "白ワイン"] },
{ name: "ロブスターグラタン", ingredients: ["ロブスター", "ホワイトソース", "チーズ", "玉ねぎ"] },
{ name: "ビーフストロガノフ", ingredients: ["牛もも肉", "マッシュルーム", "玉ねぎ", "サワークリーム"] },
{ name: "オムハヤシ", ingredients: ["ごはん", "たまご", "デミグラスソース", "牛バラ肉"] },
{ name: "ミネストローネ", ingredients: ["トマト", "にんじん", "玉ねぎ", "ベーコン", "スープ"] },
{ name: "ボンゴレビアンコ", ingredients: ["スパゲッティ", "あさり", "にんにく", "オリーブオイル"] },
{ name: "ペペロンチーノ", ingredients: ["スパゲッティ", "にんにく", "オリーブオイル", "唐辛子"] },
{ name: "ラザニア", ingredients: ["パスタ", "ミートソース", "ホワイトソース", "チーズ"] },
{ name: "シーフードピラフ", ingredients: ["ごはん", "えび", "いか", "ホタテ", "バター"] },
{ name: "ガーリックライス", ingredients: ["ごはん", "にんにく", "バター", "しょうゆ"] },
{ name: "ハッシュポテト", ingredients: ["じゃがいも", "塩", "油"] },
{ name: "ポテトサラダ", ingredients: ["じゃがいも", "マヨネーズ", "ハム", "きゅうり", "にんじん"] },
{ name: "コーンスープ", ingredients: ["コーン", "牛乳", "バター", "塩"] },
{ name: "チキンナゲット", ingredients: ["鶏むね肉", "小麦粉", "パン粉", "油"] },
{ name: "フライドポテト", ingredients: ["じゃがいも", "油", "塩"] },
{ name: "エビフライ", ingredients: ["えび", "小麦粉", "パン粉", "たまご", "油"] },
{ name: "クリームコロッケ", ingredients: ["ホワイトソース", "小麦粉", "パン粉", "たまご", "油"] },
{ name: "チーズオムレツ", ingredients: ["たまご", "チーズ", "バター", "塩"] },
{ name: "グリルチキン", ingredients: ["鶏もも肉", "オリーブオイル", "にんにく", "塩"] },
{ name: "サーモンムニエル", ingredients: ["鮭", "小麦粉", "バター", "レモン"] },
{ name: "マカロニサラダ", ingredients: ["マカロニ", "ハム", "きゅうり", "マヨネーズ"] },
{ name: "エビマカロニグラタン", ingredients: ["えび", "マカロニ", "チーズ", "牛乳", "バター"] },
// --- 中華料理レシピ50品 ---
{ name: "麻婆豆腐", ingredients: ["豚ひき肉", "木綿豆腐", "ねぎ", "しょうが", "にんにく", "味噌"] },
{ name: "回鍋肉", ingredients: ["豚バラ", "キャベツ", "ピーマン", "味噌", "にんにく"] },
{ name: "青椒肉絲", ingredients: ["牛もも肉", "ピーマン", "たけのこ", "しょうゆ", "オイスターソース"] },
{ name: "酢豚", ingredients: ["豚ロース", "玉ねぎ", "にんじん", "ピーマン", "酢"] },
{ name: "餃子", ingredients: ["豚ひき肉", "キャベツ", "にら", "にんにく", "しょうが"] },
{ name: "焼売", ingredients: ["豚ひき肉", "玉ねぎ", "しょうが", "しょうゆ", "皮"] },
{ name: "春巻き", ingredients: ["豚ひき肉", "にんじん", "たけのこ", "春雨", "皮"] },
{ name: "天津飯", ingredients: ["たまご", "かにかま", "ごはん", "しょうゆ", "酢"] },
{ name: "チャーハン", ingredients: ["ごはん", "たまご", "ねぎ", "ハム", "しょうゆ"] },
{ name: "中華丼", ingredients: ["豚バラ", "白菜", "にんじん", "うずらの卵", "しょうゆ"] },
{ name: "八宝菜", ingredients: ["えび", "いか", "豚肉", "白菜", "にんじん"] },
{ name: "エビチリ", ingredients: ["えび", "にんにく", "しょうが", "ケチャップ", "豆板醤"] },
{ name: "エビマヨ", ingredients: ["えび", "マヨネーズ", "レモン", "片栗粉"] },
{ name: "棒棒鶏", ingredients: ["鶏むね肉", "きゅうり", "ごま", "しょうゆ", "みそ"] },
{ name: "油淋鶏", ingredients: ["鶏もも肉", "ねぎ", "しょうゆ", "酢", "ごま油"] },
{ name: "唐揚げ中華風", ingredients: ["鶏もも肉", "しょうゆ", "しょうが", "にんにく", "ごま油"] },
{ name: "担々麺", ingredients: ["中華麺", "豚ひき肉", "ねぎ", "ごま", "ラー油"] },
{ name: "チャーシュー", ingredients: ["豚肩ロース", "しょうゆ", "みりん", "砂糖", "しょうが"] },
{ name: "中華スープ", ingredients: ["たまご", "ねぎ", "鶏がらスープ", "しょうゆ"] },
{ name: "ラーメン", ingredients: ["中華麺", "チャーシュー", "ねぎ", "ゆで卵", "スープ"] },
{ name: "味噌ラーメン", ingredients: ["中華麺", "もやし", "コーン", "味噌", "バター"] },
{ name: "醤油ラーメン", ingredients: ["中華麺", "チャーシュー", "ねぎ", "しょうゆスープ"] },
{ name: "塩ラーメン", ingredients: ["中華麺", "鶏むね肉", "ねぎ", "スープ", "塩"] },
{ name: "チャーシュー丼", ingredients: ["ごはん", "チャーシュー", "ねぎ", "しょうゆ"] },
{ name: "五目焼きそば", ingredients: ["中華麺", "いか", "えび", "豚肉", "白菜"] },
{ name: "もやし炒め", ingredients: ["もやし", "にら", "豚小間切れ", "しょうゆ", "ごま油"] },
{ name: "麻婆なす", ingredients: ["豚ひき肉", "なす", "しょうゆ", "にんにく", "味噌"] },
{ name: "レバニラ炒め", ingredients: ["鶏レバー", "にら", "もやし", "しょうゆ", "オイスターソース"] },
{ name: "中華風冷奴", ingredients: ["絹ごし豆腐", "ねぎ", "しょうゆ", "ごま油"] },
{ name: "ワンタンスープ", ingredients: ["ワンタンの皮", "豚ひき肉", "しょうが", "ねぎ", "スープ"] },
{ name: "中華風おこげ", ingredients: ["ごはん", "えび", "いか", "白菜", "しょうゆ"] },
{ name: "中華風茶碗蒸し", ingredients: ["たまご", "鶏むね肉", "えび", "しょうゆ", "だし"] },
{ name: "春雨サラダ", ingredients: ["春雨", "ハム", "きゅうり", "しょうゆ", "酢"] },
{ name: "焼き餃子", ingredients: ["豚ひき肉", "キャベツ", "にら", "にんにく", "皮"] },
{ name: "水餃子", ingredients: ["豚ひき肉", "ねぎ", "しょうが", "皮"] },
{ name: "黒酢酢豚", ingredients: ["豚ロース", "ピーマン", "にんじん", "黒酢", "しょうゆ"] },
{ name: "海老玉", ingredients: ["えび", "たまご", "しょうゆ", "ごま油"] },
{ name: "牛肉とブロッコリー炒め", ingredients: ["牛もも肉", "ブロッコリー", "オイスターソース", "しょうゆ"] },
{ name: "豚肉とキャベツの炒め物", ingredients: ["豚小間切れ", "キャベツ", "しょうゆ", "にんにく"] },
{ name: "チンジャオロース丼", ingredients: ["牛もも肉", "ピーマン", "たけのこ", "ごはん", "オイスターソース"] },
{ name: "中華風肉団子", ingredients: ["豚ひき肉", "たまご", "パン粉", "しょうゆ", "砂糖"] },
{ name: "揚げ春巻き", ingredients: ["春巻きの皮", "豚ひき肉", "たけのこ", "春雨", "油"] },
{ name: "ザーサイ炒飯", ingredients: ["ごはん", "ザーサイ", "たまご", "ねぎ", "しょうゆ"] },
{ name: "中華風野菜炒め", ingredients: ["キャベツ", "もやし", "にら", "しょうゆ", "ごま油"] },
{ name: "冷やし担々麺", ingredients: ["中華麺", "豚ひき肉", "ねぎ", "ごま", "ラー油"] },
{ name: "杏仁豆腐", ingredients: ["牛乳", "砂糖", "ゼラチン", "アーモンドエッセンス"] },
{ name: "ごま団子", ingredients: ["白玉粉", "あんこ", "ごま", "油"] },
{ name: "中華風スープ餃子", ingredients: ["餃子", "スープ", "ねぎ", "しょうゆ"] },
{ name: "中華風卵スープ", ingredients: ["たまご", "スープ", "しょうゆ", "ごま油"] },
{ name: "鶏肉のカシューナッツ炒め", ingredients: ["鶏むね肉", "ピーマン", "カシューナッツ", "しょうゆ", "オイスターソース"] },
  // --- 韓国・エスニック・スイーツなど多国籍系レシピ50品 ---
{ name: "ビビンバ", ingredients: ["牛ひき肉", "ほうれん草", "にんじん", "もやし", "ごはん", "コチュジャン"] },
{ name: "キムチチゲ", ingredients: ["キムチ", "豚バラ", "豆腐", "ねぎ", "ごま油"] },
{ name: "スンドゥブチゲ", ingredients: ["絹ごし豆腐", "あさり", "キムチ", "たまご", "コチュジャン"] },
{ name: "プルコギ", ingredients: ["牛もも肉", "にんじん", "玉ねぎ", "しょうゆ", "ごま油"] },
{ name: "チヂミ", ingredients: ["小麦粉", "にら", "にんじん", "えび", "卵"] },
{ name: "トッポッキ", ingredients: ["餅", "コチュジャン", "砂糖", "しょうゆ", "にんじん"] },
{ name: "サムギョプサル", ingredients: ["豚バラ", "レタス", "にんにく", "味噌", "ごま油"] },
{ name: "ヤンニョムチキン", ingredients: ["鶏もも肉", "ケチャップ", "コチュジャン", "にんにく", "ごま"] },
{ name: "クッパ", ingredients: ["ごはん", "スープ", "たまご", "ねぎ", "ごま油"] },
{ name: "ナムル盛り合わせ", ingredients: ["ほうれん草", "もやし", "にんじん", "しょうゆ", "ごま油"] },
{ name: "冷麺", ingredients: ["中華麺", "きゅうり", "ゆで卵", "キムチ", "酢"] },
{ name: "チゲ鍋", ingredients: ["豚バラ", "豆腐", "キムチ", "ねぎ", "コチュジャン"] },
{ name: "チャプチェ", ingredients: ["春雨", "牛もも肉", "ピーマン", "にんじん", "しょうゆ"] },
{ name: "タッカルビ", ingredients: ["鶏もも肉", "キャベツ", "にんじん", "コチュジャン"] },
{ name: "キンパ", ingredients: ["ごはん", "たまご", "にんじん", "ほうれん草", "海苔"] },
{ name: "韓国風おにぎり", ingredients: ["ごはん", "ツナ缶", "マヨネーズ", "海苔", "ごま油"] },
{ name: "チーズタッカルビ", ingredients: ["鶏もも肉", "チーズ", "キャベツ", "コチュジャン"] },
{ name: "ユッケジャン", ingredients: ["牛肉", "ねぎ", "豆もやし", "コチュジャン"] },
{ name: "カムジャタン", ingredients: ["豚背骨", "じゃがいも", "白菜", "にんにく", "コチュジャン"] },
{ name: "トマト冷麺", ingredients: ["中華麺", "トマト", "きゅうり", "酢", "しょうゆ"] },

{ name: "ガパオライス", ingredients: ["鶏ひき肉", "バジル", "ピーマン", "ナンプラー", "たまご", "ごはん"] },
{ name: "トムヤムクン", ingredients: ["えび", "レモングラス", "唐辛子", "ナンプラー", "ココナッツミルク"] },
{ name: "グリーンカレー", ingredients: ["鶏むね肉", "なす", "ピーマン", "ココナッツミルク", "グリーンカレーペースト"] },
{ name: "レッドカレー", ingredients: ["豚肉", "ピーマン", "たけのこ", "ココナッツミルク", "レッドカレーペースト"] },
{ name: "フォー", ingredients: ["米粉麺", "鶏むね肉", "ねぎ", "パクチー", "スープ"] },
{ name: "バインミー", ingredients: ["バゲット", "豚肉", "なます", "パクチー", "マヨネーズ"] },
{ name: "生春巻き", ingredients: ["ライスペーパー", "えび", "レタス", "春雨", "スイートチリソース"] },
{ name: "パッタイ", ingredients: ["ライスヌードル", "えび", "もやし", "ピーナッツ", "ナンプラー"] },
{ name: "海南鶏飯", ingredients: ["鶏むね肉", "ごはん", "しょうが", "ねぎ", "ナンプラー"] },
{ name: "カオマンガイ", ingredients: ["鶏むね肉", "ごはん", "しょうが", "にんにく", "パクチー"] },
{ name: "ミーゴレン", ingredients: ["中華麺", "えび", "卵", "ナンプラー", "唐辛子"] },
{ name: "ナシゴレン", ingredients: ["ごはん", "卵", "えび", "ナンプラー", "唐辛子"] },
{ name: "バターチキンカレー", ingredients: ["鶏もも肉", "トマト", "生クリーム", "バター", "カレー粉"] },
{ name: "サモサ", ingredients: ["じゃがいも", "玉ねぎ", "カレー粉", "皮", "油"] },
{ name: "タンドリーチキン", ingredients: ["鶏もも肉", "ヨーグルト", "カレー粉", "にんにく"] },
{ name: "ビリヤニ", ingredients: ["ごはん", "鶏肉", "スパイス", "たまねぎ", "ヨーグルト"] },
{ name: "カレーうどん", ingredients: ["うどん", "カレールー", "ねぎ", "豚肉"] },
{ name: "ケバブ", ingredients: ["牛肉", "ピーマン", "ヨーグルト", "レタス", "トマト"] },
{ name: "ファヒータ", ingredients: ["牛肉", "ピーマン", "玉ねぎ", "トルティーヤ", "スパイス"] },
{ name: "タコス", ingredients: ["牛ひき肉", "トルティーヤ", "レタス", "トマト", "チーズ"] },
{ name: "ブリトー", ingredients: ["トルティーヤ", "ごはん", "豆", "牛ひき肉", "チーズ"] },
{ name: "チリコンカン", ingredients: ["牛ひき肉", "トマト", "豆", "にんにく", "チリパウダー"] },
{ name: "ナチョス", ingredients: ["トルティーヤチップス", "チーズ", "サルサソース"] },
{ name: "クラムチャウダー", ingredients: ["あさり", "じゃがいも", "牛乳", "玉ねぎ", "バター"] },
{ name: "ホットケーキ", ingredients: ["小麦粉", "たまご", "牛乳", "砂糖"] },
{ name: "プリン", ingredients: ["たまご", "牛乳", "砂糖", "バニラエッセンス"] },
{ name: "チーズケーキ", ingredients: ["クリームチーズ", "たまご", "砂糖", "生クリーム"] },
{ name: "ガトーショコラ", ingredients: ["チョコレート", "たまご", "砂糖", "小麦粉"] },
{ name: "パンケーキ", ingredients: ["小麦粉", "たまご", "牛乳", "バター", "砂糖"] },
{ name: "ティラミス", ingredients: ["マスカルポーネ", "たまご", "砂糖", "コーヒー", "ココアパウダー"] },
{ name: "クレープ", ingredients: ["小麦粉", "たまご", "牛乳", "砂糖", "いちご"] },
{ name: "フルーツタルト", ingredients: ["小麦粉", "バター", "カスタード", "フルーツ"] },
{ name: "アイスクリーム", ingredients: ["牛乳", "生クリーム", "砂糖", "バニラ"] },
{ name: "スムージー", ingredients: ["バナナ", "牛乳", "ヨーグルト", "ブルーベリー"] }

];

];

// --------------------
// 合計栄養
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
// 栄養再計算
function recalcTotal() {
  total = { cal: 0, protein: 0, fat: 0, carb: 0 };
  const allFoods = Object.assign({}, ...Object.values(foodData));
  document.querySelectorAll("#food-list li").forEach(li => {
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
}

// --------------------
// 食材追加フォーム
document.getElementById("food-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("food-name").value.trim();
  const weight = parseFloat(document.getElementById("food-weight").value);
  const expiry = document.getElementById("food-expiry").value || DEFAULT_EXPIRY;

  const allFoods = Object.assign({}, ...Object.values(foodData));
  if (!allFoods[name]) return alert("その食材はデータベースにありません");
  if (isNaN(weight) || weight <= 0) return alert("重量を正しく入力してください");

  const f = weight / 100;
  total.cal += allFoods[name].cal * f;
  total.protein += allFoods[name].protein * f;
  total.fat += allFoods[name].fat * f;
  total.carb += allFoods[name].carb * f;
  updateSummary();

  const ul = document.getElementById("food-list");
  const li = document.createElement("li");
  li.dataset.name = name;
  li.dataset.expiry = expiry;
  li.innerHTML = `${name}：${weight}g（賞味期限: ${expiry}） <button class="delete-btn">🗑</button>`;

  // 期限バッジ表示（近ければ見た目を変更）
  const diff = (new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24);
  if (diff <= 2) li.classList.add("expiring");

  // 削除ボタン
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    updateRecipes();
    recalcTotal();
  });

  ul.appendChild(li);
  renderFoodList();
  updateRecipes();
  e.target.reset();
  // 既定の期限に戻す
  document.getElementById("food-expiry").value = DEFAULT_EXPIRY;
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
// 🔍 食材検索機能（全カテゴリ対応）
const searchInput = document.getElementById("food-name");
const datalist = document.getElementById("food-options");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  datalist.innerHTML = "";

  // すべてのカテゴリを結合
  const allFoods = Object.assign({}, ...Object.values(foodData));

  // 入力文字を含む食材を検索
  const results = Object.keys(allFoods).filter(food =>
    food.toLowerCase().includes(value)
  );

  // 候補を最大10件まで表示
  results.slice(0, 10).forEach(food => {
    const opt = document.createElement("option");
    opt.value = food;
    datalist.appendChild(opt);
  });
});


// --------------------
// 初期起動
updateSummary();
document.getElementById("food-expiry").value = DEFAULT_EXPIRY;

