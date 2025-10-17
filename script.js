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
  { name: "牛丼", ingredients: ["牛もも肉", "玉ねぎ", "ごはん"] },
  { name: "豚の生姜焼き", ingredients: ["豚ロース", "玉ねぎ"] },
  { name: "親子丼", ingredients: ["鶏もも肉", "たまご", "玉ねぎ", "ごはん"] },
  { name: "カレーライス", ingredients: ["牛もも肉", "にんじん", "じゃがいも", "玉ねぎ", "ごはん"] },
  { name: "肉じゃが", ingredients: ["牛もも肉", "にんじん", "じゃがいも", "玉ねぎ"] },
  { name: "筑前煮", ingredients: ["鶏もも肉", "にんじん", "れんこん", "ごぼう"] },
  { name: "照り焼きチキン", ingredients: ["鶏もも肉", "しょうゆ", "みりん"] },
  { name: "ハンバーグ", ingredients: ["合挽き肉", "玉ねぎ"] },
  { name: "ナポリタン", ingredients: ["パスタ", "ピーマン", "玉ねぎ", "ケチャップ"] },
  { name: "ミートソーススパゲッティ", ingredients: ["パスタ", "合挽き肉", "トマト"] },
  { name: "ペペロンチーノ", ingredients: ["パスタ", "にんにく", "オリーブオイル"] },
  { name: "カルボナーラ", ingredients: ["パスタ", "ベーコン", "たまご"] },
  { name: "焼き魚定食（鮭）", ingredients: ["鮭", "ごはん"] },
  { name: "サバ味噌煮", ingredients: ["さば", "味噌"] },
  { name: "ブリ照り焼き", ingredients: ["ぶり", "しょうゆ", "みりん"] },
  { name: "アジフライ", ingredients: ["あじ", "食パン"] },
  { name: "エビチリ", ingredients: ["えび", "トマト"] },
  { name: "いかと大根の煮物", ingredients: ["いか", "大根"] },
  { name: "たこ焼き", ingredients: ["たこ", "小麦粉", "キャベツ"] },
  { name: "豚汁", ingredients: ["豚ロース", "にんじん", "じゃがいも", "玉ねぎ"] },
  { name: "けんちん汁", ingredients: ["にんじん", "大根", "ごぼう"] },
  { name: "麻婆豆腐", ingredients: ["合挽き肉", "木綿豆腐", "ねぎ"] },
  { name: "麻婆茄子", ingredients: ["合挽き肉", "なす", "ピーマン"] },
  { name: "青椒肉絲", ingredients: ["豚ロース", "ピーマン", "たけのこ"] },
  { name: "八宝菜", ingredients: ["豚ロース", "えび", "いか", "白菜"] },
  { name: "生姜焼き丼", ingredients: ["豚ロース", "玉ねぎ", "ごはん"] },
  { name: "冷やし中華", ingredients: ["中華麺", "きゅうり", "ハム", "たまご"] },
  { name: "親子スープ", ingredients: ["たまご", "鶏むね肉", "長ねぎ"] },
  { name: "オムライス", ingredients: ["たまご", "ごはん", "ケチャップ"] },
  { name: "チャーハン", ingredients: ["ごはん", "たまご", "ハム", "長ねぎ"] },
  { name: "天津飯", ingredients: ["たまご", "ごはん", "カニカマ"] },
  { name: "ビビンバ", ingredients: ["牛もも肉", "にんじん", "ほうれん草", "ごはん"] },
  { name: "ガパオライス", ingredients: ["鶏ひき肉", "ピーマン", "ごはん"] },
  { name: "キーマカレー", ingredients: ["合挽き肉", "トマト", "ごはん"] },
  { name: "サラダチキン", ingredients: ["鶏むね肉", "レタス"] },
  { name: "シーザーサラダ", ingredients: ["レタス", "ベーコン", "チーズ"] },
  { name: "ポテトサラダ", ingredients: ["じゃがいも", "にんじん", "ハム"] },
  { name: "コールスロー", ingredients: ["キャベツ", "にんじん", "マヨネーズ"] },
  { name: "豚キムチ", ingredients: ["豚バラ", "白菜"] },
  { name: "鮭のムニエル", ingredients: ["鮭", "バター"] },
  { name: "たまごスープ", ingredients: ["たまご", "長ねぎ"] },
  { name: "牛もも肉とにんじんの炒め物", ingredients: ["牛もも肉", "にんじん"] },
  { name: "牛バラ肉と玉ねぎの煮物", ingredients: ["牛バラ肉", "玉ねぎ"] },
  { name: "牛肩ロースとじゃがいものバターソテー", ingredients: ["牛肩ロース", "じゃがいも"] },
  { name: "牛ひき肉とキャベツのガーリック炒め", ingredients: ["牛ひき肉", "キャベツ"] },
  { name: "牛タンとブロッコリーの塩だれ炒め", ingredients: ["牛タン", "ブロッコリー"] },
  { name: "牛ヒレとピーマンのみそ炒め", ingredients: ["牛ヒレ", "ピーマン"] },
  { name: "牛サーロインとトマトの中華あんかけ", ingredients: ["牛サーロイン", "トマト", "玉ねぎ"] },
  { name: "牛すじとなすのサラダ", ingredients: ["牛すじ", "なす"] },
  { name: "豚ロースとレタスの丼", ingredients: ["豚ロース", "レタス", "ごはん"] },
  { name: "豚バラときゅうりのパスタ", ingredients: ["豚バラ", "きゅうり", "パスタ"] },
  { name: "豚肩ロースとほうれん草の炒め物", ingredients: ["豚肩ロース", "ほうれん草"] },
  { name: "豚ひき肉と小松菜の煮物", ingredients: ["豚ひき肉", "小松菜"] },
  { name: "豚ヒレともやしのバターソテー", ingredients: ["豚ヒレ", "もやし"] },
  { name: "豚小間切れとかぼちゃのガーリック炒め", ingredients: ["豚小間切れ", "かぼちゃ"] },
  { name: "スペアリブと大根の塩だれ炒め", ingredients: ["スペアリブ", "大根"] },
  { name: "チャーシューとごぼうのみそ炒め", ingredients: ["チャーシュー", "ごぼう"] },
  { name: "鶏むね肉とれんこんの中華あんかけ", ingredients: ["鶏むね肉", "れんこん", "玉ねぎ"] },
  { name: "鶏もも肉とさつまいものサラダ", ingredients: ["鶏もも肉", "さつまいも"] },
  { name: "鶏ささみと長ねぎの丼", ingredients: ["鶏ささみ", "長ねぎ", "ごはん"] },
  { name: "鶏手羽先とにらのパスタ", ingredients: ["鶏手羽先", "にら", "パスタ"] },
  { name: "鶏手羽元とセロリの炒め物", ingredients: ["鶏手羽元", "セロリ"] },
  { name: "鶏ひき肉とズッキーニの煮物", ingredients: ["鶏ひき肉", "ズッキーニ"] },
  { name: "鶏砂肝とパプリカ赤のバターソテー", ingredients: ["鶏砂肝", "パプリカ赤"] },
  { name: "鶏レバーとパプリカ黄のガーリック炒め", ingredients: ["鶏レバー", "パプリカ黄"] },
  { name: "ラム肉とカリフラワーの塩だれ炒め", ingredients: ["ラム肉", "カリフラワー"] },
  { name: "マトンとアスパラガスのみそ炒め", ingredients: ["マトン", "アスパラガス"] },
  { name: "ターキー胸肉と水菜の中華あんかけ", ingredients: ["ターキー胸肉", "水菜", "玉ねぎ"] },
  { name: "ターキーもも肉と春菊のサラダ", ingredients: ["ターキーもも肉", "春菊"] },
  { name: "合挽き肉と菜の花の丼", ingredients: ["合挽き肉", "菜の花", "ごはん"] },
  { name: "ベーコンとクレソンのパスタ", ingredients: ["ベーコン", "クレソン", "パスタ"] },
  { name: "ハムとチンゲン菜の炒め物", ingredients: ["ハム", "チンゲン菜"] },
  { name: "ウインナーとししとうの煮物", ingredients: ["ウインナー", "ししとう"] },
  { name: "サラミとミョウガのバターソテー", ingredients: ["サラミ", "ミョウガ"] },
  { name: "ボロニアソーセージと大葉のガーリック炒め", ingredients: ["ボロニアソーセージ", "大葉"] },
  { name: "ミートボールとしょうがの塩だれ炒め", ingredients: ["ミートボール", "しょうが"] },
  { name: "ローストビーフとにんにくのみそ炒め", ingredients: ["ローストビーフ", "にんにく"] },
  { name: "ローストポークととうもろこしの中華あんかけ", ingredients: ["ローストポーク", "とうもろこし", "玉ねぎ"] },
  { name: "焼き豚と枝豆のサラダ", ingredients: ["焼き豚", "枝豆"] },
  { name: "鴨肉と空芯菜の丼", ingredients: ["鴨肉", "空芯菜", "ごはん"] },
  { name: "馬肉とケールのパスタ", ingredients: ["馬肉", "ケール", "パスタ"] },
  { name: "鮭とサニーレタスの炒め物", ingredients: ["鮭", "サニーレタス"] },
  { name: "さばと白菜の煮物", ingredients: ["さば", "白菜"] },
  { name: "サンマとラディッシュのバターソテー", ingredients: ["サンマ", "ラディッシュ"] },
  { name: "いわしとビーツのガーリック炒め", ingredients: ["いわし", "ビーツ"] },
  { name: "あじと里いもの塩だれ炒め", ingredients: ["あじ", "里いも"] },
  { name: "ぶりと山いものみそ炒め", ingredients: ["ぶり", "山いも"] },
  { name: "まぐろ赤身と長いもの中華あんかけ", ingredients: ["まぐろ赤身", "長いも", "玉ねぎ"] },
  { name: "まぐろトロとえだまめのサラダ", ingredients: ["まぐろトロ", "えだまめ"] },
  { name: "かつおと芽キャベツの丼", ingredients: ["かつお", "芽キャベツ", "ごはん"] },
  { name: "たいとプチトマトのパスタ", ingredients: ["たい", "プチトマト", "パスタ"] },
  { name: "ひらめとモロヘイヤの炒め物", ingredients: ["ひらめ", "モロヘイヤ"] },
  { name: "かれいとオクラの煮物", ingredients: ["かれい", "オクラ"] },
  { name: "タラとツルムラサキのバターソテー", ingredients: ["タラ", "ツルムラサキ"] },
  { name: "ホッケと三つ葉のガーリック炒め", ingredients: ["ホッケ", "三つ葉"] },
  { name: "にしんとうどの塩だれ炒め", ingredients: ["にしん", "うど"] },
  { name: "はまちとふきのみそ炒め", ingredients: ["はまち", "ふき"] },
  { name: "きすとたけのこの中華あんかけ", ingredients: ["きす", "たけのこ", "玉ねぎ"] },
  { name: "こはだとさやえんどうのサラダ", ingredients: ["こはだ", "さやえんどう"] },
  { name: "キンメダイとスナップえんどうの丼", ingredients: ["キンメダイ", "スナップえんどう", "ごはん"] },
  { name: "ホタルイカとそら豆のパスタ", ingredients: ["ホタルイカ", "そら豆", "パスタ"] },
  { name: "うなぎとカブの炒め物", ingredients: ["うなぎ", "カブ"] },
  { name: "あなごとかいわれ大根の煮物", ingredients: ["あなご", "かいわれ大根"] },
  { name: "えびとアルファルファのバターソテー", ingredients: ["えび", "アルファルファ"] },
  { name: "いかとレッドキャベツスプラウトのガーリック炒め", ingredients: ["いか", "レッドキャベツスプラウト"] },
  { name: "たことルッコラの塩だれ炒め", ingredients: ["たこ", "ルッコラ"] },
  { name: "ほたてとコールラビのみそ炒め", ingredients: ["ほたて", "コールラビ"] },
  { name: "あさりとチコリの中華あんかけ", ingredients: ["あさり", "チコリ", "玉ねぎ"] },
  { name: "しじみとエンダイブのサラダ", ingredients: ["しじみ", "エンダイブ"] },
  { name: "はまぐりとごま葉の丼", ingredients: ["はまぐり", "ごま葉", "ごはん"] },
  { name: "牡蠣とよもぎのパスタ", ingredients: ["牡蠣", "よもぎ", "パスタ"] },
  { name: "ずわいがにとにがうりの炒め物", ingredients: ["ずわいがに", "にがうり"] },
  { name: "毛がにと紫キャベツの煮物", ingredients: ["毛がに", "紫キャベツ"] },
  { name: "ほっき貝と黄にんじんのバターソテー", ingredients: ["ほっき貝", "黄にんじん"] },
  { name: "さざえと紫じゃがいものガーリック炒め", ingredients: ["さざえ", "紫じゃがいも"] },
  { name: "かまぼこと新玉ねぎの塩だれ炒め", ingredients: ["かまぼこ", "新玉ねぎ"] },
  { name: "ちくわと新じゃがいものみそ炒め", ingredients: ["ちくわ", "新じゃがいも"] },
  { name: "魚肉ソーセージと青じその中華あんかけ", ingredients: ["魚肉ソーセージ", "青じそ", "玉ねぎ"] },
  { name: "ししゃもとわさび菜のサラダ", ingredients: ["ししゃも", "わさび菜"] },
  { name: "白身魚フライとにんじんの丼", ingredients: ["白身魚フライ", "にんじん", "ごはん"] },
  { name: "ツナ缶と玉ねぎのパスタ", ingredients: ["ツナ缶", "玉ねぎ", "パスタ"] },
  { name: "にんじんとじゃがいもの炒め物", ingredients: ["にんじん", "じゃがいも"] },
  { name: "玉ねぎとキャベツの煮物", ingredients: ["玉ねぎ", "キャベツ"] },
  { name: "じゃがいもとブロッコリーのバターソテー", ingredients: ["じゃがいも", "ブロッコリー"] },
  { name: "キャベツとピーマンのガーリック炒め", ingredients: ["キャベツ", "ピーマン"] },
  { name: "ブロッコリーとトマトの塩だれ炒め", ingredients: ["ブロッコリー", "トマト"] },
  { name: "ピーマンとなすのみそ炒め", ingredients: ["ピーマン", "なす"] },
  { name: "トマトとレタスの中華あんかけ", ingredients: ["トマト", "レタス", "玉ねぎ"] },
  { name: "なすときゅうりのサラダ", ingredients: ["なす", "きゅうり"] },
  { name: "レタスとほうれん草の丼", ingredients: ["レタス", "ほうれん草", "ごはん"] },
  { name: "きゅうりと小松菜のパスタ", ingredients: ["きゅうり", "小松菜", "パスタ"] },
  { name: "ほうれん草ともやしの炒め物", ingredients: ["ほうれん草", "もやし"] },
  { name: "小松菜とかぼちゃの煮物", ingredients: ["小松菜", "かぼちゃ"] },
  { name: "もやしと大根のバターソテー", ingredients: ["もやし", "大根"] },
  { name: "かぼちゃとごぼうのガーリック炒め", ingredients: ["かぼちゃ", "ごぼう"] },
  { name: "大根とれんこんの塩だれ炒め", ingredients: ["大根", "れんこん"] },
  { name: "ごぼうとさつまいものみそ炒め", ingredients: ["ごぼう", "さつまいも"] },
  { name: "れんこんと長ねぎの中華あんかけ", ingredients: ["れんこん", "長ねぎ", "玉ねぎ"] },
  { name: "さつまいもとにらのサラダ", ingredients: ["さつまいも", "にら"] },
  { name: "長ねぎとセロリの丼", ingredients: ["長ねぎ", "セロリ", "ごはん"] },
  { name: "にらとズッキーニのパスタ", ingredients: ["にら", "ズッキーニ", "パスタ"] },
  { name: "セロリとパプリカ赤の炒め物", ingredients: ["セロリ", "パプリカ赤"] },
  { name: "ズッキーニとパプリカ黄の煮物", ingredients: ["ズッキーニ", "パプリカ黄"] },
  { name: "パプリカ赤とカリフラワーのバターソテー", ingredients: ["パプリカ赤", "カリフラワー"] },
  { name: "パプリカ黄とアスパラガスのガーリック炒め", ingredients: ["パプリカ黄", "アスパラガス"] },
  { name: "カリフラワーと水菜の塩だれ炒め", ingredients: ["カリフラワー", "水菜"] },
  { name: "アスパラガスと春菊のみそ炒め", ingredients: ["アスパラガス", "春菊"] },
  { name: "水菜と菜の花の中華あんかけ", ingredients: ["水菜", "菜の花", "玉ねぎ"] },
  { name: "春菊とクレソンのサラダ", ingredients: ["春菊", "クレソン"] },
  { name: "菜の花とチンゲン菜の丼", ingredients: ["菜の花", "チンゲン菜", "ごはん"] },
  { name: "クレソンとししとうのパスタ", ingredients: ["クレソン", "ししとう", "パスタ"] },
  { name: "チンゲン菜とミョウガの炒め物", ingredients: ["チンゲン菜", "ミョウガ"] },
  { name: "ししとうと大葉の煮物", ingredients: ["ししとう", "大葉"] },
  { name: "ミョウガとしょうがのバターソテー", ingredients: ["ミョウガ", "しょうが"] },
  { name: "大葉とにんにくのガーリック炒め", ingredients: ["大葉", "にんにく"] },
  { name: "しょうがととうもろこしの塩だれ炒め", ingredients: ["しょうが", "とうもろこし"] },
  { name: "にんにくと枝豆のみそ炒め", ingredients: ["にんにく", "枝豆"] },
  { name: "とうもろこしと空芯菜の中華あんかけ", ingredients: ["とうもろこし", "空芯菜", "玉ねぎ"] },
  { name: "枝豆とケールのサラダ", ingredients: ["枝豆", "ケール"] },
  { name: "空芯菜とサニーレタスの丼", ingredients: ["空芯菜", "サニーレタス", "ごはん"] },
  { name: "ケールと白菜のパスタ", ingredients: ["ケール", "白菜", "パスタ"] }
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

