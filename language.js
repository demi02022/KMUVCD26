(() => {
  const STORAGE_KEY = "kmu-vd-language";
  const SUPPORTED = ["ko", "en"];
  const path = window.location.pathname;
  const pageName = path.split("/").pop() || "index.html";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  const currentLanguage = SUPPORTED.includes(stored) ? stored : "ko";

  const titles = {
    "index.html": {
      ko: "국민대학교 시각디자인학과",
      en: "Kookmin University Visual Design Department",
      zh: "国民大学视觉设计系"
    },
    "room-schedule.html": {
      ko: "각 과실 시간표",
      en: "Studio Room Schedule",
      zh: "各工作室时间表"
    },
    "suggestion.html": {
      ko: "학생회 건의함",
      en: "Student Council Suggestion Box",
      zh: "学生会意见箱"
    },
    "calendar.html": {
      ko: "2026 학사일정 캘린더",
      en: "2026 Academic Calendar",
      zh: "2026 学年日历"
    },
    "cafeteria.html": {
      ko: "오늘의 학식 메뉴",
      en: "Today's Cafeteria Menu",
      zh: "今日食堂菜单"
    },
    "faculty.html": {
      ko: "교수님 연락처",
      en: "Faculty Contacts",
      zh: "教授联系方式"
    },
    "students.html": {
      ko: "재학생 소통 창구",
      en: "Current Students Portal",
      zh: "在校生交流窗口"
    },
    "returning.html": {
      ko: "휴학생 · 복학생 소통 창구",
      en: "Returning Students Portal",
      zh: "休学生·复学生交流窗口"
    }
  };

  const months = {
    ko: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    zh: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  };

  const weekdays = {
    ko: ["일", "월", "화", "수", "목", "금", "토"],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    zh: ["日", "一", "二", "三", "四", "五", "六"]
  };

  const roomDays = {
    ko: ["월", "화", "수", "목", "금"],
    en: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    zh: ["周一", "周二", "周三", "周四", "周五"]
  };

  const timeLabels = {
    ko: { 9: "오전 9시", 10: "오전 10시", 11: "오전 11시", 12: "오후 12시", 13: "오후 1시", 14: "오후 2시", 15: "오후 3시", 16: "오후 4시", 17: "오후 5시", 18: "오후 6시" },
    en: { 9: "9 AM", 10: "10 AM", 11: "11 AM", 12: "12 PM", 13: "1 PM", 14: "2 PM", 15: "3 PM", 16: "4 PM", 17: "5 PM", 18: "6 PM" },
    zh: { 9: "上午9点", 10: "上午10点", 11: "上午11点", 12: "下午12点", 13: "下午1点", 14: "下午2点", 15: "下午3点", 16: "下午4点", 17: "下午5点", 18: "下午6点" }
  };

  const textMap = {
    ko: {},
    en: {
      "Visual Design Student Council 2026": "Visual Design Student Council 2026",
      "국민대학교 시각디자인학과": "Kookmin University Visual Design Department",
      "조형대학": "College of Design",
      "시각디자인학과": "Visual Design",
      "출력실": "Print Room",
      "기자재실": "Equipment Room",
      "실크스크린실": "Silkscreen Room",
      "학과 시설": "Facilities",
      "시각디자인학과의 모든 것": "Everything in Visual Design",
      "시각디자인학과의 모든 것을 한 곳에": "Everything in Visual Design, All in One Place",
      "소통창구": "Communication",
      "소통": "Communication",
      "시설": "Facilities",
      "시간표": "Schedule",
      "재학생 소통 창구": "Current Students Portal",
      "재학생 소통창구": "Current Students Portal",
      "휴학생 · 복학생 소통 창구": "Returning Students Portal",
      "휴·복학생 소통창구": "Returning Students Portal",
      "각 과실 시간표": "Studio Room Schedule",
      "각 과실 시간표 보기": "Open Room Schedule",
      "학생회 건의함": "Student Council Suggestion Box",
      "학생회 건의함 바로가기": "Open Suggestion Box",
      "바로가기": "Quick Link",
      "학생회의 의견 수렴 창구입니다.": "A channel for collecting student council feedback.",
      "추후에 추가 예정": "Coming Soon",
      "국민대 e-campus": "Kookmin e-campus",
      "오늘의 학식 메뉴": "Today's Cafeteria Menu",
      "교수님 연락처": "Faculty Contacts",
      "국민대학교 교내식당 주간 메뉴": "Weekly Cafeteria Menu at Kookmin University",
      "이번 주 학식 메뉴": "This Week's Cafeteria Menu",
      "오늘 날짜가 초록색으로 강조됩니다.": "Today's date is highlighted in green.",
      "메뉴를 불러오는 중입니다.": "Loading cafeteria menu.",
      "학식 메뉴가 아직 등록되지 않았습니다.": "This week's cafeteria menu is not available yet.",
      "메뉴를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.": "Unable to load the cafeteria menu right now. Please try again later.",
      "공식 학식 페이지 기준": "Based on the official cafeteria page",
      "실크스크린실 이용 방법": "How to Use the Silkscreen Room",
      "2026학년도 연간 캘린더": "2026 Academic Year Calendar",
      "전체 캘린더": "Full Calendar",
      "학사 일정": "Academic Schedule",
      "행사": "Events",
      "1학기": "Semester 1",
      "여름방학": "Summer Break",
      "2학기": "Semester 2",
      "학생회 행사": "Student Council Event",
      "학생회 행사 일정": "Student Council Events",
      "메인으로 돌아가기": "Back to Home",
      "재학생 창구": "Current Students Portal",
      "재학생 소통 게시판": "Current Students Board",
      "휴학생 · 복학생 소통 게시판": "Returning Students Board",
      "내 프로필": "My Profile",
      "설정 전": "Not Set",
      "학년 미선택": "No Grade Selected",
      "프로필 수정": "Edit Profile",
      "글쓰기": "Write",
      "날짜 / 시간": "Date / Time",
      "제목": "Title",
      "작성자": "Author",
      "댓글": "Comments",
      "공지": "Notice",
      "닉네임과 학년을 설정해주세요": "Set your nickname and grade",
      "입장하기": "Enter",
      "학년 선택": "Select Grade",
      "새 게시글 작성": "Write a New Post",
      "닫기": "Close",
      "게시하기": "Post",
      "게시글 보기": "Post Detail",
      "게시글을 선택해주세요.": "Select a post.",
      "아직 댓글이 없습니다.": "No comments yet.",
      "댓글 달기": "Add Comment",
      "수정": "Edit",
      "삭제": "Delete",
      "이달의 주요 일정": "Monthly Highlights",
      "공식 페이지": "Official Page",
      "복학 신청 바로가기": "Open Reinstatement Page",
      "휴학 신청 바로가기": "Open Leave Page",
      "2학기 복학 신청 기간": "Second Semester Reinstatement Period",
      "2학기 휴학 신청 안내": "Second Semester Leave of Absence Guide",
      "ON국민 포털에서 휴학 신청과 승인 상태를 확인할 수 있습니다.": "Check leave applications and approvals on the ON Kookmin portal.",
      "1학년": "Year 1",
      "2학년": "Year 2",
      "3학년": "Year 3",
      "4학년": "Year 4",
      "기초디자인": "Basic Design",
      "2D 디지털그래픽스": "2D Digital Graphics",
      "드로잉": "Drawing",
      "그래픽디자인I": "Graphic Design I",
      "미디어디자인II": "Media Design II",
      "디자인과글쓰기": "Design and Writing",
      "타이포그래피I": "Typography I",
      "일러스트레이션1": "Illustration 1",
      "타입과미디어": "Type and Media",
      "시각디자인워크숍1": "Visual Design Workshop 1",
      "모션그래픽2": "Motion Graphics 2",
      "경험디자인1": "Experience Design 1",
      "시각디자인학과 내전": "Visual Design Intra-Department League",
      "시각 내전": "Visual Design League",
      "행사 기간 : 4월 8일(수)~4월 10일(금)": "Event Period: Apr 8 (Wed) - Apr 10 (Fri)",
      "써클장 모집": "Circle Leader Recruitment",
      "기간 : 페이지 확인": "Period: See page",
      "게시판 이용 안내": "Board Guide",
      "재학생 소통 게시판입니다. 질문, 정보 공유, 일상 이야기 모두 자유롭게 남겨주세요.": "This is the current students board. Feel free to share questions, information, and everyday conversations.",
      "복학 준비하면서 궁금한 점을 자유롭게 남겨주세요.": "Feel free to ask questions while preparing to return.",
      "복학 신청, 수강신청, 학과 문의, 휴학 연장과 관련된 질문을 남기면 서로 답할 수 있는 게시판입니다.": "This board is for questions about reinstatement, course registration, department inquiries, and leave extensions.",
      "수강신청 전에도 질문 올려도 되나요?": "Can I ask questions before course registration opens?",
      "자유롭게 소통해봐요.": "Feel free to start a conversation.",
      "환영합니다": "Welcome",
      "학생회": "Student Council",
      "복학예정": "Returning Soon",
      "오늘 이후로 예정된 주요 일정이 없습니다.": "No major upcoming events after today.",
      "공개된 주요 일정이 없습니다.": "No public events are available.",
      "공식 페이지 기준으로 공개된 주요 일정이 없습니다.": "No public events are listed on the official page.",
      "3월부터 12월까지 주요 학사 일정과 학생회 행사를 한 번에 확인할 수 있습니다.": "Check the main academic dates and student council events from March to December at a glance.",
      "학생회에 전달할 의견, 개선 요청, 불편 사항을 자유롭게 남길 수 있는 공간입니다.": "A space where you can freely leave feedback, improvement requests, and concerns for the student council.",
      "안내": "Guide",
      "현재는 배포용 1차 화면이라 실시간 접수 시스템 대신 안내 페이지로 연결되어 있습니다. 제출용 폼이나 익명 제보 링크가 확정되면 바로 이 페이지에 연결할 수 있습니다.": "This is currently a first-release guidance page instead of a live submission system. Once the submission form or anonymous report link is finalized, it will be connected here.",
      "학년별 닉네임 색상: 1학년 흰색, 2학년 노란색, 3학년 파란색, 4학년 빨간색": "Nickname colors by year: Year 1 white, Year 2 yellow, Year 3 blue, Year 4 red",
      "1학기 개강일": "First Semester Begins",
      "2026학년도 입학식": "2026 Entrance Ceremony",
      "1학기 수강신청 변경/포기 기간": "First Semester Course Add/Drop Period",
      "부전공 신청 및 다·부전공 변경/포기 기간": "Minor and Double Major Add/Drop Period",
      "1학기 개시 30일": "30 Days After Semester Start",
      "1전공 신청/변경 및 다전공 신청 기간": "Primary and Multiple Major Application Period",
      "1학기 중간시험 기간(수업 8주차)": "First Semester Midterm Exam Period (Week 8)",
      "1학기 개시 60일": "60 Days After Semester Start",
      "하계 계절학기 수강신청 기간": "Summer Session Registration Period",
      "1학기 개시 90일": "90 Days After Semester Start",
      "2학기 전부(과) 신청 기간": "Second Semester Department Transfer Application Period",
      "하계 계절학기 등록 기간": "Summer Session Tuition Payment Period",
      "2학기 재입학 신청 기간": "Second Semester Readmission Application Period",
      "1학기 기말시험 기간(수업 15주차)": "First Semester Final Exam Period (Week 15)",
      "1학기 성적 입력 기간": "First Semester Grade Entry Period",
      "1학기 보강(기말시험 가능) 기간": "First Semester Makeup Class Period",
      "1학기 성적 공시 기간": "First Semester Grade Release Period",
      "하계방학 시작일": "Summer Break Begins",
      "하계 계절학기 수업 기간": "Summer Session Class Period",
      "1학기 성적 이의신청/정정 기간": "First Semester Grade Appeal/Correction Period",
      "ON국민 시스템 정기 점검일": "ON Kookmin System Maintenance Day",
      "2학기 휴학, 복학 신청 기간": "Second Semester Leave/Reinstatement Application Period",
      "2학기 유급 신청 기간": "Second Semester Repeat-Year Application Period",
      "2학기 수강신청 기간": "Second Semester Registration Period",
      "2025학년도 후기 학위수여식": "2025 Late-Term Graduation Ceremony",
      "2학기 등록 기간": "Second Semester Tuition Payment Period",
      "제80회 개교일": "80th University Foundation Day",
      "2학기 개강일": "Second Semester Begins",
      "2학기 수강신청 변경/포기 기간": "Second Semester Course Add/Drop Period",
      "2학기 개시 30일": "30 Days After Second Semester Start",
      "개교 80주년 기념일": "80th Anniversary Celebration",
      "2학기 중간시험 기간(수업 8주차)": "Second Semester Midterm Exam Period (Week 8)",
      "2학기 개시 60일": "60 Days After Second Semester Start",
      "동계 계절학기 수강 신청 기간": "Winter Session Registration Period",
      "2027학년도 1학기 전부(과) 신청 기간": "2027 First Semester Department Transfer Application Period",
      "2학기 개시 90일": "90 Days After Second Semester Start",
      "동계 계절학기 등록 기간": "Winter Session Tuition Payment Period",
      "2027학년도 1학기 재입학 신청 기간": "2027 First Semester Readmission Application Period",
      "2학기 기말시험 기간(수업 15주차)": "Second Semester Final Exam Period (Week 15)",
      "2학기 성적 입력 기간": "Second Semester Grade Entry Period",
      "2학기 보강(기말시험 가능) 기간": "Second Semester Makeup Class Period",
      "2학기 성적 공시 기간": "Second Semester Grade Release Period",
      "동계방학 시작일": "Winter Break Begins",
      "동계 계절학기 수업 기간": "Winter Session Class Period",
      "2학기 성적 이의신청/정정 기간": "Second Semester Grade Appeal/Correction Period",
      "써클 모집 기간 · 19:00": "Circle Recruitment Period · 19:00",
      "이전 달 보기": "View Previous Month",
      "다음 달 보기": "View Next Month",
      "전체 보기": "View Full Calendar",
      "이전 배너": "Previous Banner",
      "다음 배너": "Next Banner",
      "써클장 모집 신청 페이지로 이동": "Open Circle Leader Recruitment Page",
      "현재 진행 행사 배너": "Current Event Banner",
      "학생회 건의함 안내 배너": "Student Council Suggestion Banner",
      "홈페이지 소개 배너": "Homepage Intro Banner",
      "국민대학교 조형대학 인스타그램": "Kookmin University College of Design Instagram",
      "국민대학교 시각디자인학과 학생회 인스타그램": "Kookmin University Visual Design Student Council Instagram",
      "소통창구 링크": "Communication Links",
      "학과 시설 링크": "Facility Links",
      "모바일 빠른 메뉴": "Mobile Quick Menu"
    },
    zh: {}
  };

  const placeholderMap = {
    en: {
      "닉네임": "Nickname",
      "제목을 입력하세요": "Enter a title",
      "내용을 입력하세요.": "Enter the content.",
      "댓글을 입력하세요": "Write a comment"
    },
    zh: {
      "닉네임": "昵称",
      "제목을 입력하세요": "请输入标题",
      "내용을 입력하세요.": "请输入内容。",
      "댓글을 입력하세요": "请输入评论"
    }
  };

function buildUtilityLinks() {
  const nav = document.createElement("nav");
  nav.className = "utility-links";
  nav.setAttribute("aria-label", "Utility links");
  nav.innerHTML = `
    <div class="utility-group">
      <button class="utility-link utility-link-button" type="button" aria-haspopup="true">소통창구</button>
      <div class="utility-dropdown" aria-label="소통창구 링크">
        <a class="utility-dropdown-link" href="students.html">재학생 소통창구</a>
        <a class="utility-dropdown-link" href="returning.html">휴·복학생 소통창구</a>
      </div>
    </div>
    <div class="utility-group">
      <button class="utility-link utility-link-button" type="button" aria-haspopup="true">학과 시설</button>
      <div class="utility-dropdown" aria-label="학과 시설 링크">
        <a class="utility-dropdown-link" href="https://docs.google.com/spreadsheets/d/1ueQRdtSFgHM24Yy25h3oS3uFy_UHB77XrJK4QNjQKjQ/edit?gid=143962756#gid=143962756" target="_blank" rel="noreferrer">출력실</a>
        <a class="utility-dropdown-link" href="https://sites.google.com/view/kmuvcdequipment/main-page" target="_blank" rel="noreferrer">기자재실</a>
        <a class="utility-dropdown-link" href="https://docs.google.com/forms/d/e/1FAIpQLSdU3iEA4Y1v7vtQmMi5jdUF0JfvNouxnzGt3cAtv1v3rJv_tQ/viewform" target="_blank" rel="noreferrer">실크스크린실</a>
      </div>
    </div>
    <a class="utility-link" href="room-schedule.html">각 과실 시간표</a>
  `;
  return nav;
}

function buildLanguageSwitch() {
  const switcher = document.createElement("div");
  switcher.className = "language-switch";
  switcher.setAttribute("aria-label", "Language switch");
  switcher.dataset.activeLang = currentLanguage;

  const items = [
    { code: "ko", label: "KO" },
    { code: "en", label: "EN" }
  ];

  const thumb = document.createElement("span");
  thumb.className = "language-switch-thumb";
  switcher.appendChild(thumb);

  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `lang-button${currentLanguage === item.code ? " active" : ""}`;
    button.dataset.lang = item.code;
    button.textContent = item.label;
    button.addEventListener("click", () => {
      if (item.code === currentLanguage) {
        return;
      }
      switcher.dataset.activeLang = item.code;
      switcher.classList.add("is-switching");
      window.localStorage.setItem(STORAGE_KEY, item.code);
      window.setTimeout(() => {
        window.location.reload();
      }, 240);
    });
    switcher.appendChild(button);
  });

  return switcher;
}

function buildMenuButton() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "menu-trigger";
  button.setAttribute("aria-label", "Open menu");
  button.innerHTML = `
    <span class="menu-trigger-icon" aria-hidden="true">
      <span class="menu-trigger-line menu-trigger-line-top"></span>
      <span class="menu-trigger-line menu-trigger-line-mid"></span>
      <span class="menu-trigger-line menu-trigger-line-bottom"></span>
    </span>
    <span class="menu-trigger-label">MENU</span>
  `;
  return button;
}

function setupMenuHoverLayer() {
  if (document.querySelector(".menu-hover-layer")) {
    return;
  }

  const layer = document.createElement("div");
  layer.className = "menu-hover-layer";
  layer.innerHTML = `
    <div class="menu-dim"></div>
    <aside class="menu-panel" aria-hidden="true">
      <div class="menu-panel-body">
        <div class="menu-shortcut-grid">
          <a class="menu-shortcut-card" href="https://ecampus.kookmin.ac.kr/login/index.php" target="_blank" rel="noreferrer" data-menu-link="ecampus">
            <span class="menu-shortcut-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="10" width="30" height="21" rx="4" stroke="currentColor" stroke-width="2.4"/>
                <path d="M19 37H29" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M15 31H33" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="menu-shortcut-copy">
              <strong>국민대 e-campus</strong>
            </span>
          </a>
          <a class="menu-shortcut-card" href="cafeteria.html" data-menu-link="cafeteria">
            <span class="menu-shortcut-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24C10 19.5817 13.5817 16 18 16H30C34.4183 16 38 19.5817 38 24V25C38 30.5228 33.5228 35 28 35H20C14.4772 35 10 30.5228 10 25V24Z" stroke="currentColor" stroke-width="2.4"/>
                <path d="M14 35H34" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M36 21H39C40.6569 21 42 22.3431 42 24V24C42 25.6569 40.6569 27 39 27H38" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="menu-shortcut-copy">
              <strong>오늘의 학식 메뉴</strong>
            </span>
          </a>
          <a class="menu-shortcut-card" href="faculty.html" data-menu-link="faculty">
            <span class="menu-shortcut-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="16" r="7" stroke="currentColor" stroke-width="2.4"/>
                <path d="M13 36C13 30.4772 17.4772 26 23 26H25C30.5228 26 35 30.4772 35 36V37H13V36Z" stroke="currentColor" stroke-width="2.4"/>
              </svg>
            </span>
            <span class="menu-shortcut-copy">
              <strong>교수님 연락처</strong>
            </span>
          </a>
          <a class="menu-shortcut-card" href="https://www.youtube.com/watch?si=YS-jY3oZ1Q3gaN5B&v=cOAaayciE0A&feature=youtu.be" target="_blank" rel="noreferrer" data-menu-link="silkscreen-video">
            <span class="menu-shortcut-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="13" width="32" height="22" rx="8" stroke="currentColor" stroke-width="2.4"/>
                <path d="M21 20L29 24L21 28V20Z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="menu-shortcut-copy">
              <strong>실크스크린실 이용 방법</strong>
            </span>
          </a>
        </div>
      </div>
    </aside>
  `;
  document.body.appendChild(layer);

  const panel = layer.querySelector(".menu-panel");
  let closeTimer = null;

  const openMenu = () => {
    if (closeTimer) {
      window.clearTimeout(closeTimer);
      closeTimer = null;
    }
    document.body.classList.add("menu-hover-open");
    panel?.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    document.body.classList.remove("menu-hover-open");
    panel?.setAttribute("aria-hidden", "true");
  };

  const closeMenuSoon = () => {
    if (closeTimer) {
      window.clearTimeout(closeTimer);
    }
    closeTimer = window.setTimeout(() => {
      closeMenu();
    }, 40);
  };

  const triggers = Array.from(document.querySelectorAll(".menu-trigger"));

  triggers.forEach((button) => {
    button.addEventListener("mouseenter", openMenu);
    button.addEventListener("mouseleave", closeMenuSoon);
    button.addEventListener("focus", openMenu);
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (document.body.classList.contains("menu-hover-open")) {
        closeMenu();
        return;
      }
      openMenu();
    });
  });

  panel?.addEventListener("mouseenter", openMenu);
  panel?.addEventListener("mouseleave", closeMenuSoon);

  document.addEventListener("pointermove", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    const insideTrigger = triggers.some((button) => button.contains(target));
    const insidePanel = panel?.contains(target);

    if (!insideTrigger && !insidePanel) {
      closeMenuSoon();
    }
  });

  document.addEventListener("pointerdown", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    const insideTrigger = triggers.some((button) => button.contains(target));
    const insidePanel = panel?.contains(target);

    if (!insideTrigger && !insidePanel) {
      closeMenu();
    }
  });
}

function setupTopHeaderClone() {
  return;
}

function buildMobileSheetSection(type) {
  const sections = {
    communication: {
      title: "소통창구",
      links: [
        { label: "재학생 소통창구", href: "students.html" },
        { label: "휴·복학생 소통창구", href: "returning.html" }
      ]
    },
    facilities: {
      title: "학과 시설",
      links: [
        {
          label: "출력실",
          href: "https://docs.google.com/spreadsheets/d/1ueQRdtSFgHM24Yy25h3oS3uFy_UHB77XrJK4QNjQKjQ/edit?gid=143962756#gid=143962756",
          external: true
        },
        {
          label: "기자재실",
          href: "https://sites.google.com/view/kmuvcdequipment/main-page",
          external: true
        },
        {
          label: "실크스크린실",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSdU3iEA4Y1v7vtQmMi5jdUF0JfvNouxnzGt3cAtv1v3rJv_tQ/viewform",
          external: true
        }
      ]
    },
    schedule: {
      title: "바로가기",
      links: [
        { label: "각 과실 시간표", href: "room-schedule.html" }
      ]
    },
    menu: {
      title: "MENU",
      links: [
        {
          label: "국민대 e-campus",
          href: "https://ecampus.kookmin.ac.kr/login/index.php",
          external: true
        },
        { label: "오늘의 학식 메뉴", href: "cafeteria.html" },
        { label: "교수님 연락처", href: "faculty.html" },
        {
          label: "실크스크린실 이용 방법",
          href: "https://www.youtube.com/watch?si=YS-jY3oZ1Q3gaN5B&v=cOAaayciE0A&feature=youtu.be",
          external: true
        }
      ]
    }
  };

  return sections[type] || sections.menu;
}

function setupMobileBottomNav() {
  if (document.querySelector(".mobile-bottom-nav")) {
    return;
  }

  const dock = document.createElement("div");
  dock.className = "mobile-bottom-nav";
  dock.innerHTML = `
    <button type="button" class="mobile-bottom-nav-button" data-mobile-sheet="communication">
      <span class="mobile-bottom-nav-label">소통</span>
    </button>
    <button type="button" class="mobile-bottom-nav-button" data-mobile-sheet="facilities">
      <span class="mobile-bottom-nav-label">시설</span>
    </button>
    <button type="button" class="mobile-bottom-nav-button" data-mobile-sheet="schedule">
      <span class="mobile-bottom-nav-label">시간표</span>
    </button>
  `;

  const sheet = document.createElement("div");
  sheet.className = "mobile-sheet";
  sheet.setAttribute("aria-hidden", "true");
  sheet.innerHTML = `
    <div class="mobile-sheet-backdrop"></div>
    <section class="mobile-sheet-panel" role="dialog" aria-modal="true" aria-label="모바일 빠른 메뉴">
      <div class="mobile-sheet-handle" aria-hidden="true"></div>
      <div class="mobile-sheet-header">
        <strong class="mobile-sheet-title">MENU</strong>
        <button type="button" class="mobile-sheet-close" aria-label="닫기">닫기</button>
      </div>
      <div class="mobile-sheet-links"></div>
    </section>
  `;

  document.body.append(dock, sheet);

  const title = sheet.querySelector(".mobile-sheet-title");
  const linksRoot = sheet.querySelector(".mobile-sheet-links");
  const closeButton = sheet.querySelector(".mobile-sheet-close");
  const backdrop = sheet.querySelector(".mobile-sheet-backdrop");

  const closeSheet = () => {
    document.body.classList.remove("mobile-sheet-open");
    sheet.setAttribute("aria-hidden", "true");
    dock.querySelectorAll(".mobile-bottom-nav-button").forEach((button) => button.classList.remove("active"));
  };

  const openSheet = (type, trigger) => {
    const section = buildMobileSheetSection(type);
    title.textContent = section.title;
    linksRoot.innerHTML = section.links
      .map((link) => {
        const attrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
        return `<a class="mobile-sheet-link" href="${link.href}"${attrs}>${link.label}</a>`;
      })
      .join("");

    dock.querySelectorAll(".mobile-bottom-nav-button").forEach((button) => button.classList.toggle("active", button === trigger));
    document.body.classList.add("mobile-sheet-open");
    sheet.setAttribute("aria-hidden", "false");
    scheduleApply();
  };

  dock.querySelectorAll(".mobile-bottom-nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.mobileSheet;
      if (document.body.classList.contains("mobile-sheet-open") && button.classList.contains("active")) {
        closeSheet();
        return;
      }
      openSheet(type, button);
    });
  });

  closeButton?.addEventListener("click", closeSheet);
  backdrop?.addEventListener("click", closeSheet);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSheet();
    }
  });

  sheet.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest(".mobile-sheet-link")) {
      closeSheet();
    }
  });
}

function mountLanguageSwitches() {
  document.querySelectorAll(".site-header-inner").forEach((inner) => {
    const header = inner.closest(".site-header");
    const isHomepageTop = pageName === "index.html" && header?.classList.contains("site-header-top-copy");
    const isHomepageBottom = pageName === "index.html" && !header?.classList.contains("site-header-top-copy");
    let tools = inner.querySelector(".header-tools");

    if (isHomepageBottom) {
      tools?.remove();
      return;
    }

    if (!tools) {
      tools = document.createElement("div");
      tools.className = "header-tools";
      const social = inner.querySelector(".social-links");
      if (social && !isHomepageTop) {
        tools.appendChild(social);
      }
      inner.appendChild(tools);
    }

    if (!tools.querySelector(".utility-links")) {
      tools.prepend(buildUtilityLinks());
    }

    if (!tools.querySelector(".language-switch")) {
      tools.appendChild(buildLanguageSwitch());
    }

    if (!tools.querySelector(".menu-trigger")) {
      tools.appendChild(buildMenuButton());
    }
  });
}

function updateDocumentTitle() {

    const entry = titles[pageName];
    if (entry) {
      document.title = entry[currentLanguage];
    }
    document.documentElement.lang = currentLanguage;
  }

  function replaceExactTexts() {
    if (currentLanguage === "ko") {
      return;
    }
    const map = textMap[currentLanguage];
    document.querySelectorAll("h1,h2,h3,p,span,a,button,strong,option,label").forEach((el) => {
      if (el.childElementCount > 0) {
        return;
      }
      const raw = el.textContent.trim();
      if (map[raw]) {
        el.textContent = map[raw];
      }
    });
  }

  function replacePlaceholders() {
    const map = placeholderMap[currentLanguage] || {};
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((el) => {
      const raw = el.getAttribute("placeholder") || "";
      if (map[raw]) {
        el.setAttribute("placeholder", map[raw]);
      }
    });
  }

  function translateMonthText(text) {
    const match = text.match(/^(\d{1,2})월$/);
    if (!match) {
      return text;
    }
    const month = Number(match[1]);
    return months[currentLanguage][month - 1] || text;
  }

  function translateEventCount(text) {
    const match = text.match(/^(\d+)개 일정$/);
    if (!match) {
      return text;
    }
    const count = match[1];
    if (currentLanguage === "en") {
      return `${count} events`;
    }
    if (currentLanguage === "zh") {
      return `${count}个日程`;
    }
    return text;
  }

  function translateTimeText(text) {
    const hourMap = {
      "오전 9시": 9, "오전 10시": 10, "오전 11시": 11,
      "오후 12시": 12, "오후 1시": 13, "오후 2시": 14,
      "오후 3시": 15, "오후 4시": 16, "오후 5시": 17, "오후 6시": 18
    };
    const hour = hourMap[text.trim()];
    if (!hour || currentLanguage === "ko") {
      return text;
    }
    return timeLabels[currentLanguage][hour] || text;
  }

  function translateDateLabels(text) {
    if (currentLanguage === "ko") {
      return text;
    }
    return text.replace(/(\d{1,2})월\s*(\d{1,2})일/g, (_, month, day) => {
      const monthIndex = Number(month) - 1;
      if (currentLanguage === "en") {
        return `${months.en[monthIndex]} ${day}`;
      }
      return `${month}月${day}日`;
    }).replace(/2026년\s*(\d{1,2})월\s*(\d{1,2})일/g, (_, month, day) => {
      if (currentLanguage === "en") {
        return `${months.en[Number(month) - 1]} ${day}, 2026`;
      }
      return `2026年${month}月${day}日`;
    });
  }

  function translateMonthYear(text) {
    const match = text.match(/^(\d{4})년\s*(\d{1,2})월$/);
    if (!match || currentLanguage === "ko") {
      return text;
    }
    const year = match[1];
    const monthIndex = Number(match[2]) - 1;
    if (currentLanguage === "en") {
      return `${months.en[monthIndex]} ${year}`;
    }
    return `${year}年${match[2]}月`;
  }

  function translateTodayHeadlineText(text) {
    if (currentLanguage === "ko") {
      return text;
    }
    const match = text.match(/^(\d{2})\.(\d{2})\.\s*(일요일|월요일|화요일|수요일|목요일|금요일|토요일)$/);
    if (!match) {
      return text;
    }
    const weekdayMap = {
      "일요일": "Sunday",
      "월요일": "Monday",
      "화요일": "Tuesday",
      "수요일": "Wednesday",
      "목요일": "Thursday",
      "금요일": "Friday",
      "토요일": "Saturday"
    };
    if (currentLanguage === "en") {
      return `${match[1]}.${match[2]}. ${weekdayMap[match[3]]}`;
    }
    return `${match[1]}.${match[2]}.`;
  }

  function translateMonthDescriptionText(text) {
    if (currentLanguage === "ko") {
      return text;
    }
    const summaryMatch = text.match(/^학사 일정\s*(\d+)개\s*·\s*학생회 행사\s*(\d+)개가 포함되어 있습니다\.$/);
    if (summaryMatch && currentLanguage === "en") {
      return `Includes ${summaryMatch[1]} academic events and ${summaryMatch[2]} student council events.`;
    }
    if (text === "이 달에는 공개된 주요 일정이 없습니다." && currentLanguage === "en") {
      return "There are no public events this month.";
    }
    if (text === "이 달에는 공개된 주요 일정이 없습니다." && currentLanguage === "zh") {
      return "这个月没有公开活动。";
    }
    return text;
  }

  function translateCommentCount(text) {
    const match = text.match(/^댓글\s*(\d+)$/);
    if (!match || currentLanguage === "ko") {
      return text;
    }
    if (currentLanguage === "en") {
      return `${match[1]} comments`;
    }
    return `${match[1]}条评论`;
  }

  function translateTextValue(text) {
    const raw = text.trim();
    if (!raw) {
      return text;
    }
    const map = textMap[currentLanguage] || {};
    return map[raw]
      || translateCommentCount(raw)
      || translateMonthDescriptionText(raw)
      || translateTodayHeadlineText(raw)
      || translateMonthYear(raw)
      || translateDateLabels(raw);
  }

  function translateAttributeValues() {
    if (currentLanguage === "ko") {
      return;
    }
    const map = textMap[currentLanguage] || {};
    document.querySelectorAll("[aria-label],[title]").forEach((el) => {
      ["aria-label", "title"].forEach((attr) => {
        const raw = el.getAttribute(attr);
        if (raw && map[raw]) {
          el.setAttribute(attr, map[raw]);
        }
      });
    });
  }

  function updateSourceNotes() {
    document.querySelectorAll(".source-note").forEach((note) => {
      const link = note.querySelector("a");
      if (!link) {
        return;
      }
      const prefix = currentLanguage === "en"
        ? "Schedule source: Kookmin University Academic Affairs 2026 Academic Calendar"
        : currentLanguage === "zh"
          ? "日程依据：国民大学学事指南 2026学年学事日程"
          : "일정 기준: 국민대학교 학사안내 2026학년도 학사일정";
      const official = currentLanguage === "en" ? "Official Page" : currentLanguage === "zh" ? "官方页面" : "공식 페이지";
      note.innerHTML = `${prefix} <a href="${link.href}" target="_blank" rel="noreferrer">${official}</a>`;
    });
  }

  function translateStructuredContent() {
    document.querySelectorAll(".month-card h3, #month-navigation a").forEach((el) => {
      el.textContent = translateMonthText(el.textContent.trim());
    });

    document.querySelectorAll(".event-count").forEach((el) => {
      el.textContent = translateEventCount(el.textContent.trim());
    });

    document.querySelectorAll(".mini-weekdays span, .calendar-weekdays span").forEach((el, index) => {
      const labels = weekdays[currentLanguage];
      if (labels[index % labels.length]) {
        el.textContent = labels[index % labels.length];
      }
    });

    document.querySelectorAll(".room-schedule-day").forEach((el, index) => {
      const labels = roomDays[currentLanguage];
      if (labels[index % labels.length]) {
        el.textContent = labels[index % labels.length];
      }
    });

    document.querySelectorAll(".room-schedule-time-left").forEach((el) => {
      el.textContent = translateTimeText(el.textContent.trim());
    });

    document.querySelectorAll("#today-title").forEach((el) => {
      el.textContent = translateTodayHeadlineText(el.textContent.trim());
    });

    document.querySelectorAll("#current-month-label, #month-title").forEach((el) => {
      el.textContent = translateMonthYear(el.textContent.trim());
    });

    document.querySelectorAll("#month-description").forEach((el) => {
      el.textContent = translateMonthDescriptionText(el.textContent.trim());
    });

    document.querySelectorAll(".schedule-date, .notice-card p, .month-summary").forEach((el) => {
      const translated = translateTextValue(el.textContent.trim());
      if (translated) {
        el.textContent = translated;
      }
    });

    document.querySelectorAll(".list-badge, .event-pill, .board-grade-tag").forEach((el) => {
      const translated = translateTextValue(el.textContent.trim());
      if (translated) {
        el.textContent = translated;
      }
    });

    document.querySelectorAll(".month-event-list li").forEach((item) => {
      const strong = item.querySelector("strong");
      if (strong) {
        strong.textContent = translateDateLabels(strong.textContent.trim());
      }
      item.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const raw = node.textContent.trim();
          if (raw) {
            node.textContent = ` ${translateTextValue(raw)}`;
          }
        }
      });
    });
  }

  function applyLanguage
() {
    updateDocumentTitle();
    replaceExactTexts();
    replacePlaceholders();
    translateAttributeValues();
    updateSourceNotes();
    translateStructuredContent();
  }

  let translating = false;
  let scheduled = false;

  function scheduleApply() {
    if (scheduled) {
      return;
    }
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      if (translating) {
        return;
      }
      translating = true;
      applyLanguage();
      translating = false;
    });
  }

  function observeDom() {
    const observer = new MutationObserver(() => {
      if (!translating) {
        scheduleApply();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: false });
  }

  setupTopHeaderClone();
  mountLanguageSwitches();
  setupMenuHoverLayer();
  setupMobileBottomNav();
  applyLanguage();
  observeDom();
})();
