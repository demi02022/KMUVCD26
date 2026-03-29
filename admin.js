const ADMIN_STORAGE_KEYS = {
  promoSlides: "kmu-vd-admin-promo-slides",
  studentEvents: "kmu-vd-admin-student-events"
};

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

const DEFAULT_STUDENT_EVENTS = [
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

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function readCollection(key, fallback) {
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

const state = {
  promoSlides: readCollection(ADMIN_STORAGE_KEYS.promoSlides, DEFAULT_PROMO_SLIDES),
  studentEvents: readCollection(ADMIN_STORAGE_KEYS.studentEvents, DEFAULT_STUDENT_EVENTS)
};

const refs = {
  promoList: document.querySelector("#promo-slide-list"),
  eventList: document.querySelector("#student-event-list"),
  status: document.querySelector("#admin-status"),
  addPromo: document.querySelector("#add-promo-slide"),
  addEvent: document.querySelector("#add-student-event"),
  save: document.querySelector("#save-admin-data"),
  reset: document.querySelector("#reset-admin-data")
};

function setStatus(message) {
  if (refs.status) {
    refs.status.textContent = message;
  }
}

function ensurePromoShape(slide, index) {
  return {
    id: slide.id || `promo-${index + 1}`,
    title: slide.title || "",
    meta: slide.meta || "",
    image: slide.image || "",
    link: slide.link || "",
    background: slide.background || "#b8b8b8",
    dark: Boolean(slide.dark)
  };
}

function ensureEventShape(event) {
  return {
    title: event.title || "",
    start: event.start || "2026-03-29",
    end: event.end || event.start || "2026-03-29",
    type: "student-event"
  };
}

function renderPromoSlides() {
  if (!refs.promoList) return;
  refs.promoList.innerHTML = "";

  state.promoSlides.forEach((slide, index) => {
    const item = document.createElement("article");
    item.className = "admin-item";
    item.innerHTML = `
      <div class="admin-item-header">
        <strong>배너 ${index + 1}</strong>
        <button class="inline-link admin-danger" type="button" data-remove-promo="${index}">삭제</button>
      </div>
      <div class="admin-form-grid">
        <label class="admin-field">
          <span>행사명</span>
          <input type="text" value="${slide.title}" data-promo-field="title" data-index="${index}" />
        </label>
        <label class="admin-field">
          <span>기간/설명</span>
          <input type="text" value="${slide.meta}" data-promo-field="meta" data-index="${index}" />
        </label>
        <label class="admin-field admin-field-wide">
          <span>포스터 이미지 경로 또는 URL</span>
          <input type="text" value="${slide.image}" data-promo-field="image" data-index="${index}" placeholder="예: assets/event-banner-poster.jpeg" />
        </label>
        <label class="admin-field admin-field-wide">
          <span>클릭 링크</span>
          <input type="text" value="${slide.link}" data-promo-field="link" data-index="${index}" placeholder="비우면 클릭 링크 없음" />
        </label>
        <label class="admin-field">
          <span>배경 색상</span>
          <input type="text" value="${slide.background}" data-promo-field="background" data-index="${index}" placeholder="#b8b8b8" />
        </label>
        <label class="admin-toggle">
          <input type="checkbox" ${slide.dark ? "checked" : ""} data-promo-field="dark" data-index="${index}" />
          <span>어두운 텍스트 스타일 사용</span>
        </label>
      </div>
    `;
    refs.promoList.appendChild(item);
  });
}

function renderStudentEvents() {
  if (!refs.eventList) return;
  refs.eventList.innerHTML = "";

  state.studentEvents.forEach((event, index) => {
    const item = document.createElement("article");
    item.className = "admin-item";
    item.innerHTML = `
      <div class="admin-item-header">
        <strong>학생회 일정 ${index + 1}</strong>
        <button class="inline-link admin-danger" type="button" data-remove-event="${index}">삭제</button>
      </div>
      <div class="admin-form-grid admin-form-grid-events">
        <label class="admin-field admin-field-wide">
          <span>일정명</span>
          <input type="text" value="${event.title}" data-event-field="title" data-index="${index}" />
        </label>
        <label class="admin-field">
          <span>시작일</span>
          <input type="date" value="${event.start}" data-event-field="start" data-index="${index}" />
        </label>
        <label class="admin-field">
          <span>종료일</span>
          <input type="date" value="${event.end}" data-event-field="end" data-index="${index}" />
        </label>
      </div>
    `;
    refs.eventList.appendChild(item);
  });
}

function renderAll() {
  renderPromoSlides();
  renderStudentEvents();
}

function saveAll() {
  const promoPayload = state.promoSlides
    .map(ensurePromoShape)
    .filter((slide) => slide.title.trim());
  const eventPayload = state.studentEvents
    .map(ensureEventShape)
    .filter((event) => event.title.trim() && event.start && event.end);

  window.localStorage.setItem(ADMIN_STORAGE_KEYS.promoSlides, JSON.stringify(promoPayload));
  window.localStorage.setItem(ADMIN_STORAGE_KEYS.studentEvents, JSON.stringify(eventPayload));
  setStatus(`저장 완료 · ${new Date().toLocaleString("ko-KR")}`);
}

function bindInteractions() {
  refs.addPromo?.addEventListener("click", () => {
    state.promoSlides.push(ensurePromoShape({ title: "새 행사", meta: "기간을 입력하세요", image: "", link: "", background: "#b8b8b8", dark: true }, state.promoSlides.length));
    renderPromoSlides();
    setStatus("새 행사 배너를 추가했습니다. 저장하면 메인에 반영됩니다.");
  });

  refs.addEvent?.addEventListener("click", () => {
    state.studentEvents.push(ensureEventShape({ title: "새 학생회 행사", start: "2026-03-29", end: "2026-03-29" }));
    renderStudentEvents();
    setStatus("새 학생회 일정을 추가했습니다. 저장하면 캘린더에 반영됩니다.");
  });

  refs.save?.addEventListener("click", saveAll);

  refs.reset?.addEventListener("click", () => {
    state.promoSlides = cloneData(DEFAULT_PROMO_SLIDES);
    state.studentEvents = cloneData(DEFAULT_STUDENT_EVENTS);
    window.localStorage.removeItem(ADMIN_STORAGE_KEYS.promoSlides);
    window.localStorage.removeItem(ADMIN_STORAGE_KEYS.studentEvents);
    renderAll();
    setStatus("기본값으로 되돌렸습니다. 필요하면 저장해 주세요.");
  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    if (target.dataset.promoField) {
      const index = Number(target.dataset.index);
      const field = target.dataset.promoField;
      if (!state.promoSlides[index]) return;
      state.promoSlides[index][field] = target.type === "checkbox" ? target.checked : target.value;
      setStatus("변경사항이 있습니다. 저장해 주세요.");
    }

    if (target.dataset.eventField) {
      const index = Number(target.dataset.index);
      const field = target.dataset.eventField;
      if (!state.studentEvents[index]) return;
      state.studentEvents[index][field] = target.value;
      setStatus("변경사항이 있습니다. 저장해 주세요.");
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const promoRemove = target.closest("[data-remove-promo]");
    if (promoRemove) {
      const index = Number(promoRemove.getAttribute("data-remove-promo"));
      state.promoSlides.splice(index, 1);
      renderPromoSlides();
      setStatus("행사 배너를 삭제했습니다. 저장해 주세요.");
      return;
    }

    const eventRemove = target.closest("[data-remove-event]");
    if (eventRemove) {
      const index = Number(eventRemove.getAttribute("data-remove-event"));
      state.studentEvents.splice(index, 1);
      renderStudentEvents();
      setStatus("학생회 일정을 삭제했습니다. 저장해 주세요.");
    }
  });
}

renderAll();
bindInteractions();
