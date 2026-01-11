// c:\WEB\酒精大富翁\src\data.js

// === 設定與資料 ===
let TOTAL_TILES = 28;
const MAX_PLAYERS = 12;
const MIN_PLAYERS = 2;

// 預設顏色庫
const PLAYER_COLORS = [
  { bg: "bg-red-500", text: "text-red-500", emoji: "🔴" },
  { bg: "bg-blue-500", text: "text-blue-500", emoji: "🔵" },
  { bg: "bg-green-500", text: "text-green-500", emoji: "🟢" },
  { bg: "bg-yellow-500", text: "text-yellow-500", emoji: "🟡" },
  { bg: "bg-purple-500", text: "text-purple-500", emoji: "🟣" },
  { bg: "bg-pink-500", text: "text-pink-500", emoji: "💗" },
  { bg: "bg-orange-500", text: "text-orange-500", emoji: "🟠" },
  { bg: "bg-teal-500", text: "text-teal-500", emoji: "💠" },
  { bg: "bg-indigo-500", text: "text-indigo-500", emoji: "🍆" },
  { bg: "bg-lime-500", text: "text-lime-500", emoji: "🍐" },
  { bg: "bg-cyan-500", text: "text-cyan-500", emoji: "🧊" },
  { bg: "bg-gray-500", text: "text-gray-500", emoji: "🗿" },
];

// 棋子圖示庫
const TOKEN_ICONS = [
  "🍺",
  "🍷",
  "🍸",
  "🍹",
  "🍾",
  "🍶",
  "🥃",
  "🧊",
  "🎲",
  "🥜",
  "🎤",
  "🤢",
  "🚕",
  "🚽",
  "🛌",
  "🦍",
  "🐕",
  "🐈",
  "💩",
  "🤡",
  "👻",
  "👽",
  "🤖",
  "🎃",
];

// 地圖資料
let mapData = [
  {
    id: 0,
    type: "start",
    text: "起點",
    description: "經過領取獎勵！獲得免死金牌一張！",
  },
  {
    id: 1,
    type: "fate",
    text: "命運",
    description: "命運之神眷顧你...抽一張卡！",
  },
  {
    id: 2,
    type: "normal",
    text: "喝半杯",
    description: "沒什麼好說的，喝半杯！",
  },
  { id: 3, type: "chance", text: "機會", description: "機會來了，抽一張卡！" },
  {
    id: 4,
    type: "normal",
    text: "照相機",
    description: "所有人定格！最後動的人喝！",
  },
  {
    id: 5,
    type: "normal",
    text: "指定",
    description: "指定現場任一個人喝一杯！",
  },
  {
    id: 6,
    type: "jail",
    text: "廁所",
    description: "尿急嗎？暫停一回合去廁所吧。",
  },
  {
    id: 7,
    type: "chance",
    text: "機會",
    description: "機會來了，抽一張卡！",
  },
  {
    id: 8,
    type: "punish",
    text: "乾杯",
    description: "氣氛到了，所有人乾杯！",
  },
  {
    id: 9,
    type: "normal", // Top Right Corner
    text: "大冒險",
    description: "完成一個大冒險挑戰，失敗喝三杯！",
  },
  {
    id: 10,
    type: "jail",
    text: "暫停",
    description: "休息是為了走更長的路，暫停一回合。",
  },
  {
    id: 11,
    type: "duel",
    text: "對決",
    description: "挑選一名對手進行生死決鬥！",
  },
  {
    id: 12,
    type: "normal",
    text: "上家喝",
    description: "你的上家真倒楣，喝一杯！",
  },
  {
    id: 13,
    type: "fate",
    text: "命運",
    description: "命運之神再次降臨...抽卡！",
  },
  {
    id: 14, // Bottom Right Corner (Still)
    type: "punish",
    text: "喝一杯",
    description: "簡簡單單，自己喝一杯。",
  },
  {
    id: 15,
    type: "normal",
    text: "逛三園",
    description: "開始逛三園(水果/動物/國家)，輸的喝！",
  },
  {
    id: 16,
    type: "chance",
    text: "機會",
    description: "把握機會，抽卡！",
  },
  {
    id: 17,
    type: "fate",
    text: "命運",
    description: "命運...又是命運...抽卡！",
  },
  {
    id: 18,
    type: "normal",
    text: "真心話",
    description: "回答一個真心話，不答喝三杯！",
  },
  {
    id: 19,
    type: "chance",
    text: "機會",
    description: "最後的機會，抽卡！",
  },
  {
    id: 20,
    type: "punish",
    text: "大家喝",
    description: "獨樂樂不如眾樂樂，大家一起喝！",
  },
  {
    id: 21,
    type: "jail",
    text: "廁所",
    description: "尿急嗎？暫停一回合去廁所吧。",
  },
  {
    id: 22,
    type: "normal",
    text: "左邊喝",
    description: "坐在你左邊的人喝一杯！",
  },
  {
    id: 23, // Bottom Left Corner
    type: "normal",
    text: "右邊喝",
    description: "坐在你右邊的人喝一杯！",
  },
  {
    id: 24,
    type: "fate",
    text: "命運",
    description: "命運之神在召喚...",
  },
  {
    id: 25,
    type: "chance",
    text: "傳送",
    description: "時空錯亂！隨機向後傳送 1-18 格！",
  },
  {
    id: 26,
    type: "punish",
    text: "喝兩杯",
    description: "運氣真好，連喝兩杯！",
  },
  {
    id: 27,
    type: "chance",
    text: "機會",
    description: "機會來了，好好把握！",
  },
];

// === 卡牌資料庫 ===
const DEFAULT_CHANCE_CARDS = [
  "免死金牌：可抵銷一次懲罰",
  "指定人喝：指定現場任一人喝一杯",
  "大家喝：所有人一起乾杯",
  "再擲一次：獲得再一次擲骰機會",
  "退回起點：直接移動到起點 (領獎勵)",
  "安全過關：什麼事都沒發生",
  "交換位置：與指定玩家交換位置",
  "指定異性喝：指定現場一位異性喝一杯",
  "左右護法：坐在你左邊和右邊的人各喝一杯",
  "起立蹲下：所有人起立，最後一個起立的人喝",
  "猜拳王：找一個人猜拳，輸的喝兩杯",
  "國王遊戲：下一輪結束前，你可以命令任何人做一件事(不過份的)",
  "反彈卡：下次被處罰時，可以反彈給指定者",
  "幸運星：指定現場酒量最好的人幫你喝一半",
];

let chanceCards = [...DEFAULT_CHANCE_CARDS];

const DEFAULT_FATE_CARDS = [
  "喝三杯：沒什麼好說的，喝！",
  "模仿動物：模仿一種動物叫聲直到下一輪",
  "真心話：回答一個真心話，不答喝三杯",
  "大冒險：與右邊的人十指緊扣 10 秒",
  "打電話：打給通訊錄第 5 個人說「我愛你」",
  "照相機：保持姿勢不動，最後動的喝",
  "深水炸彈：喝一杯特調",
  "交杯酒：與左邊的人喝交杯酒",
  "性感姿勢：擺出一個性感姿勢，大家不滿意就喝",
  "瀏覽紀錄：讓大家看你手機瀏覽器最後一個分頁(或喝5杯)",
  "借錢大作戰：隨機打給朋友借 1000 元(或喝3杯)",
  "體能訓練：伏地挺身 10 下",
  "人體畫布：讓右邊的人在你臉上畫一個圖案",
  "秘密時間：說出一個沒人知道的秘密",
  "英語角：只能用英文說話直到下一輪，說中文就喝",
];

let fateCards = [...DEFAULT_FATE_CARDS];
