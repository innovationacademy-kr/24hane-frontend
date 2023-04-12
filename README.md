
<a href="https://24hoursarenotenough.42seoul.kr/" target="_blank">
<img width="100" alt="image" src="https://user-images.githubusercontent.com/72684256/222954950-6ab18005-81e1-4d0b-93d5-6097f11fee32.png">
</a>

# 24HANE

### 24 hours are not enough! 24시간이 부족해!

안녕하세요:) 42서울 공식 체크인 서비스 24HANE입니다💌

`"24 Hane" (24 hours are not enough)` 은 Cadet 여러분의 클러스터 출입 여부와 출입 누적 시간을 직접 확인할 수 있도록 개발된 서비스 입니다. 

원활하게 서비스를 이용할 수 있도록 기본 기능을 소개합니다. 👋

<br />
<br />

## 서비스 소개

<p align="center">
<a href="https://24hoursarenotenough.42seoul.kr/" target="_blank">
<img width="100" alt="image" src="https://user-images.githubusercontent.com/72684256/223358425-9eca18d8-577b-4476-8c93-aeeb9c3ec934.png" />
</a>
</p>

<p align="center">
<b>24 HANE (24 hours are not enough)</b>
</p>

```
카뎃 여러분이 직접 클러스터 출입 누적 시간을 확인할 수 있는 24 HANE 서비스를 소개합니다.
 - 클러스터 출입태깅이 잘 됐는지 궁금한가요?
 - 클러스터 출입 누적 시간이 궁금한가요?

24HANE 서비스를 이용한다면?
 - 클러스터 출입 누적 시간을 오늘 / 월 기준으로 한 눈에 볼 수 있습니다.
 - 목표 시간을 설정하여 오늘 / 월의 학습 시간 진척도를 그래프로 볼 수 있습니다.
 - 최근 6주간 / 6달간의 학습 시간 진척도를 그래프로 볼 수 있습니다.
 - 클러스터에서 학습중인 실시간 인원을 확인할 수 있습니다.
 - 자신의 상세한 클러스터 출입 기록을 일별로 확인할 수 있습니다.(누락된 기록까지!)
 - 자정 전후로 별도 태깅 없이 학습에만 몰입 할 수 있습니다.
 - 카드를 분실한 경우 카드 재발급을 앱에서 신청할 수 있습니다.
```

<br />
<br />

## 기능 소개

새로워진 24HANE 서비스의 각 페이지를 소개합니다.

<table align="center">
  <tr>
    <td><img width="345" alt="image" src="https://user-images.githubusercontent.com/72684256/222955031-4ce9edd6-6dda-46f3-ac17-e6bacacfbcfe.png"></td>
    <td><img width="345" alt="image" src="https://user-images.githubusercontent.com/72684256/222955101-301b7088-890b-4291-899f-9e685264c78f.png"></td>
    <td><img width="345" alt="image" src="https://user-images.githubusercontent.com/72684256/222955264-301460c7-cc7d-4d2c-905a-5b73cba8383c.png"></td>
  <tr>
</table>

- **로그인**
  - Intra 로그인을 통해 서비스 로그인이 가능합니다.

- **홈**
  - 로그인 후 바로 보이는 페이지로 본인의 정보와 출입 누적 시간(오늘, 이번 달) 현황을 한 눈에 볼 수 있습니다.
  - **`개인 정보`**
    - 본인의 인트라 사진과 ID를 통해 본인의 정보를 확인합니다.
  - **`출입 여부`**
    - 입실 시 홈 화면의 전체 배경이 바뀝니다. 또한
  인트라ID의 우측 상단에 있는 작은 원으로  출입 여부가 표시됩니다.
    - **(초록색🟢)** 정상적으로 입실(check-in) 되었음을 의미합니다.
  - **`이용시간`**
    - 오늘의 클러스터 누적 시간을 표시합니다.
    - 단, 개인별 사진 출입 카드의 ‘입실’ 과 ‘퇴실’ 태깅 짝이 일치하는 경우에만 ‘오늘 누적 시간’으로 기록됩니다.
    - 따라서, 입실(check-in) 중일 경우 오늘 누적 시간은 기록되지 않으며 퇴실(check-out) 태깅이 확인 된 후 누적 시간이 기록됩니다.
    - 목표시간을 설정할 수 있습니다. 기본 값으로 4시간이 적용되어 있으며, 목표시간을 1시간 단위로 24시간까지 변경하실 수 있습니다.
  - **`월 누적시간`**
    - 이번 달 클러스터 누적 시간을 표시합니다.
    - 목표시간을 설정할 수 있습니다. 기본 값으로 80시간이 적용되어 있으며, 목표시간을 20시간 단위로 420시간까지 변경하실 수 있습니다.
  - **`6주 / 6개월 체류시간 그래프`**
    - 6주, 6개월 체류 시간을 표시하는 바형 그래프가 추가되었습니다.
    - 각 바를 클릭하면 누적 시간과 일 평균 시간을 확인할 수 있습니다.
  - **`실시간 현황`**
    - 개포, 서초 클러스터의 현재 체류 인원이 표시됩니다.

- **캘린더**
  - 2022년 8월(24HANE 서비스 시작 월)부터 현재까지의 기록을 확인 할 수 있습니다.
  - 월별로 총 누적시간을 확인할 수 있습니다.
  - 일별 진척도를 색상을 통해 확인할 수 있습니다. (3시간 단위)
  - Pagination과 타이틀을 클릭해서 월을 변경할 수 있습니다.
  - 일별로 태깅기록을 확일 할 수 있으며, 누락된 기록도 표시됩니다.
  - 캘린더 메뉴버튼 클릭 시, 현재 일의 태깅기록을 볼 수 있습니다.

- **더보기**
  - 앱을 통해 카드 재발급 신청을 진행하실 수 있습니다.
  - 지원금 지침 안내페이지(링크)
  - 출입기록 문의(링크)
  - 이용 가이드(링크)
  - 앱 피드백(링크)
  - 로그아웃

<br />
<br />

## 기술 스택

 <p>
   <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=black">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
    <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=black">
</p>


<br />
<br />

## 프로젝트 실행 방법

해당 앱은 벡엔드 서버와, env 설정이 필요합니다.

### .env 예시

루트에 .env파일을 만듭니다.

```
# 백엔드 url 주소
VITE_APP_API_URL = http://localhost:2424
# 토큰 이름
VITE_TOKEN = accessToken
```

### 앱 실행

- 해당 레포를 clone 받습니다.
- [벡엔드 레포](https://github.com/innovationacademy-kr/24hane-backend) 를 클론 받습니다.

```
//의존성 패키지 설정
npm install

//코드를 실행 합니다
npm run dev
```

<br />
<br />

## 프로젝트 배포 방법

### GithubActions 설정

배포자동화를 통해서 아래 와 같이 연동되어 있습니다.

- main 브랜치는 상용 서버와 연동
- develop 브랜치는 개발 서버와 연동

배포 자동화에 대한 yml 파일은 [링크](https://github.com/innovationacademy-kr/42checkin_v3-frontend/tree/master/.github/workflows)에서 확인 가능 합니다. 해당 파일의 env 값들은 `Actions secrets` 을 이용하여 변경 가능 합니다.

```
AWS_ACCESS_KEY_ID //AWS CLI 사용하기 위한 access key
AWS_SECRET_ACCESS_KEY //AWS CLI 사용하기 위한 secret access key
DEFAULT_BUCKET_REGION //S3 버킷 위치 아시아 태평양 (서울) "ap-northeast-2"
CLOUDFRONT_DISTRIBUTION_ID //CloudFront ID 상용
CLOUDFRONT_DISTRIBUTION_ID_DEV //CloudFront ID 개발용
S3_BUCKET  //S3 Bucket 이름 상용
S3_BUCKET_DEV  //S3 Bucket 이름 개발용

REACT_APP_ENV //개발 환경 (ex: development,local,production)
REACT_APP_API_URL_DEV //server url (ex. https://localhost:3000)
REACT_APP_SENTRY_DSN = Sentry DSN key (ex: Sentry credential 파일 확인)
VITE_APP_API_URL // 배포 환경의 server url
VITE_APP_API_URL_DEV // 개발 환경의 server url
VITE_TOKEN // 토큰 명
```

## 개선 / 문의사항

Frontend 문의: 인트라ID `inshin`에게 DM 주세요💌
