<h1 align="center">
  Chatting-Viewer
</h1>

<br/>
<br/>

## Index

1. [배포 주소](#배포-주소)
2. [기술 스택](#기술-스택)
3. [구동 장면](#구동-장면)
4. [구현 사항](#src-파일-구조)
5. [데이터 구조](#데이터 구조)
6. [사전 설치](#사전-설치)
7. [작업 방법](#작업-방법)

<br/>
<br/>

## 배포 주소

https://630ccc2c6be8834be660603f--glittering-sorbet-6d6c6a.netlify.app/friends

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

## 구동 장면

<img style="width:500px" src="https://user-images.githubusercontent.com/93248242/187351552-db5ab4e5-4e8d-4d2f-a935-753c0c607f58.gif" alt="chatting-viewer">

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

<br/>
<br/>

## src 파일 구조

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

## 사전 설치

Install dependencies

```sh
$ npm install
```

## 작업 방법

```sh
$ npm start
# Visit http://localhost:3000 from your browser (Chrome)
```
