## 🧸 팀원 소개
|<img src="https://avatars.githubusercontent.com/u/76644123?v=4" width="150px">|<img src="https://avatars.githubusercontent.com/u/107591946?v=4" width="150px"/>|<img src="https://avatars.githubusercontent.com/u/107888594?v=4" width="150px">|
|:--:|:--:|:--:|
|[Ethan Jeong](https://github.com/EthanJcoding)|[starplanter93](https://github.com/starplanter93)|[seungmin2ee](https://github.com/seungmin2ee)|
|Front|Front|Front|

<br>

<img width="358" alt="image" src="https://user-images.githubusercontent.com/107888594/219731270-1911bcb1-d545-4a16-8490-37b7569a17fb.png">

```
악보 판매 등록부터 연주 영상 공유까지!
악보 거래 플랫폼, 악보의 정원
```

<b>악보의 정원</b>은 프론트엔드 개발자 3명이 함께하는 팀 프로젝트입니다.
<br>
TypeScript와 React를 기반으로 하고, DB와 백엔드는 Firebase를 사용하였습니다.
<br>
또한 Atomic Design Pattern을 활용하여 컴포넌트 기반의 개발을 위해 노력하였습니다.🤔
<br><br><br>

🏠 <a href='http://gardenmusicdev.s3-website.ap-northeast-2.amazonaws.com/'><b>배포 페이지 바로가기 →</b></a>
<br><br>
🎨 <a href='https://www.figma.com/file/TXlyRfgbgeJIvvuyNKCa8e/%EC%95%85%EB%B3%B4%EC%9D%98-%EC%A0%95%EC%9B%90?node-id=0%3A1&t=0UDShpJynGiBpiqK-1'>Figma 바로가기 →</a>
<br><br>

## 🛠 Stacks
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff"/> <img src="https://img.shields.io/badge/React-222222?style=flat-square&logo=React&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=fff"/>  <img src="https://img.shields.io/badge/Scss-CC6699?style=flat-square&logo=sass&logoColor=fff"/> <img src="https://img.shields.io/badge/StoryBook-FF4785?style=flat-square&logo=storybook&logoColor=fff"/> <img src="https://img.shields.io/badge/Firebase-051e34?style=flat-square&logo=Firebase&logoColor=FFCA28"/> <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=flat-square&logo=GitHub Actions&logoColor=fff"/> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=Amazon S3&logoColor=fff"/>

<br>

## 🔍 악보 공유 / 판매 서비스 소개
```
자신이 만든 악보를 자유롭게 공유 혹은 판매할 수 있는 서비스입니다.
```
|메인페이지|메인페이지 무한스크롤|
|:--:|:--:|
|<img width="1390px" alt="메인페이지" src="https://user-images.githubusercontent.com/107888594/223385168-3ed6ee09-f07e-4f2d-b8d8-638db7f9410e.png">|<img alt="메인페이지 무한스크롤" src="https://user-images.githubusercontent.com/107888594/223405569-ab2378d8-4948-4307-8f38-c747d6e956e2.gif">|
1. 그리드 형식의 메인페이지에서 등록된 악보들을 곡 별로 한 눈에 볼 수 있습니다.
> - 곡 당 최대 3개의 악보리스트가 표시되고, 곡 옆의 더보기 버튼을 눌러 곡 상세페이지로 이동 후, 해당 곡으로 등록된 모든 악보들 조회할 수 있습니다.
<br>

|악기페이지|악기 상세페이지|
|:--:|:--:|
|<img alt="image" src="https://user-images.githubusercontent.com/107888594/223396637-6f2e7d6b-4f87-4f74-ba2f-80ae16a6996f.png">|<img alt="악기상세페이지" src="https://user-images.githubusercontent.com/107888594/223394787-8325fb12-92ac-4d7a-b650-1a2bbd1472d5.png">|
2. 헤더의 악기 탭을 통해 악기페이지에 접근하여 내가 원하는 악기로 등록된 모든 악보를 볼 수 있습니다.
<br>

|악보 상세페이지|장바구니|
|:--:|:--:|
|<img width="1420px" alt="악보상세페이지" src="https://user-images.githubusercontent.com/107888594/223395393-109a1fe2-de23-46fa-a536-f07e01b87abe.png">|![장바구니](https://user-images.githubusercontent.com/107888594/223409359-fd9226a7-b1d4-4fd4-8f9a-689a1ad5efc3.gif)|
3. 원하는 악보 게시글을 클릭하여 악보 상세페이지에 접근하고, 악보가 마음에 들면 장바구니에 담을 수 있습니다.
> - 악보 상세페이지에서 작성자가 설정한 악보의 가격과 제목, 상세 정보, Youtube영상을 확인할 수 있습니다.
> - 자신의 게시글이라면 수정과 삭제가 가능합니다.
> - 장바구니는 파이어베이스의 해당 회원 DB와 연동되어 있기 때문에, 로그아웃을 하더라도 유지됩니다.
> - 헤더의 장바구니 버튼을 눌러 장바구니 모달을 열면 내가 담은 악보와 총 가격을 확인할 수 있습니다.
> - 언제든지 원하는 악보를 추가하고 뺄 수 있습니다.
> - 장바구니의 결제버튼을 클릭하게 되면, 사용자의 캐시 잔액에서 해당 장바구니에 담긴 악보 총 가격이 차감되어 빠져나갑니다.
<br>

|곡 상세페이지|마이페이지|
|:--:|:--:|
|![곡상세페이지](https://user-images.githubusercontent.com/107888594/223411471-4b70f116-f6d6-4e1c-9f53-71283d8a50b0.gif)|<img width="1420px" alt="마이페이지" src="https://user-images.githubusercontent.com/107888594/223393665-abdf43a0-0ed8-4141-a080-bddbc0c7ae1f.png">|
4. 곡 상세페이지의 악기 탭을 통해 내가 원하는 곡의 원하는 악기로 등록된 모든 악보를 쉽게 조회할 수 있습니다.
<br>

|닉네임 수정|프로필사진 수정|
|:--:|:--:|
|![닉네임수정](https://user-images.githubusercontent.com/107888594/223418670-9149fd64-d7a3-4b7c-ae27-094d848fe322.gif)|![프로필사진수정](https://user-images.githubusercontent.com/107888594/223418761-25c760b1-3adc-46ef-8be2-76ae6bad95e3.gif)|
5. 마이페이지를 통해 내정보와 악보들을 쉽게 확인할 수 있습니다.
> - 마이페이지의 등록한악보, 구매한 악보 탭을 통해 내가 등록한 악보와 구입한 악보를 확인할 수 있습니다.
> - 등록한 악보의 경우, 수정하기 버튼을 통해 해당 게시글을 수정할 수 있습니다.
> - 구입한 악보의 경우, 다운로드 버튼을 통해 해당 악보를 다운로드 받을 수 있습니다.
> - 닉네임과 프로필 사진을 바로 수정할 수 있습니다.
> - 회원탈퇴가 가능합니다.
<br>

|악보 등록페이지|악보 수정페이지|
|:--:|:--:|
|<img alt="등록페이지" src="https://user-images.githubusercontent.com/107888594/223397784-8076e0af-77e6-4298-bef9-089b9d72019c.png">|<img alt="수정페이지" src="https://user-images.githubusercontent.com/107888594/223398422-8de33cf7-2f11-40a1-b86a-feff79424d1c.png">|

|곡 저작권 정보 검색|악보 파일 업로드|
|:--:|:--:|
|![저작권정보검색](https://user-images.githubusercontent.com/107888594/223420376-a16c72ce-8318-4815-a6c5-9e261bd72bc0.gif)|![악보업로드](https://user-images.githubusercontent.com/107888594/223420323-5fb4cf4b-3257-42aa-bee6-1b4e4e9fefc8.gif)|
6. 악보등록페이지를 통해 내가 등록하고 싶은 악보를 쉽게 등록할 수 있습니다.
> - 악기종류, 난이도, 악보종류를 선택할 수 있습니다.
> - Spotify api를 활용한 저작권 검색을 통해 내가 등록하고 싶은 악보의 곡을 빠르고 정확하게 찾아낼 수 있습니다.
> - 내가 만든 악보pdf파일을 같이 업로드할 수 있습니다.
> - 연주에 참고될 Youtube링크를 첨부하면 게시글에 Youtube영상이 같이 업로드 됩니다.
<br>

|로그인 페이지|구글 OAuth 로그인|
|:--:|:--:|
|![로그인](https://user-images.githubusercontent.com/107888594/223425426-6bbeea35-5744-4f11-8664-dd10dcdfa3d7.gif)|![구글로그인](https://user-images.githubusercontent.com/107888594/223425376-6d35cd6f-a9f9-4960-afc0-ac21467c017e.gif)|


|회원가입 페이지|로그아웃|
|:--:|:--:|
|![회원가입](https://user-images.githubusercontent.com/107888594/223425476-892f2e10-86d9-44d2-9916-432b72b89d6d.gif)|![로그아웃](https://user-images.githubusercontent.com/107888594/223421942-206bde51-c733-4a08-b599-772e440afda9.gif)|
7. 로그인 회원가입 로그아웃 기능
> - 기본적인 로그인 회원가입 로그아웃 기능을 모두 지원합니다.
> - 악보 조회의 경우, 로그인을 하지않더라도 가능하지만, 장바구니기능, 마이페이지기능, 악보등록기능을 이용하기 위해 로그인이 필요합니다.
> - google Oauth를 통해 구글 아이디로 쉽게 회원가입과 로그인이 가능합니다.
<br>

8. 모바일 반응형 구현
> - 모바일에서도 사용할 수 있도록 각 페이지에 모바일 반응형 css 구현하였습니다.

<br>

## 🧭 유저 플로우
<details>
<summary>Figjam 확인하기</summary>
  <img width="1200" alt="image" src="https://user-images.githubusercontent.com/76644123/223922572-36274078-d4c5-4c6c-8059-1e4c75c8d424.jpeg">
</details>

<br>

## 👩‍💻 Firestore DB

1. Firebase authentication 을 사용하여 유저가 입력한 이메일과 비밀번호 또는 Google 계정으로 계정을 만들 수 있습니다.
2. 회원가입을 완료하면 Firestore user 컬렉션 필드의 해당 유저의 UID를 key값으로 하는 document가 생성이되고 초기값인 'cash' , 'isActive' , 'cartItems' 필드가 생성됩니다. 
<details>
<summary><h4>User collection</h4></summary>
<img width="800" alt="스크린샷 2023-03-08 오후 5 54 32" src="https://user-images.githubusercontent.com/76644123/223924623-810faf3c-95df-40b1-8fd6-4fd8a713580f.png">
</details>

3. 로그인을 한 유저는 악보를 업로드 할 수 있습니다. "곡 제목 - 가수" 를 키 값으로 music 컬렉션에 document가 생성되고, 입력받은 인풋들로 이루어진 필드가 생성됩니다. 마찬가지로 instrument 컬렉션에 해당 악보의 악기에 맞춰서 'Drum' , 'Bass' , 'Guitar' , 'Piano' , 'Electric' document의 scores 배열 필드로 들어갑니다.
> - 게시글에 .pdf파일을 첨부할 때 해당 파일을 Firebase Storage에 저장하고 다운로드 url을 악보가 저장되는 시점에 'downloadURL' 이라는 필드의 값으로 넘겨줍니다.
> - 게시글 CRUD는 해당 게시글의 id를 바탕으로 전부 3개의 컬렉션을 순회하여 데이터를 컨트롤합니다.
<details>
<summary><h4>Music collection</h4></summary>
<img width="800" alt="스크린샷 2023-03-09 오후 2 09 25" src="https://user-images.githubusercontent.com/76644123/223926223-addf16cc-9663-4ccd-97ff-8c541a1003c8.png">
</details>

4. 유저가 장바구니에 악보를 추가하거나 결제를 할 경우, 마이페이지에서 해당 업데이트 내용을 받기위해 user 컬렉션의 cartItems 필드 또는 purchasedScores 필드가 업데이트 됩니다.
5. 회원 탈퇴시 유저가 업로드한 모든 작성글의 isOptout 값이 true가 되어 사이트내에서 확인이 불가능하게 만들어 줬습니다. 이미 구매한 유저들을 위해서 구매한 내역에는 그대로 남아있어 여전히 악보파일을 다운로드 받을 수 있습니다.
<details>
<summary><h4>OptOut</h4></summary>
<img width="600" alt="스크린샷 2023-03-09 오후 2 09 25" src="https://user-images.githubusercontent.com/76644123/223929358-8df00685-763c-499e-8a14-4b95c1333b82.gif">
</details>

6. 회원 탈퇴시 해당 authentication 정보를 완전히 삭제하지 않고 그 유저가 다시 로그인을 한다면 탈퇴한 회원임을 알려줍니다.
<details>
<summary><h4>회원 탈퇴</h4></summary>
<img width="600" alt="스크린샷 2023-03-09 오후 2 09 25" src="https://user-images.githubusercontent.com/76644123/223928656-4de3bf7c-4157-4af0-bde9-0dd1bde8d164.gif">
</details>


<br>

## 🚀 프로젝트 실행 방법
레포지토리를 클론 한 후, client 디렉토리에서
```jsx
npm install
npm start
```
📍 단, spotify api를 이용해야하기 때문에 게시글 작성에서 저작권 검색기능은 배포 주소에서만 확인할 수 있습니다.

<br>

## 💎 CI / CD 파이프라인

1. 각 브랜치에서 원격 레포지토리로 push가 이루어질 때마다 github action을 통해 자동으로 chromatic에 스토리북 파일 배포
> - 팀원이 PR을 승인하기 전에 chromatic으로 해당 PR의 스토리북을 바로 열람하고 확인 가능합니다.

2. dev와 main 브랜치에 push가 이루어지면 github action을 통해 자동으로 aws S3에 배포
> - 먼저 dev브랜치에서 분기한 각 팀원의 브랜치가 PR승인을 받고 머지되면 자동으로 배포가 되고, 사전에 설정한 dev도메인을 통해 배포결과를 확인할 수 있습니다.
> - push 시, 로컬에 저장된 환경변수의 경우 예외처리되어 원격 레포지토리에는 들어가지 않으며, 환경변수가 반드시 필요한 경우에는 github secret을 통해 저장하고, github action이 저장된 secret을 참조하여 배포하도록 하였습니다.
> - dev도메인에서 문제가 발생하지 않는다면 dev브랜치를 main브랜치로 머지하여, 설정한 메인 도메인에 자동으로 최종 배포가 되도록 하였습니다.

