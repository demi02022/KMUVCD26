const academicSchedule = [
  { title: "1학기 개강일", start: "2026-03-03", end: "2026-03-03" },
  { title: "2026학년도 입학식", start: "2026-03-03", end: "2026-03-03" },
  { title: "1학기 수강신청 변경/포기 기간", start: "2026-03-03", end: "2026-03-09" },
  { title: "부전공 신청 및 다·부전공 변경/포기 기간", start: "2026-03-10", end: "2026-03-13" },
  { title: "1학기 개시 30일", start: "2026-03-30", end: "2026-03-30" },
  { title: "1전공 신청/변경 및 다전공 신청 기간", start: "2026-04-07", end: "2026-04-10" },
  { title: "1학기 중간시험 기간(수업 8주차)", start: "2026-04-21", end: "2026-04-27" },
  { title: "1학기 개시 60일", start: "2026-04-29", end: "2026-04-29" },
  { title: "하계 계절학기 수강신청 기간", start: "2026-05-26", end: "2026-05-28" },
  { title: "1학기 개시 90일", start: "2026-05-29", end: "2026-05-29" },
  { title: "2학기 전부(과) 신청 기간", start: "2026-06-01", end: "2026-06-12" },
  { title: "하계 계절학기 등록 기간", start: "2026-06-02", end: "2026-06-05" },
  { title: "2학기 재입학 신청 기간", start: "2026-06-08", end: "2026-06-19" },
  { title: "1학기 기말시험 기간(수업 15주차)", start: "2026-06-09", end: "2026-06-15" },
  { title: "1학기 성적 입력 기간", start: "2026-06-09", end: "2026-06-23" },
  { title: "1학기 보강(기말시험 가능) 기간", start: "2026-06-16", end: "2026-06-22" },
  { title: "1학기 성적 공시 기간", start: "2026-06-16", end: "2026-06-26" },
  { title: "하계방학 시작일", start: "2026-06-23", end: "2026-06-23" },
  { title: "하계 계절학기 수업 기간", start: "2026-06-23", end: "2026-07-13" },
  { title: "1학기 성적 이의신청/정정 기간", start: "2026-06-24", end: "2026-06-26" },
  { title: "ON국민 시스템 정기 점검일", start: "2026-06-27", end: "2026-06-27" },
  { title: "2학기 휴학, 복학 신청 기간", start: "2026-07-06", end: "2026-07-24" },
  { title: "2학기 유급 신청 기간", start: "2026-07-13", end: "2026-07-24" },
  { title: "2학기 수강신청 기간", start: "2026-08-12", end: "2026-08-26" },
  { title: "2025학년도 후기 학위수여식", start: "2026-08-19", end: "2026-08-19" },
  { title: "2학기 등록 기간", start: "2026-08-24", end: "2026-08-28" },
  { title: "제80회 개교일", start: "2026-09-01", end: "2026-09-01" },
  { title: "2학기 개강일", start: "2026-09-01", end: "2026-09-01" },
  { title: "2학기 수강신청 변경/포기 기간", start: "2026-09-01", end: "2026-09-07" },
  { title: "부전공 신청 및 다·부전공 변경/포기 기간", start: "2026-09-08", end: "2026-09-11" },
  { title: "2학기 개시 30일", start: "2026-09-30", end: "2026-09-30" },
  { title: "1전공 신청/변경 및 다전공 신청 기간", start: "2026-10-13", end: "2026-10-16" },
  { title: "개교 80주년 기념일", start: "2026-10-18", end: "2026-10-18" },
  { title: "2학기 중간시험 기간(수업 8주차)", start: "2026-10-20", end: "2026-10-26" },
  { title: "2학기 개시 60일", start: "2026-10-30", end: "2026-10-30" },
  { title: "동계 계절학기 수강 신청 기간", start: "2026-11-24", end: "2026-11-26" },
  { title: "2027학년도 1학기 전부(과) 신청 기간", start: "2026-11-30", end: "2026-12-11" },
  { title: "2학기 개시 90일", start: "2026-11-30", end: "2026-11-30" },
  { title: "동계 계절학기 등록 기간", start: "2026-12-01", end: "2026-12-03" },
  { title: "2027학년도 1학기 재입학 신청 기간", start: "2026-12-07", end: "2026-12-18" },
  { title: "2학기 기말시험 기간(수업 15주차)", start: "2026-12-08", end: "2026-12-14" },
  { title: "2학기 성적 입력 기간", start: "2026-12-08", end: "2026-12-22" },
  { title: "2학기 보강(기말시험 가능) 기간", start: "2026-12-15", end: "2026-12-21" },
  { title: "2학기 성적 공시 기간", start: "2026-12-15", end: "2026-12-28" },
  { title: "동계방학 시작일", start: "2026-12-22", end: "2026-12-22" },
  { title: "동계 계절학기 수업 기간", start: "2026-12-22", end: "2027-01-13" },
  { title: "2학기 성적 이의신청/정정 기간", start: "2026-12-23", end: "2026-12-28" }
];

const DEFAULT_STUDENT_COUNCIL_EVENTS = [
  {
    title: "써클 모집 기간 · 19:00",
    start: "2026-03-24",
    end: "2026-03-24",
    type: "student-event"
  },
  {
    title: "시각디자인학과 내전",
    start: "2026-04-08",
    end: "2026-04-10",
    type: "student-event"
  }
];

const DEFAULT_PROMO_SLIDES = [
  {
    id: "visual-league",
    title: "시각 내전",
    meta: "행사 기간 : 4월 8일(수)~4월 10일(금)",
    image: "assets/event-banner-poster.jpeg",
    link: "",
    background: "#b9c0cd",
    dark: false
  },
  {
    id: "circle-leader-recruitment",
    title: "써클장 모집",
    meta: "기간 : 페이지 확인",
    image: "",
    link: "https://forms.gle/rQKQXmLhevxFGWRbA",
    background: "#b8b8b8",
    dark: true
  }
];

const ADMIN_STORAGE_KEYS = {
  promoSlides: "kmu-vd-admin-promo-slides",
  studentEvents: "kmu-vd-admin-student-events"
};

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function readAdminCollection(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return cloneData(fallback);
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : cloneData(fallback);
  } catch (error) {
    return cloneData(fallback);
  }
}

function getStoredPromoSlides() {
  return readAdminCollection(ADMIN_STORAGE_KEYS.promoSlides, DEFAULT_PROMO_SLIDES)
    .filter((slide) => slide && slide.title)
    .map((slide, index) => ({
      id: slide.id || `promo-${index + 1}`,
      title: slide.title || "",
      meta: slide.meta || "",
      image: slide.image || "",
      link: slide.link || "",
      background: slide.background || "#b8b8b8",
      dark: Boolean(slide.dark)
    }));
}

const studentCouncilEvents = readAdminCollection(ADMIN_STORAGE_KEYS.studentEvents, DEFAULT_STUDENT_COUNCIL_EVENTS).map((event) => ({
  ...event,
  type: "student-event"
}));

const roomScheduleDays = ["월", "화", "수", "목", "금"];
const roomScheduleRows = [
  { label: "오전 9시", hour: 9 },
  { label: "오전 10시", hour: 10 },
  { label: "오전 11시", hour: 11 },
  { label: "오후 12시", hour: 12 },
  { label: "오후 1시", hour: 13 },
  { label: "오후 2시", hour: 14 },
  { label: "오후 3시", hour: 15 },
  { label: "오후 4시", hour: 16 },
  { label: "오후 5시", hour: 17 },
  { label: "오후 6시", hour: 18 },
  { label: "오후 7시", hour: 19 },
  { label: "오후 8시", hour: 20 },
  { label: "오후 9시", hour: 21 }
];

const roomScheduleData = {
  "1": [
    { day: "화", rowStart: 1, rowEnd: 4, title: "기초디자인", detail: "석창희 · 조형관4층15-2호실", tone: "rose" },
    { day: "목", rowStart: 1, rowEnd: 4, title: "2D 디지털그래픽스", detail: "신우석 · 조형관4층15-2호실", tone: "gold" },
    { day: "금", rowStart: 1, rowEnd: 4, title: "기초디자인", detail: "명운경 · 조형관4층15-2호실", tone: "rose" },
    { day: "화", rowStart: 6, rowEnd: 9, title: "2D 디지털그래픽스", detail: "홍제이 · 조형관4층15-2호실", tone: "blue" },
    { day: "수", rowStart: 6, rowEnd: 9, title: "드로잉", detail: "노정연 · 조형관4층15-2호실", tone: "lime" },
    { day: "목", rowStart: 6, rowEnd: 9, title: "드로잉", detail: "김민경 · 조형관4층15-2호실", tone: "mint" }
  ],
  "2": [
    { day: "월", rowStart: 1, rowEnd: 5, title: "그래픽디자인I", detail: "조형관4층16-1호실", tone: "rose" },
    { day: "화", rowStart: 1, rowEnd: 5, title: "미디어디자인II", detail: "조형관4층16-1호실", tone: "blue" },
    { day: "수", rowStart: 3, rowEnd: 5, title: "디자인과글쓰기", detail: "조형관4층16-1호실", tone: "gold" },
    { day: "목", rowStart: 1, rowEnd: 5, title: "타이포그래피I", detail: "조형관4층16-1호실", tone: "mint" },
    { day: "월", rowStart: 6, rowEnd: 10, title: "미디어디자인II", detail: "조형관4층16-1호실", tone: "blue" },
    { day: "화", rowStart: 6, rowEnd: 10, title: "그래픽디자인I", detail: "조형관4층16-1호실", tone: "lime" },
    { day: "수", rowStart: 6, rowEnd: 10, title: "타이포그래피I", detail: "조형관4층16-1호실", tone: "blue" },
    { day: "목", rowStart: 6, rowEnd: 10, title: "타이포그래피I", detail: "조형관4층16-1호실", tone: "rose" },
    { day: "수", rowStart: 10, rowEnd: 13, title: "그래픽디자인I", detail: "조형관4층16-1호실", tone: "rose" }
  ],
  "3": [
    { day: "화", rowStart: 1, rowEnd: 5, title: "일러스트레이션1", detail: "신현정 · 조형관4층 과실", tone: "blue" },
    { day: "수", rowStart: 1, rowEnd: 5, title: "일러스트레이션1", detail: "노정연 · 조형관4층 과실", tone: "mint" },
    { day: "목", rowStart: 1, rowEnd: 5, title: "타입과미디어", detail: "박윤정 · 조형관4층 과실", tone: "blue" },
    { day: "월", rowStart: 6, rowEnd: 10, title: "타입과미디어", detail: "신상아 · 조형관4층 과실", tone: "blue" },
    { day: "화", rowStart: 6, rowEnd: 10, title: "시각디자인워크숍1", detail: "성재혁 · 조형관4층 과실", tone: "mint" },
    { day: "수", rowStart: 6, rowEnd: 10, title: "시각디자인워크숍1", detail: "이재진 · 조형관4층 과실", tone: "blue" },
    { day: "금", rowStart: 6, rowEnd: 10, title: "모션그래픽2", detail: "민준기 · 조형관4층 과실", tone: "mint" },
    { day: "화", rowStart: 10, rowEnd: 14, title: "경험디자인1", detail: "김경림 · 조형관4층 과실", tone: "blue" }
  ],
  "4": []
};

const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];
const monthNames = Array.from({ length: 12 }, (_, index) => `${index + 1}월`);

function setupLandingIntro() {
  const intro = document.querySelector("#landing-intro");
  const dashboard = document.querySelector(".dashboard-layout");
  const targetImage = document.querySelector(".hero-symbol-display img");
  const introSymbol = intro?.querySelector(".landing-intro-symbol");
  const introStorageKey = "kmu-vd-landing-intro-session";

  if (!intro || !dashboard || !targetImage || !introSymbol) {
    return;
  }

  if (window.sessionStorage.getItem(introStorageKey) === "true") {
    document.body.classList.add("intro-complete");
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.body.classList.add("intro-complete");
    return;
  }

  const syncIntroTarget = () => {
    const previousDisplay = intro.style.display;
    const previousVisibility = intro.style.visibility;
    intro.style.display = "flex";
    intro.style.visibility = "hidden";

    const introRect = introSymbol.getBoundingClientRect();
    const targetRect = targetImage.getBoundingClientRect();
    const introCenterX = introRect.left + (introRect.width / 2);
    const introCenterY = introRect.top + (introRect.height / 2);
    const targetCenterX = targetRect.left + (targetRect.width / 2);
    const targetCenterY = targetRect.top + (targetRect.height / 2);
    const translateX = targetCenterX - introCenterX;
    const translateY = targetCenterY - introCenterY;
    const targetScale = targetRect.width / introRect.width;

    document.body.style.setProperty("--intro-target-x", `${translateX}px`);
    document.body.style.setProperty("--intro-target-y", `${translateY}px`);
    document.body.style.setProperty("--intro-target-scale", String(targetScale));

    intro.style.display = previousDisplay;
    intro.style.visibility = previousVisibility;
  };

  if (targetImage.complete) {
    syncIntroTarget();
  } else {
    targetImage.addEventListener("load", syncIntroTarget, { once: true });
  }

  document.body.classList.add("landing-intro-active");
  window.sessionStorage.setItem(introStorageKey, "true");
  window.setTimeout(() => {
    document.body.classList.remove("landing-intro-active");
    document.body.classList.add("intro-complete");
  }, 2600);
}

function setupHomepageBoardEntrance() {
  const dashboard = document.querySelector(".dashboard-layout");
  if (!dashboard) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.body.classList.remove("homepage-board-enter");
    return;
  }

  document.body.classList.add("homepage-board-enter");
  window.setTimeout(() => {
    document.body.classList.remove("homepage-board-enter");
  }, 1800);
}

function parseDate(dateString) {
  return new Date(`${dateString}T00:00:00`);
}

function formatMonthTitle(month) {
  return `2026년 ${month}월`;
}

function formatDateRange(event) {
  const start = parseDate(event.start);
  const end = parseDate(event.end);
  const sameDay = event.start === event.end;
  const startLabel = `${start.getMonth() + 1}.${String(start.getDate()).padStart(2, "0")}`;
  const endLabel = `${end.getMonth() + 1}.${String(end.getDate()).padStart(2, "0")}`;
  return sameDay ? startLabel : `${startLabel} - ${endLabel}`;
}

function formatListDateRange(event) {
  const start = parseDate(event.start);
  const end = parseDate(event.end);
  const sameDay = event.start === event.end;
  const startLabel = `${start.getMonth() + 1}월 ${start.getDate()}일`;
  const endLabel = `${end.getMonth() + 1}월 ${end.getDate()}일`;
  return sameDay ? startLabel : `${startLabel} : ${endLabel}`;
}

function allEvents() {
  return [
    ...academicSchedule.map((event) => ({ ...event, type: "academic" })),
    ...studentCouncilEvents
  ];
}

function eventsForMonth(month) {
  return allEvents().filter((event) => {
    const start = parseDate(event.start);
    const end = parseDate(event.end);
    const monthStart = new Date(2026, month - 1, 1);
    const monthEnd = new Date(2026, month, 0);
    return start <= monthEnd && end >= monthStart;
  });
}

function eventsForDate(date) {
  return allEvents().filter((event) => {
    const start = parseDate(event.start);
    const end = parseDate(event.end);
    return start <= date && end >= date;
  });
}

function formatTodayHeadline(date = new Date()) {
  const weekday = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"][date.getDay()];
  return `${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}. ${weekday}`;
}

let homeCalendarMonth = null;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildPromoSlideMarkup(slide, index) {
  const safeTitle = escapeHtml(slide.title || "");
  const safeMeta = escapeHtml(slide.meta || "");
  const safeLink = slide.link ? escapeHtml(slide.link) : "";
  const safeImage = slide.image ? escapeHtml(slide.image) : "";
  const safeBackground = escapeHtml(slide.background || "#b8b8b8");
  const darkClass = slide.dark ? " promo-copy-dark" : "";
  const titleClass = slide.dark ? " promo-title-dark" : "";
  const metaClass = slide.dark ? " promo-meta-dark" : "";
  const activeClass = index === 0 ? " is-active" : "";
  const surface = safeImage
    ? `<img class="promo-poster" src="${safeImage}" alt="${safeTitle} 포스터" /><div class="promo-overlay"></div>`
    : `<div class="promo-placeholder-surface" style="background:${safeBackground};"></div>`;
  const content = `
    ${surface}
    <div class="promo-copy${darkClass}">
      <p class="promo-title${titleClass}">${safeTitle}</p>
      <p class="promo-meta${metaClass}">${safeMeta}</p>
    </div>
  `;

  if (safeLink) {
    return `
      <a class="promo-slide promo-slide-link${activeClass}" href="${safeLink}" target="_blank" rel="noreferrer" aria-label="${safeTitle} 페이지로 이동">
        ${content}
      </a>
    `;
  }

  return `
    <article class="promo-slide${activeClass}">
      ${content}
    </article>
  `;
}

function buildPromoListMarkup(slide, index) {
  const safeTitle = escapeHtml(slide.title || "");
  const safeMeta = escapeHtml(slide.meta || "");
  const safeLink = slide.link ? escapeHtml(slide.link) : "";
  const prefix = String(index + 1).padStart(2, "0");
  const body = `
    <span class="promo-list-index">${prefix}</span>
    <div class="promo-list-copy">
      <strong>${safeTitle}</strong>
      <p>${safeMeta}</p>
    </div>
  `;

  if (safeLink) {
    return `<a class="promo-list-item" href="${safeLink}" target="_blank" rel="noreferrer">${body}</a>`;
  }

  return `<div class="promo-list-item">${body}</div>`;
}

function setupPromoBanner() {
  const track = document.querySelector("#promo-track");
  const prevButton = document.querySelector("#promo-prev");
  const nextButton = document.querySelector("#promo-next");
  const listToggle = document.querySelector("#promo-list-toggle");
  const listRoot = document.querySelector("#promo-list");
  const carousel = document.querySelector("#promo-carousel");

  if (!track || !prevButton || !nextButton || !listToggle || !listRoot || !carousel) {
    return;
  }

  const slidesData = getStoredPromoSlides();
  if (!slidesData.length) {
    track.innerHTML = "";
    listRoot.innerHTML = "";
    prevButton.disabled = true;
    nextButton.disabled = true;
    listToggle.disabled = true;
    return;
  }

  track.innerHTML = slidesData.map((slide, index) => buildPromoSlideMarkup(slide, index)).join("");
  listRoot.innerHTML = slidesData.map((slide, index) => buildPromoListMarkup(slide, index)).join("");

  const slides = Array.from(track.querySelectorAll(".promo-slide"));
  let currentIndex = 0;
  let autoTimer = null;

  function renderPromoSlide(nextIndex) {
    currentIndex = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === currentIndex);
    });
  }

  function startAutoRotate() {
    if (slides.length <= 1) {
      return;
    }
    window.clearInterval(autoTimer);
    autoTimer = window.setInterval(() => {
      if (carousel.hidden) {
        return;
      }
      renderPromoSlide(currentIndex + 1);
    }, 3000);
  }

  function stopAutoRotate() {
    window.clearInterval(autoTimer);
  }

  function setListMode(open) {
    carousel.hidden = open;
    listRoot.hidden = !open;
    listToggle.textContent = open ? "배너 보기" : "목록 보기";
    if (open) {
      stopAutoRotate();
    } else {
      startAutoRotate();
    }
  }

  prevButton.onclick = () => {
    renderPromoSlide(currentIndex - 1);
    startAutoRotate();
  };
  nextButton.onclick = () => {
    renderPromoSlide(currentIndex + 1);
    startAutoRotate();
  };
  listToggle.onclick = () => setListMode(listRoot.hidden);

  carousel.addEventListener("mouseenter", stopAutoRotate);
  carousel.addEventListener("mouseleave", startAutoRotate);

  if (slides.length <= 1) {
    prevButton.disabled = true;
    nextButton.disabled = true;
    prevButton.style.opacity = "0.45";
    nextButton.style.opacity = "0.45";
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
    prevButton.style.opacity = "";
    nextButton.style.opacity = "";
  }

  setListMode(false);
  renderPromoSlide(0);
  startAutoRotate();
}

function renderHomeCurrentMonthCalendar(nextMonth) {
  const title = document.querySelector("#today-title");
  const monthLabel = document.querySelector("#current-month-label");
  const daysRoot = document.querySelector("#home-calendar-days");
  const eventsRoot = document.querySelector("#home-month-events");
  const prevButton = document.querySelector("#home-calendar-prev");
  const nextButton = document.querySelector("#home-calendar-next");

  if (!title || !monthLabel || !daysRoot || !eventsRoot) {
    return;
  }

  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const year = 2026;
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  if (homeCalendarMonth === null) {
    homeCalendarMonth = Math.min(12, Math.max(3, todayMonth));
  }

  if (typeof nextMonth === "number") {
    homeCalendarMonth = Math.min(12, Math.max(3, nextMonth));
  }

  const month = homeCalendarMonth;
  const monthEvents = eventsForMonth(month).sort((left, right) => parseDate(left.start) - parseDate(right.start));

  title.textContent = formatTodayHeadline(today);
  monthLabel.textContent = `${year}년 ${month}월`;
  daysRoot.innerHTML = "";
  eventsRoot.innerHTML = "";

  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  for (let i = 0; i < firstDay; i += 1) {
    const empty = document.createElement("span");
    empty.className = "home-calendar-day outside";
    daysRoot.append(empty);
  }

  for (let date = 1; date <= daysInMonth; date += 1) {
    const cellDate = new Date(year, month - 1, date);
    const dayEvents = eventsForDate(cellDate);
    const day = document.createElement("span");
    day.className = "home-calendar-day";
    day.innerHTML = `<span class="home-calendar-day-number">${date}</span>${dayEvents.length ? '<span class="home-calendar-dot" aria-hidden="true"></span>' : ""}`;

    if (month === todayMonth && date === todayDate) {
      day.classList.add("today");
    }
    if (dayEvents.length > 0) {
      const hasUpcomingEvent = dayEvents.some((event) => parseDate(event.end) >= todayStart);
      const hasPastOnlyEvent = dayEvents.every((event) => parseDate(event.end) < todayStart);
      if (hasUpcomingEvent) {
        day.classList.add("upcoming-event");
      }
      if (hasPastOnlyEvent) {
        day.classList.add("past-event");
      }
      if (dayEvents.some((event) => event.type === "student-event")) {
        day.classList.add("student-event");
      }
    }

    daysRoot.append(day);
  }

  const totalCells = firstDay + daysInMonth;
  const nextFill = (7 - (totalCells % 7)) % 7;
  for (let i = 1; i <= nextFill; i += 1) {
    const outsideDay = document.createElement("span");
    outsideDay.className = "home-calendar-day outside";
    outsideDay.innerHTML = `<span class="home-calendar-day-number">${i}</span>`;
    daysRoot.append(outsideDay);
  }

  const visibleMonthEvents = monthEvents.filter((event) => parseDate(event.end) >= todayStart);

  if (!visibleMonthEvents.length) {
    const item = document.createElement("li");
    item.textContent = "오늘 이후로 예정된 주요 일정이 없습니다.";
    eventsRoot.append(item);
  } else {
    visibleMonthEvents.forEach((event) => {
      const item = document.createElement("li");
      const badge = event.type === "student-event"
        ? '<span class="list-badge student-event">학생회 행사</span>'
        : '<span class="list-badge">학사 일정</span>';
      item.innerHTML = `${badge}<strong>${formatDateRange(event)}</strong> ${event.title}`;
      eventsRoot.append(item);
    });
  }

  if (prevButton && !prevButton.dataset.bound) {
    prevButton.addEventListener("click", () => renderHomeCurrentMonthCalendar(homeCalendarMonth - 1));
    prevButton.dataset.bound = "true";
  }
  if (nextButton && !nextButton.dataset.bound) {
    nextButton.addEventListener("click", () => renderHomeCurrentMonthCalendar(homeCalendarMonth + 1));
    nextButton.dataset.bound = "true";
  }

  if (prevButton) {
    prevButton.disabled = month <= 3;
  }
  if (nextButton) {
    nextButton.disabled = month >= 12;
  }
}

function renderFullCalendarPage() {
  const fullGrid = document.querySelector("#full-calendar-grid");
  const fullView = document.querySelector("#full-calendar-view");
  const monthView = document.querySelector("#month-calendar-view");
  if (!fullGrid || !fullView || !monthView) {
    return;
  }

  fullView.classList.add("active");
  monthView.classList.remove("active");
  fullGrid.innerHTML = "";

  for (let month = 3; month <= 12; month += 1) {
    fullGrid.append(createMiniCalendar(month));
  }
}

function renderCalendarPage() {
  const fullView = document.querySelector("#full-calendar-view");
  const monthView = document.querySelector("#month-calendar-view");
  if (!fullView || !monthView) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const monthParam = window.__singleFileMonthParam || params.get("month");

  if (monthParam) {
    fullView.classList.remove("active");
    monthView.classList.add("active");
    renderMonthCalendar(monthParam);
    return;
  }

  renderFullCalendarPage();
}

function createMiniCalendar(month) {
  const card = document.createElement("a");
  card.className = "month-card";
  card.href = `calendar.html?month=${month}`;

  const events = eventsForMonth(month);
  if (events.length > 0) {
    card.classList.add("active");
  }

  const header = document.createElement("div");
  header.className = "month-card-header";

  const title = document.createElement("h3");
  title.textContent = monthNames[month - 1];

  const count = document.createElement("span");
  count.className = "event-count";
  count.textContent = `${events.length}개 일정`;

  header.append(title, count);
  card.append(header);

  const weekdays = document.createElement("div");
  weekdays.className = "mini-weekdays";
  weekdayLabels.forEach((label) => {
    const span = document.createElement("span");
    span.textContent = label;
    weekdays.append(span);
  });
  card.append(weekdays);

  const days = document.createElement("div");
  days.className = "mini-days";
  const firstDay = new Date(2026, month - 1, 1).getDay();
  const lastDate = new Date(2026, month, 0).getDate();

  for (let i = 0; i < firstDay; i += 1) {
    const empty = document.createElement("span");
    empty.className = "mini-day outside";
    days.append(empty);
  }

  for (let date = 1; date <= lastDate; date += 1) {
    const day = document.createElement("span");
    day.className = "mini-day";
    day.textContent = String(date);
    const currentDate = new Date(2026, month - 1, date);
    const currentEvents = eventsForDate(currentDate);
    if (currentEvents.length > 0) {
      day.classList.add("has-event");
      if (currentEvents.some((event) => event.type === "student-event")) {
        day.classList.add("student-event");
      }
    }
    days.append(day);
  }

  card.append(days);

  const summary = document.createElement("p");
  summary.className = "month-summary";
  summary.textContent = events.length
    ? events.slice(0, 2).map((event) => event.title).join(" / ")
    : "공개된 주요 일정이 없습니다.";
  card.append(summary);

  return card;
}

function getBoardType() {
  return document.body.dataset.boardType || "students";
}

function boardStorageKeys() {
  const boardType = getBoardType();
  return {
    profile: `kmu-vd-board-profile-${boardType}`,
    posts: `kmu-vd-board-posts-${boardType}`
  };
}

const gradeStyles = {
  "1": { label: "1학년", className: "grade-1" },
  "2": { label: "2학년", className: "grade-2" },
  "3": { label: "3학년", className: "grade-3" },
  "4": { label: "4학년", className: "grade-4" }
};

function defaultBoardPosts() {
  if (getBoardType() === "returning") {
    return [
      {
        id: 1,
        pinned: true,
        author: "학생회",
        grade: "4",
        title: "복학 준비하면서 궁금한 점을 자유롭게 남겨주세요.",
        content: "복학 신청, 수강신청, 학과 문의, 휴학 연장과 관련된 질문을 남기면 서로 답할 수 있는 게시판입니다.",
        createdAt: "2026-03-16T10:00:00",
        comments: [
          { id: 21, author: "복학예정", grade: "3", text: "수강신청 전에도 질문 올려도 되나요?", createdAt: "2026-03-16T10:20:00" }
        ]
      }
    ];
  }

  return [
    {
      id: 1,
      pinned: true,
      author: "학생회",
      grade: "4",
      title: "게시판 이용 안내",
      content: "재학생 소통 게시판입니다. 질문, 정보 공유, 일상 이야기 모두 자유롭게 남겨주세요.",
      createdAt: "2026-03-16T10:00:00",
      comments: [
        { id: 11, author: "환영합니다", grade: "2", text: "자유롭게 소통해봐요.", createdAt: "2026-03-16T10:10:00" }
      ]
    }
  ];
}

function loadBoardProfile() {
  const raw = localStorage.getItem(boardStorageKeys().profile);
  return raw ? JSON.parse(raw) : null;
}

function saveBoardProfile(profile) {
  localStorage.setItem(boardStorageKeys().profile, JSON.stringify(profile));
}

function loadBoardPosts() {
  const raw = localStorage.getItem(boardStorageKeys().posts);
  if (!raw) {
    const initialPosts = defaultBoardPosts();
    localStorage.setItem(boardStorageKeys().posts, JSON.stringify(initialPosts));
    return initialPosts;
  }
  return JSON.parse(raw);
}

function saveBoardPosts(posts) {
  localStorage.setItem(boardStorageKeys().posts, JSON.stringify(posts));
}

function createGradeBadge(name, grade) {
  const gradeInfo = gradeStyles[grade];
  return `<span class="board-author ${gradeInfo.className}">${name}</span><span class="board-grade-tag">${gradeInfo.label}</span>`;
}

function formatBoardTimestamp(timestamp) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function renderBoardProfile(profile) {
  const profileName = document.querySelector("#profile-name");
  const profileGrade = document.querySelector("#profile-grade");
  if (!profileName || !profileGrade || !profile) {
    return;
  }

  const gradeInfo = gradeStyles[profile.grade];
  profileName.textContent = profile.nickname;
  profileName.className = `profile-name ${gradeInfo.className}`;
  profileGrade.textContent = gradeInfo.label;
}

function renderBoardPostList(posts, selectedPostId) {
  const listRoot = document.querySelector("#board-post-list");
  if (!listRoot) {
    return;
  }

  listRoot.innerHTML = "";

  posts.forEach((post) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `post-list-item${post.id === selectedPostId ? " active" : ""}${post.pinned ? " pinned" : ""}`;
    item.dataset.postId = String(post.id);
    item.innerHTML = `
      <span class="post-list-time">${formatBoardTimestamp(post.createdAt)}</span>
      <span class="post-list-main post-list-main-row">
        ${post.pinned ? '<span class="post-list-label">공지</span>' : ""}
        <span class="post-list-title">${post.title}</span>
        <span class="post-list-comment-count">[${post.comments.length}]</span>
      </span>
      <span class="post-list-author">${post.author}</span>
      <span class="post-list-comments">${post.comments.length}</span>
    `;
    listRoot.append(item);
  });
}

function setupStudentBoard() {
  const listRoot = document.querySelector("#board-post-list");
  const detailRoot = document.querySelector("#board-detail");
  if (!listRoot || !detailRoot) {
    return;
  }

  const profileModal = document.querySelector("#profile-modal");
  const writeModal = document.querySelector("#write-modal");
  const detailModal = document.querySelector("#detail-modal");
  const profileForm = document.querySelector("#profile-form");
  const nicknameInput = document.querySelector("#nickname-input");
  const gradeSelect = document.querySelector("#grade-select");
  const editProfileButton = document.querySelector("#edit-profile");
  const postForm = document.querySelector("#post-form");
  const postTitle = document.querySelector("#post-title");
  const postContent = document.querySelector("#post-content");
  const openWriteModalButton = document.querySelector("#open-write-modal");
  const closeWriteModalButton = document.querySelector("#close-write-modal");
  const closeDetailModalButton = document.querySelector("#close-detail-modal");

  let profile = loadBoardProfile();
  let posts = loadBoardPosts();
  let selectedPostId = posts[0]?.id ?? null;

  function openProfileModal() {
    if (profileModal) {
      profileModal.classList.add("active");
    }
  }

  function closeProfileModal() {
    if (profileModal) {
      profileModal.classList.remove("active");
    }
  }

  function openWriteModal() {
    if (!profile) {
      openProfileModal();
      return;
    }
    writeModal?.classList.add("active");
  }

  function closeWriteModal() {
    writeModal?.classList.remove("active");
  }

  function openDetailModal() {
    detailModal?.classList.add("active");
  }

  function closeDetailModal() {
    detailModal?.classList.remove("active");
  }

  function renderBoardDetail(post) {
    if (!post) {
      detailRoot.innerHTML = `<div class="empty-state"><p>게시글을 선택해주세요.</p></div>`;
      return;
    }

    const canManage = profile && profile.nickname === post.author && profile.grade === post.grade;
    detailRoot.innerHTML = `
      <article class="board-post">
        <div class="board-post-head">
          <div>
            ${post.pinned ? '<p class="post-detail-label">Pinned Notice</p>' : ""}
            <h3>${post.title}</h3>
            <div class="board-post-meta">
              ${createGradeBadge(post.author, post.grade)}
              <span class="board-time">${formatBoardTimestamp(post.createdAt)}</span>
              <span class="board-grade-tag">댓글 ${post.comments.length}</span>
            </div>
          </div>
          ${canManage ? `
            <div class="post-actions">
              <button type="button" class="inline-link edit-post" data-post-id="${post.id}">수정</button>
              <button type="button" class="inline-link delete-post" data-post-id="${post.id}">삭제</button>
            </div>
          ` : ""}
        </div>
        <p class="board-post-body">${post.content}</p>
        <div class="board-comments">
          <strong>댓글</strong>
          <div class="comment-list">
            ${post.comments.length
              ? post.comments.map((comment) => `
                <div class="comment-item">
                  <div class="comment-meta">
                    ${createGradeBadge(comment.author, comment.grade)}
                    <span class="board-time">${formatBoardTimestamp(comment.createdAt)}</span>
                  </div>
                  <p>${comment.text}</p>
                </div>
              `).join("")
              : `<div class="comment-item"><p>아직 댓글이 없습니다.</p></div>`}
          </div>
          <form class="comment-form" data-post-id="${post.id}">
            <input type="text" name="comment" placeholder="댓글을 입력하세요" maxlength="120" required />
            <button type="submit">댓글 달기</button>
          </form>
        </div>
      </article>
    `;
  }

  function refreshBoard() {
    if (!posts.find((post) => post.id === selectedPostId)) {
      selectedPostId = posts[0]?.id ?? null;
    }
    renderBoardPostList(posts, selectedPostId);
    renderBoardDetail(posts.find((post) => post.id === selectedPostId) ?? null);
    if (profile) {
      renderBoardProfile(profile);
    }
  }

  if (!profile) {
    openProfileModal();
  } else {
    renderBoardProfile(profile);
  }

  profileForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = nicknameInput?.value.trim();
    const grade = gradeSelect?.value;
    if (!nickname || !grade) {
      return;
    }

    profile = { nickname, grade };
    saveBoardProfile(profile);
    renderBoardProfile(profile);
    closeProfileModal();
  });

  editProfileButton?.addEventListener("click", () => {
    if (nicknameInput && profile) {
      nicknameInput.value = profile.nickname;
    }
    if (gradeSelect && profile) {
      gradeSelect.value = profile.grade;
    }
    openProfileModal();
  });

  openWriteModalButton?.addEventListener("click", openWriteModal);
  closeWriteModalButton?.addEventListener("click", closeWriteModal);
  closeDetailModalButton?.addEventListener("click", closeDetailModal);

  postForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = postTitle?.value.trim();
    const content = postContent?.value.trim();
    if (!title || !content) {
      return;
    }

    const newPost = {
      id: Date.now(),
      pinned: false,
      author: profile.nickname,
      grade: profile.grade,
      title,
      content,
      createdAt: new Date().toISOString(),
      comments: []
    };

    posts = [newPost, ...posts];
    selectedPostId = newPost.id;
    saveBoardPosts(posts);
    refreshBoard();
    if (postForm) {
      postForm.reset();
    }
    closeWriteModal();
  });

  listRoot.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const item = target.closest(".post-list-item");
    if (!item) {
      return;
    }

    selectedPostId = Number(item.dataset.postId);
    refreshBoard();
    openDetailModal();
  });

  detailRoot.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const editButton = target.closest(".edit-post");
    const deleteButton = target.closest(".delete-post");

    if (editButton instanceof HTMLElement) {
      const postId = Number(editButton.dataset.postId);
      const post = posts.find((item) => item.id === postId);
      if (!post) {
        return;
      }
      if (postTitle) {
        postTitle.value = post.title;
      }
      if (postContent) {
        postContent.value = post.content;
      }
      posts = posts.filter((item) => item.id !== postId);
      saveBoardPosts(posts);
      openWriteModal();
      refreshBoard();
      closeDetailModal();
      return;
    }

    if (deleteButton instanceof HTMLElement) {
      const postId = Number(deleteButton.dataset.postId);
      posts = posts.filter((item) => item.id !== postId);
      saveBoardPosts(posts);
      refreshBoard();
      closeDetailModal();
    }
  });

  detailRoot.addEventListener("submit", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLFormElement) || !target.matches(".comment-form")) {
      return;
    }

    event.preventDefault();
    if (!profile) {
      openProfileModal();
      return;
    }

    const formData = new FormData(target);
    const text = String(formData.get("comment") || "").trim();
    const postId = Number(target.dataset.postId);
    if (!text || !postId) {
      return;
    }

    posts = posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            comments: [
              ...post.comments,
              { id: Date.now(), author: profile.nickname, grade: profile.grade, text, createdAt: new Date().toISOString() }
            ]
          }
        : post
    );

    saveBoardPosts(posts);
    refreshBoard();
  });

  refreshBoard();
}

function renderMonthCalendar(month) {
  const monthLabel = document.querySelector("#month-label");
  const monthTitle = document.querySelector("#month-title");
  const monthDescription = document.querySelector("#month-description");
  const calendarDays = document.querySelector("#calendar-days");
  const monthEvents = document.querySelector("#month-events");
  const monthNavigation = document.querySelector("#month-navigation");

  if (!monthLabel || !monthTitle || !monthDescription || !calendarDays || !monthEvents || !monthNavigation) {
    return;
  }

  calendarDays.innerHTML = "";
  monthEvents.innerHTML = "";
  monthNavigation.innerHTML = "";

  const safeMonth = Math.min(12, Math.max(1, Number(month) || 3));
  const events = eventsForMonth(safeMonth);

  const academicCount = events.filter((event) => event.type === "academic").length;
  const studentEventCount = events.filter((event) => event.type === "student-event").length;

  monthLabel.textContent = "Academic Calendar";
  monthTitle.textContent = formatMonthTitle(safeMonth);
  monthDescription.textContent = events.length
    ? `학사 일정 ${academicCount}개 · 학생회 행사 ${studentEventCount}개가 포함되어 있습니다.`
    : "이 달에는 공개된 주요 일정이 없습니다.";

  const firstDay = new Date(2026, safeMonth - 1, 1).getDay();
  const daysInMonth = new Date(2026, safeMonth, 0).getDate();
  const prevMonthDays = new Date(2026, safeMonth - 1, 0).getDate();

  for (let i = firstDay - 1; i >= 0; i -= 1) {
    const outsideDay = document.createElement("div");
    outsideDay.className = "calendar-day outside";
    outsideDay.innerHTML = `<span class="date-number">${prevMonthDays - i}</span>`;
    calendarDays.append(outsideDay);
  }

  for (let date = 1; date <= daysInMonth; date += 1) {
    const day = document.createElement("div");
    day.className = "calendar-day";
    const currentDate = new Date(2026, safeMonth - 1, date);
    const dayEvents = eventsForDate(currentDate);

    if (dayEvents.length > 0) {
      day.classList.add("has-event");
      if (dayEvents.some((event) => event.type === "student-event")) {
        day.classList.add("student-event");
      }
    }

    const eventsMarkup = dayEvents
      .slice(0, 2)
      .map((event) => {
        const eventClass = event.type === "student-event" ? "event-pill student-event" : "event-pill";
        return `<span class="${eventClass}">${event.title}</span>`;
      })
      .join("");

    day.innerHTML = `
      <span class="date-number">${date}</span>
      <div class="date-events">${eventsMarkup}</div>
    `;
    calendarDays.append(day);
  }

  const totalCells = firstDay + daysInMonth;
  const nextFill = (7 - (totalCells % 7)) % 7;
  for (let i = 1; i <= nextFill; i += 1) {
    const outsideDay = document.createElement("div");
    outsideDay.className = "calendar-day outside";
    outsideDay.innerHTML = `<span class="date-number">${i}</span>`;
    calendarDays.append(outsideDay);
  }

  if (events.length === 0) {
    const item = document.createElement("li");
    item.textContent = "공식 페이지 기준으로 공개된 주요 일정이 없습니다.";
    monthEvents.append(item);
  } else {
    events.forEach((event) => {
      const item = document.createElement("li");
      const badge = event.type === "student-event"
        ? '<span class="list-badge student-event">학생회 행사</span>'
        : '<span class="list-badge">학사 일정</span>';
      item.innerHTML = `${badge}<strong>${formatDateRange(event)}</strong> ${event.title}`;
      monthEvents.append(item);
    });
  }

  monthNames.slice(2).forEach((name, index) => {
    const month = index + 3;
    const link = document.createElement("a");
    link.className = month === safeMonth ? "inline-link primary" : "inline-link";
    link.href = `calendar.html?month=${month}`;
    link.textContent = name;
    monthNavigation.append(link);
  });
}

function getCurrentScheduleState() {
  const now = new Date();
  const dayMap = { 1: "월", 2: "화", 3: "수", 4: "목", 5: "금" };
  const currentDay = dayMap[now.getDay()];
  const currentRow = roomScheduleRows.findIndex((row) => row.hour === now.getHours()) + 1;

  if (!currentDay || !currentRow) {
    return null;
  }

  return { day: currentDay, row: currentRow };
}

function isScheduleEntryLive(entry) {
  const state = getCurrentScheduleState();
  if (!state) {
    return false;
  }

  return entry.day === state.day && state.row >= entry.rowStart && state.row < entry.rowEnd;
}

function renderRoomSchedulePage() {
  const timesRoot = document.querySelector("#room-schedule-times-left");
  const gridRoot = document.querySelector("#room-schedule-grid");
  const gradeButtons = Array.from(document.querySelectorAll("[data-grade-tab]"));

  if (!timesRoot || !gridRoot || gradeButtons.length === 0) {
    return;
  }

  const rowCount = roomScheduleRows.length;
  const defaultGrade = gradeButtons.find((button) => button.dataset.gradeTab === "1")?.dataset.gradeTab || gradeButtons[0].dataset.gradeTab;

  function renderGrade(grade) {
    gradeButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.gradeTab === grade);
    });

    timesRoot.innerHTML = "";
    gridRoot.innerHTML = "";

    roomScheduleRows.forEach((row) => {
      const time = document.createElement("div");
      time.className = "room-schedule-time-left";
      time.textContent = row.label;
      timesRoot.append(time);
    });

    for (let row = 0; row < rowCount; row += 1) {
      roomScheduleDays.forEach(() => {
        const cell = document.createElement("div");
        cell.className = "room-schedule-cell";
        gridRoot.append(cell);
      });
    }

    (roomScheduleData[grade] || []).forEach((entry) => {
      const block = document.createElement("article");
      const liveClass = isScheduleEntryLive(entry) ? " is-live" : "";
      block.className = `room-schedule-event tone-${entry.tone || "navy"}${liveClass}`;
      block.style.gridColumn = String(roomScheduleDays.indexOf(entry.day) + 1);
      block.style.gridRow = `${entry.rowStart} / ${entry.rowEnd}`;
      block.innerHTML = `
        <span class="room-schedule-event-dot" aria-hidden="true"></span>
        <strong>${entry.title}</strong>
        <span>${entry.detail}</span>
      `;
      gridRoot.append(block);
    });
  }

  gradeButtons.forEach((button) => {
    button.addEventListener("click", () => renderGrade(button.dataset.gradeTab || defaultGrade));
  });

  renderGrade(defaultGrade);
  window.clearInterval(window.roomScheduleStatusTimer);
  window.roomScheduleStatusTimer = window.setInterval(() => {
    const activeGrade = gradeButtons.find((button) => button.classList.contains("active"))?.dataset.gradeTab || defaultGrade;
    renderGrade(activeGrade);
  }, 60000);
}

function initializePage() {
  setupHomepageBoardEntrance();
  setupLandingIntro();
  setupPromoBanner();
  renderHomeCurrentMonthCalendar();
  setupStudentBoard();
  renderRoomSchedulePage();
  renderCalendarPage();
}

window.initializePage = initializePage;

initializePage();
