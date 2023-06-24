import { aldsConfig } from "config";
import { getDateString } from "helper";

// 抓取所有演算法資料
let all_alds = [];
for (const config of Object.values(aldsConfig)) {
  all_alds.push({
    image: config.image,
    route: config.url,
  });
}

// 抓取feedback資料
let feedbacks = [
  {
    name: "黃婷琪",
    date: getDateString("2023-06-23 22:28:00"),
    review:
      "非常滿意這個平台！清晰易懂的教學內容和個人化學習路徑讓我輕鬆掌握演算法知識。強烈推薦！",
    rating: 5,
  },
  {
    name: "鄭琮寶",
    date: getDateString("2023-06-23"),
    review:
      "這個平台提供了清晰易懂的教學內容，幫助我順利掌握演算法和資料結構的知識。我尤其喜歡他們提供的學習路徑，讓我能夠按照合理的步調進行學習，逐漸踏入軟體工程師的世界。無論是新手還是有一定基礎的學習者，這個平台都能夠滿足他們的需求。我也很喜歡他們不限次數觀看影片和課程的訂閱方式，讓我可以根據自己的進度自由學習。總體而言，這個平台給我帶來了很大的幫助，我強烈推薦給所有想學習演算法和資料結構的人。",
    rating: 5,
  },
  {
    name: "NiNi",
    date: getDateString("2023-06-10"),
    review:
      "這個平台真是太棒了！他們的教學內容深入淺出，幫助我從零基礎起步，掌握了演算法和資料結構的核心概念。訂閱一年更是物超所值，我強烈推薦給所有想學習的人！",
    rating: 5,
  },
  {
    name: "NiNi1",
    date: getDateString("2023-06-10"),
    review:
      "這個平台真是太棒了！他們的教學內容深入淺出，幫助我從零基礎起步，掌握了演算法和資料結構的核心概念。訂閱一年更是物超所值，我強烈推薦給所有想學習的人！",
    rating: 5,
  },
  {
    name: "NiNi2",
    date: getDateString("2023-06-10"),
    review:
      "這個平台真是太棒了！他們的教學內容深入淺出，幫助我從零基礎起步，掌握了演算法和資料結構的核心概念。訂閱一年更是物超所值，我強烈推薦給所有想學習的人！",
    rating: 5,
  },
  {
    name: "NiNi3",
    date: getDateString("2023-06-10"),
    review:
      "這個平台真是太棒了！他們的教學內容深入淺出，幫助我從零基礎起步，掌握了演算法和資料結構的核心概念。訂閱一年更是物超所值，我強烈推薦給所有想學習的人！",
    rating: 5,
  },
];

export { all_alds, feedbacks };
