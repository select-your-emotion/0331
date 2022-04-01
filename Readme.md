## Select your EmotioN

+ 🐱 팀원 : 김민준, 김진주, 이정훈, 이승현
+ 🐹 프로젝트 소개 : 음원 검색 API를 활용한 나만의 플레이리스트 생성 사이트 구축
+ 💪 소요 기간 : 22/03/25 ~ 22/04/01
+ 🛠️ Tech <br/><br/>
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?&style=flat-square&logo=html5&logoColor=white"/> 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" /> 
  <img src="https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
  

## 🐰 맡은 역할
### Front
+ 이승현 : Spotify api 연결 및 검색 기능 구현, 각 페이지 연동, CSS
+ 김진주 : Spotify api를 통해 받아온 데이터를 Back의 Restful API와 통신, CSS
+ 이정훈 : View 초안 설계 및 sidebar route 구현, CSS

### Back
 + 김민준 : Table 설계 및 Restful API 구현

## 📖 API Documentation
+ [Restful API Documentation](https://documenter.getpostman.com/view/19511452/UVypzd8x)
+ [spotify API](https://developer.spotify.com/console/)

## :mag:기능 구현
### Front-end
  + Spotify API를 이용한 로그인 기능
  + Spotify API를 이용한 앨범, 아티스트, 트랙 정보 검색 기능
  + 플레이리스트 생성 및 곡 추가 시 Back-end로 정보를 보내고 DB에 저장
  + 플레이리스트 이름 변경
  + Spring 서버 중계를 통해 DB 연동
  + 사용 모듈
    + "axios": "0.26.1"
    + "bootstrap": "5.1.3"
    + "react": "17.0.2"
    + "react-bootstrap": "2.2.2"
    + "react-dom": "17.0.2"
    + "react-icons": "4.3.1"
    + "react-redux": "7.2.6"
    + "react-router-dom": "5.3.0"
    + "react-scripts": "5.0.0"
    + "redux": "4.1.2"
    + "redux-thunk": "2.4.1"
    + "spotify": "0.3.0",
    + "spotify-web-api-js": "1.5.2"
    + "spotify-web-api-node": "5.0.2"

### Back-end
  + PlayListService
    + addPlayList : 새로운 플레이리스트 생성 후 플레이리스트 이름, 썸네일URL을 반환.
    + showPlayList : 생성되어 있는 플레이리스트들의 이름과 썸네일URL 리스트를 반환.
    + updatePlayList : 플레이리스트의 이름을 변경, 반환값 없음.
    + deletePlayList : 플레이리스트를 삭제, 플레이리스트에 있는 노래들도 모두 삭제, 반환값 없음.
    + showSongList : 현재 플레이리스트에 있는 노래들의 정보를 모두 반환함.
    
 + SongInfoService
   + addSong : 플레이리스트에 해당 노래를 추가, 반환값 없음.
   + deleteSong : 플레이리스트에 해당 노래를 삭제, 반환값 없음.

## :bell: FE UI 초기 구상 (use Drwa.io)
+ Door page
![대문](https://user-images.githubusercontent.com/59858894/161069859-1ec4351a-96fd-4408-a3f1-e4247fa1658a.PNG)

+ Main page
![메인](https://user-images.githubusercontent.com/59858894/161071702-eb6e7652-f2ee-4682-b167-6b30ed529dd4.PNG)

+ playlistMake page
![플레이리스트추가](https://user-images.githubusercontent.com/59858894/161070134-0ba952a8-1faa-4197-881a-505f64307533.PNG)

+ showPlaylist page
![플레이리스트](https://user-images.githubusercontent.com/59858894/161070147-d8ea3559-9a8b-4c51-b822-4afd5ae26c6b.PNG)

## :bulb:주요 로직
### Front-end
  + [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) 
    + BrowserRouter - history API를 이용해 URL과 UI를 동기화
    + Switch - 자식 컴포넌트 Route또는 Redirect중 매치되는 첫 번째 요소를 렌더링
    + Route - 컴포넌트 URL과 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링
    + Link - to속성에 설정된 링크로 이동, 기록이 history스택에 저장 ('a'태그와 유사한 기능)<br/>
  + react-router-dom을 활용하여 사이드바를 구현하고 아이콘 클릭시 이동 할 수 있도록 함 <br/>
    
  + react-redux - 앨범, 가수, 노래, 플레이리스트 등 정보를 받아오는 함수 정의 후 카테고리 형식에 맞게 받아와 정보 출력<br/>
  
  + Restful API 호출
```   
const BASE_URL = 'http://localhost:????????????';

const ??? = (props) => {

  const [???, set???] = useState([]);

  useEffect(() => {

    const fetchBooks = async () => {
      const response = await fetch(BASE_URL,
        {
          method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
              ???
            })
        });
```

### Back-end
  + 테이블 설계 <br/><br/>
  ![11](https://user-images.githubusercontent.com/59858894/161178240-0212b903-99a7-497d-80ed-069c853907db.PNG)


## 🐭 실행 화면
[![SYE](https://user-images.githubusercontent.com/59858894/161200867-245d1d9d-6a54-4685-b114-877fadf22b0b.PNG)
](https://www.youtube.com/watch?v=yIjtxQzPwyo)
https://www.youtube.com/watch?v=yIjtxQzPwyo

## 🎨 LightHouse 측정
![라하1](https://user-images.githubusercontent.com/59858894/161206157-db10cde4-aae4-4438-a1e7-d4ecf94ada2e.PNG)
![라하2](https://user-images.githubusercontent.com/59858894/161206162-714234bf-c5e8-4c16-bc01-f596af672cb1.PNG)


## 🐯 Issue
### Front-end
+ react 페이지 연동 오류
  + 각각의 페이지를 연동할 때, 각자 사용한 모듈의 버전이 달라 route가 되지 않았다.
  + react-router-dom을 6v -> 5v로 하양하여 연동하였다.

+ Context API를 사용하여 중앙에서 데이터 관리를 하려고 하였으나, 제대로 사용하지 못하고 props로 사용하였다.

+ 서버로 데이터 sending시 반환값 undefined
  + 기존 서버에서 @GetMapping으로 데이터를 받아올 때 undefined를 반환받았다.
  + controller에 return이 없어서 반환하지 못했기 때문에 return을 추가하였다. 

+ 노래 api를 구하기 어려워 크롤링을 이용한 노래 정보 받아오기 
  + api를 찾아 구현을 하도록 함
    
### Back-end
+ Repository에서 DB에 Native Query 요청 시 서버 실행이 되지 않는 문제
  + Query 어노테이션의 nativeQuery 속성을 true로 설정
+ 서버로 UPDATE Native Query DB에 요청할 때 TransactionRequiredException 에러
  + 서비스를 구현하는 메서드에 @Transactional 추가

## 🐻 개선해야 할 점
### Front
+ CRUD 작업을 back에 요청 후 반환된 값을 받은 뒤 새로고침을 해야 적용되어 나타난다.
  + Context로 관리하면 되나 시간 관계상 구현하지 못했다.
+ 플레이리스트를 클릭시 해당 플레이리스트에 대한 내용이 출력 되어야 하나 링크 연결이 되지 않는다. 
+ 플레이리스트 클릭시 해당 플레이리스트에 대한 내용을 출력하는 과정에서 context로 처리하는 것은 어려움을 느꼈고, redux 대신 recoil을 이용하여 후에 해결하고자 함

### Back
+ 각 서비스 요청 시에 예외 처리가 구현되어 있지 않음
  + ex1 : 플레이리스트가 없는데 플레이리스트 삭제 요청을 하는 경우
  + ex2 : 플레이리스트에 노래가 없을 때 노래 삭제 요청을 하는 경우
+ Playlist Delete할 때 API로 보내는 값이 플레이리스트 이름 뿐이기 때문에 같은 이름의 플레이리스트가 있을 때, 플레이리스트가 삭제되지 않음
