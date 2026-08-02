const easyTopics = [
  "hijab",
  "wudu",
  "zakat",
  "jummah",
  "eid al-fitr",
  "eid al-adha",
  "hajj",
  "Kabah",
  "five daily prayers",
  "five pillars of Islam",
  "sunnah",
  "Ramadan",
  "fasting",
  "Qur'an",
  "Prophet Muhammad ﷺ",
  "Mecca",
  "mosque",
  "adhan",
  "Prophet Ibrahim",
  "insha'Allah",
  "salaam",
  "halal"
];

const topicCategories = {
  prophets: [
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
    "the story of Muhammad ﷺ"
  ],

  women: [
    "the story of Maryam, mother of Isa",
    "Hajar and the well of Zamzam",
    "Khadijah bint Khuwaylid's role in early Islam",
    "A'isha bint Abi Bakr's role in preserving hadith",
    "Fatimah bint Muhammad's role in early Islam",
    "Sumayyah bint Khayyat, the first martyr in Islam",
    "Nusaybah bint Ka'b's role defending the Prophet ﷺ at Uhud",
    "Umm Salamah's role as an advisor to the Prophet ﷺ",
    "Rabia al-Basri and the concept of divine love",
    "Hafsa bint Umar's role preserving the Qur'an manuscript",
    "Asma bint Abi Bakr's role during the Hijrah",
    "Umm Sulaym bint Milhan's wisdom and generosity",
    "Zaynab bint Jahsh's charity and devotion",
    "Safiyyah bint Huyayy's story",
    "Al-Shifa bint Abdullah, an early teacher of literacy",
    "Zubaidah bint Ja'far and the water route she built for pilgrims",
    "Umm Waraqah, who led her household in prayer"
  ],

  namesOfAllah: [
    "Ar-Rahman, the most merciful",
    "Ar-Rahim, the especially merciful",
    "Al-Malik, the king and owner of all dominion",
    "Al-Quddus, the absolutely pure",
    "As-Salaam, the source of peace",
    "Al-Mu'min, the granter of security and faith",
    "Al-Muhaymin, the guardian and overseer",
    "Al-Aziz, the almighty",
    "Al-Jabbar, the compeller",
    "Al-Mutakabbir, the supreme in glory",
    "Al-Khaliq, the creator",
    "Al-Bari, the originator",
    "Al-Musawwir, the fashioner",
    "Al-Ghaffar, the constant forgiver",
    "Al-Qahhar, the ever dominating",
    "Al-Wahhab, the giver of gifts",
    "Ar-Razzaq, the ever providing",
    "Al-Fattah, the opener",
    "Al-Alim, the all-knowing",
    "Al-Qabid, the withholder",
    "Al-Basit, the extender",
    "Al-Khafid, the reducer",
    "Ar-Rafi, the exalter",
    "Al-Mu'izz, the honourer",
    "Al-Mudhill, the humiliator",
    "As-Sami, the all-hearing",
    "Al-Basir, the all-seeing",
    "Al-Hakam, the judge",
    "Al-Adl, the utterly just",
    "Al-Latif, the most gentle",
    "Al-Khabir, the all-aware",
    "Al-Halim, the most forbearing",
    "Al-Azim, the magnificent",
    "Al-Ghafur, the exceedingly forgiving",
    "Ash-Shakur, the most appreciative",
    "Al-Ali, the most high",
    "Al-Kabir, the greatest",
    "Al-Hafiz, the preserver",
    "Al-Muqit, the nourisher",
    "Al-Hasib, the reckoner",
    "Al-Jalil, the majestic",
    "Al-Karim, the most generous",
    "Ar-Raqib, the watchful",
    "Al-Mujib, the responsive",
    "Al-Wasi, the all-encompassing",
    "Al-Hakim, the all-wise",
    "Al-Wadud, the most loving",
    "Al-Majid, the all-glorious",
    "Al-Ba'ith, the resurrector",
    "Ash-Shahid, the all-witnessing",
    "Al-Haqq, the absolute truth",
    "Al-Wakil, the trustee",
    "Al-Qawiyy, the all-strong",
    "Al-Matin, the firm",
    "Al-Waliyy, the protecting friend",
    "Al-Hamid, the most praised",
    "Al-Muhsi, the all-enumerating",
    "Al-Mubdi, the originator of all things",
    "Al-Mu'id, the restorer",
    "Al-Muhyi, the giver of life",
    "Al-Mumit, the taker of life",
    "Al-Hayy, the ever-living",
    "Al-Qayyum, the self-subsisting sustainer",
    "Al-Wajid, the ever-wealthy",
    "Al-Maajid, the noble and generous",
    "Al-Wahid, the one",
    "Al-Ahad, the only one",
    "As-Samad, the eternal refuge",
    "Al-Qadir, the omnipotent",
    "Al-Muqtadir, the all-powerful",
    "Al-Muqaddim, the expediter",
    "Al-Mu'akhkhir, the delayer",
    "Al-Awwal, the first",
    "Al-Akhir, the last",
    "Az-Zahir, the manifest",
    "Al-Batin, the hidden",
    "Al-Wali, the sole governor",
    "Al-Muta'ali, the self-exalted",
    "Al-Barr, the source of all goodness",
    "At-Tawwab, the acceptor of repentance",
    "Al-Muntaqim, the avenger",
    "Al-Afuww, the pardoner",
    "Ar-Ra'uf, the most kind",
    "Malik al-Mulk, master of the kingdom",
    "Dhul-Jalali wal-Ikram, possessor of glory and honor",
    "Al-Muqsit, the just one",
    "Al-Jami, the gatherer",
    "Al-Ghaniyy, the self-sufficient",
    "Al-Mughni, the enricher",
    "Al-Mani, the withholder of harm",
    "Ad-Darr, the one who permits difficulty for a reason",
    "An-Nafi, the benefactor",
    "An-Nur, the light",
    "Al-Hadi, the guide",
    "Al-Badi, the incomparable originator",
    "Al-Baqi, the everlasting",
    "Al-Warith, the inheritor of all things",
    "Ar-Rashid, the guide to the right path",
    "As-Sabur, the patient"
  ],

  places: [
    "Mount Uhud",
    "Cave of Hira",
    "Well of Zamzam",
    "Masjid al-Aqsa",
    "Mount Arafat",
    "Mount Sinai",
    "the Black Stone of the Kabah",
    "city of Mecca",
    "city of Medina",
    "Dome of the Rock",
    "the Kabah's history"
  ],

  events: [
    "the first revelation in the Cave of Hira",
    "the Isra and Mi'raj, the night journey and ascension",
    "the migration to Abyssinia",
    "Aam al-Huzn, the year of sorrow",
    "Hijrah to Medina",
    "the Constitution of Medina",
    "Battle of Badr",
    "Battle of Uhud",
    "Battle of the Trench, al-Khandaq",
    "the Treaty of Hudaybiyyah and its long-term significance",
    "the Covenant of Najran and early Muslim treatment of religious minorities",
    "Battle of Khaybar",
    "Conquest of Mecca",
    "Battle of Tabuk",
    "farewell sermon of the Prophet ﷺ",
    "the Pact of Umar and early Muslim governance of Jerusalem",
    "the compilation of the Qur'an under Caliph Uthman",
    "Battle of Yarmouk",
    "Battle of Qadisiyyah",
    "the founding of Baghdad",
    "the conquest of Constantinople",
    "Battle of Ain Jalut",
    "the fall of Baghdad to the Mongols",
    "the fall of Granada and the end of Muslim Spain"
  ],

  concepts: [
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
    "Laylat al-Qadr, the night of decree"
  ],

  history: [
    "the preservation of the Qur'an from revelation to compilation",
    "the seven qira'at, or recitations, of the Qur'an",
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
  ]
};

const categoryLabels = {
  cuff: "off the cuff",
  prophets: "prophets",
  women: "women in Islam",
  namesOfAllah: "99 names of Allah",
  places: "places",
  events: "battles and events",
  concepts: "concepts",
  history: "history and scholars"
};

const modeSelect = document.getElementById("modeSelect");
const categorySelect = document.getElementById("categorySelect");
const categoryPicker = document.getElementById("categoryPicker");
const topicCard = document.getElementById("topicCard");
const topicText = document.getElementById("topicText");
const categoryLabel = document.getElementById("categoryLabel");
const timerCategoryLabel = document.getElementById("timerCategoryLabel");
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

const circumference = 534.07;
let mode = "research";
let currentTopic = "";
let currentCategory = "";
let timerId = null;
let timeLeft = 0;
let totalTime = 0;
let paused = false;
let currentPhase = "";

function randomPick() {
  if (mode === "cuff") {
    const topic = easyTopics[Math.floor(Math.random() * easyTopics.length)];
    return { topic, category: "cuff" };
  }
  let categoryKey = categoryPicker.value;
  if (categoryKey === "random") {
    const keys = Object.keys(topicCategories);
    categoryKey = keys[Math.floor(Math.random() * keys.length)];
  }
  const pool = topicCategories[categoryKey];
  const topic = pool[Math.floor(Math.random() * pool.length)];
  return { topic, category: categoryKey };
}

modeSelect.addEventListener("click", (e) => {
  const btn = e.target.closest(".mode-btn");
  if (!btn) return;
  mode = btn.dataset.mode;
  document.querySelectorAll(".mode-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  researchDuration.parentElement.classList.toggle("hidden", mode === "cuff");
  categorySelect.classList.toggle("hidden", mode === "cuff");
});

function spin() {
  spinBtn.disabled = true;
  topicCard.classList.add("spinning");
  categoryLabel.textContent = "";
  let tick = 0;
  const totalTicks = 14;
  function nextTick(delay) {
    const { topic } = randomPick();
    topicText.textContent = topic;
    tick++;
    if (tick < totalTicks) {
      const nextDelay = delay + tick * 8;
      setTimeout(() => nextTick(nextDelay), nextDelay);
    } else {
      const final = randomPick();
      currentTopic = final.topic;
      currentCategory = final.category;
      topicText.textContent = currentTopic;
      categoryLabel.textContent = categoryLabels[currentCategory];
      topicCard.classList.remove("spinning");
      spinBtn.disabled = false;
      spinBtn.classList.add("hidden");
      startBtn.classList.remove("hidden");
    }
  }
  nextTick(40);
}

spinBtn.addEventListener("click", spin);

startBtn.addEventListener("click", () => {
  topicCard.classList.add("hidden");
  durationSettings.classList.add("hidden");
  categorySelect.classList.add("hidden");
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
  categorySelect.classList.toggle("hidden", mode === "cuff");
  topicText.textContent = "spin to get a topic";
  categoryLabel.textContent = "";
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
  timerCategoryLabel.textContent = categoryLabels[currentCategory];
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

let muted = localStorage.getItem("bayan-muted") === "true";
const muteToggle = document.getElementById("muteToggle");
muteToggle.textContent = muted ? "unmute" : "mute";
muteToggle.classList.toggle("active", muted);

muteToggle.addEventListener("click", () => {
  muted = !muted;
  localStorage.setItem("bayan-muted", muted);
  muteToggle.textContent = muted ? "unmute" : "mute";
  muteToggle.classList.toggle("active", muted);
});

function playResearchEndSound() {
  if (muted) return;
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
  if (muted) return;
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

function spawnConfetti() {
  for (let i = 0; i < 36; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 0.3 + "s";
    piece.style.background = i % 2 === 0 ? "var(--green)" : "var(--green-dark)";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 2000);
  }
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
    setTimeout(spawnConfetti, 400);
  }
}

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("bayan-theme");
if (savedTheme === "dark") {
  document.body.dataset.theme = "dark";
  themeToggle.textContent = "day mode";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.dataset.theme === "dark";
  if (isDark) {
    delete document.body.dataset.theme;
    themeToggle.textContent = "night mode";
    localStorage.setItem("bayan-theme", "light");
  } else {
    document.body.dataset.theme = "dark";
    themeToggle.textContent = "day mode";
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
