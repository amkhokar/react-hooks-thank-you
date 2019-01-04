import React from "react";
import Gallery from "react-grid-gallery";
import MessageList from "./MessageList";
// import useEndpoint from "./useEndpoint";
const App = () => {
  // const flickrAPI =
  //   "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=3dcc9dcf380814e55e74ee6e221a37d4&user_id=147777523%40N06&format=json&nojsoncallback=1&auth_token=72157705278399505-7a1bc52934a09d79&api_sig=e38850566dd589b30376975f29d8332b";

  const allImageObjects = [
    {
      id: "45665015165",
      owner: "147777523@N06",
      secret: "834114b2ce",
      server: "4819",
      farm: 5,
      title: "group4",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "45665015995",
      owner: "147777523@N06",
      secret: "78b9304534",
      server: "4883",
      farm: 5,
      title: "melAgain",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "45665016595",
      owner: "147777523@N06",
      secret: "a62990570d",
      server: "4823",
      farm: 5,
      title: "group5",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "45665016785",
      owner: "147777523@N06",
      secret: "096c1a0503",
      server: "7869",
      farm: 8,
      title: "group7",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "45665016825",
      owner: "147777523@N06",
      secret: "f257e7a5de",
      server: "7902",
      farm: 8,
      title: "brianGoofy",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "44761354810",
      owner: "147777523@N06",
      secret: "e773520d42",
      server: "7828",
      farm: 8,
      title: "panatda1",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "45665017475",
      owner: "147777523@N06",
      secret: "db5d2b5a43",
      server: "4807",
      farm: 5,
      title: "hilarious",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "44761355280",
      owner: "147777523@N06",
      secret: "b06819268b",
      server: "7840",
      farm: 8,
      title: "funnyGif",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "45665018775",
      owner: "147777523@N06",
      secret: "6e68eb002f",
      server: "7867",
      farm: 8,
      title: "group6",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "44761355420",
      owner: "147777523@N06",
      secret: "f86f4e58fd",
      server: "7884",
      farm: 8,
      title: "group2",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "45665018885",
      owner: "147777523@N06",
      secret: "cce954b6b0",
      server: "4897",
      farm: 5,
      title: "group3",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "44761355960",
      owner: "147777523@N06",
      secret: "599fe75377",
      server: "7805",
      farm: 8,
      title: "funnyWriting",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "44761355970",
      owner: "147777523@N06",
      secret: "3321c72224",
      server: "4807",
      farm: 5,
      title: "group1",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "44761356050",
      owner: "147777523@N06",
      secret: "f65b6c79ce",
      server: "4916",
      farm: 5,
      title: "ajMark",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "44761356290",
      owner: "147777523@N06",
      secret: "6d4ffd3409",
      server: "7812",
      farm: 8,
      title: "davidSleeping",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638310737",
      owner: "147777523@N06",
      secret: "516d9949ab",
      server: "4905",
      farm: 5,
      title: "chris2",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "44761356720",
      owner: "147777523@N06",
      secret: "80fd4987d0",
      server: "7861",
      farm: 8,
      title: "regina",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638310837",
      owner: "147777523@N06",
      secret: "218d367ef2",
      server: "7921",
      farm: 8,
      title: "ericGoofy",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638311187",
      owner: "147777523@N06",
      secret: "d4362bc073",
      server: "7890",
      farm: 8,
      title: "melEatSleep",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638311377",
      owner: "147777523@N06",
      secret: "cf079d283f",
      server: "7848",
      farm: 8,
      title: "melSleeping2",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638311517",
      owner: "147777523@N06",
      secret: "6ed84106a8",
      server: "7814",
      farm: 8,
      title: "group10",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638311677",
      owner: "147777523@N06",
      secret: "8530ef3a02",
      server: "7833",
      farm: 8,
      title: "moreDavidSleeping",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579333561",
      owner: "147777523@N06",
      secret: "7cd57c35a5",
      server: "4822",
      farm: 5,
      title: "cuteDog",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579334131",
      owner: "147777523@N06",
      secret: "a287523d5d",
      server: "4809",
      farm: 5,
      title: "juliusSleeping",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579334391",
      owner: "147777523@N06",
      secret: "9785c442b0",
      server: "4819",
      farm: 5,
      title: "julius2",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579334751",
      owner: "147777523@N06",
      secret: "fa37dd163d",
      server: "7907",
      farm: 8,
      title: "ajSleeping",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579335711",
      owner: "147777523@N06",
      secret: "21f091544f",
      server: "7828",
      farm: 8,
      title: "outOfOrder",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579337071",
      owner: "147777523@N06",
      secret: "78828f7235",
      server: "4851",
      farm: 5,
      title: "kenneth",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579337571",
      owner: "147777523@N06",
      secret: "3b75a79d07",
      server: "7852",
      farm: 8,
      title: "intense",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638312877",
      owner: "147777523@N06",
      secret: "2ef2e2b4d1",
      server: "4808",
      farm: 5,
      title: "funny1",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579339771",
      owner: "147777523@N06",
      secret: "2c48174a82",
      server: "7885",
      farm: 8,
      title: "early",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638313167",
      owner: "147777523@N06",
      secret: "d74345f148",
      server: "4808",
      farm: 5,
      title: "double2",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638313327",
      owner: "147777523@N06",
      secret: "11ffbf606c",
      server: "7828",
      farm: 8,
      title: "dinosaur",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638313397",
      owner: "147777523@N06",
      secret: "64ab3f4d98",
      server: "7903",
      farm: 8,
      title: "skyeMaria",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579340971",
      owner: "147777523@N06",
      secret: "4ed250d268",
      server: "4859",
      farm: 5,
      title: "four",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579341271",
      owner: "147777523@N06",
      secret: "ea05593aeb",
      server: "4843",
      farm: 5,
      title: "happyCouple",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579343011",
      owner: "147777523@N06",
      secret: "56cc2c9381",
      server: "4905",
      farm: 5,
      title: "cathy",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579343681",
      owner: "147777523@N06",
      secret: "fc260a00fa",
      server: "7860",
      farm: 8,
      title: "melCmon",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579343931",
      owner: "147777523@N06",
      secret: "dc2c298269",
      server: "7920",
      farm: 8,
      title: "double1",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "46579344721",
      owner: "147777523@N06",
      secret: "d97230fa25",
      server: "4860",
      farm: 5,
      title: "kennethGoofy",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638315057",
      owner: "147777523@N06",
      secret: "d0d818d879",
      server: "4828",
      farm: 5,
      title: "draw",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638315177",
      owner: "147777523@N06",
      secret: "ca6162f1f9",
      server: "4905",
      farm: 5,
      title: "goofyCouple",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638315627",
      owner: "147777523@N06",
      secret: "801c7a4742",
      server: "4894",
      farm: 5,
      title: "interesante",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638316137",
      owner: "147777523@N06",
      secret: "d3ff6b74b7",
      server: "7899",
      farm: 8,
      title: "udon1",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638316997",
      owner: "147777523@N06",
      secret: "85e0b6767f",
      server: "7862",
      farm: 8,
      title: "standUp",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638317517",
      owner: "147777523@N06",
      secret: "3f4798fe2f",
      server: "4896",
      farm: 5,
      title: "hackathon",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638317847",
      owner: "147777523@N06",
      secret: "8b32ec768c",
      server: "7850",
      farm: 8,
      title: "chris",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638317997",
      owner: "147777523@N06",
      secret: "8ab24bfc1d",
      server: "7821",
      farm: 8,
      title: "julius",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638318187",
      owner: "147777523@N06",
      secret: "1f873d4999",
      server: "7898",
      farm: 8,
      title: "melSleep",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638318837",
      owner: "147777523@N06",
      secret: "c415b44579",
      server: "4841",
      farm: 5,
      title: "ryanGoofy",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638320047",
      owner: "147777523@N06",
      secret: "57b5ec3cf1",
      server: "4899",
      farm: 5,
      title: "three",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638320647",
      owner: "147777523@N06",
      secret: "7a876a49bf",
      server: "7926",
      farm: 8,
      title: "john",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638321347",
      owner: "147777523@N06",
      secret: "6fc5400b9a",
      server: "4902",
      farm: 5,
      title: "cuteDogs2",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638322267",
      owner: "147777523@N06",
      secret: "2c8a643899",
      server: "7878",
      farm: 8,
      title: "panatdaSword",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638323127",
      owner: "147777523@N06",
      secret: "c2dfb29530",
      server: "4829",
      farm: 5,
      title: "chan",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638323957",
      owner: "147777523@N06",
      secret: "c9a6637b75",
      server: "4805",
      farm: 5,
      title: "moreMelSleep",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638324217",
      owner: "147777523@N06",
      secret: "e708091a36",
      server: "7902",
      farm: 8,
      title: "group8",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "31638324307",
      owner: "147777523@N06",
      secret: "18b7426603",
      server: "7813",
      farm: 8,
      title: "group9",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    },
    {
      id: "32829656136",
      owner: "147777523@N06",
      secret: "581eb5d155",
      server: "3802",
      farm: 4,
      title: "Choices",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    }
  ];
  const finalImages = allImageObjects.map(e => ({
    src: `https://farm${e.farm}.staticflickr.com/${e.server}/${e.id}_${
      e.secret
    }.jpg`,
    thumbnail: `https://farm${e.farm}.staticflickr.com/${e.server}/${e.id}_${
      e.secret
    }.jpg`,
    thumbnailWidth: 0,
    thumbnailHeight: 0,
    caption: e.title.split("")[0].toUpperCase() + e.title.slice(1).toLowerCase()
  }));
  return (
    <div>
      <svg
        id="ernest"
        width="271"
        height="102"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M-1-1h273v104H-1z" />
        <g>
          <text
            strokeDasharray="5,2,2,2,2,2"
            fontFamily="'Shadows Into Light', serif"
            fontSize="84"
            y="78"
            x="2.5"
            strokeWidth="10"
            stroke="#00b3b4"
            fill="#fff"
            cursor="move"
          >
            Ernest
          </text>
        </g>
      </svg>
      <svg
        id="panatda"
        width="271"
        height="102"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M-1-1h273v104H-1z" />
        <g>
          <text
            strokeDasharray="2,2"
            fontFamily="'Shadows Into Light', serif"
            fontSize="84"
            y="78"
            x="2.5"
            strokeWidth="12"
            stroke="#fff"
            fill="#00b3b4"
          >
            Panatda
          </text>
        </g>
      </svg>
      <h1>Thank You!!!!</h1>
      <h3>You make a difference.</h3>
      <hr />
      <hr />
      <div>
        <MessageList />
        <hr />
        <hr />
      </div>
      <h1>Epicodus Gallery (click em!)</h1>
      <Gallery
        images={finalImages}
        backdropClosesModal={true}
        enableKeyBoardInput={true}
      />
    </div>
  );
};

export default App;
