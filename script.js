const topics = [
  "the story of Adam",
  "the story of Idris",
  "the story of Nuh",
  "the story of Hud",
  "the story of Salih",
  "the story of Ibrahim",
  "the story of Lut",
  "the story of Isma'il",
  "the story of Ishaq",
  "the story of Ya'qub",
  "the story of Yusuf",
  "the story of Ayyub",
  "the story of Shu'ayb",
  "the story of Musa",
  "the story of Harun",
  "the story of Dhul-Kifl",
  "the story of Dawud",
  "the story of Sulayman",
  "the story of Ilyas",
  "the story of Al-Yasa",
  "the story of Yunus",
  "the story of Zakariya",
  "the story of Yahya",
  "the story of Isa",
  "the story of Muhammad ﷺ",

  "the story of Maryam, mother of Isa",
  "Hajar and the well of Zamzam",
  "Khadijah bint Khuwaylid's role in early Islam",
  "A'isha bint Abi Bakr's role in preserving hadith",
  "Fatimah bint Muhammad's role in early Islam",
  "Sumayyah bint Khayyat, the first martyr in Islam",
  "Nusaybah bint Ka'b's role defending the Prophet ﷺ at Uhud",
  "Umm Salamah's role as an advisor to the Prophet ﷺ",
  "Rabia al-Basri and the concept of divine love",

  "tawhid, the oneness of God",
  "ihsan, excellence in worship",
  "sabr, patience through hardship",
  "taqwa, God-consciousness",
  "tawakkul, trust in God's plan",
  "shukr, gratitude as worship",
  "dua, the practice of supplication",
  "tawbah, sincere repentance",
  "fitrah, innate human nature",
  "akhirah, belief in the afterlife",
  "mizan, the scale of deeds",
  "sirat, the bridge over hell",
  "barakah, blessing in daily life",
  "amanah, trust and responsibility",
  "adl, justice in Islam",
  "khushu, presence in prayer",
  "ikhlas, sincerity in intention",
  "qadar, divine decree and free will",
  "ummah, the global Muslim community",
  "jihad al-nafs, struggle against the self",

  "Mount Uhud",
  "Cave of Hira",
  "Well of Zamzam",
  "Masjid al-Aqsa",
  "Mount Arafat",
  "Battle of Badr",
  "Mount Sinai",
  "the Black Stone",
  "city of Mecca",
  "city of Medina",
  "Dome of the Rock",
  "the Ka'bah's history",
  "Hijrah to Medina",
  "farewell sermon of the Prophet ﷺ",
  "Laylat al-Qadr, the night of decree",

  "the Treaty of Hudaybiyyah and its long-term significance",
  "the Covenant of Najran and early Muslim treatment of religious minorities",
  "the preservation of the Qur'an from revelation to compilation",
  "the seven qira'at, or recitations, of the Qur'an",
  "the 99 names of Allah and what they reveal about divine character",
  "the role of angels in Islamic belief",
  "the five pillars as a framework for a balanced life",
  "the wisdom behind fasting in Ramadan beyond hunger",
  "the economic philosophy behind zakat",
  "hajj as a symbol of human equality",
  "the golden age of Baghdad's House of Wisdom",
  "Ibn al-Haytham and the foundations of the scientific method",
  "Al-Khwarizmi and the origins of algebra",
  "Ibn Sina's Canon of Medicine and its influence on Europe",
  "Fatima al-Fihri and the founding of the world's oldest university",
  "the translation movement and how Islamic scholars preserved Greek philosophy",
  "the Prophet's ﷺ teachings on animals and the environment",
  "the rights of neighbors in Islamic ethics",
  "the etiquette of disagreement among classical scholars",
  "the four Sunni schools of fiqh and how they differ in method, not faith",
  "the Mosque of Cordoba and Islamic architecture's influence on Europe",
  "the spread of Islam along the Silk Road through trade",
  "the Pact of Umar and early Muslim governance of Jerusalem",
  "the story of Bilal ibn Rabah and the fight against oppression",
  "Islamic banking and the prohibition of riba",
  "the wisdom of shura, consultation, in early governance",
  "Muslim Spain, Al-Andalus, as a center of coexistence and scholarship",
  "the printing press debate in Ottoman Istanbul",
  "the reasoning behind the prohibition of alcohol",
  "Jummah's role in community life",
  "the ethics of trade in the Prophet's ﷺ own career as a merchant",
  "the origins of the Islamic calendar and why it's lunar",
  "the role of the qibla and why Muslims pray toward Mecca",
  "Mansa Musa and the wealth of the Mali Empire",
  "the Ottoman millet system and religious pluralism",
  "the role of the Qur'an's Makkan and Madinan surahs"
];

const modeSelect = document.getElementById("modeSelect");
const topicCard = document.getElementById("topicCard");
const topicText = document.getElementById("topicText");
const spinBtn = document.getElementById("spinBtn");
const startBtn = document.getElementById("startBtn");
const timerSection = document.getElementById("timerSection");
const phaseLabel = document.getElementById("phaseLabel");
const timerText = document.getElementById("timerText");
const ringProgress = document.getElementById("ringProgress");
const pauseBtn = document.getElementById("pauseBtn");
const skipBtn = document.getElementById("skipBtn");
const doneSection = document.getElementById("doneSection");
const doneMessage = document.getElementById("doneMessage");
const againBtn = document.getElementById("againBtn");
const durationSettings = document.getElementById("durationSettings");
const researchDuration = document.getElementById("researchDuration");
const speakDuration = document.getElementById("speakDuration");

const circumference = 565.48;
let mode = "research";
let currentTopic = "";
let timerId = null;
let timeLeft = 0;
let totalTime = 0;
let paused = false;
let currentPhase = "";

modeSelect.addEventListener("click", (e) => {
  const btn = e.target.closest(".mode-btn");
  if (!btn) return;
  mode = btn.dataset.mode;
  document.querySelectorAll(".mode-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  researchDuration.parentElement.classList.toggle("hidden", mode === "cuff");
});

function spin() {
  spinBtn.disabled = true;
  topicCard.classList.add("spinning");
  let tick = 0;
  const totalTicks = 10;
  function nextTick(delay) {
    const random = topics[Math.floor(Math.random() * topics.length)];
    topicText.textContent = random;
    tick++;
    if (tick < totalTicks) {
      const nextDelay = delay + tick * 3;
      setTimeout(() => nextTick(nextDelay), nextDelay);
    } else {
      currentTopic = random;
      topicCard.classList.remove("spinning");
      spinBtn.disabled = false;
      spinBtn.classList.add("hidden");
      startBtn.classList.remove("hidden");
    }
  }
  nextTick(35);
}

spinBtn.addEventListener("click", spin);

startBtn.addEventListener("click", () => {
  topicCard.classList.add("hidden");
  durationSettings.classList.add("hidden");
  timerSection.classList.remove("hidden");
  if (mode === "research") {
    startPhase("research", parseInt(researchDuration.value, 10));
  } else {
    startPhase("speak", parseInt(speakDuration.value, 10));
  }
});

pauseBtn.addEventListener("click", () => {
  paused = !paused;
  pauseBtn.textContent = paused ? "resume" : "pause";
});

skipBtn.addEventListener("click", () => {
  clearInterval(timerId);
  endPhase();
});

againBtn.addEventListener("click", () => {
  doneSection.classList.add("hidden");
  topicCard.classList.remove("hidden");
  durationSettings.classList.remove("hidden");
  topicText.textContent = "spin to get a topic";
  spinBtn.classList.remove("hidden");
  startBtn.classList.add("hidden");
});

function startPhase(name, seconds) {
  currentPhase = name;
  paused = false;
  pauseBtn.textContent = "pause";
  totalTime = seconds;
  timeLeft = seconds;
  phaseLabel.textContent = name === "research" ? "research" : "present";
  document.getElementById("topicReminder").textContent = currentTopic;
  updateDisplay();
  timerId = setInterval(tick, 1000);
}

function tick() {
  if (paused) return;
  timeLeft -= 1;
  updateDisplay();
  if (timeLeft <= 0) {
    clearInterval(timerId);
    endPhase();
  }
}

function playResearchEndSound() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const now = ctx.currentTime;
  [392.0, 523.25].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, now + i * 0.12);
    gain.gain.linearRampToValueAtTime(0.14, now + i * 0.12 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + i * 0.12);
    osc.stop(now + i * 0.12 + 0.4);
  });
}

function playFinalChime() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const now = ctx.currentTime;
  [523.25, 659.25, 783.99].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, now + i * 0.14);
    gain.gain.linearRampToValueAtTime(0.2, now + i * 0.14 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.14 + 0.6);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + i * 0.14);
    osc.stop(now + i * 0.14 + 0.6);
  });
}

function endPhase() {
  if (currentPhase === "research") {
    playResearchEndSound();
    startPhase("speak", parseInt(speakDuration.value, 10));
  } else {
    playFinalChime();
    timerSection.classList.add("hidden");
    doneSection.classList.remove("hidden");
    doneMessage.textContent = currentTopic;
  }
}

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("bayan-theme");
if (savedTheme === "dark") {
  document.body.dataset.theme = "dark";
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.dataset.theme === "dark";
  if (isDark) {
    delete document.body.dataset.theme;
    themeToggle.textContent = "☾";
    localStorage.setItem("bayan-theme", "light");
  } else {
    document.body.dataset.theme = "dark";
    themeToggle.textContent = "☀";
    localStorage.setItem("bayan-theme", "dark");
  }
});

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timerText.textContent = `${minutes}:${seconds}`;
  const fraction = timeLeft / totalTime;
  ringProgress.style.strokeDashoffset = circumference * (1 - fraction);
}
