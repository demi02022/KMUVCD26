# KMU Visual Design Website

국민대학교 시각디자인학과 학생회 웹사이트 프로젝트입니다.

## 파일 구성
- `index.html`: 메인 페이지
- `styles.css`: 공통 스타일
- `script.js`: 메인 인터랙션, 캘린더, 시간표 로직
- `language.js`: 상단 언어 전환 / 메뉴 패널 로직
- `students.html`: 재학생 소통 게시판
- `returning.html`: 휴학생 · 복학생 소통 게시판
- `calendar.html`: 월별 학사일정 캘린더
- `room-schedule.html`: 각 과실 시간표
- `cafeteria.html`: 오늘의 학식 메뉴
- `faculty.html`: 교수님 연락처
- `assets/`: 이미지 및 아이콘 자산

## GitHub Pages 배포
1. 이 폴더를 그대로 GitHub 저장소 루트에 업로드합니다.
2. 저장소 `Settings > Pages`에서 배포 브랜치를 선택합니다.
3. 기본 진입 파일은 `index.html`입니다.

## 참고
- 학식 페이지는 외부 메뉴 데이터를 불러오므로 네트워크 상태에 따라 표시 시간이 달라질 수 있습니다.
- 로컬 절대 경로는 사용하지 않도록 정리되어 있습니다.
