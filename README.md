<h1 align="center">
  Chatting-Viewer
</h1>

<br/>
<br/>

<p align="center">
  <img style="width:230px"
 src="https://user-images.githubusercontent.com/93248242/187590323-d632e581-e81f-428c-a696-4dd30ee571ee.png" alt="Usepool-Logo">
</p>

<h4 align="center">
  React, Redux, Firebase를 이용한 채팅 웹 어플리케이션
</h4>

<img style="width:500px" src="https://user-images.githubusercontent.com/93248242/187362589-83fa7aee-c2cf-46f7-b15a-3abd4200bdde.mp4" alt="chatting-viewer">

<br/>
<br/>

## Index

1. [기술 스택](#기술-스택)
2. [구현 사항](#구현-사항)
3. [미구현 사항](#미구현-사항)
4. [UI 예시](#UI-예시)
5. [디렉토리 구조](#디렉토리-구조)
6. [데이터 구조](#데이터-구조)
7. [Demo](#Demo)
8. [사전 설치](#사전-설치)
9. [작업 방법](#작업-방법)

<br/>
<br/>

## 기술 스택

Base  
`React`

Style  
`Styled-component`

Real-time Chat  
`Firebase`

Version Management  
`Git`

<br/>
<br/>


## 구현 사항

친구 목록 페이지 - /friends
- 채팅 목록으로 이동할 수 있는 버튼
- 친구 이름, 사진과 함께 채팅을 시작할 수 있는 버튼
- 대화하기 버튼 클릭해 해당 친구와의 채팅 페이지로 바로 이동
- 친구 목록의 이름 오름차순 또는 내림차순 나열
- 친구 이름을 기준으로 검색할 수 있는 기능

채팅 목록 페이지 - /rooms
- 친구 목록으로 이동할 수 있는 버튼
- 진행 중인 채팅이 날짜순으로 나열(최신 날짜 상위)
- 진행 중인 채팅의 친구 이름, 가장 최신 메시지의 첫 30글자, 가장 최신 메시지 전송 날짜 및 시간 표기
- 채팅을 선택하면 채팅 페이지로 이동

채팅 페이지
- 상대방과 나눈 대화가 시간 순(최근 메시지가 하위)으로 나열
- 상대방 이름, 메시지 내용, 전송 날짜 및 시간 표기
- 메시지를 전송할 경우, 현재 채팅 페이지와 채팅 목록 페이지에 새로운 메시지 반영

Firebase
- 채팅 페이지에서 새 메시지 전송시메시지 정보 저장
- 현재 채팅하고 있는 친구의 id 정보 저장

<br/>
<br/>

## 미구현 사항

Firebase
- firebase database로부터 initial state 받아와 redux state에 저장, 친구 목록, 채팅 목록 컴포넌트에서 해당 정보로 렌더링

<br/>
<br/>

## UI 예시

- 채팅 목록 페이지

<img width="300" alt="KakaoTalk_Image_2022-08-31-09-47-26" src="https://user-images.githubusercontent.com/93248242/187570148-d6d19605-0ea0-4415-be98-6326b3165b56.png">

- 친구 목록 페이지

<img width="300" alt="KakaoTalk_Image_2022-08-31-09-53-23" src="https://user-images.githubusercontent.com/93248242/187570285-86aac941-1dfd-437e-a949-315263d4cffa.png">

- 채팅 페이지

<img width="300" alt="KakaoTalk_Image_2022-08-31-09-58-41" src="https://user-images.githubusercontent.com/93248242/187570333-1e846211-62dd-4231-b1c7-f7a6936a706d.png">


<br/>
<br/>

## 디렉토리 구조

```bash
├── src
     ├── app
     ├── assets
     ├── components
     │        ├── Comment
     │        ├── Friends
     │        ├── Rooms
     │        ├── Header
     │        └── Modal
     ├── features
     ├── constants
     ├── utils
     └── spec
           ├── actions
           ├── reducers
           ├── components
           └── utils
```
<br/>
<br/>


## 데이터 구조


```bash
├── friends
│   ├── byId
│   └── allIds
├── comments
│   ├── byId
│   └── allIds  
└── selectedRoomId
```
<br/>
<br/>

## Demo

https://glittering-sorbet-6d6c6a.netlify.app/friends

<br/>
<br/>

## 사전 설치

Install dependencies

```sh
$ npm install
```

## 작업 방법

```sh
# Install the firebase SDK and replace the firebase configuration information with environment variables
# Visit http://firebase.google.com/firebase/console
```

```sh
$ npm start
# Visit http://localhost:3000 from your browser (Chrome)
```
