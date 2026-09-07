# CHINS AI Labs Website

CSCAMP 계열의 산업기술 기업 홈페이지 레이아웃 감성을 참고해 CHINS AI Labs용으로 새로 제작한 정적 웹사이트입니다.

## 실행
파일을 압축 해제한 뒤 `index.html`을 브라우저에서 열면 됩니다.
로컬 서버 사용 시:

```bash
python -m http.server 8080
```

그 다음 `http://localhost:8080` 접속.

## 구성
- `index.html` : 전체 페이지 구조
- `styles.css` : 반응형 디자인/애니메이션
- `script.js` : 헤더, 모바일 메뉴, 스크롤 애니메이션
- `assets/` : 회사소개서/보고서 기반 이미지

## 주요 섹션
- Main Visual
- Business (AI 비전검사 / Agentic AI / Mobility DX)
- Company
- Vision AI
- Agentic AI
- Mobility DX / IoT
- Reference
- Contact

## 배포
GitHub Pages, Vercel, Netlify 등 정적 호스팅에 그대로 배포할 수 있습니다.


## V1 logo update
- 공식 회사 로고(회사로고.png)를 `assets/logo.png`로 적용했습니다.
- 헤더/푸터에서 원본 색상이 유지되도록 로고 표시 CSS를 수정했습니다.
