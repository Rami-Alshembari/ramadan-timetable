const timetable = [
  { date: "2026-02-17", day: "Tue", fajr: "5:58", sunrise: "7:28", dhuhr: "12:34", asr: "3:11", maghrib: "5:41", isha: "7:12" },
  { date: "2026-02-18", day: "Wed", fajr: "5:56", sunrise: "7:26", dhuhr: "12:34", asr: "3:12", maghrib: "5:43", isha: "7:13" },
  { date: "2026-02-19", day: "Thu", fajr: "5:54", sunrise: "7:24", dhuhr: "12:34", asr: "3:13", maghrib: "5:45", isha: "7:15" },
  { date: "2026-02-20", day: "Fri", fajr: "5:52", sunrise: "7:22", dhuhr: "12:34", asr: "3:15", maghrib: "5:47", isha: "7:16" },
  { date: "2026-02-21", day: "Sat", fajr: "5:51", sunrise: "7:20", dhuhr: "12:34", asr: "3:16", maghrib: "5:48", isha: "7:18" },
  { date: "2026-02-22", day: "Sun", fajr: "5:49", sunrise: "7:18", dhuhr: "12:34", asr: "3:17", maghrib: "5:50", isha: "7:20" },
  { date: "2026-02-23", day: "Mon", fajr: "5:47", sunrise: "7:16", dhuhr: "12:34", asr: "3:19", maghrib: "5:52", isha: "7:21" },
  { date: "2026-02-24", day: "Tue", fajr: "5:45", sunrise: "7:14", dhuhr: "12:33", asr: "3:20", maghrib: "5:53", isha: "7:23" },
  { date: "2026-02-25", day: "Wed", fajr: "5:43", sunrise: "7:12", dhuhr: "12:33", asr: "3:21", maghrib: "5:55", isha: "7:24" },
  { date: "2026-02-26", day: "Thu", fajr: "5:41", sunrise: "7:10", dhuhr: "12:33", asr: "3:22", maghrib: "5:57", isha: "7:26" },
  { date: "2026-02-27", day: "Fri", fajr: "5:39", sunrise: "7:08", dhuhr: "12:33", asr: "3:24", maghrib: "5:59", isha: "7:28" },
  { date: "2026-02-28", day: "Sat", fajr: "5:37", sunrise: "7:06", dhuhr: "12:33", asr: "3:25", maghrib: "6:00", isha: "7:29" },
  { date: "2026-03-01", day: "Sun", fajr: "5:35", sunrise: "7:04", dhuhr: "12:33", asr: "3:26", maghrib: "6:02", isha: "7:31" },
  { date: "2026-03-02", day: "Mon", fajr: "5:33", sunrise: "7:02", dhuhr: "12:32", asr: "3:27", maghrib: "6:04", isha: "7:33" },
  { date: "2026-03-03", day: "Tue", fajr: "5:31", sunrise: "7:00", dhuhr: "12:32", asr: "3:28", maghrib: "6:05", isha: "7:34" },
  { date: "2026-03-04", day: "Wed", fajr: "5:29", sunrise: "6:58", dhuhr: "12:32", asr: "3:29", maghrib: "6:07", isha: "7:36" },
  { date: "2026-03-05", day: "Thu", fajr: "5:27", sunrise: "6:56", dhuhr: "12:32", asr: "3:31", maghrib: "6:09", isha: "7:38" },
  { date: "2026-03-06", day: "Fri", fajr: "5:25", sunrise: "6:54", dhuhr: "12:31", asr: "3:32", maghrib: "6:10", isha: "7:39" },
  { date: "2026-03-07", day: "Sat", fajr: "5:22", sunrise: "6:51", dhuhr: "12:31", asr: "3:33", maghrib: "6:12", isha: "7:41" },
  { date: "2026-03-08", day: "Sun", fajr: "5:20", sunrise: "6:49", dhuhr: "12:31", asr: "3:34", maghrib: "6:14", isha: "7:43" },
  { date: "2026-03-09", day: "Mon", fajr: "5:18", sunrise: "6:47", dhuhr: "12:31", asr: "3:35", maghrib: "6:15", isha: "7:44" },
  { date: "2026-03-10", day: "Tue", fajr: "5:16", sunrise: "6:45", dhuhr: "12:30", asr: "3:36", maghrib: "6:17", isha: "7:46" },
  { date: "2026-03-11", day: "Wed", fajr: "5:14", sunrise: "6:43", dhuhr: "12:30", asr: "3:37", maghrib: "6:19", isha: "7:48" },
  { date: "2026-03-12", day: "Thu", fajr: "5:11", sunrise: "6:41", dhuhr: "12:30", asr: "3:38", maghrib: "6:20", isha: "7:49" },
  { date: "2026-03-13", day: "Fri", fajr: "5:09", sunrise: "6:38", dhuhr: "12:30", asr: "3:39", maghrib: "6:22", isha: "7:51" },
  { date: "2026-03-14", day: "Sat", fajr: "5:07", sunrise: "6:36", dhuhr: "12:29", asr: "3:40", maghrib: "6:23", isha: "7:53" },
  { date: "2026-03-15", day: "Sun", fajr: "5:05", sunrise: "6:34", dhuhr: "12:29", asr: "3:41", maghrib: "6:25", isha: "7:55" },
  { date: "2026-03-16", day: "Mon", fajr: "5:02", sunrise: "6:32", dhuhr: "12:29", asr: "3:42", maghrib: "6:27", isha: "7:56" },
  { date: "2026-03-17", day: "Tue", fajr: "5:00", sunrise: "6:30", dhuhr: "12:29", asr: "3:43", maghrib: "6:28", isha: "7:58" },
  { date: "2026-03-18", day: "Wed", fajr: "4:58", sunrise: "6:28", dhuhr: "12:28", asr: "3:44", maghrib: "6:30", isha: "8:00" }
];

const timeZone = "Europe/London";
const prayerOrder = [
  { key: "fajr", label: "Fajr / Suhoor" },
  { key: "sunrise", label: "Sunrise" },
  { key: "dhuhr", label: "Dhuhr" },
  { key: "asr", label: "Asr" },
  { key: "maghrib", label: "Maghrib / Iftar" },
  { key: "isha", label: "Isha" }
];

const elements = {
  ukTime: document.getElementById("ukTime"),
  gregDate: document.getElementById("gregDate"),
  hijriDate: document.getElementById("hijriDate"),
  nextPrayerName: document.getElementById("nextPrayerName"),
  nextPrayerTime: document.getElementById("nextPrayerTime"),
  countdown: document.getElementById("countdown"),
  progressBar: document.getElementById("progressBar"),
  currentWindow: document.getElementById("currentWindow"),
  todayGrid: document.getElementById("todayGrid"),
  tableBody: document.getElementById("tableBody"),
  mobileList: document.getElementById("mobileList"),
  todayNote: document.getElementById("todayNote")
};

const adhanAudio = new Audio("adhan.mp3");
adhanAudio.preload = "auto";

const soundState = {
  enabled: true,
  initialized: false,
  lastPrayerKey: null
};

const clockFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone,
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

const hijriFormatter = new Intl.DateTimeFormat("en-GB-u-ca-islamic", {
  timeZone,
  day: "numeric",
  month: "long",
  year: "numeric"
});

function getUKParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    hour: Number(map.hour),
    minute: Number(map.minute),
    second: Number(map.second)
  };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function timeToSeconds(label, time) {
  const [rawHour, rawMinute] = time.split(":").map(Number);
  let hour = rawHour;

  if (label === "asr" || label === "maghrib" || label === "isha") {
    if (hour < 12) hour += 12;
  }

  return hour * 3600 + rawMinute * 60;
}

function buildTable() {
  const rows = timetable
    .map(
      (row) => `
        <tr data-date="${row.date}">
          <td>${row.date}</td>
          <td>${row.day}</td>
          <td>${row.fajr}</td>
          <td>${row.sunrise}</td>
          <td>${row.dhuhr}</td>
          <td>${row.asr}</td>
          <td>${row.maghrib}</td>
          <td>${row.isha}</td>
        </tr>
      `
    )
    .join("");

  elements.tableBody.innerHTML = rows;
}

function buildMobileList() {
  const cards = timetable
    .map(
      (row) => `
        <div class="mobile-card" data-date="${row.date}">
          <div class="mobile-date">
            <div class="date">${row.date}</div>
            <div class="day">${row.day}</div>
          </div>
          <div class="mobile-times">
            <div>
              <div class="label">Fajr</div>
              <div class="value">${row.fajr}</div>
            </div>
            <div>
              <div class="label">Sunrise</div>
              <div class="value">${row.sunrise}</div>
            </div>
            <div>
              <div class="label">Dhuhr</div>
              <div class="value">${row.dhuhr}</div>
            </div>
            <div>
              <div class="label">Asr</div>
              <div class="value">${row.asr}</div>
            </div>
            <div>
              <div class="label">Maghrib</div>
              <div class="value">${row.maghrib}</div>
            </div>
            <div>
              <div class="label">Isha</div>
              <div class="value">${row.isha}</div>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  elements.mobileList.innerHTML = cards;
}

function renderToday(row, nextKey) {
  if (!row) {
    elements.todayGrid.innerHTML = "";
    elements.todayNote.textContent =
      "This timetable covers 17 February 2026 to 18 March 2026. Please select a date in that range.";
    return;
  }

  elements.todayNote.textContent = `Schedule for ${row.day}, ${row.date} (UK time)`;

  const cards = prayerOrder
    .map((prayer) => {
      const isNext = prayer.key === nextKey;
      return `
        <div class="prayer-card ${isNext ? "active" : ""}">
          <div class="prayer-name">${prayer.label}</div>
          <div class="prayer-time">${row[prayer.key]}</div>
        </div>
      `;
    })
    .join("");

  elements.todayGrid.innerHTML = cards;
}

function updateDisplay() {
  const now = new Date();
  const ukParts = getUKParts(now);
  const dateKey = `${ukParts.year}-${pad(ukParts.month)}-${pad(ukParts.day)}`;
  const todayRow = timetable.find((row) => row.date === dateKey);

  elements.ukTime.textContent = clockFormatter.format(now);
  elements.gregDate.textContent = dateFormatter.format(now);
  elements.hijriDate.textContent = `Hijri: ${hijriFormatter.format(now)}`;

  if (!todayRow) {
    renderToday(null, null);
    elements.nextPrayerName.textContent = "Outside timetable";
    elements.nextPrayerTime.textContent = "--";
    elements.countdown.textContent = "--:--:--";
    elements.currentWindow.textContent = "";
    elements.progressBar.style.width = "0%";
    soundState.initialized = false;
    return;
  }

  const schedule = prayerOrder.map((prayer) => {
    const time = todayRow[prayer.key];
    return {
      key: prayer.key,
      label: prayer.label,
      time,
      seconds: timeToSeconds(prayer.key, time)
    };
  });

  const nowSeconds = ukParts.hour * 3600 + ukParts.minute * 60 + ukParts.second;
  let nextPrayer = schedule.find((item) => item.seconds > nowSeconds);
  let isTomorrow = false;

  if (!nextPrayer) {
    nextPrayer = schedule[0];
    isTomorrow = true;
  }

  const nextSeconds = isTomorrow
    ? nextPrayer.seconds + 24 * 3600
    : nextPrayer.seconds;

  const previousPrayerCandidates = schedule.filter(
    (item) => item.seconds <= nowSeconds
  );
  let previousPrayer =
    previousPrayerCandidates[previousPrayerCandidates.length - 1] ||
    schedule[schedule.length - 1];

  let previousSeconds = previousPrayer.seconds;
  if (previousPrayer.key === "isha" && nowSeconds < schedule[0].seconds) {
    previousSeconds -= 24 * 3600;
  }

  const remainingSeconds = Math.max(0, nextSeconds - nowSeconds);
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  elements.nextPrayerName.textContent = nextPrayer.label;
  elements.nextPrayerTime.textContent = `${nextPrayer.time} (UK)`;
  elements.countdown.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  const progressRaw = (nowSeconds - previousSeconds) / (nextSeconds - previousSeconds);
  const progress = Math.min(Math.max(progressRaw, 0), 1);
  elements.progressBar.style.width = `${progress * 100}%`;

  const windowLabel = isTomorrow
    ? `After Isha · Counting down to Fajr (${nextPrayer.time})`
    : `Between ${previousPrayer.label} and ${nextPrayer.label}`;
  elements.currentWindow.textContent = windowLabel;

  renderToday(todayRow, nextPrayer.key);

  const currentPrayer = previousPrayer;
  if (!soundState.initialized) {
    soundState.lastPrayerKey = currentPrayer.key;
    soundState.initialized = true;
  } else if (
    soundState.enabled &&
    currentPrayer.key !== soundState.lastPrayerKey
  ) {
    playAdhan();
    soundState.lastPrayerKey = currentPrayer.key;
  } else {
    soundState.lastPrayerKey = currentPrayer.key;
  }

  const rows = Array.from(elements.tableBody.querySelectorAll("tr"));
  rows.forEach((row) => row.classList.remove("highlight"));
  const activeRow = elements.tableBody.querySelector(`tr[data-date="${dateKey}"]`);
  if (activeRow) activeRow.classList.add("highlight");

  const cards = Array.from(elements.mobileList.querySelectorAll(".mobile-card"));
  cards.forEach((card) => card.classList.remove("highlight"));
  const activeCard = elements.mobileList.querySelector(
    `.mobile-card[data-date="${dateKey}"]`
  );
  if (activeCard) activeCard.classList.add("highlight");
}

buildTable();
buildMobileList();
updateDisplay();
setInterval(updateDisplay, 1000);

function unlockAudio() {
  const previousVolume = adhanAudio.volume;
  adhanAudio.volume = 0;
  const attempt = adhanAudio.play();
  if (attempt && typeof attempt.then === "function") {
    attempt
      .then(() => {
        adhanAudio.pause();
        adhanAudio.currentTime = 0;
        adhanAudio.volume = previousVolume;
      })
      .catch(() => {
        adhanAudio.volume = previousVolume;
      });
  } else {
    adhanAudio.volume = previousVolume;
  }
}

function playAdhan() {
  adhanAudio.currentTime = 0;
  const attempt = adhanAudio.play();
  if (attempt && typeof attempt.catch === "function") {
    attempt.catch((error) => {
      if (error && error.name === "NotAllowedError") {
        console.warn("Adhan blocked by browser until user interaction.");
      } else {
        console.warn("Adhan audio could not be played.", error);
      }
    });
  }
}

document.addEventListener("click", unlockAudio, { once: true });
document.addEventListener("touchstart", unlockAudio, {
  once: true,
  passive: true
});
