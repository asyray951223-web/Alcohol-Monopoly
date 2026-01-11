// script.js

// 遊戲狀態
let players = [];
let currentPlayerIndex = 0;
let isAnimating = false;

// DOM 元素
const landingPage = document.getElementById("landing-page");
const enterGameBtn = document.getElementById("enter-game-btn");
const setupScreen = document.getElementById("setup-screen");
const gameContainer = document.getElementById("game-container");
const rouletteContainer = document.getElementById("roulette-container"); // 新增
const diceContainer = document.getElementById("dice-container"); // 新增
const timerContainer = document.getElementById("timer-container"); // 新增
const leaderboardContainer = document.getElementById("leaderboard-container"); // 新增
const settingsContainer = document.getElementById("settings-container"); // 新增
const cardsContainer = document.getElementById("cards-container"); // 新增
const mapEditorContainer = document.getElementById("map-editor-container"); // 新增
const historyContainer = document.getElementById("history-container"); // 新增
const helpContainer = document.getElementById("help-container"); // 新增
const gameOverContainer = document.getElementById("game-over-container"); // 新增
const playerInputsContainer = document.getElementById("player-inputs");
const addPlayerBtn = document.getElementById("add-player-btn");
const removePlayerBtn = document.getElementById("remove-player-btn");
const startGameBtn = document.getElementById("start-game-btn");

const mainDiceWrapper = document.getElementById("main-dice-wrapper");
const rollBtn = document.getElementById("roll-btn");
const currentPlayerNameEl = document.getElementById("current-player-name");
const currentPlayerDrinksEl = document.getElementById("current-player-drinks"); // 新增
const currentPlayerShieldsEl = document.getElementById(
  "current-player-shields"
); // 新增
const currentPlayerShieldCountEl = document.getElementById(
  "current-player-shield-count"
); // 新增
const mobilePlayerNameEl = document.getElementById("mobile-player-name"); // 新增
const mobilePlayerDrinksEl = document.getElementById("mobile-player-drinks"); // 新增
const mobilePlayerShieldsEl = document.getElementById("mobile-player-shields"); // 新增
const mobilePlayerShieldCountEl = document.getElementById(
  "mobile-player-shield-count"
); // 新增
const playersLayer = document.getElementById("players-layer");
const modal = document.getElementById("event-modal");

// === 中心面板 DOM ===
const centerLeftPanel = document.getElementById("center-left-panel");
const centerDefaultView = document.getElementById("center-default-view");
const centerTileView = document.getElementById("center-tile-view");
const centerTileIcon = document.getElementById("center-tile-icon");
const centerTileTitle = document.getElementById("center-tile-title");
const centerTileDesc = document.getElementById("center-tile-desc");

const modalCardContainer = document.getElementById("modal-card-container");
const modalFlipInner = document.getElementById("modal-flip-inner");
const modalFrontFace = document.getElementById("modal-front-face");
const modalFrontIcon = document.getElementById("modal-front-icon");
const modalFrontTitle = document.getElementById("modal-front-title");
const modalBackTitle = document.getElementById("modal-back-title");
const modalBackDesc = document.getElementById("modal-back-desc");
const closeModalBtn = document.getElementById("close-modal-btn");
const historyLog = document.getElementById("history-log"); // 新增
const historyBackBtn = document.getElementById("history-back-btn"); // 新增

// === 獨立骰子頁面 DOM ===
const standaloneDiceWrapper = document.getElementById(
  "standalone-dice-wrapper"
);
const diceCountMinus = document.getElementById("dice-count-minus");
const diceCountPlus = document.getElementById("dice-count-plus");
const diceCountDisplay = document.getElementById("dice-count-display");
const standaloneRollBtn = document.getElementById("standalone-roll-btn");
const diceTotalDisplay = document.getElementById("dice-total-display");
const diceTotalValue = document.getElementById("dice-total-value");
const diceBackBtn = document.getElementById("dice-back-btn");

// === 俄羅斯輪盤 DOM ===
const cylinder = document.getElementById("cylinder");
const fireBtn = document.getElementById("fire-btn");
const rouletteBackBtn = document.getElementById("roulette-back-btn");

// === 計時器 DOM ===
const timerDisplay = document.getElementById("timer-display");
const timerStartBtn = document.getElementById("timer-start-btn");
const timerResetBtn = document.getElementById("timer-reset-btn");
const timerBackBtn = document.getElementById("timer-back-btn");

// === 排行榜 DOM ===
const leaderboardList = document.getElementById("leaderboard-list");
const leaderboardBackBtn = document.getElementById("leaderboard-back-btn");
const leaderboardShareBtn = document.getElementById("leaderboard-share-btn"); // 新增
const playersContainer = document.getElementById("players-container"); // 新增
const playersListContent = document.getElementById("players-list-content"); // 新增
const playersBackBtn = document.getElementById("players-back-btn"); // 新增

// === 卡牌管理 DOM ===
const cardsBackBtn = document.getElementById("cards-back-btn"); // 新增
const cardsTabChance = document.getElementById("cards-tab-chance"); // 新增
const cardsTabFate = document.getElementById("cards-tab-fate"); // 新增
const resetCardsBtn = document.getElementById("reset-cards-btn"); // 新增
const helpBackBtn = document.getElementById("help-back-btn"); // 新增

// === 結算畫面 DOM ===
const gameOverList = document.getElementById("game-over-list");
const gameOverReason = document.getElementById("game-over-reason");

// === 設定頁面 DOM ===
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const soundToggleCircle = document.getElementById("sound-toggle-circle");
const bgmToggleBtn = document.getElementById("bgm-toggle-btn"); // 新增
const bgmToggleCircle = document.getElementById("bgm-toggle-circle"); // 新增
const settingDiceMinus = document.getElementById("setting-dice-minus");
const settingDicePlus = document.getElementById("setting-dice-plus");
const settingDiceDisplay = document.getElementById("setting-dice-display");
const cardsList = document.getElementById("cards-list");
const newCardInput = document.getElementById("new-card-input");
const addCardBtn = document.getElementById("add-card-btn");
const fullResetBtn = document.getElementById("full-reset-btn");
const settingsBackBtn = document.getElementById("settings-back-btn");
const settingLimitMinus = document.getElementById("setting-limit-minus"); // 新增
const settingLimitPlus = document.getElementById("setting-limit-plus"); // 新增
const settingLimitDisplay = document.getElementById("setting-limit-display"); // 新增
const settingOrientationLandscape = document.getElementById(
  "setting-orientation-landscape"
); // 新增
const settingOrientationPortrait = document.getElementById(
  "setting-orientation-portrait"
); // 新增
const exportBtn = document.getElementById("export-btn"); // 新增
const importBtn = document.getElementById("import-btn"); // 新增
const importFileInput = document.getElementById("import-file-input"); // 新增

// === 地圖編輯器 DOM ===
const mapEditorPanel = document.getElementById("map-editor-panel");
const mapEditorBackBtn = document.getElementById("map-editor-back-btn"); // 新增
const mapTileSelect = document.getElementById("map-tile-select");
const mapTileText = document.getElementById("map-tile-text");
const mapTileType = document.getElementById("map-tile-type");
const mapTileDesc = document.getElementById("map-tile-desc");
const saveTileBtn = document.getElementById("save-tile-btn");
const randomMapBtn = document.getElementById("random-map-btn");
const mapWidthInput = document.getElementById("map-width-input");
const mapHeightInput = document.getElementById("map-height-input");

const TILE_ICONS = {
  start: "🏁",
  normal: "🎲",
  chance: "❓",
  fate: "🔮",
  jail: "🛑",
  punish: "🍺",
};

// === 選單 DOM ===
const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const menuItems = document.querySelectorAll(".menu-item");

// === 音效設定 ===
const audioEffects = {
  dice: new Audio("sounds/dice.mp3"), // 擲骰子聲
  step: new Audio("sounds/step.mp3"), // 棋子移動聲
  popup: new Audio("sounds/popup.mp3"), // 彈窗提示聲
  click: new Audio("sounds/click.mp3"), // 空槍聲 (請自行準備)
  bang: new Audio("sounds/bang.mp3"), // 開槍聲 (請自行準備)
  alarm: new Audio("sounds/alarm.mp3"), // 計時結束鬧鐘聲 (請自行準備)
};

let isMuted = false;
// BGM 設定
const bgm = new Audio("sounds/bgm.mp3");
bgm.loop = true; // 設定循環播放
let isBgmMuted = true; // 預設關閉

function playSound(effect) {
  if (!isMuted && audioEffects[effect]) {
    audioEffects[effect].currentTime = 0;
    audioEffects[effect]
      .play()
      .catch((e) =>
        console.warn("音效播放失敗 (請確認 sounds 資料夾與檔案是否存在):", e)
      );
  }
}

// === 螢幕恆亮控制 (Wake Lock API) ===
let wakeLock = null;
async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await navigator.wakeLock.request("screen");
      console.log("螢幕恆亮已啟用");
      wakeLock.addEventListener("release", () => {
        console.log("螢幕恆亮已釋放");
      });
    }
  } catch (err) {
    console.warn(`螢幕恆亮啟用失敗: ${err.name}, ${err.message}`);
  }
}

// === 通用視窗控制 ===
function backToGame() {
  rouletteContainer.classList.add("hidden");
  diceContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  cardsContainer.classList.add("hidden");
  mapEditorContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");
  playersContainer.classList.add("hidden"); // 新增
  gameOverContainer.classList.add("hidden"); // 新增
  gameContainer.classList.remove("hidden");
}

// === 選單邏輯 ===
function toggleMenu(show) {
  if (show) {
    sidebar.classList.remove("-translate-x-full");
    sidebarOverlay.classList.remove("hidden");
    setTimeout(() => sidebarOverlay.classList.remove("opacity-0"), 10);
  } else {
    sidebar.classList.add("-translate-x-full");
    sidebarOverlay.classList.add("opacity-0");
    setTimeout(() => sidebarOverlay.classList.add("hidden"), 300);
  }
}

menuBtn.addEventListener("click", () => toggleMenu(true));
closeMenuBtn.addEventListener("click", () => toggleMenu(false));
sidebarOverlay.addEventListener("click", () => toggleMenu(false));

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.currentTarget.dataset.target;
    toggleMenu(false);
    handleMenuAction(target);
  });
});

function handleMenuAction(target) {
  switch (target) {
    case "home":
      backToGame();
      window.scrollTo({ top: 0, behavior: "smooth" });
      break;
    case "players":
      initPlayers();
      break;
    case "leaderboard":
      initLeaderboard();
      break;
    case "cards":
      initCards();
      break;
    case "map":
      initMapEditorPage();
      break;
    case "history":
      initHistory();
      break;
    case "help":
      initHelp();
      break;
    case "dice":
      initDice();
      break;
    case "roulette":
      initRoulette();
      break;
    case "timer":
      initTimer();
      break;
    case "settings":
      initSettings();
      break;
  }
}

// === 俄羅斯輪盤邏輯 ===
let rouletteState = {
  bulletIndex: 0,
  currentChamber: 0,
};

function initRoulette() {
  // 切換介面
  gameContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  cardsContainer.classList.add("hidden");
  mapEditorContainer.classList.add("hidden");
  playersContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");
  rouletteContainer.classList.remove("hidden");

  // 初始化狀態
  rouletteState.bulletIndex = Math.floor(Math.random() * 6);
  rouletteState.currentChamber = 0;

  // 綁定按鈕
  fireBtn.onclick = handleFire;
  rouletteBackBtn.onclick = closeRoulette;
}

function handleFire() {
  // 防止動畫中重複點擊
  if (cylinder.classList.contains("cylinder-spin")) return;

  // 動畫
  cylinder.classList.add("cylinder-spin");
  playSound("dice"); // 播放旋轉音效 (借用骰子聲模擬轉動)

  // 等待動畫結束 (2秒) 再揭曉結果
  setTimeout(() => {
    cylinder.classList.remove("cylinder-spin");

    if (rouletteState.currentChamber === rouletteState.bulletIndex) {
      playSound("bang");

      // 加入中彈特效
      rouletteContainer.classList.add("critical-hit");

      // 延遲顯示彈窗，讓特效跑完
      setTimeout(() => {
        rouletteContainer.classList.remove("critical-hit");
        showModal("BANG!", `中彈了！喝三杯！`);

        // 遊戲結束，重置
        setTimeout(initRoulette, 2000);
      }, 500);
    } else {
      playSound("click");
      rouletteState.currentChamber++;
    }
  }, 2000);
}

function closeRoulette() {
  backToGame();
}

// === 獨立骰子頁面邏輯 ===
let dicePageState = {
  count: 1,
  isRolling: false,
};

function initDice() {
  // 切換介面
  gameContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  rouletteContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  cardsContainer.classList.add("hidden");
  mapEditorContainer.classList.add("hidden");
  playersContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");
  diceContainer.classList.remove("hidden");

  // 綁定事件
  diceBackBtn.onclick = closeDice;
  diceCountMinus.onclick = () => updateDiceCount(-1);
  diceCountPlus.onclick = () => updateDiceCount(1);
  standaloneRollBtn.onclick = rollStandaloneDice;

  // 初始化狀態
  updateDiceCount(0);
}

function updateDiceCount(delta) {
  let newCount = dicePageState.count + delta;
  // 限制範圍 1 - 12
  if (newCount < 1) newCount = 1;
  if (newCount > 12) newCount = 12;

  dicePageState.count = newCount;
  diceCountDisplay.innerText = newCount;

  diceTotalDisplay.classList.add("opacity-0");
  renderDiceElements();
}

function renderDiceElements() {
  standaloneDiceWrapper.innerHTML = "";
  for (let i = 0; i < dicePageState.count; i++) {
    const diceContainer = document.createElement("div");
    diceContainer.className =
      "w-24 h-24 md:w-32 md:h-32 flex items-center justify-center";
    diceContainer.innerHTML = `
      <div class="dice-scale-wrapper" style="transform: scale(0.5);">
        <div class="dice-scene">
          <div class="dice-cube" id="dice-cube-standalone-${i}">
            <div class="dice-face face-1">⚀</div>
            <div class="dice-face face-2">⚅</div>
            <div class="dice-face face-3">⚃</div>
            <div class="dice-face face-4">⚂</div>
            <div class="dice-face face-5">⚄</div>
            <div class="dice-face face-6">⚁</div>
          </div>
        </div>
      </div>
    `;
    standaloneDiceWrapper.appendChild(diceContainer);
  }
}

// 骰子旋轉邏輯
// 定義每一面需要的旋轉角度 (對應 HTML 中的 .face-1 到 .face-6)
// 1: Front (0,0), 2: Back (0,180), 3: Right (0,-90), 4: Left (0,90), 5: Top (-90,0), 6: Bottom (90,0)
// 注意：這裡的映射需對應 HTML 結構中的 unicode 字符位置
// HTML 設定: 1=⚀, 2=⚅, 3=⚃, 4=⚂, 5=⚄, 6=⚁
const diceRotations = {
  1: { x: 0, y: 0 },
  6: { x: 0, y: 180 },
  4: { x: 0, y: -90 },
  3: { x: 0, y: 90 },
  5: { x: -90, y: 0 },
  2: { x: 90, y: 0 },
};

function getDiceRotation(number) {
  const base = diceRotations[number];
  // 加入隨機圈數 (至少轉 2 圈，最多 4 圈)
  const extraX = (Math.floor(Math.random() * 3) + 2) * 360;
  const extraY = (Math.floor(Math.random() * 3) + 2) * 360;
  return `rotateX(${base.x + extraX}deg) rotateY(${base.y + extraY}deg)`;
}

function rollStandaloneDice() {
  if (dicePageState.isRolling) return;
  dicePageState.isRolling = true;
  playSound("dice");
  diceTotalDisplay.classList.add("opacity-0");

  let total = 0;
  const cubes = [];

  for (let i = 0; i < dicePageState.count; i++) {
    const cube = document.getElementById(`dice-cube-standalone-${i}`);
    if (cube) {
      // 重置動畫狀態，確保每次都能觸發旋轉
      cube.style.transition = "none";
      cube.style.transform = `rotateX(${Math.random() * 360}deg) rotateY(${
        Math.random() * 360
      }deg)`;
      void cube.offsetWidth; // 強制重繪
      cube.style.transition = "transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)";

      const val = Math.floor(Math.random() * 6) + 1;
      total += val;
      cube.style.transform = getDiceRotation(val);
      cubes.push(cube);
    }
  }

  // 等待動畫結束 (1秒)
  setTimeout(() => {
    dicePageState.isRolling = false;

    // 加入震動特效 (Standalone Dice)
    cubes.forEach((cube) => {
      const scene = cube.parentElement;
      scene.classList.add("dice-shake");
      setTimeout(() => scene.classList.remove("dice-shake"), 300);
    });

    diceTotalValue.innerText = total;
    diceTotalDisplay.classList.remove("opacity-0");
  }, 1000);
}

function closeDice() {
  backToGame();
}

// === 計時器邏輯 ===
let timerState = {
  timeLeft: 0,
  intervalId: null,
  isRunning: false,
};

function initTimer() {
  // 切換介面
  gameContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  rouletteContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  cardsContainer.classList.add("hidden");
  mapEditorContainer.classList.add("hidden");
  diceContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");
  playersContainer.classList.add("hidden");
  timerContainer.classList.remove("hidden");

  // 綁定按鈕
  timerStartBtn.onclick = toggleTimer;
  timerResetBtn.onclick = resetTimer;
  timerBackBtn.onclick = closeTimer;

  // 綁定預設時間按鈕
  document.querySelectorAll(".timer-preset-btn").forEach((btn) => {
    btn.onclick = () => {
      addTime(parseInt(btn.dataset.time));
    };
  });

  updateTimerDisplay();
}

function addTime(seconds) {
  timerState.timeLeft += seconds;
  if (timerState.timeLeft > 5) {
    timerDisplay.classList.remove("timer-warning");
  }
  updateTimerDisplay();
}

function toggleTimer() {
  if (timerState.isRunning) {
    // 暫停
    clearInterval(timerState.intervalId);
    timerState.isRunning = false;
    timerStartBtn.innerText = "繼續";
    timerStartBtn.classList.replace("bg-yellow-600", "bg-green-600");
    timerStartBtn.classList.replace(
      "hover:bg-yellow-500",
      "hover:bg-green-500"
    );
  } else {
    // 開始
    if (timerState.timeLeft <= 0) return;

    timerState.isRunning = true;
    timerStartBtn.innerText = "暫停";
    timerStartBtn.classList.replace("bg-green-600", "bg-yellow-600");
    timerStartBtn.classList.replace(
      "hover:bg-green-500",
      "hover:bg-yellow-500"
    );

    timerState.intervalId = setInterval(() => {
      timerState.timeLeft--;
      updateTimerDisplay();

      // 倒數 5 秒特效
      if (timerState.timeLeft <= 5 && timerState.timeLeft > 0) {
        timerDisplay.classList.add("timer-warning");
      }

      if (timerState.timeLeft <= 0) {
        clearInterval(timerState.intervalId);
        timerState.isRunning = false;
        timerDisplay.classList.remove("timer-warning");
        playSound("alarm");
        showModal("時間到！", "時間結束，請執行懲罰！");
        resetTimer();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerState.intervalId);
  timerState.timeLeft = 0;
  timerState.isRunning = false;
  timerDisplay.classList.remove("timer-warning");
  timerStartBtn.innerText = "開始";
  timerStartBtn.classList.replace("bg-yellow-600", "bg-green-600");
  timerStartBtn.classList.replace("hover:bg-yellow-500", "hover:bg-green-500");
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = Math.floor(timerState.timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const s = (timerState.timeLeft % 60).toString().padStart(2, "0");
  timerDisplay.innerText = `${m}:${s}`;
}

function closeTimer() {
  resetTimer();
  backToGame();
}

// === 排行榜邏輯 ===
function initLeaderboard() {
  if (players.length === 0) {
    alert("請先開始遊戲！");
    return;
  }

  // 切換介面
  gameContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  rouletteContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  diceContainer.classList.add("hidden");
  cardsContainer.classList.add("hidden");
  mapEditorContainer.classList.add("hidden");
  playersContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");
  leaderboardContainer.classList.remove("hidden");

  leaderboardBackBtn.onclick = closeLeaderboard;
  leaderboardShareBtn.onclick = captureLeaderboard; // 綁定截圖事件
  renderLeaderboard();
}

function renderLeaderboard() {
  // 複製並排序玩家 (杯數多到少)
  const sortedPlayers = [...players].sort(
    (a, b) => b.drinkCount - a.drinkCount
  );

  leaderboardList.innerHTML = "";
  sortedPlayers.forEach((player, index) => {
    const row = document.createElement("div");
    row.className =
      "grid grid-cols-12 gap-2 items-center bg-gray-900 bg-opacity-50 p-3 rounded-lg border border-gray-700";

    // 前三名加強顯示
    let rankDisplay = `#${index + 1}`;
    if (index === 0) rankDisplay = "👑";
    if (index === 1) rankDisplay = "🥈";
    if (index === 2) rankDisplay = "🥉";

    row.innerHTML = `
            <div class="col-span-2 text-center font-bold text-xl">${rankDisplay}</div>
            <div class="col-span-4 font-bold ${player.textColor} truncate cursor-pointer hover:underline" onclick="showPlayerStats(${player.id})" title="點擊查看詳細數據">${player.name}</div>
            <div class="col-span-3 text-center font-mono text-lg text-yellow-400">${player.drinkCount} <span class="text-xs text-gray-500">杯</span></div>
            <div class="col-span-3 flex justify-center space-x-1">
                <button onclick="adjustDrink(${player.id}, 1, this)" class="w-8 h-8 bg-green-600 hover:bg-green-500 rounded text-white font-bold flex items-center justify-center">+</button>
                <button onclick="adjustDrink(${player.id}, -1)" class="w-8 h-8 bg-red-600 hover:bg-red-500 rounded text-white font-bold flex items-center justify-center">-</button>
            </div>
        `;
    leaderboardList.appendChild(row);
  });
}

function showFloatAnimation(target, text) {
  const rect = target.getBoundingClientRect();
  const floatEl = document.createElement("div");
  floatEl.className = "float-plus-one";
  floatEl.innerText = text;
  floatEl.style.left = `${rect.left + rect.width / 2}px`;
  floatEl.style.top = `${rect.top}px`;
  document.body.appendChild(floatEl);

  setTimeout(() => floatEl.remove(), 800);
}

window.showPlayerStats = function (id) {
  const player = players.find((p) => p.id === id);
  if (!player) return;

  const stats = [
    `👤 玩家：${player.name}`,
    `🍺 目前杯數：${player.drinkCount}`,
    `🛡️ 目前金牌：${player.shieldCount || 0}`,
    `----------------`,
    `📊 詳細數據：`,
    `⚠️ 被懲罰次數：${player.punishCount || 0} 次`,
    `🏅 生涯獲得金牌：${player.totalShields || 0} 枚`,
    `📍 目前位置：${
      mapData.find((t) => t.id === player.position)?.text || "未知"
    }`,
  ].join("\n");

  showModal("玩家數據", stats, "stats");
};

function adjustDrink(playerId, amount, btn) {
  const player = players.find((p) => p.id === playerId);
  if (player) {
    player.drinkCount = Math.max(0, player.drinkCount + amount); // 不可小於 0
    if (amount > 0) player.punishCount = (player.punishCount || 0) + 1; // 增加懲罰計數
    // 如果是加分，可以考慮播放音效
    if (amount > 0 && btn) {
      showFloatAnimation(btn, "+1");
    }
    saveGame(); // 儲存變更
    renderLeaderboard();
    checkGameOver(); // 檢查是否結束
  }
}

function captureLeaderboard() {
  const element = document.getElementById("leaderboard-card");
  if (!element || typeof html2canvas === "undefined") {
    alert("截圖功能準備中，請稍後再試。");
    return;
  }

  // 使用 html2canvas 進行截圖
  html2canvas(element, {
    backgroundColor: "#1f2937", // bg-gray-800 確保背景色正確
    scale: 2, // 提升清晰度
  })
    .then((canvas) => {
      const link = document.createElement("a");
      link.download = `alcohol-monopoly-leaderboard-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    })
    .catch((err) => {
      console.error("截圖失敗:", err);
      alert("截圖失敗，請重試。");
    });
}

function closeLeaderboard() {
  backToGame();
}

// === 歷史紀錄頁面邏輯 ===
function initHistory() {
  if (players.length === 0) {
    alert("請先開始遊戲！");
    return;
  }
  gameContainer.classList.add("hidden");
  rouletteContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  diceContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  cardsContainer.classList.add("hidden");
  mapEditorContainer.classList.add("hidden");
  playersContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");
  historyContainer.classList.remove("hidden");

  historyBackBtn.onclick = closeHistory;
}

function closeHistory() {
  backToGame();
}

// === 卡牌管理頁面邏輯 ===
let currentCardsTab = "chance"; // 'chance' or 'fate'

function initCards() {
  // 切換介面
  gameContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  rouletteContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  diceContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  playersContainer.classList.add("hidden");
  cardsContainer.classList.remove("hidden");
  mapEditorContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");

  cardsBackBtn.onclick = () => backToGame();
  cardsTabChance.onclick = () => switchCardsTab("chance");
  cardsTabFate.onclick = () => switchCardsTab("fate");
  addCardBtn.onclick = addCustomCard;
  resetCardsBtn.onclick = resetCardsToDefault;

  // 初始化顯示
  switchCardsTab("chance");
}

// === 地圖編輯器頁面邏輯 ===
function initMapEditorPage() {
  // 切換介面
  gameContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  rouletteContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  diceContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  cardsContainer.classList.add("hidden");
  playersContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");
  mapEditorContainer.classList.remove("hidden");

  mapEditorBackBtn.onclick = () => backToGame();

  // 綁定事件
  mapTileSelect.onchange = loadTileData;
  saveTileBtn.onclick = saveTileChange;
  randomMapBtn.onclick = randomizeMap;
  mapWidthInput.onchange = () =>
    resizeMap(parseInt(mapWidthInput.value), mapHeight);
  mapHeightInput.onchange = () =>
    resizeMap(mapWidth, parseInt(mapHeightInput.value));

  initMapEditor(); // 初始化下拉選單
  loadTileData(); // 載入當前選中的格子資料
}

// === 設定頁面邏輯 ===
let mainGameDiceCount = 1;
// 偵測是否為手機直向模式，若是則預設為直向地圖 (6x10)，否則為橫向 (10x6)
const isMobilePortrait =
  window.innerWidth < 768 && window.innerHeight > window.innerWidth;
let mapWidth = isMobilePortrait ? 6 : 10;
let mapHeight = isMobilePortrait ? 10 : 6;
let maxDrinksLimit = 20; // 預設 20 杯結束

function initSettings() {
  // 切換介面
  gameContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  rouletteContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  diceContainer.classList.add("hidden");
  settingsContainer.classList.remove("hidden");
  cardsContainer.classList.add("hidden");
  mapEditorContainer.classList.add("hidden");
  playersContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");

  // 綁定事件
  soundToggleBtn.onclick = toggleSound;
  bgmToggleBtn.onclick = toggleBgm; // 新增 BGM 切換事件
  settingDiceMinus.onclick = () => updateMainDiceSetting(-1);
  settingDicePlus.onclick = () => updateMainDiceSetting(1);
  settingLimitMinus.onclick = () => updateLimitSetting(-5);
  settingLimitPlus.onclick = () => updateLimitSetting(5);
  settingOrientationLandscape.onclick = () => setMapOrientation("landscape");
  settingOrientationPortrait.onclick = () => setMapOrientation("portrait");
  exportBtn.onclick = exportGameData; // 綁定匯出
  importBtn.onclick = () => importFileInput.click(); // 綁定匯入按鈕觸發 input
  importFileInput.onchange = importGameData; // 綁定檔案選擇事件
  fullResetBtn.onclick = () => {
    if (confirm("確定要重置所有遊戲進度嗎？這將回到初始畫面。")) {
      location.reload();
    }
  };

  settingsBackBtn.onclick = closeSettings;

  // 初始化顯示
  updateSoundUI();
  updateBgmUI(); // 新增 BGM UI 初始化
  settingDiceDisplay.innerText = mainGameDiceCount;
  settingLimitDisplay.innerText = maxDrinksLimit;
  updateOrientationUI();
}

function toggleSound() {
  isMuted = !isMuted;
  updateSoundUI();
}

function updateSoundUI() {
  if (isMuted) {
    soundToggleBtn.classList.replace("bg-green-500", "bg-gray-500");
    soundToggleCircle.classList.replace("left-7", "left-1");
  } else {
    soundToggleBtn.classList.replace("bg-gray-500", "bg-green-500");
    soundToggleCircle.classList.replace("left-1", "left-7");
  }
}

function toggleBgm() {
  isBgmMuted = !isBgmMuted;
  updateBgmUI();
  if (!isBgmMuted) {
    bgm.play().catch((e) => console.warn("BGM 播放失敗:", e));
  } else {
    bgm.pause();
  }
}

function updateBgmUI() {
  if (isBgmMuted) {
    bgmToggleBtn.classList.replace("bg-green-500", "bg-gray-500");
    bgmToggleCircle.classList.replace("left-7", "left-1");
  } else {
    bgmToggleBtn.classList.replace("bg-gray-500", "bg-green-500");
    bgmToggleCircle.classList.replace("left-1", "left-7");
  }
}

function updateMainDiceSetting(delta) {
  let newCount = mainGameDiceCount + delta;
  if (newCount < 1) newCount = 1;
  if (newCount > 3) newCount = 3; // 限制主頁最多 3 顆，避免版面爆掉

  mainGameDiceCount = newCount;
  settingDiceDisplay.innerText = mainGameDiceCount;
  renderMainGameDice();
}

function updateLimitSetting(delta) {
  let newLimit = maxDrinksLimit + delta;
  if (newLimit < 5) newLimit = 5; // 最少 5 杯
  if (newLimit > 100) newLimit = 100; // 最多 100 杯

  maxDrinksLimit = newLimit;
  settingLimitDisplay.innerText = maxDrinksLimit;
  saveGame(); // 儲存設定
}

function setMapOrientation(mode) {
  if (mode === "landscape") {
    resizeMap(10, 6);
  } else {
    resizeMap(6, 10);
  }
  updateOrientationUI();
  saveGame();
}

function updateOrientationUI() {
  const isPortrait = mapHeight > mapWidth;
  if (isPortrait) {
    settingOrientationPortrait.className =
      "px-3 py-1 rounded bg-blue-600 text-white font-bold transition text-sm shadow-lg";
    settingOrientationLandscape.className =
      "px-3 py-1 rounded bg-gray-600 text-gray-400 hover:bg-gray-500 font-bold transition text-sm";
  } else {
    settingOrientationLandscape.className =
      "px-3 py-1 rounded bg-blue-600 text-white font-bold transition text-sm shadow-lg";
    settingOrientationPortrait.className =
      "px-3 py-1 rounded bg-gray-600 text-gray-400 hover:bg-gray-500 font-bold transition text-sm";
  }
}

function renderMainGameDice() {
  mainDiceWrapper.innerHTML = "";
  for (let i = 0; i < mainGameDiceCount; i++) {
    const wrapper = document.createElement("div");
    wrapper.className = "w-20 h-20 flex items-center justify-center";
    wrapper.innerHTML = `
      <div class="dice-scale-wrapper dice-scale-main">
        <div class="dice-scene">
          <div class="dice-cube main-game-dice">
            <div class="dice-face face-1">⚀</div>
            <div class="dice-face face-2">⚅</div>
            <div class="dice-face face-3">⚃</div>
            <div class="dice-face face-4">⚂</div>
            <div class="dice-face face-5">⚄</div>
            <div class="dice-face face-6">⚁</div>
          </div>
        </div>
      </div>`;
    mainDiceWrapper.appendChild(wrapper);
  }
}

function switchCardsTab(tab) {
  currentCardsTab = tab;

  // 重置所有 Tab 樣式
  const inactiveClass =
    "flex-1 py-2 rounded-t-lg bg-gray-700 text-gray-400 hover:bg-gray-600 font-bold transition";
  const activeClass =
    "flex-1 py-2 rounded-t-lg bg-gray-900 text-pink-500 border-t-2 border-pink-500 font-bold transition";

  cardsTabChance.className = inactiveClass;
  cardsTabFate.className = inactiveClass;

  if (tab === "chance") {
    cardsTabChance.className = activeClass;
  } else if (tab === "fate") {
    cardsTabFate.className = activeClass;
  }
  renderCardsList();
}

function renderCardsList() {
  const list = currentCardsTab === "chance" ? chanceCards : fateCards;
  cardsList.innerHTML = "";

  list.forEach((card, index) => {
    const div = document.createElement("div");
    div.className =
      "flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700";
    div.innerHTML = `
            <span class="text-sm text-gray-300 truncate mr-2 flex-1 cursor-pointer hover:text-white" onclick="editCustomCard(${index})" title="點擊編輯">${card}</span>
            <button onclick="removeCustomCard(${index})" class="text-red-500 hover:text-red-400 font-bold px-2">×</button>
        `;
    cardsList.appendChild(div);
  });
}

// 掛載到 window 以便 onclick 呼叫
window.removeCustomCard = function (index) {
  const list = currentCardsTab === "chance" ? chanceCards : fateCards;
  list.splice(index, 1);
  renderCardsList();
};

window.editCustomCard = function (index) {
  const list = currentCardsTab === "chance" ? chanceCards : fateCards;
  const newText = prompt("編輯卡牌內容：", list[index]);
  if (newText !== null) {
    const trimmed = newText.trim();
    if (trimmed) {
      list[index] = trimmed;
      renderCardsList();
      saveGame();
    }
  }
};

function addCustomCard() {
  const text = newCardInput.value.trim();
  if (text) {
    const list = currentCardsTab === "chance" ? chanceCards : fateCards;
    list.push(text);
    newCardInput.value = "";
    renderCardsList();
  }
}

function resetCardsToDefault() {
  if (confirm("確定要將所有卡牌重置為預設內容嗎？\n這將清除所有自訂卡牌。")) {
    chanceCards = [...DEFAULT_CHANCE_CARDS];
    fateCards = [...DEFAULT_FATE_CARDS];
    renderCardsList();
    saveGame();
    alert("卡牌已重置為預設狀態！");
  }
}

// === 玩家列表頁面邏輯 ===
function initPlayers() {
  if (players.length === 0) {
    alert("請先開始遊戲！");
    return;
  }
  // Hide others
  gameContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  rouletteContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  diceContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  cardsContainer.classList.add("hidden");
  mapEditorContainer.classList.add("hidden");
  helpContainer.classList.add("hidden");

  playersContainer.classList.remove("hidden");

  playersBackBtn.onclick = closePlayers;
  renderPlayersPage();
}

function closePlayers() {
  backToGame();
}

// === 幫助頁面邏輯 ===
function initHelp() {
  gameContainer.classList.add("hidden");
  historyContainer.classList.add("hidden");
  rouletteContainer.classList.add("hidden");
  timerContainer.classList.add("hidden");
  leaderboardContainer.classList.add("hidden");
  diceContainer.classList.add("hidden");
  settingsContainer.classList.add("hidden");
  cardsContainer.classList.add("hidden");
  mapEditorContainer.classList.add("hidden");
  playersContainer.classList.add("hidden");
  helpContainer.classList.remove("hidden");

  helpBackBtn.onclick = backToGame;
}

function renderPlayersPage() {
  playersListContent.innerHTML = "";
  players.forEach((player) => {
    const tile = mapData.find((t) => t.id === player.position);
    const locationText = tile ? tile.text : "未知領域";

    const card = document.createElement("div");
    // 使用 border-color 替代 bg-color 來做邊框
    const borderColorClass = player.color.replace("bg-", "border-");

    // 根據觀戰狀態套用樣式
    const spectatorClass = player.isSpectator ? "spectator-mode" : "";

    // 改為 Flex Row 佈局以對齊標題列 (名稱 | 杯數 | 觀戰)
    card.className = `bg-gray-800 border-l-4 ${borderColorClass} rounded-r-lg p-3 shadow-md flex items-center justify-between ${spectatorClass}`;

    card.innerHTML = `
        <div class="flex-1 flex items-center space-x-3 min-w-0">
            <div class="relative flex-shrink-0"
                 onmousedown="startLongPress(${player.id})" 
                 ontouchstart="startLongPress(${player.id})" 
                 onmouseup="cancelLongPress()" 
                 onmouseleave="cancelLongPress()" 
                 ontouchend="cancelLongPress()"
                 oncontextmenu="return false;">
                <div class="w-10 h-10 rounded-full ${
                  player.color
                } border-2 border-white shadow flex items-center justify-center text-xl overflow-hidden">
                    ${player.icon}
                </div>
            </div>
            
            <div class="flex flex-col min-w-0 mr-2">
                <input type="text" value="${player.name}" 
                    onchange="updatePlayerName(${player.id}, this.value)"
                    class="bg-transparent border-b border-gray-600 focus:border-white text-white font-bold text-sm w-24 md:w-32 focus:outline-none transition-colors truncate" />
                <div class="flex justify-between items-center text-xs text-gray-400 mt-1">
                    <span class="truncate max-w-[6rem]">📍 ${locationText}</span>
                    <span class="text-yellow-400 font-bold ml-1" title="免死金牌">🛡️ ${
                      player.shieldCount || 0
                    }</span>
                </div>
            </div>

            <div class="flex flex-col space-y-1">
                 <button onclick="togglePlayerSkip(${
                   player.id
                 })" class="text-xs px-2 py-1 rounded border ${
      player.isSkipped
        ? "border-red-500 text-red-400"
        : "border-gray-600 text-gray-400"
    } hover:bg-gray-700 transition whitespace-nowrap">
                    ${player.isSkipped ? "已暫停" : "暫停"}
                 </button>
                 <button onclick="givePlayerShield(${
                   player.id
                 })" class="text-xs px-2 py-1 rounded border border-green-600 text-green-400 hover:bg-gray-700 transition whitespace-nowrap" title="給予一張免死金牌">
                    +金牌
                 </button>
                 ${
                   player.shieldCount > 0
                     ? `<button onclick="usePlayerShield(${player.id})" class="text-xs px-2 py-1 rounded border border-yellow-600 text-yellow-500 hover:bg-gray-700 transition whitespace-nowrap">🛡️ 用金牌</button>`
                     : ""
                 }
            </div>
        </div>
        
        <div class="flex items-center space-x-3">
            <div class="w-12 text-center font-mono text-yellow-400 font-bold">${
              player.drinkCount
            }</div>
            <div class="w-12 text-center flex justify-center">
                <button onclick="togglePlayerSpectator(${player.id})" 
                    class="w-6 h-6 rounded border ${
                      player.isSpectator
                        ? "bg-blue-600 border-blue-400 text-white"
                        : "bg-gray-700 border-gray-500 text-transparent"
                    } flex items-center justify-center transition focus:outline-none">
                    ${player.isSpectator ? "✓" : ""}
                </button>
            </div>
        </div>
    `;
    playersListContent.appendChild(card);
  });
}

function resizeMap(w, h) {
  // 限制範圍
  if (w < 3) w = 3;
  if (w > 20) w = 20;
  if (h < 3) h = 3;
  if (h > 14) h = 14;

  mapWidth = w;
  mapHeight = h;
  mapWidthInput.value = w;
  mapHeightInput.value = h;

  const newTotal = 2 * w + 2 * (h - 2);

  if (newTotal !== TOTAL_TILES) {
    // 調整 mapData 大小
    if (newTotal > TOTAL_TILES) {
      // 增加格子
      for (let i = TOTAL_TILES; i < newTotal; i++) {
        mapData.push({
          id: i,
          type: "normal",
          text: "新格子",
          description: "這是一個新增加的格子。",
        });
      }
    } else {
      // 減少格子
      mapData = mapData.slice(0, newTotal);
      // 若玩家位置超出新地圖範圍，重置回起點
      players.forEach((p) => {
        if (p.position >= newTotal) {
          p.position = 0;
        }
      });
    }
    TOTAL_TILES = newTotal;
    initMapEditor(); // 更新編輯器下拉選單
  }

  renderGameGrid();
}

function renderGameGrid() {
  const grid = document.getElementById("game-grid");
  const centerPanel = document.getElementById("center-panel");

  // 設定 Grid 樣式
  grid.style.gridTemplateColumns = `repeat(${mapWidth}, minmax(0, 1fr))`;
  grid.style.gridTemplateRows = `repeat(${mapHeight}, minmax(0, 1fr))`;
  grid.style.aspectRatio = `${mapWidth}/${mapHeight}`;

  // 清空並保留 Center Panel
  grid.innerHTML = "";
  grid.appendChild(centerPanel);

  // 設定 Center Panel 位置
  centerPanel.style.gridColumn = `2 / span ${mapWidth - 2}`;
  centerPanel.style.gridRow = `2 / span ${mapHeight - 2}`;

  // RWD 優化：根據實際容器寬度動態計算字體大小
  const gridWidth = grid.clientWidth || window.innerWidth;
  const cellSize = gridWidth / mapWidth;
  const fontSize = Math.max(8, Math.min(24, Math.floor(cellSize * 0.3)));

  // 生成格子

  mapData.forEach((tile) => {
    const el = document.createElement("div");
    el.id = `tile-${tile.id}`;
    el.className = `tile tile-${tile.type} rounded border-2 flex items-center justify-center text-center p-0.5`;
    el.style.fontSize = `${fontSize}px`;
    el.innerHTML = `<span class="tile-text">${
      tile.text
    }</span><span class="tile-icon">${TILE_ICONS[tile.type] || "🎲"}</span>`;

    // 點擊格子顯示詳細資訊
    el.onclick = () => showCenterTileInfo(tile);

    // 計算位置
    let col, row;
    if (tile.id < mapWidth) {
      // Top Row
      row = 1;
      col = tile.id + 1;
    } else if (tile.id < mapWidth + mapHeight - 2) {
      // Right Column
      col = mapWidth;
      row = tile.id - mapWidth + 2;
    } else if (tile.id < 2 * mapWidth + mapHeight - 2) {
      // Bottom Row (Reversed)
      row = mapHeight;
      col = mapWidth - (tile.id - (mapWidth + mapHeight - 2));
    } else {
      // Left Column (Reversed)
      col = 1;
      row = mapHeight - (tile.id - (2 * mapWidth + mapHeight - 2)) - 1;
    }

    el.style.gridColumnStart = col;
    el.style.gridRowStart = row;
    grid.appendChild(el);
  });

  // 重新計算玩家位置
  players.forEach((_, index) => updatePlayerPosition(index));
}

// === 地圖編輯器邏輯 ===
function initMapEditor() {
  mapTileSelect.innerHTML = "";
  mapData.forEach((tile) => {
    const option = document.createElement("option");
    option.value = tile.id;
    option.text = `${tile.id + 1}. ${tile.text}`;
    mapTileSelect.appendChild(option);
  });
}

function loadTileData() {
  const tileId = parseInt(mapTileSelect.value);
  const tile = mapData.find((t) => t.id === tileId);
  if (tile) {
    mapTileText.value = tile.text;
    mapTileType.value = tile.type;
    mapTileDesc.value = tile.description;
  }
}

function saveTileChange() {
  const tileId = parseInt(mapTileSelect.value);
  const tile = mapData.find((t) => t.id === tileId);
  if (tile) {
    tile.text = mapTileText.value;
    tile.type = mapTileType.value;
    tile.description = mapTileDesc.value;

    // 更新選單文字
    mapTileSelect.options[mapTileSelect.selectedIndex].text = `${
      tile.id + 1
    }. ${tile.text}`;

    saveGame(); // 儲存地圖變更
    // 更新地圖視覺
    updateMapVisuals();

    alert("格子修改已儲存！");
  }
}

function randomizeMap() {
  if (!confirm("確定要隨機重置地圖嗎？這將覆蓋目前的格子設定。")) return;

  // 格子內容模板庫
  const templates = {
    normal: [
      { text: "喝半杯", desc: "沒什麼好說的，喝半杯！" },
      { text: "照相機", desc: "所有人定格！最後動的人喝！" },
      { text: "指定", desc: "指定現場任一個人喝一杯！" },
      { text: "大冒險", desc: "完成一個大冒險挑戰，失敗喝三杯！" },
      { text: "下家喝", desc: "你的下家真倒楣，喝一杯！" },
      { text: "上家喝", desc: "你的上家真倒楣，喝一杯！" },
      { text: "逛三園", desc: "開始逛三園(水果/動物/國家)，輸的喝！" },
      { text: "真心話", desc: "回答一個真心話，不答喝三杯！" },
      { text: "左邊喝", desc: "坐在你左邊的人喝一杯！" },
      { text: "右邊喝", desc: "坐在你右邊的人喝一杯！" },
      { text: "模仿秀", desc: "模仿一種動物，不像的喝！" },
    ],
    chance: [
      { text: "機會", desc: "機會來了，抽一張卡！" },
      { text: "傳送", desc: "時空錯亂！隨機向後傳送 1-18 格！" },
    ],
    fate: [{ text: "命運", desc: "命運之神眷顧你...抽一張卡！" }],
    jail: [
      { text: "廁所", desc: "尿急嗎？暫停一回合去廁所吧。" },
      { text: "暫停", desc: "休息是為了走更長的路，暫停一回合。" },
    ],
    punish: [
      { text: "乾杯", desc: "氣氛到了，所有人乾杯！" },
      { text: "喝一杯", desc: "簡簡單單，自己喝一杯。" },
      { text: "大家喝", desc: "獨樂樂不如眾樂樂，大家一起喝！" },
      { text: "喝兩杯", desc: "運氣真好，連喝兩杯！" },
    ],
  };

  mapData.forEach((tile) => {
    if (tile.id === 0) return; // 跳過起點

    // 權重隨機分配類型
    // normal: 40%, chance: 15%, fate: 15%, punish: 20%, jail: 10%
    const rand = Math.random();
    let type = "normal";
    if (rand < 0.4) type = "normal";
    else if (rand < 0.55) type = "chance";
    else if (rand < 0.7) type = "fate";
    else if (rand < 0.9) type = "punish";
    else type = "jail";

    const templateList = templates[type];
    const template =
      templateList[Math.floor(Math.random() * templateList.length)];

    tile.type = type;
    tile.text = template.text;
    tile.description = template.desc;
  });

  saveGame(); // 儲存地圖變更
  updateMapVisuals();
  initMapEditor(); // 更新下拉選單內容
  alert("地圖已隨機生成！");
}

function updateMapVisuals() {
  const icons = {
    start: "🏁",
    normal: "🎲",
    chance: "❓",
    fate: "🔮",
    jail: "🛑",
    punish: "🍺",
  };

  mapData.forEach((tile) => {
    const el = document.getElementById(`tile-${tile.id}`);
    if (el) {
      // 移除舊的類型 class
      el.classList.remove(
        "tile-start",
        "tile-normal",
        "tile-chance",
        "tile-fate",
        "tile-jail",
        "tile-punish"
      );
      // 加入新的類型 class
      el.classList.add(`tile-${tile.type}`);

      // 更新文字與圖示
      const textEl = el.querySelector(".tile-text");
      const iconEl = el.querySelector(".tile-icon");
      if (textEl) textEl.innerText = tile.text;
      if (iconEl) iconEl.innerText = icons[tile.type] || "🎲";
    }
  });
}

function closeSettings() {
  backToGame();
}

// === 匯出與匯入功能 ===
function exportGameData() {
  // 確保當前有資料可存
  saveGame(true); // 強制存檔一次
  const data = localStorage.getItem("alcohol_monopoly_save_v1");
  if (!data) {
    alert("尚無存檔可匯出！");
    return;
  }

  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `alcohol-monopoly-backup-${new Date()
    .toISOString()
    .slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importGameData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const json = e.target.result;
      // 簡單驗證 JSON 格式
      const data = JSON.parse(json);
      if (!data.players || !data.mapData) {
        throw new Error("無效的遊戲存檔格式");
      }

      if (confirm("確定要匯入此存檔嗎？這將覆蓋目前的遊戲進度。")) {
        localStorage.setItem("alcohol_monopoly_save_v1", json);
        alert("匯入成功！頁面將重新整理以套用設定。");
        location.reload();
      }
    } catch (err) {
      alert("匯入失敗：檔案格式錯誤或損毀");
      console.error(err);
    }
    // 清空 input 以便重複選擇同個檔案
    importFileInput.value = "";
  };
  reader.readAsText(file);
}

// === 全域輔助函式 (掛載到 window 以便 HTML onclick 使用) ===
window.updatePlayerName = function (id, name) {
  const player = players.find((p) => p.id === id);
  if (player) {
    player.name = name;
    updatePlayerInfo(); // 如果改的是當前玩家，即時更新主畫面
    saveGame(); // 儲存變更
  }
};

window.updatePlayerIcon = function (id, icon) {
  const player = players.find((p) => p.id === id);
  if (player) {
    player.icon = icon;
    saveGame(); // 儲存變更
    renderPlayers(); // 更新地圖上的棋子
    renderPlayersPage(); // 更新列表 UI (修復無法即時顯示變更的問題)
  }
};

window.togglePlayerSkip = function (id) {
  const player = players.find((p) => p.id === id);
  if (player) {
    player.isSkipped = !player.isSkipped;
    saveGame(); // 儲存變更
    renderPlayersPage(); // 重新渲染以更新狀態顯示
  }
};

window.togglePlayerSpectator = function (id) {
  const player = players.find((p) => p.id === id);
  if (player) {
    player.isSpectator = !player.isSpectator;

    if (players.every((p) => p.isSpectator)) {
      alert("⚠️ 注意：所有玩家都已設為觀戰模式，遊戲將暫停。");
    }

    renderPlayersPage(); // 更新列表 UI
    renderPlayers(); // 更新地圖棋子 (隱藏/顯示)
    updatePlayerInfo(); // 即時更新主畫面資訊
    saveGame(); // 儲存變更
  }
};

window.addNewPlayerInGame = function () {
  if (players.length >= MAX_PLAYERS) {
    alert("玩家人數已達上限！");
    return;
  }

  const newId =
    players.length > 0 ? Math.max(...players.map((p) => p.id)) + 1 : 0;

  let newName = prompt("請輸入新玩家名稱：", `玩家 ${newId + 1}`);
  if (newName === null) return; // 取消則不新增
  newName = newName.trim() || `玩家 ${newId + 1}`;

  // 使用 newId 來決定顏色與圖示，確保不重複 (盡量)
  const colorIndex = newId % PLAYER_COLORS.length;
  const iconIndex = newId % TOKEN_ICONS.length;

  players.push({
    id: newId,
    name: newName,
    color: PLAYER_COLORS[colorIndex].bg,
    textColor: PLAYER_COLORS[colorIndex].text,
    position: 0, // 新玩家從起點開始
    isSkipped: false,
    isSpectator: false,
    drinkCount: 0,
    shieldCount: 0,
    punishCount: 0,
    totalShields: 0,
    icon: TOKEN_ICONS[iconIndex],
  });

  saveGame(); // 儲存變更
  renderPlayersPage();
  renderPlayers(); // 更新地圖棋子
  updatePlayerInfo(); // 更新主畫面

  // 捲動到底部
  if (playersListContent) {
    setTimeout(() => {
      playersListContent.scrollTop = playersListContent.scrollHeight;
    }, 100);
  }
};

window.clearAllSpectators = function () {
  if (confirm("確定要解除所有玩家的觀戰狀態，讓大家回到遊戲嗎？")) {
    players.forEach((p) => (p.isSpectator = false));
    renderPlayersPage(); // 更新列表 UI
    renderPlayers(); // 更新地圖棋子
    updatePlayerInfo(); // 更新主畫面
    saveGame(); // 儲存變更
  }
};

window.givePlayerShield = function (id) {
  const player = players.find((p) => p.id === id);
  if (player) {
    player.shieldCount = (player.shieldCount || 0) + 1;
    player.totalShields = (player.totalShields || 0) + 1; // 增加生涯統計
    renderPlayersPage(); // 更新列表 UI
    updatePlayerInfo(); // 若是當前玩家，更新主畫面
    saveGame(); // 儲存變更
  }
};

// === 長按刪除玩家功能 ===
let longPressTimer;

window.startLongPress = function (id) {
  longPressTimer = setTimeout(() => {
    window.confirmDeletePlayer(id);
  }, 800); // 長按 800ms 觸發
};

window.cancelLongPress = function () {
  if (longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }
};

window.confirmDeletePlayer = function (id) {
  const player = players.find((p) => p.id === id);
  if (player) {
    // 使用 setTimeout 避免阻擋 touch 事件的預設行為
    setTimeout(() => {
      if (
        confirm(`⚠️ 確定要刪除玩家「${player.name}」嗎？\n此操作無法復原！`)
      ) {
        deletePlayer(id);
      }
    }, 10);
  }
};

window.deletePlayer = function (id) {
  const index = players.findIndex((p) => p.id === id);
  if (index === -1) return;

  const needShift = index < currentPlayerIndex;
  players.splice(index, 1);

  if (players.length === 0) {
    alert("所有玩家都已刪除！遊戲將重置。");
    location.reload();
    return;
  }

  if (needShift) {
    currentPlayerIndex--;
  }
  currentPlayerIndex = currentPlayerIndex % players.length;

  renderPlayersPage();
  renderPlayers(); // 更新地圖棋子
  updatePlayerInfo(); // 更新主畫面
  saveGame(); // 儲存變更
};

window.usePlayerShield = function (id) {
  const player = players.find((p) => p.id === id);
  if (player && player.shieldCount > 0) {
    if (
      confirm(
        `確定要為 ${player.name} 使用一張免死金牌抵銷 1 杯酒嗎？\n(剩餘金牌: ${player.shieldCount})`
      )
    ) {
      player.shieldCount--;
      if (player.drinkCount > 0) {
        player.drinkCount = Math.max(0, player.drinkCount - 1);
      }
      renderPlayersPage(); // 更新列表 UI
      updatePlayerInfo(); // 若是當前玩家，更新主畫面
      saveGame(); // 儲存變更
    }
  }
};

// === 中心面板控制 ===
window.showCenterTileInfo = function (tile) {
  if (!tile) return;

  // 確保面板顯示 (針對手機版預設隱藏的情況)
  centerLeftPanel.classList.remove("hidden");

  // 更新內容
  centerTileIcon.innerText = TILE_ICONS[tile.type] || "🎲";
  centerTileTitle.innerText = tile.text;
  centerTileDesc.innerText = tile.description;

  // 切換顯示
  centerDefaultView.classList.add("opacity-0");
  centerTileView.classList.remove("hidden");
  // 延遲一點點讓 display:block 生效後再跑 opacity 動畫
  setTimeout(() => {
    centerDefaultView.classList.add("hidden");
    centerTileView.classList.remove("opacity-0");
  }, 50);
};

window.resetCenterInfo = function () {
  centerTileView.classList.add("opacity-0");
  centerDefaultView.classList.remove("hidden");

  setTimeout(() => {
    centerTileView.classList.add("hidden");
    centerDefaultView.classList.remove("opacity-0");
    // 重置後，如果是手機版則隱藏面板 (恢復預設狀態)
    centerLeftPanel.classList.add("hidden");
  }, 300);
};

// === 自訂卡牌暫存 (Setup 階段) ===
let tempCustomCards = [];
const setupCardInput = document.getElementById("setup-card-input");
const setupAddCardBtn = document.getElementById("setup-add-card-btn");
const setupCardsContainer = document.getElementById("setup-cards-container");
const customCardCount = document.getElementById("custom-card-count");

// === 初始化設定頁面 ===
function initSetup() {
  // 導覽頁邏輯
  enterGameBtn.addEventListener("click", () => {
    landingPage.classList.add("hidden");
    setupScreen.classList.remove("hidden");

    // 嘗試播放 BGM (需要使用者互動後才能播放)
    if (!isBgmMuted) {
      bgm.play().catch((e) => console.warn("BGM 自動播放被阻擋:", e));
    }
    requestWakeLock(); // 請求螢幕恆亮
  });

  // 載入儲存的自訂卡牌
  const savedCards = localStorage.getItem("alcohol_custom_cards");
  if (savedCards) {
    try {
      tempCustomCards = JSON.parse(savedCards);
      renderSetupCards();
    } catch (e) {
      console.error("讀取自訂卡牌失敗:", e);
    }
  }

  // === 檢查是否有存檔 ===
  if (localStorage.getItem("alcohol_monopoly_save_v1")) {
    const resumeBtn = document.createElement("button");
    resumeBtn.className =
      "w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform transition hover:scale-105 mb-3 border-2 border-green-300";
    resumeBtn.innerHTML = "📂 繼續上次遊戲";
    resumeBtn.onclick = loadGame;

    // 插入在開始遊戲按鈕之前
    startGameBtn.parentNode.insertBefore(resumeBtn, startGameBtn);
  }

  // === 鍵盤快捷鍵支援 ===
  document.addEventListener("keydown", handleGlobalKeydown);

  // 預設產生兩個玩家輸入框
  addPlayerInput();
  addPlayerInput();

  addPlayerBtn.addEventListener("click", () => {
    if (playerInputsContainer.children.length < MAX_PLAYERS) {
      addPlayerInput();
    }
  });

  removePlayerBtn.addEventListener("click", () => {
    if (playerInputsContainer.children.length > MIN_PLAYERS) {
      playerInputsContainer.lastElementChild.remove();
    }
  });

  startGameBtn.addEventListener("click", startGame);

  // 自訂卡牌事件
  setupAddCardBtn.addEventListener("click", addSetupCard);
  setupCardInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addSetupCard();
  });
}

function addSetupCard() {
  const text = setupCardInput.value.trim();
  if (text) {
    tempCustomCards.push(text);
    localStorage.setItem(
      "alcohol_custom_cards",
      JSON.stringify(tempCustomCards)
    );
    setupCardInput.value = "";
    renderSetupCards();
  }
}

function renderSetupCards() {
  setupCardsContainer.innerHTML = "";
  customCardCount.innerText = tempCustomCards.length;
  tempCustomCards.forEach((text, index) => {
    const tag = document.createElement("div");
    tag.className =
      "bg-pink-900 bg-opacity-50 border border-pink-700 text-pink-200 text-xs px-2 py-1 rounded flex items-center space-x-2 animate-fade-in";
    tag.innerHTML = `<span>${text}</span><button onclick="removeSetupCard(${index})" class="text-pink-500 hover:text-white font-bold">×</button>`;
    setupCardsContainer.appendChild(tag);
  });
}

window.removeSetupCard = function (index) {
  tempCustomCards.splice(index, 1);
  localStorage.setItem("alcohol_custom_cards", JSON.stringify(tempCustomCards));
  renderSetupCards();
};

function addPlayerInput() {
  const index = playerInputsContainer.children.length;
  const color = PLAYER_COLORS[index];

  const div = document.createElement("div");
  div.className = "flex items-center space-x-2 animate-fade-in";
  div.innerHTML = `
        <span class="text-2xl">${color.emoji}</span>
        <input type="text" placeholder="玩家 ${index + 1}" value="玩家 ${
    index + 1
  }" 
            class="player-name-input w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600">
    `;
  playerInputsContainer.appendChild(div);
}

// === 開始遊戲 ===
function startGame() {
  const inputs = document.querySelectorAll(".player-name-input");
  players = [];

  inputs.forEach((input, index) => {
    const name = input.value.trim() || `玩家 ${index + 1}`;
    players.push({
      id: index,
      name: name,
      color: PLAYER_COLORS[index].bg,
      textColor: PLAYER_COLORS[index].text,
      position: 0,
      isSkipped: false,
      isSpectator: false, // 初始化觀戰狀態
      drinkCount: 0, // 初始化杯數
      shieldCount: 0, // 初始化免死金牌
      punishCount: 0, // 初始化被懲罰次數
      totalShields: 0, // 初始化生涯獲得金牌數
      icon: TOKEN_ICONS[index % TOKEN_ICONS.length], // 分配預設圖示
    });
  });

  // 將自訂卡牌加入命運卡池
  if (tempCustomCards.length > 0) {
    fateCards.push(...tempCustomCards);
  }

  // 切換畫面
  setupScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");

  initGame();
  updateMapVisuals(); // 確保地圖視覺與資料同步
  renderMainGameDice(); // 初始化骰子
  renderGameGrid(); // 初始化地圖

  // 重新請求螢幕恆亮 (防止頁面切換後失效)
  document.addEventListener("visibilitychange", async () => {
    if (document.visibilityState === "visible") await requestWakeLock();
  });

  saveGame(); // 初始存檔
}

// === 遊戲邏輯 ===
function initGame() {
  renderPlayers();
  updatePlayerInfo();

  rollBtn.addEventListener("click", handleRollDice);
  closeModalBtn.addEventListener("click", closeModal);

  window.addEventListener("resize", () => {
    renderGameGrid(); // 重新計算網格大小與字體
    renderPlayers(); // 重新定位棋子
  });
}

function renderPlayers() {
  playersLayer.innerHTML = "";
  players.forEach((player, index) => {
    if (player.isSpectator) return; // 觀戰模式不顯示棋子
    const token = document.createElement("div");
    token.className = `player-token absolute w-8 h-8 ${player.color} rounded-full border-2 border-white shadow-md flex items-center justify-center transition-transform duration-300 text-lg select-none`;
    token.id = `player-token-${index}`;
    // 包裹一層 inner div 以便套用跳躍動畫，避免與外層 transform 衝突
    token.innerHTML = `<div class="token-inner w-full h-full flex items-center justify-center">${player.icon}</div>`;
    token.style.top = "0";
    token.style.left = "0";
    playersLayer.appendChild(token);
    updatePlayerPosition(index);
  });
}

function updatePlayerPosition(playerIndex) {
  const player = players[playerIndex];
  const tileId = `tile-${player.position}`;
  const tileElement = document.getElementById(tileId);
  const tokenElement = document.getElementById(`player-token-${playerIndex}`);

  if (tileElement && tokenElement) {
    const containerRect = playersLayer.getBoundingClientRect();
    const tileRect = tileElement.getBoundingClientRect();

    const tokenSize = 32; // 配合 w-8 h-8
    const offsetX = (tileRect.width - tokenSize) / 2;
    const offsetY = (tileRect.height - tokenSize) / 2;

    const playersOnTile = players.filter((p) => p.position === player.position);
    const indexOnTile = playersOnTile.findIndex((p) => p.id === player.id);
    const totalOnTile = playersOnTile.length;

    // 根據人數動態調整排列 (1人置中, 2-4人兩列, 5-9人三列, 10+人四列)
    let cols = 2;
    if (totalOnTile === 1) cols = 1;
    else if (totalOnTile > 9) cols = 4;
    else if (totalOnTile > 4) cols = 3;

    const spacing = 6; // 稍微緊湊的間距
    const row = Math.floor(indexOnTile / cols);
    const col = indexOnTile % cols;
    const totalRows = Math.ceil(totalOnTile / cols);

    // 計算置中偏移
    const shiftX = (col - (cols - 1) / 2) * spacing;
    const shiftY = (row - (totalRows - 1) / 2) * spacing;

    const finalX = tileRect.left - containerRect.left + offsetX + shiftX;
    const finalY = tileRect.top - containerRect.top + offsetY + shiftY;

    tokenElement.style.transform = `translate(${finalX}px, ${finalY}px)`;
  }
}

function handleRollDice() {
  if (isAnimating) return;

  // 檢查是否所有玩家都在觀戰模式
  if (players.every((p) => p.isSpectator)) {
    alert("所有玩家皆在觀戰模式，無法進行遊戲！\n請至玩家列表解除觀戰狀態。");
    return;
  }

  const player = players[currentPlayerIndex];
  if (player.isSkipped) {
    showModal("暫停回合", `${player.name} 本回合暫停！`);
    player.isSkipped = false;
    return;
  }
  isAnimating = true;
  playSound("dice"); // 播放擲骰音效

  // 背景閃爍特效
  triggerBackgroundFlash(player.color);

  const cubes = mainDiceWrapper.querySelectorAll(".main-game-dice");
  let totalRoll = 0;

  cubes.forEach((cube) => {
    // 重置動畫狀態，確保每次都能觸發旋轉
    cube.style.transition = "none";
    cube.style.transform = `rotateX(${Math.random() * 360}deg) rotateY(${
      Math.random() * 360
    }deg)`;
    void cube.offsetWidth; // 強制重繪

    // 設定 3 秒動畫時間
    cube.style.transition = "transform 3s cubic-bezier(0.2, 0.8, 0.2, 1)";

    const roll = Math.floor(Math.random() * 6) + 1;
    totalRoll += roll;

    // 取得基礎角度並增加旋轉圈數 (6-10圈) 以適應 3 秒時長
    const base = diceRotations[roll];
    const extraX = (Math.floor(Math.random() * 5) + 6) * 360;
    const extraY = (Math.floor(Math.random() * 5) + 6) * 360;
    cube.style.transform = `rotateX(${base.x + extraX}deg) rotateY(${
      base.y + extraY
    }deg)`;
  });

  setTimeout(() => {
    // 加入震動特效 (Main Game Dice)
    cubes.forEach((cube) => {
      const scene = cube.parentElement;
      scene.classList.add("dice-shake");
      setTimeout(() => scene.classList.remove("dice-shake"), 300);
    });

    movePlayer(totalRoll);
  }, 3000);
}

function movePlayer(steps) {
  let stepsMoved = 0;
  const moveInterval = setInterval(() => {
    players[currentPlayerIndex].position =
      (players[currentPlayerIndex].position + 1) % TOTAL_TILES;
    playSound("step"); // 播放移動音效

    // 經過起點 (位置變為 0) 獲得免死金牌
    if (players[currentPlayerIndex].position === 0) {
      players[currentPlayerIndex].shieldCount =
        (players[currentPlayerIndex].shieldCount || 0) + 1;
      players[currentPlayerIndex].totalShields =
        (players[currentPlayerIndex].totalShields || 0) + 1; // 增加生涯統計
      const token = document.getElementById(
        `player-token-${currentPlayerIndex}`
      );
      if (token) showFloatAnimation(token, "🛡️ 免死金牌 +1");
      playSound("popup");
    }

    // 更新所有玩家位置，確保同一格的人能即時重新排列
    players.forEach((_, idx) => updatePlayerPosition(idx));

    // 觸發當前玩家棋子的跳躍動畫
    const currentToken = document.getElementById(
      `player-token-${currentPlayerIndex}`
    );
    if (currentToken) {
      const inner = currentToken.querySelector(".token-inner");
      if (inner) {
        inner.classList.remove("animate-jump");
        void inner.offsetWidth; // 強制重繪 (Trigger Reflow) 以重啟動畫
        inner.classList.add("animate-jump");
      }
    }

    stepsMoved++;
    if (stepsMoved >= steps) {
      clearInterval(moveInterval);
      setTimeout(
        () => handleTileEvent(players[currentPlayerIndex].position, steps), // 傳遞擲骰點數
        300
      );
    }
  }, 300);
}

function handleTileEvent(pos, roll) {
  // 紀錄歷史
  addToHistory(
    players[currentPlayerIndex],
    roll,
    mapData.find((t) => t.id === pos).text
  );

  // 同步更新中心面板資訊
  const tile = mapData.find((t) => t.id === pos);
  showCenterTileInfo(tile);

  // === 特殊格子：傳送 (ID 25) ===
  // 改為判斷文字，避免隨機地圖後 ID 錯亂
  if (tile.text === "傳送") {
    const backSteps = Math.floor(Math.random() * 18) + 1;
    let newPos =
      (players[currentPlayerIndex].position - backSteps) % TOTAL_TILES;
    if (newPos < 0) newPos += TOTAL_TILES;

    // 更新位置與視覺
    players[currentPlayerIndex].position = newPos;
    updatePlayerPosition(currentPlayerIndex);

    // 顯示結果 (使用 chance 類型會有翻牌效果)
    showModal(
      "時空傳送",
      `時空錯亂！你被傳送回了 ${backSteps} 格！\n(目前位置：${mapData[newPos].text})`,
      "chance"
    );

    // 補充歷史紀錄
    addToHistory(players[currentPlayerIndex], 0, `後退 ${backSteps} 格`);

    return; // 結束處理，不觸發新格子的事件
  }

  // 根據格子文字判斷效果 (支援隨機地圖)
  if (tile.id === 0) {
    // 起點獎勵已在 movePlayer 中處理 (獲得免死金牌)
  } else if (tile.text === "喝一杯") {
    players[currentPlayerIndex].drinkCount += 1;
    players[currentPlayerIndex].punishCount =
      (players[currentPlayerIndex].punishCount || 0) + 1;
  } else if (tile.text === "喝半杯") {
    players[currentPlayerIndex].drinkCount += 0.5;
    players[currentPlayerIndex].punishCount =
      (players[currentPlayerIndex].punishCount || 0) + 1;
  } else if (tile.text === "喝兩杯") {
    players[currentPlayerIndex].drinkCount += 2;
    players[currentPlayerIndex].punishCount =
      (players[currentPlayerIndex].punishCount || 0) + 1;
  } else if (tile.text === "大家喝" || tile.text === "乾杯") {
    players.forEach((p) => {
      p.drinkCount += 1;
      p.punishCount = (p.punishCount || 0) + 1;
    });
  } else if (tile.text === "上家喝" || tile.text === "左邊喝") {
    const targetIndex =
      (currentPlayerIndex - 1 + players.length) % players.length;
    players[targetIndex].drinkCount += 1;
    players[targetIndex].punishCount =
      (players[targetIndex].punishCount || 0) + 1;
  } else if (tile.text === "下家喝" || tile.text === "右邊喝") {
    const targetIndex = (currentPlayerIndex + 1) % players.length;
    players[targetIndex].drinkCount += 1;
    players[targetIndex].punishCount =
      (players[targetIndex].punishCount || 0) + 1;
  }
  // 其他如「大冒險」、「命運」因不確定是否執行，交由排行榜手動調整

  // 處理機會/命運卡牌抽取
  let title = tile.text;
  let desc = tile.description;

  if (tile.type === "chance") {
    // 隨機抽取機會卡
    desc =
      chanceCards[Math.floor(Math.random() * chanceCards.length)] ||
      "卡牌庫是空的！";

    // 若抽到免死金牌，自動增加數量
    if (desc.includes("免死金牌")) {
      players[currentPlayerIndex].shieldCount =
        (players[currentPlayerIndex].shieldCount || 0) + 1;
      players[currentPlayerIndex].totalShields =
        (players[currentPlayerIndex].totalShields || 0) + 1; // 增加生涯統計
      const token = document.getElementById(
        `player-token-${currentPlayerIndex}`
      );
      if (token) showFloatAnimation(token, "🛡️ 免死金牌 +1");
    }
  } else if (tile.type === "fate") {
    // 隨機抽取命運卡
    desc =
      fateCards[Math.floor(Math.random() * fateCards.length)] ||
      "卡牌庫是空的！";
  }

  showModal(title, desc, tile.type);
  updatePlayerInfo(); // 即時更新杯數顯示
  if (mapData.find((t) => t.id === pos).type === "jail")
    players[currentPlayerIndex].isSkipped = true;
}
function showModal(t, d, type) {
  // 為了讓 adjustDrink 在 HTML onclick 中可用，需掛載到 window
  if (!window.adjustDrink) {
    window.adjustDrink = adjustDrink;
  }
  playSound("popup"); // 播放彈窗音效

  // 重置標題顏色 (避免被免死金牌改為綠色後未復原)
  modalBackTitle.className = "text-3xl font-bold text-pink-500 mb-4";

  // 設定背面內容 (結果)
  modalBackTitle.innerText = t;
  modalBackDesc.innerText = d;
  // modalBackDesc.style.whiteSpace = "pre-line"; // CSS class 已處理，這裡可移除或保留

  // 設定正面樣式與翻轉邏輯
  if (type === "chance" || type === "fate") {
    // 機會與命運：顯示卡背，等待點擊翻牌
    modalFlipInner.classList.remove("rotate-y-180");

    if (type === "chance") {
      modalFrontTitle.innerText = "機會";
      modalFrontIcon.innerText = "❓";
      modalFrontFace.className =
        "absolute inset-0 backface-hidden bg-gray-800 rounded-2xl border-4 border-yellow-500 flex flex-col items-center justify-center shadow-2xl z-20";
      modalFrontTitle.className =
        "text-4xl font-black text-yellow-500 tracking-widest";
    } else {
      modalFrontTitle.innerText = "命運";
      modalFrontIcon.innerText = "🔮";
      modalFrontFace.className =
        "absolute inset-0 backface-hidden bg-gray-800 rounded-2xl border-4 border-purple-500 flex flex-col items-center justify-center shadow-2xl z-20";
      modalFrontTitle.className =
        "text-4xl font-black text-purple-500 tracking-widest";
    }

    // 點擊翻牌事件
    modalCardContainer.onclick = () => {
      if (!modalFlipInner.classList.contains("rotate-y-180")) {
        modalFlipInner.classList.add("rotate-y-180");
        // 翻開時可以播放一個音效 (選用)
        // playSound("flip");

        // 加入震動特效 (視覺 + 手機震動)
        modalCardContainer.classList.add("animate-shake");
        setTimeout(
          () => modalCardContainer.classList.remove("animate-shake"),
          500
        );

        if (navigator.vibrate) {
          navigator.vibrate(200); // 手機震動 200ms
        }
      }
    };
  } else {
    // 普通事件：直接顯示背面 (內容)
    modalFlipInner.classList.add("rotate-y-180");
    modalCardContainer.onclick = null; // 移除點擊事件
  }

  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    document
      .getElementById("modal-card-container")
      .classList.replace("scale-95", "scale-100");
  }, 10);
}

function closeModal(e) {
  if (e) e.stopPropagation(); // 防止觸發翻牌
  modal.classList.add("opacity-0");
  document
    .getElementById("modal-card-container")
    .classList.replace("scale-100", "scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");

    // 輪替邏輯：跳過觀戰中的玩家
    let loopCount = 0;
    do {
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      loopCount++;
    } while (
      players[currentPlayerIndex].isSpectator &&
      loopCount < players.length
    );

    updatePlayerInfo();
    isAnimating = false;
    saveGame(); // 回合結束存檔
    checkGameOver(); // 檢查是否結束
  }, 300);
}
function updatePlayerInfo() {
  // 若所有玩家皆為觀戰模式，顯示暫停狀態
  if (players.length > 0 && players.every((p) => p.isSpectator)) {
    currentPlayerNameEl.innerText = "⛔ 遊戲暫停";
    currentPlayerNameEl.className =
      "text-lg md:text-2xl font-bold text-center break-words w-full px-2 text-gray-500";
    if (currentPlayerDrinksEl) {
      currentPlayerDrinksEl.innerText = "-";
    }
    if (currentPlayerShieldsEl) {
      currentPlayerShieldsEl.classList.add("hidden");
    }
    if (mobilePlayerNameEl) {
      mobilePlayerNameEl.innerText = "⛔ 遊戲暫停";
      mobilePlayerNameEl.className =
        "text-xl font-bold text-center w-full text-gray-500";
      if (mobilePlayerDrinksEl) mobilePlayerDrinksEl.innerText = "-";
      if (mobilePlayerShieldsEl) mobilePlayerShieldsEl.classList.add("hidden");
    }
    return;
  }

  currentPlayerNameEl.innerText = players[currentPlayerIndex].name;
  // 保留排版樣式並更新顏色
  currentPlayerNameEl.className = `text-lg md:text-2xl font-bold text-center break-words w-full px-2 ${players[currentPlayerIndex].textColor}`;
  if (currentPlayerDrinksEl) {
    currentPlayerDrinksEl.innerText = players[currentPlayerIndex].drinkCount;
  }

  // 更新手機版資訊
  if (mobilePlayerNameEl) {
    mobilePlayerNameEl.innerText = players[currentPlayerIndex].name;
    mobilePlayerNameEl.className = `text-xl font-bold text-center w-full ${players[currentPlayerIndex].textColor}`;
    if (mobilePlayerDrinksEl)
      mobilePlayerDrinksEl.innerText = players[currentPlayerIndex].drinkCount;
  }

  // 更新免死金牌顯示
  if (currentPlayerShieldsEl && currentPlayerShieldCountEl) {
    const player = players[currentPlayerIndex];
    if (player.shieldCount > 0) {
      currentPlayerShieldsEl.classList.remove("hidden");
      currentPlayerShieldCountEl.innerText = player.shieldCount;
      currentPlayerShieldsEl.onclick = handleVoluntaryShieldUse;
    } else {
      currentPlayerShieldsEl.classList.add("hidden");
    }
  }

  // 更新手機版免死金牌
  if (mobilePlayerShieldsEl && mobilePlayerShieldCountEl) {
    const player = players[currentPlayerIndex];
    if (player.shieldCount > 0) {
      mobilePlayerShieldsEl.classList.remove("hidden");
      mobilePlayerShieldCountEl.innerText = player.shieldCount;
      mobilePlayerShieldsEl.onclick = handleVoluntaryShieldUse;
    } else {
      mobilePlayerShieldsEl.classList.add("hidden");
    }
  }
}

function handleVoluntaryShieldUse() {
  const player = players[currentPlayerIndex];
  if (!player || player.shieldCount <= 0) return;

  if (
    confirm(
      `確定要使用一張免死金牌來抵銷 1 杯酒嗎？\n(剩餘金牌: ${player.shieldCount})`
    )
  ) {
    player.shieldCount--;

    if (player.drinkCount > 0) {
      player.drinkCount = Math.max(0, player.drinkCount - 1);
      showFloatAnimation(currentPlayerNameEl, "🛡️ 抵銷一杯");
    } else {
      alert("雖然沒有杯數可以抵銷，但金牌還是消耗了！");
    }

    playSound("popup");
    updatePlayerInfo();
    renderPlayersPage(); // 更新列表中的金牌數量
    saveGame(); // 儲存變更
  }
}

// === 遊戲結算邏輯 ===
function checkGameOver() {
  // 檢查是否有玩家達到上限
  const limitReached = players.some((p) => p.drinkCount >= maxDrinksLimit);
  if (limitReached) {
    showGameOverScreen();
  }
}

function showGameOverScreen() {
  // 隱藏其他介面
  gameContainer.classList.add("hidden");
  modal.classList.add("hidden"); // 確保彈窗關閉
  gameOverContainer.classList.remove("hidden");

  // 找出達到上限的玩家
  const loser = players.find((p) => p.drinkCount >= maxDrinksLimit);
  if (loser) {
    gameOverReason.innerText = `😱 ${loser.name} 已經喝了 ${loser.drinkCount} 杯，達到極限了！`;
  }

  // 渲染排名列表
  const sortedPlayers = [...players].sort(
    (a, b) => b.drinkCount - a.drinkCount
  );
  gameOverList.innerHTML = "";

  sortedPlayers.forEach((player, index) => {
    const row = document.createElement("div");
    row.className =
      "grid grid-cols-12 gap-2 items-center bg-gray-900 bg-opacity-50 p-3 rounded-lg border border-gray-700";

    let rankDisplay = `#${index + 1}`;
    if (index === 0) rankDisplay = "👑";
    if (index === 1) rankDisplay = "🥈";
    if (index === 2) rankDisplay = "🥉";

    // 達到上限的玩家標紅
    const isOverLimit = player.drinkCount >= maxDrinksLimit;
    const textColor = isOverLimit
      ? "text-red-500 animate-pulse"
      : player.textColor;

    row.innerHTML = `
            <div class="col-span-2 text-center font-bold text-xl">${rankDisplay}</div>
            <div class="col-span-6 font-bold ${textColor} truncate text-left pl-2">${player.name}</div>
            <div class="col-span-4 text-center font-mono text-lg text-yellow-400">${player.drinkCount} <span class="text-xs text-gray-500">杯</span></div>
        `;
    gameOverList.appendChild(row);
  });
}

window.continueGame = function () {
  maxDrinksLimit += 5; // 延長 5 杯
  settingLimitDisplay.innerText = maxDrinksLimit;
  backToGame();
};

window.restartGame = function () {
  if (confirm("確定要重新開始新的一局嗎？")) {
    location.reload();
  }
};

// === 歷史紀錄功能 ===
function addToHistory(player, roll, eventText) {
  // 移除預設的 "尚無紀錄" 文字
  if (historyLog.querySelector(".italic")) {
    historyLog.innerHTML = "";
  }

  const entry = document.createElement("div");
  entry.className =
    "flex justify-between items-center bg-gray-900 bg-opacity-50 p-2 rounded border border-gray-700 animate-fade-in";
  entry.innerHTML = `
      <div class="flex items-center space-x-2">
          <span class="${player.textColor} font-bold whitespace-nowrap">${player.name}</span>
          <span class="text-gray-400 text-xs">擲出 ${roll}</span>
      </div>
      <span class="text-pink-400 font-medium text-right ml-2 text-xs">${eventText}</span>
  `;

  // 新增到最上方
  historyLog.prepend(entry);

  // 只保留最近 50 筆 (因為現在是獨立頁面，可以顯示更多)
  if (historyLog.children.length > 50) {
    historyLog.lastElementChild.remove();
  }
}

function triggerBackgroundFlash(colorClass) {
  const overlay = document.createElement("div");
  overlay.className = `fixed inset-0 pointer-events-none z-10 opacity-0 transition-opacity duration-500 ${colorClass}`;
  document.body.appendChild(overlay);

  // 強制重繪以觸發 transition
  void overlay.offsetWidth;

  // 開始閃爍 (淡入)
  overlay.classList.replace("opacity-0", "opacity-30");

  // 淡出並移除
  setTimeout(() => {
    overlay.classList.replace("opacity-30", "opacity-0");
    setTimeout(() => overlay.remove(), 500);
  }, 300);
}

// === 存檔與讀檔系統 ===
function saveGame(force = false) {
  // 修正存檔邏輯：
  // 1. 如果是強制存檔 (force) 則忽略檢查
  // 2. 如果 setup-screen (初始設定頁) 沒有隱藏，代表還沒開始遊戲，不存檔
  // 3. 如果 players 為空，代表沒資料，不存檔
  // 4. 允許在 settingsContainer 顯示時存檔 (解決設定無法儲存的問題)
  if (
    !force &&
    (!setupScreen.classList.contains("hidden") || players.length === 0)
  )
    return;

  const gameState = {
    players,
    currentPlayerIndex,
    mapData,
    mapWidth,
    mapHeight,
    TOTAL_TILES,
    chanceCards,
    fateCards,
    mainGameDiceCount,
    maxDrinksLimit, // 儲存上限設定
    timestamp: Date.now(),
  };
  localStorage.setItem("alcohol_monopoly_save_v1", JSON.stringify(gameState));
}

function loadGame() {
  const savedJson = localStorage.getItem("alcohol_monopoly_save_v1");
  if (!savedJson) return;

  try {
    const state = JSON.parse(savedJson);

    // 還原狀態
    players = state.players;
    currentPlayerIndex = state.currentPlayerIndex;
    mapData = state.mapData;
    mapWidth = state.mapWidth;
    mapHeight = state.mapHeight;
    TOTAL_TILES = state.TOTAL_TILES;
    chanceCards = state.chanceCards;
    fateCards = state.fateCards;
    mainGameDiceCount = state.mainGameDiceCount;
    maxDrinksLimit = state.maxDrinksLimit || 20; // 還原上限設定

    // 切換畫面
    setupScreen.classList.add("hidden");
    landingPage.classList.add("hidden");
    gameContainer.classList.remove("hidden");

    // 初始化介面
    initGame();
    mapWidthInput.value = mapWidth;
    mapHeightInput.value = mapHeight;
    updateMapVisuals();
    renderMainGameDice();
    renderGameGrid();
    settingLimitDisplay.innerText = maxDrinksLimit; // 更新設定顯示
    initMapEditor(); // 確保編輯器資料同步

    alert("已恢復上次的遊戲進度！");
  } catch (e) {
    console.error("讀取存檔失敗:", e);
    alert("存檔損毀，無法讀取。");
  }
}

// === 全域鍵盤事件 ===
function handleGlobalKeydown(e) {
  // 空白鍵擲骰子 (僅在遊戲主畫面且無彈窗時有效)
  if (e.code === "Space") {
    if (
      !gameContainer.classList.contains("hidden") && // 在遊戲主畫面
      modal.classList.contains("hidden") && // 無彈窗
      !isAnimating // 非動畫中
    ) {
      e.preventDefault(); // 防止捲動頁面
      handleRollDice();
    }
  }
}

// 啟動設定頁面
initSetup();
