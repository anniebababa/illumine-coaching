"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const I = (name: string) => `/images/${name}`;

const products = [
  {
    id: "spark",
    name: "Lumina Spark",
    tag: "發展工具：人格特質風格",
    desc: "透視每個人「24 個特質」、「8 個維度」、「4個顏色能量」在「潛在」、「日常」、「壓力下」情境的展現動態、慣性以及個人發展的優勢、機會、盲點、風險，並提供具體可行的溝通、領導力個人化發展行動指南及系統化、數位化學習發展工具，有效提升自我覺察及適性學習發展成效！",
    img: I("ll-spark.png"),
    imgW: 846, imgH: 444,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "rgb(241, 131, 38)",
  },
  {
    id: "team",
    name: "Lumina Team",
    tag: "發展工具：團隊行為",
    desc: "透視「團隊」與「個人」在「潛在」、「日常」、「壓力下」情境 8 個維度及 4 個顏色能量展現的變化，可應用於文化形塑、人才盤點暨策略佈局、主管情境領導/適性領導力發展、團隊建構與促進溝通對話及共識凝聚，是組織、團隊與個人發展最佳策略幫手！",
    img: I("ll-team.png"),
    imgW: 846, imgH: 444,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "rgb(8, 177, 169)",
  },
  {
    id: "leader",
    name: "Lumina Leader",
    tag: "發展工具：領導力",
    desc: "幫助領導人全面透視及覺察他們在「願景領導」、「驅動領導」、「務實領導」和「賦能領導」 4 個面向中所展現出 16 個領導力特質及個人領導風格，看見其「有效」及「壓力下」領導力展現的慣性模式可能帶來的優勢以及風險，並提供個人領導力發展指南。",
    img: I("ll-leader.png"),
    imgW: 846, imgH: 444,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "rgb(39, 164, 221)",
  },
  {
    id: "sales",
    name: "Lumina Sales",
    tag: "發展工具：銷售力",
    desc: "協助專業銷售人員以及銷售團隊的領導者提升銷售業務管理的 6 個階段循環對應 24 個銷售特質能力，透視其在「有效」及「壓力下」情境的慣性模式可能帶來的優勢以及風險，並提供個人銷售力發展指南。",
    img: I("ll-sales.png"),
    imgW: 834, imgH: 444,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "rgb(210, 27, 35)",
  },
  {
    id: "emotion",
    name: "Lumina Emotion",
    tag: "發展工具：情商力",
    desc: "透過 16 個情緒特質，交叉潛在、日常、壓力下情境，深度探索個人情緒、感覺、行為模式之間的關聯性，並提供個人化發展行動指南，從「覺察自我」、「覺察他人」、「情緒與行為掌控」到「採取有效行動」，協助你一步一步提升情商力！",
    img: I("ll-emotion.png"),
    imgW: 928, imgH: 444,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "rgb(165, 88, 164)",
  },
  {
    id: "select",
    name: "Lumina Select",
    tag: "招募工具：職能與潛能",
    desc: "創新、客製化的招募測評工具，衡量 16 個關鍵職能，連結 Lumina Spark 24 個特質交叉分析，呈現候選人的溝通風格、優勢及個人待發展建議，並提供受測者訪談問題建議，為面試的 HR 與主管提供簡單、易用、有效的招募指南！",
    img: I("ll-select.png"),
    imgW: 926, imgH: 514,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "rgb(19, 94, 159)",
  },
];

const targets = [
  {
    title: "部門主管、單位領導人",
    desc: "提升識才、用才、育才、留才及與跨世代、跨專業的多元特質組合團隊適性溝通、適性領導的能力，建立自主、當責的高績效團隊。",
    img: "https://framerusercontent.com/images/q4pOJoYythmvEif9MBnPeL0XI.png",
  },
  {
    title: "HR / HRBP 專業人員",
    desc: "提升選才、培訓、人力資源策略佈局與發展能力，促進組織團隊與個人適性學習與發展及溝通、協作效能。",
    img: "https://framerusercontent.com/images/VxTMdvlzYP92gB9dfNIkinWtzHU.png",
  },
  {
    title: "專案與跨部門團隊",
    desc: "促進團隊多元融合，減少衝突卡關，建立團隊信任，凝聚行爲共識。",
    img: "https://framerusercontent.com/images/uYkYYnqyGOgLjVFU1mcEb6d8seg.png",
  },
  {
    title: "Sales 業務主管與團隊",
    desc: "更懂客戶與夥伴行為、提升成交率；建立信任與有效對話的能力，激勵團隊士氣與提升業績。",
    img: "https://framerusercontent.com/images/1mzcbEDBHH7IqwHS1pxDvwYq0Q.png",
  },
  {
    title: "創辦人、總經理、CXO",
    desc: "建立高效的領導團隊與文化，用科學數據支持決策；發展接班梯隊，實現長期策略目標",
    img: "https://framerusercontent.com/images/jh2CgbWCp8fZ6MR7JOvoc6Waqfw.png",
  },
];

const certBenefits = [
  "原廠直購產品優惠",
  "雲端⾃主管理系統",
  "繁體中⽂多國語⾔",
  "實體學習輔助⼯具",
  "Lumina Spark 測評暨發展應⽤",
  "Lumina Splash App 特質速讀器",
  "Lumina Team 團隊發展應⽤⼯具",
  "Spark Coach/ JTC 線上教練系統",
];

const certBonus = [
  { line1: "Spark coach / JTC", line2: "線上教練系統", img: "https://framerusercontent.com/images/gDU1egyyXgtXw1nbefDy1zFMw.png", fit: "cover" as const, pos: "right center" },
  { line1: "Lumina Team", line2: "團隊動態模擬器", img: "https://framerusercontent.com/images/j4LlZ2KroaL0Jd84UmECodLxnM.png", fit: "cover" as const, pos: "center" },
  { line1: "Lumina Learning HQ", line2: "全球學習資源", img: "https://framerusercontent.com/images/PLCHGpz6eN0ts0m0Fa9qVse5o2E.png", fit: "contain" as const, pos: "center" },
  { line1: "Premium", line2: "帳戶一年", img: "https://framerusercontent.com/images/0F4OVsSmeKLYUCfCcgly4aCZ2SY.png", fit: "contain" as const, pos: "center" },
  { line1: "專業版 APP 使用", line2: "", img: "https://framerusercontent.com/images/lrtPwd9lIPU8xAENetoZYuNZX0.png", fit: "cover" as const, pos: "center" },
  { line1: "Start Up 315 點", line2: "", img: "https://framerusercontent.com/images/YIgIO590P6TMXmCVuYHJv8DJy1U.png", fit: "contain" as const, pos: "center" },
  { line1: "原廠直購優惠", line2: "", img: "https://framerusercontent.com/images/NSH2um5HBjMsbuYI97pt4ImkcM.png", fit: "cover" as const, pos: "center" },
  { line1: "自主雲端管理系統", line2: "", img: "https://framerusercontent.com/images/ei5kgG5ZJBWlKYTaUaEsXnY1k0.png", fit: "cover" as const, pos: "center" },
  { line1: "Lumina Learning", line2: "線上學習活動", img: "https://framerusercontent.com/images/UOzMhCv1GoqV7m7ZRFx3TsAw8wI.png", fit: "cover" as const, pos: "center" },
];

const faqs = [
  {
    q: "Lumina Spark 跟其他性格測驗有什麼不同？",
    a: "Lumina Spark 結合了心理學的大五人格理論與四色能量模型，強調「特質（Trait）」而非「類型（Type）」，避免將人貼上固定標籤。它獨特之處在於能同時測量個體三種人格狀態——自然傾向、日常表現與壓力下行為，幫助你看到自己在不同情境下的轉變。相較於 MBTI、DISC 等工具，Lumina 提供更多層次的資訊，也能展現一個人看似矛盾但實際共存的性格特質，讓自我覺察更真實、更立體。",
  },
  {
    q: "做完 Lumina 測驗後會得到什麼？",
    a: "完成 Lumina Spark 測評後，你會獲得一份專屬的個人肖像報告，詳列你在 24 項性格特質上的自然傾向、日常行為與壓力反應，並搭配四色能量圖像幫助理解。你也可以選擇參加一對一解析，進一步由認證執行師協助解讀報告，探索你的潛力、溝通風格、優勢與可能的盲點。這份報告不僅適用於個人成長，也能作為職涯規劃、團隊協作與領導風格調整的參考依據。",
  },
  {
    q: "Lumina 適合什麼樣的人使用？",
    a: "Lumina Spark 適用於各種年齡層與職業身份。無論你是想更認識自己、改善人際關係的個人，或是想提升團隊效能的主管、HR、人資顧問、教練與培訓師，都能從中獲得具體幫助。對於企業來說，它能協助團隊溝通對齊、增進理解與協作；對個人來說，則是一面照見內在動力與特質的鏡子，是人生各階段的重要導航工具。",
  },
  {
    q: "Lumina 能幫助企業什麼？",
    a: "Lumina Spark 不只是一份性格測評工具，更是一套實用的企業人才發展方案。它能幫助企業識別團隊成員的溝通風格與合作偏好，找出團隊運作的盲點與潛力。透過報告與互動工作坊，可促進部門間理解與協作、改善溝通效率、提升領導力與團隊凝聚力。此外，也可搭配 Lumina Leader、Team 或 Sales 模組，依據企業需求進行領導發展、團隊共創或銷售強化。",
  },
  {
    q: "成為 Lumina Spark 認證執行師後，可以做什麼？對我有什麼幫助？",
    a: "完成認證班後，你將成為具備授權資格的 Lumina Spark 執行師，能夠為個人或團體進行測評說明、報告解析與教練式回饋，並可應用於一對一職涯對談、團隊建立、溝通訓練、領導力發展、人才評鑑等場景。這項資格特別適合 HR、教練、顧問、培訓師、企業內部主管與高階管理者，不僅能為你的服務增加專業工具，也能提升你與客戶或團隊成員對話的深度與影響力。執行師的培訓內容不只是工具操作，更強調如何引導對話與啟發行動，讓你能帶出有價值的改變。",
  },
  {
    q: "執行師認證課程會學到哪些內容？需要具備什麼背景嗎？",
    a: "認證課程為期約 2～3 天，內容涵蓋 Lumina Spark 背後的理論基礎、測評結構與解讀技巧、報告應用方式，以及進行個別或團體回饋的實作演練。課程設計強調實務導向，即使你沒有心理學背景，也能在專業指導下學會如何操作工具與帶領對話。我們歡迎來自不同領域的夥伴報名，特別是 HR、教練、顧問、教育訓練從業者、團隊領導者與創業者。重點是你願意深入了解人、擁有對學習與引導成長的熱情。",
  },
];

const ytVideos = [
  { id: "CawHvmfBo0A", title: "Lumina Spark 介紹影片" },
  { id: "HwQwEoFHLd8", title: "Lumina Team 介紹影片" },
  { id: "Pm9uKUdHbjs", title: "Lumina Leader 介紹影片" },
  { id: "nNg4-QGPox8", title: "Lumina Sales 介紹影片" },
  { id: "pElc6Hc0T8M", title: "Lumina Emotion 介紹影片" },
];

const tabContent = [
  {
    label: "關於 Lumina",
    img: I("ll-tab1.png"),
    imgW: 1200, imgH: 1200,
    content: `一套結合理論、架構語言、系統化的方法及應用工具\n「幫助你了解『人』的科學」\n\nLumina Learning 來自英國，由 Dr. Stewart Desson 博士（創辦人兼 CEO）帶領團隊於 2008 年創立，是一間高度創新、世界領先、與時俱進的心理測量學應用服務開發提供商，持續提供全球頂尖的人格特質（Personality）、情商（Emotion Intelligence）、職能（Competency）等測評暨個人化應用學習發展工具，並推廣相關產品技術服務導入應用的認證計劃（Qualification Programs）。\n\nLumina Learning 是一間為組織、團隊、個人提供創新、個人化的「招募」與「發展」整體解決方案的全球服務供應商，目前有將近 50 個國家導入我們 Lumina Spark ､ Lumina Team ､ Lumina Sales ､ Lumina Leader/Leader 360 ､Lumina Emotion、Lumina Select 等產品應用服務。\n\n我們提供各國語言版本產品，來自全球不同產業、專業領域的專家及持續成長的認證執行師網絡資源，各區域在地化的合作夥伴支持服務，以滿足全球化企業及各區域大中小型企業、組織發展及多元人才發展的需求。`,
  },
  {
    label: "理論基礎",
    img: I("ll-tab2.png"),
    imgW: 1200, imgH: 1200,
    content: `Lumina Learning 以 Carl Jung 的心理類型理論為基礎，結合大五人格（Big Five）、正向心理學及最新神經科學研究，發展出獨特的「Lumina Spark」框架。\n\n不同於傳統 MBTI 等將人固定分類的測驗，Lumina 承認每個人都同時擁有看似對立的特質，並在不同情境下展現不同面貌。\n\n透過「潛在」、「日常」、「壓力下」三層情境架構，深度揭示個人在不同情況下的行為模式，提供更精準、更貼近現實的自我認識工具。`,
  },
  {
    label: "主張價值",
    img: I("ll-tab3.png"),
    imgW: 1200, imgH: 1200,
    content: `Transforming Organizations by Transforming People.\n從人的發展與轉化，帶動組織的發展與轉化。\n\n企業可應用 Lumina Learning 多元完整、一致性、系統化的工具與方法，建構組織內共同的語言、形塑文化和價值觀。\n\n可應用於組織人力資源的盤點、佈局、規劃，新事業部、專案團隊或組織重整人才配置模擬，關鍵人才 / 接班人的遴選與培育發展，使團隊融合、凝聚、溝通、協作性提升，領導人自我覺察力、領導力、溝通力、教練力提升，透過「個人」與「團隊」的持續學習發展，推動企業組織的創新、轉型、升級！`,
  },
];

export default function LuminaLearningPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
          <Image
            src="/images/ll-hero-bright.jpg"
            alt="Lumina Learning"
            width={2558}
            height={1124}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
            unoptimized
          />
        </section>

        {/* ── Hero Title ── */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: "48px", paddingBottom: "20px" }}>
          <div className="container-inner" style={{ textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(22px, 2.4vw, 38px)",
                color: "#f9bd00",
                letterSpacing: "0.02em",
                lineHeight: 1.6,
              }}
            >
              &bull;&nbsp;&nbsp;Lumina Learning — 幫助你了解「人」的科學&nbsp;&nbsp;&bull;
            </span>
          </div>
        </section>

        {/* ── 關於 Lumina / 理論基礎 / 主張價值 Tabs ── */}
        <section id="about-lumina" style={{ backgroundColor: "#ffffff", paddingTop: "24px" }} className="section-py">
          <div className="container-inner">
            {/* Tab buttons */}
            <div style={{ display: "flex", gap: "16px", marginBottom: "48px", flexWrap: "wrap", justifyContent: "center" }}>
              {tabContent.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    letterSpacing: "0.02em",
                    lineHeight: 1.6,
                    padding: "12px 32px 10px",
                    borderRadius: "200px",
                    cursor: "pointer",
                    border: activeTab === i ? "none" : "2px solid #f9bd00",
                    background: activeTab === i ? "#f9bd00" : "#ffffff",
                    color: activeTab === i ? "#ffffff" : "#221616",
                    transition: "all 0.2s",
                  }}
                >
                  {tab.label}
                  <svg width="14" height="9" viewBox="0 0 19.811 12.5" aria-hidden="true">
                    <path
                      d="M 8.338 10.522 C 9.139 11.532 10.672 11.532 11.473 10.522 L 14.858 6.25 C 14.858 6.25 14.858 6.25 14.858 6.25 L 17.335 3.125 C 18.336 1.861 17.436 0 15.824 0 L 9.906 0 L 9.906 0 L 3.987 0 C 2.375 0 1.475 1.861 2.476 3.125 L 4.953 6.25 C 4.953 6.25 4.953 6.25 4.953 6.25 Z"
                      fill={activeTab === i ? "#ffffff" : "#f9bd00"}
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === 0 ? (
              <div>
                {/* Top row: left image + right heading */}
                <div style={{ display: "flex", gap: "40px", alignItems: "center", marginBottom: "56px", flexWrap: "wrap" }}>
                  <div style={{ flexShrink: 0, width: "clamp(220px, 31%, 320px)", borderRadius: "12px", overflow: "hidden" }}>
                    <Image
                      src="/images/ll-target4.png"
                      alt="Lumina Learning"
                      width={922}
                      height={436}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      unoptimized
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: "240px" }}>
                    <p style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "20px",
                      color: "#221616",
                      letterSpacing: "0.02em",
                      lineHeight: 1.6,
                      marginBottom: "8px",
                    }}>
                      一套結合理論、架構語言、系統化的方法及應用工具
                    </p>
                    <p style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "32px",
                      color: "#221616",
                      letterSpacing: "0.02em",
                      lineHeight: 1.6,
                    }}>
                      「幫助你了解『人』的科學」
                    </p>
                  </div>
                </div>

                {/* Centered text block */}
                <div style={{
                  textAlign: "center",
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: "18px",
                  color: "#333333",
                  letterSpacing: "0.02em",
                  lineHeight: 1.8,
                  marginBottom: "56px",
                }}>
                  <p style={{ marginBottom: "32px" }}>
                    Lumina Learning 來自英國，由 Dr. Stewart Desson 博士（創辦人兼 CEO）帶領團隊於 2008 年創立，<br />
                    是一間高度創新、世界領先、與時俱進的心理測量學應用服務開發提供商，<br />
                    持續提供全球頂尖的人格特質（Personality）、情商（Emotion Intelligence）、職能（Competency）等<br />
                    測評暨個人化應用學習發展工具，並推廣相關產品技術服務導入應用的認證計劃（QualificationPrograms）。
                  </p>
                  <p style={{ marginBottom: "32px" }}>
                    <strong>Lumina Learning</strong> 是一間為組織、團隊、個人提供創新、個人化的「招募」與「發展」整體解決方案的全球服務供應商，
                    目前有將近 50 個國家導入我們 <strong>Lumina Spark ､ Lumina Team ､ Lumina Sales ､ Lumina Leader/Leader 360 ､Lumina Emotion、Lumina Select</strong> 等產品應用服務。
                  </p>
                  <p>
                    我們提供各國語言版本產品，來自全球不同產業、專業領域的專家及持續成長的認證執行師網絡資源，<br />
                    各區域在地化的合作夥伴支持服務，以滿足全球化企業及各區域大中小型企業、組織發展及多元人才發展的需求。
                  </p>
                </div>

                {/* Bottom applications image */}
                <Image
                  src="/images/ll-applications.png"
                  alt="Lumina Applications"
                  width={1330}
                  height={560}
                  style={{ width: "70%", height: "auto", display: "block", margin: "0 auto" }}
                  unoptimized
                />
              </div>
            ) : activeTab === 1 ? (
              /* 理論基礎 custom layout */
              <div>
                {/* Title */}
                <p style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#221616",
                  letterSpacing: "0.02em",
                  lineHeight: 1.6,
                  textAlign: "center",
                  marginBottom: "24px",
                }}>
                  學理依據
                </p>

                {/* Text block */}
                <div style={{
                  textAlign: "center",
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: "18px",
                  letterSpacing: "0.02em",
                  lineHeight: 1.8,
                  marginBottom: "56px",
                }}>
                  <p style={{ color: "#333333", marginBottom: "24px" }}>
                    Lumina Spark 立基於最近代的 Big 5 大五人格模型，融合「榮格 Jung」人格理論的視角，建構一個兩極對稱、完整平衡的人格特質立體模型，個別測量每個特質的矛盾兩極，經過心理計量統計實證研究，大大降低受測者認知偏見造成的結果偏差。
                  </p>
                  <p style={{ color: "#221616" }}>
                    Lumina Spark 有別於傳統將人「分類」的測評工具，提出「不分類」及「情境」的觀點理論，具體清晰地詮釋人格的複雜性、細緻性、矛盾性、個體差異性，去除「分類」造成的偏見與誤趨，是最近代、創新的人格特質心理學應用模型。
                  </p>
                </div>

                {/* Two wheel images */}
                <div style={{ display: "flex", gap: "48px", justifyContent: "center", flexWrap: "wrap" }}>
                  {[
                    { src: "/images/ll-spark-jung.png", label: "Lumina Spark V.S 榮格" },
                    { src: "/images/ll-spark-big5.png", label: "Lumina Spark V.S 大五" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={300}
                        height={300}
                        style={{ width: "300px", height: "300px", objectFit: "cover" }}
                        unoptimized
                      />
                      <p style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontSize: "16px",
                        color: "#333333",
                        letterSpacing: "0.02em",
                        lineHeight: 1.8,
                      }}>
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* 主張價值 custom layout */
              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                {/* Text */}
                <div>
                  <p style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "28px",
                    color: "#221616",
                    letterSpacing: "0.02em",
                    lineHeight: 1.8,
                    marginBottom: "32px",
                    textAlign: "center",
                  }}>
                    &ldquo;No more labelling or putting people into boxes.&rdquo;
                  </p>

                  {[
                    {
                      title: 'No "TYPE" but "TRAITS"',
                      body: '我們對人「不分類」，去標籤化，強調每個人都是獨一無二，主張「個體性差異的特質展現」，支持個人及團隊適性發展。',
                      bodyColor: "#333333",
                    },
                    {
                      title: "Embrace the Paradox",
                      body: '在問卷設計，個別測量特質的兩極，避免錯誤的二分法造成的偏差。我們不會把你歸類為外向或內向的人、思考型或是情感型的人，而是完整、個別呈現出每個人內向、外向及其他矛盾、多元面向特質，擁抱個人與他人的矛盾不同，和諧共存，互補融合。',
                      bodyColor: "#333333",
                    },
                    {
                      title: "Persona",
                      body: '每個人的特質與行為會因對象、情境動態改變，我們能協助您透視個人與團隊在「潛在」、「日常」、「壓力」情境的行為慣性及動態變化，挖掘潛能、預測壓力下的決策風險。',
                      bodyColor: "#221616",
                    },
                    {
                      title: "Growth Mindset",
                      body: "我們相信，人無法被定性，每個人的發展充滿無限可能！透過了解自己，打破框架，發展成為自己想要的版本，成就獨一無二的自己！",
                      bodyColor: "#333333",
                    },
                  ].map((item) => (
                    <div key={item.title} style={{ marginBottom: "28px" }}>
                      <p style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: "20px",
                        color: "#221616",
                        letterSpacing: "0.02em",
                        lineHeight: 1.8,
                      }}>
                        {item.title}
                      </p>
                      <p style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontSize: "18px",
                        color: item.bodyColor,
                        letterSpacing: "0.02em",
                        lineHeight: 1.8,
                      }}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom: image */}
                <div>
                  <Image
                    src="/images/ll-tab3-values.png"
                    alt="Lumina Spark portraits"
                    width={1674}
                    height={1096}
                    style={{ width: "70%", height: "auto", display: "block", margin: "0 auto" }}
                    unoptimized
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── 多元應用情境 ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            {/* Section label */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <span style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(22px, 2.4vw, 38px)",
                color: "#f9bd00",
                letterSpacing: "0.02em",
                lineHeight: 1.6,
              }}>
                &bull;&nbsp;&nbsp;多元應用情境&nbsp;&nbsp;&bull;
              </span>
            </div>

            {/* Quote block */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                color: "#221616",
                letterSpacing: "0.02em",
                lineHeight: 1.6,
              }}>
                Transforming Organizations by Transforming People.
              </p>
              <p style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                color: "#221616",
                letterSpacing: "0.02em",
                lineHeight: 1.6,
              }}>
                從人的發展與轉化，帶動組織的發展與轉化。
              </p>
            </div>

            {/* Text + Image row */}
            <div style={{ display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 320px" }}>
                <p style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: "18px",
                  color: "#221616",
                  letterSpacing: "0.02em",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}>
                  企業可應用 Lumina Learning 多元完整、一致性、系統化的工具與方法，建構組織內共同的語言、形塑文化和價值觀。
                </p>
                <p style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: "18px",
                  color: "#221616",
                  letterSpacing: "0.02em",
                  lineHeight: 1.8,
                }}>
                  可應用於組織人力資源的盤點、佈局、規劃，新事業部、專案團隊或組織重整人才配置模擬，關鍵人才 / 接班人的遴選與培育發展，使團隊融合、凝聚、溝通、協作性提升，領導人自我覺察力、領導力、溝通力、教練力提升，透過「個人」與「團隊」的持續學習發展，推動企業組織的創新、轉型、升級！
                </p>
              </div>
              <div style={{ flex: "0 0 auto" }}>
                <Image
                  src="/images/ll-context.png"
                  alt="Lumina Learning 在企業組織的成功應用"
                  width={1242}
                  height={1236}
                  style={{ width: "clamp(220px, 35vw, 420px)", height: "auto", display: "block" }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 解決方案：全系列 ── */}
        <section id="products" style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <span style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(22px, 2.4vw, 38px)",
                color: "#f9bd00",
                letterSpacing: "0.02em",
                lineHeight: 1.6,
              }}>
                &bull;&nbsp;&nbsp;解決方案：Lumina Learning 全系列服務工具&nbsp;&nbsp;&bull;
              </span>
            </div>
            {/* Intro text */}
            <p style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#555555",
              letterSpacing: "0.02em",
              textAlign: "center",
              marginBottom: "56px",
            }}>
              我們提供 Lumina Spark、Lumina Team、Lumina Leader、Lumina Sales、Lumina Emotion、Lumina Select 等涵蓋組織、團隊與個人，從招募到發展的完整多元應用工具，包括測評及結合實體、線上與數位化的學習發展應用工具。
            </p>

            {/* Products 3-column grid */}
            <div className="products-grid">
              {products.map((p) => (
                <div key={p.id} style={{ display: "flex", flexDirection: "column" }}>
                  {/* Logo image */}
                  <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image
                      src={p.img}
                      alt={p.name}
                      width={p.imgW}
                      height={p.imgH}
                      style={{ width: "240px", height: "140px", objectFit: "contain" }}
                      unoptimized
                    />
                  </div>
                  {/* Product name */}
                  <p style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#221616",
                    letterSpacing: "0.02em",
                    lineHeight: 1.8,
                    marginBottom: "4px",
                  }}>
                    {p.name}
                  </p>
                  {/* Tag */}
                  <p style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: p.color,
                    letterSpacing: "0.02em",
                    lineHeight: 1.4,
                    marginBottom: "12px",
                  }}>
                    {p.tag}
                  </p>
                  {/* Description */}
                  <p style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontSize: "15px",
                    color: "#333333",
                    letterSpacing: "0.02em",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                    flex: 1,
                  }}>
                    {p.desc}
                  </p>
                  {/* Button */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "#f9bd00",
                      color: "#221616",
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      letterSpacing: "0.02em",
                      padding: "10px 24px",
                      borderRadius: "200px",
                      textDecoration: "none",
                      alignSelf: "flex-start",
                    }}
                  >
                    了解更多 ›
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3層架構 ── */}
        <section style={{ backgroundColor: "#ffffff", paddingBottom: "10px" }} className="section-py">
          <div className="container-inner">
            {/* Image first */}
            <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "40px" }}>
              <Image
                src={I("ll-3layers.png")}
                alt="3層架構交叉3種情境"
                width={1500}
                height={896}
                style={{ width: "100%", height: "auto", display: "block" }}
                unoptimized
              />
            </div>
            {/* Title + description below */}
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                color: "#f9bd00",
                letterSpacing: "0.02em",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              看見 3 層架構交叉 3 種情境的你，讓你的特質動起來！
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#333333",
                letterSpacing: "0.02em",
              }}
            >
              透視每個人 24 個特質、8 個維度、4 個顏色能量在「潛在」、「日常」、「壓力下」情境的展現動態、慣性以及個人發展的優勢、機會、盲點、風險，提升自我覺察與自我發展的意識。
            </p>
          </div>
        </section>

        {/* ── 個人化特質肖像 ── */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: "0px" }} className="section-py">
          <div className="container-inner">
            <div className="ll-two-col">
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "28px",
                    color: "#f9bd00",
                    letterSpacing: "0.02em",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  獨一無二特質肖像，個人化發展指南！
                </h2>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontSize: "18px",
                    lineHeight: 1.8,
                    color: "#333333",
                    letterSpacing: "0.02em",
                  }}
                >
                  專屬於您、獨一無二的個人特質肖像 (Portrait)，完整呈現出您在不同情境的樣貌，並提供您在溝通、領導、與相似相異的人共事、特質調適發展的具體、個人化建議。
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image
                  src={I("ll-portrait.png")}
                  alt="個人化特質肖像"
                  width={1102}
                  height={900}
                  style={{ width: "70%", height: "auto", objectFit: "contain", display: "block" }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 影片 & 工具介紹 ── */}
        <section style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">

            {/* Row 1: 2 videos */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px" }}>
              {[
                { id: "CawHvmfBo0A", title: "Lumina Spark 介紹影片" },
                { id: "pElc6Hc0T8M", title: "Lumina Emotion 介紹影片" },
              ].map((v, i) => (
                <div key={i} style={{ position: "relative", paddingTop: "56.25%", borderRadius: "12px", overflow: "hidden" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1`}
                    title={v.title}
                    allowFullScreen
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                  />
                </div>
              ))}
            </div>

            {/* Card: 好玩、實用的 / 敏捷學習發展工具 */}
            <div className="ll-tool-card" style={{ marginBottom: "32px" }}>
              <div className="ll-tool-card-text">
                {/* Smiley icon — rounded square */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ marginBottom: "20px" }} aria-hidden="true">
                  <rect x="2" y="2" width="32" height="32" rx="8" stroke="#f9bd00" strokeWidth="2" fill="none" />
                  <circle cx="13" cy="15" r="1.8" fill="#f9bd00" />
                  <circle cx="23" cy="15" r="1.8" fill="#f9bd00" />
                  <path d="M12 21 Q18 27 24 21" stroke="#f9bd00" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
                <p style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(17px, 1.8vw, 22px)",
                  color: "#221616",
                  lineHeight: 1.45,
                  margin: 0,
                }}>
                  好玩、實用的<br />
                  敏捷學習發展工具
                </p>
              </div>
              <div className="ll-tool-card-img">
                <Image
                  src="https://framerusercontent.com/images/iMWIzHc3paecio9kfWYTZMVLjA.png"
                  alt="敏捷學習發展工具"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  unoptimized
                />
              </div>
            </div>

            {/* Single wide video */}
            <div style={{ position: "relative", paddingTop: "56.25%", borderRadius: "12px", overflow: "hidden", marginBottom: "32px" }}>
              <iframe
                src="https://www.youtube.com/embed/nNg4-QGPox8?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1"
                title="Lumina Sales 介紹影片"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>

            {/* Card: 虛實整合 / 多元創新的數位應用 (text left, image right) */}
            <div className="ll-tool-card" style={{ marginBottom: "32px" }}>
              <div className="ll-tool-card-text">
                {/* Device icon — phone with side button */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ marginBottom: "20px" }} aria-hidden="true">
                  {/* Phone body */}
                  <rect x="8" y="3" width="16" height="26" rx="3" stroke="#1a5fb4" strokeWidth="2" fill="none" />
                  {/* Home indicator */}
                  <rect x="13" y="26" width="6" height="1.5" rx="0.75" fill="#1a5fb4" />
                  {/* Side button */}
                  <rect x="24" y="11" width="2" height="5" rx="1" fill="#1a5fb4" />
                  {/* Front camera dot */}
                  <circle cx="16" cy="6.5" r="1" fill="#1a5fb4" />
                </svg>
                <p style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(17px, 1.8vw, 22px)",
                  color: "#221616",
                  lineHeight: 1.45,
                  margin: 0,
                }}>
                  虛實整合<br />
                  多元創新的數位應用
                </p>
              </div>
              <div className="ll-tool-card-img">
                <Image
                  src={I("ll-digital.png")}
                  alt="虛實整合多元創新的數位應用"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
            </div>

            {/* 2 cards: Spark Coach + Journey to Composure */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px" }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ position: "relative", aspectRatio: "16/9" }}>
                  <Image src={I("ll-spark-coach.png")} alt="Spark Coach" fill style={{ objectFit: "cover" }} unoptimized />
                </div>
                <div style={{ padding: "28px 32px" }}>
                  <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#f9bd00", marginBottom: "6px", letterSpacing: "0.05em" }}>特質發展與目標行動推進器</p>
                  <h3 style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: "#221616", marginBottom: "10px", lineHeight: 1.4 }}>Spark Coach 線上即時教練系統</h3>
                  <p style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: "13px", lineHeight: 1.75, color: "#555" }}>
                    4 個步驟探索個人特質展現模式，啟動個人化發展目標與行動計畫
                  </p>
                </div>
              </div>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ position: "relative", aspectRatio: "16/9" }}>
                  <Image src={I("ll-jtc.png")} alt="Journey to Composure" fill style={{ objectFit: "cover" }} unoptimized />
                </div>
                <div style={{ padding: "28px 32px" }}>
                  <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#f9bd00", marginBottom: "6px", letterSpacing: "0.05em" }}>壓力感知與調適器</p>
                  <h3 style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: "#221616", marginBottom: "10px", lineHeight: 1.4 }}>Journey to Composure 線上教練系統</h3>
                  <p style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: "13px", lineHeight: 1.75, color: "#555" }}>
                    5 個步驟探索個人「壓力情境」特質展現行為，透過有意識地練習提升對於壓力的覺察與韌性
                  </p>
                </div>
              </div>
            </div>

            {/* Row: 2 more videos */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {[
                { id: "HwQwEoFHLd8", title: "Lumina Team 介紹影片" },
                { id: "Pm9uKUdHbjs", title: "Lumina Leader 介紹影片" },
              ].map((v, i) => (
                <div key={i} style={{ position: "relative", paddingTop: "56.25%", borderRadius: "12px", overflow: "hidden" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1`}
                    title={v.title}
                    allowFullScreen
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                  />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 應用情境及使用對象 ── */}
        <section id="use-cases" style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner" style={{ textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(22px, 2.4vw, 38px)",
                color: "#f9bd00",
                letterSpacing: "0.02em",
                lineHeight: 1.4,
                marginBottom: "24px",
              }}
            >
              &bull;&nbsp;&nbsp;應用情境及使用對象&nbsp;&nbsp;&bull;
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#555",
                maxWidth: "800px",
                margin: "0 auto 56px",
              }}
            >
              企業可應用 Lumina Learning 多元完整、一致性、系統化的工具與方法，建構組織內共同的語言、形塑文化和價值觀，可應用於組織人力資源的盤點、佈局、規劃，關鍵人才 / 接班人的遴選與培育發展，團隊融合、凝聚、溝通、協作性提升，領導人自我覺察力、領導力、溝通力、教練力提升，透過「個人」與「團隊」的持續學習發展，推動企業組織的創新、轉型、升級！
            </p>
            {/* Row 1: 2 items */}
            <div style={{ display: "flex", justifyContent: "center", gap: "56px", marginBottom: "48px", flexWrap: "wrap" }}>
              {targets.slice(0, 2).map((t, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", maxWidth: "200px" }}>
                  <div style={{ width: "130px", height: "130px", borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                    <Image src={t.img} alt={t.title} fill style={{ objectFit: "cover", objectPosition: "top" }} unoptimized />
                  </div>
                  <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#221616", lineHeight: 1.4 }}>{t.title}</p>
                  <p style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: "13px", color: "#666", lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              ))}
            </div>
            {/* Row 2: 3 items */}
            <div style={{ display: "flex", justifyContent: "center", gap: "56px", flexWrap: "wrap" }}>
              {targets.slice(2).map((t, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", maxWidth: "200px" }}>
                  <div style={{ width: "130px", height: "130px", borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                    <Image src={t.img} alt={t.title} fill style={{ objectFit: "cover", objectPosition: "top" }} unoptimized />
                  </div>
                  <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#221616", lineHeight: 1.4 }}>{t.title}</p>
                  <p style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: "13px", color: "#666", lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 認證合作夥伴計劃 ── */}
        <section id="certification" style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">
            {/* Section title with yellow circle dots */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "32px" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><circle cx="5" cy="5" r="5" fill="rgb(249,190,0)" /></svg>
              <h2 style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 50px)", color: "#f9bd00", letterSpacing: "0.02em", lineHeight: 1.3, margin: 0 }}>
                認證合作夥伴計劃
              </h2>
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><circle cx="5" cy="5" r="5" fill="rgb(249,190,0)" /></svg>
            </div>

            {/* Description */}
            <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: 1.8, color: "#333", textAlign: "center", marginBottom: "40px" }}>
              根據企業組織發展需求，由 Lumina Learning 原廠認證技術導入，培育內部種子，應用 Lumina 簡單、易用、有效的系統化工具與方法，建構組織內共同的語言、文化與價值觀，深化組織、團隊、個人適性學習與發展，提升團隊默契、信任、向心力，共創共贏。
            </p>

            {/* Dark banner */}
            <div style={{ backgroundColor: "#221616", borderRadius: "12px", padding: "24px 40px", marginBottom: "40px", textAlign: "center" }}>
              <h3 style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "clamp(18px, 2vw, 24px)", color: "#ffffff", lineHeight: 1.4, margin: 0 }}>
                「Lumina Spark 國際認證執行師」認證班
              </h3>
            </div>

            {/* Two workshop photos */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "48px" }}>
              {[
                "https://framerusercontent.com/images/iExovzpBQBhlrv2I3p05PLRDzo.png",
                "https://framerusercontent.com/images/BQFUlwiu8lRLojap6j8NEYXuAhw.png",
              ].map((src, i) => (
                <div key={i} style={{ position: "relative", borderRadius: "16px", overflow: "hidden", aspectRatio: "2022/1252" }}>
                  <Image src={src} fill alt="" unoptimized style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
              ))}
            </div>

            {/* Three-column: description | bullets col1 | bullets col2 */}
            <div className="cert-3col" style={{ marginBottom: "48px" }}>
              <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 500, fontSize: "18px", color: "#221616", lineHeight: 1.8, letterSpacing: "0.02em" }}>
                認證學程結業，獲得原廠技術授權導入應用，擁有與全球同步、持續創新的系統化學習資訊、技術、工具與方法及在地化的技術支援與應用發展支持。
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {certBenefits.slice(0, 4).map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Noto Sans', sans-serif", fontSize: "18px", color: "#333", letterSpacing: "0.02em", lineHeight: 1.6 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{ flexShrink: 0 }}><circle cx="6" cy="6" r="6" fill="rgb(250,188,1)" /></svg>
                    {b}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {certBenefits.slice(4).map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Noto Sans', sans-serif", fontSize: "18px", color: "#333", letterSpacing: "0.02em", lineHeight: 1.6 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{ flexShrink: 0 }}><circle cx="6" cy="6" r="6" fill="rgb(250,188,1)" /></svg>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Two course cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
              {/* Card 1: Lumina Spark 認證學程 */}
              <div style={{ borderRadius: "20px", border: "1.5px solid #e0e0e0", overflow: "hidden", display: "flex", minHeight: "200px", backgroundColor: "#ffffff" }}>
                <div style={{ flex: "0 0 280px", padding: "40px 36px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
                  <svg width="28" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M2 4.5C2 3.12 3.12 2 4.5 2H11V22H4.5C3.12 22 2 20.88 2 19.5V4.5Z" stroke="#f9bd00" strokeWidth="1.5" fill="none" />
                    <path d="M22 4.5C22 3.12 20.88 2 19.5 2H13V22H19.5C20.88 22 22 20.88 22 19.5V4.5Z" stroke="#f9bd00" strokeWidth="1.5" fill="none" />
                  </svg>
                  <h3 style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "20px", color: "#221616", lineHeight: 1.6, letterSpacing: "0.02em", margin: 0 }}>
                    Lumina Spark<br />認證學程
                  </h3>
                </div>
                <div style={{ flex: 1, position: "relative", minHeight: "200px" }}>
                  <Image
                    src="https://framerusercontent.com/images/iMWIzHc3paecio9kfWYTZMVLjA.png"
                    fill alt="Lumina Spark 認證學程" unoptimized
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>

              {/* Card 2: Lumina Spark 模組使用授權 */}
              <div style={{ borderRadius: "20px", border: "1.5px solid #e0e0e0", overflow: "hidden", display: "flex", minHeight: "200px", backgroundColor: "#ffffff" }}>
                <div style={{ flex: "0 0 280px", padding: "40px 36px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="#f9bd00" strokeWidth="1.5" fill="none" />
                    <path d="M8 12l3 3 5-5" stroke="#f9bd00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "20px", color: "#221616", lineHeight: 1.6, letterSpacing: "0.02em", margin: 0 }}>
                    Lumina Spark<br />模組使用授權
                  </h3>
                </div>
                <div style={{ flex: 1, position: "relative", minHeight: "200px" }}>
                  <Image
                    src="https://framerusercontent.com/images/UNlsfJ369QIUJ1rpocJEoLYFMM.png"
                    fill alt="Lumina Spark 模組使用授權" unoptimized
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
              </div>
            </div>

            {/* 認證加值送 */}
            <div style={{ marginBottom: "40px" }}>
              {/* Title with yellow triangle decorators */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "48px" }}>
                {[0, 1].map((k) => (
                  <svg key={k} width="14" height="9" viewBox="0 0 19.811 12.5" aria-hidden="true">
                    <path d="M 8.338 10.522 C 9.139 11.532 10.672 11.532 11.473 10.522 L 14.858 6.25 L 17.335 3.125 C 18.336 1.861 17.436 0 15.824 0 L 9.906 0 L 3.987 0 C 2.375 0 1.475 1.861 2.476 3.125 L 4.953 6.25 Z" fill="rgb(250,188,1)" />
                  </svg>
                ))}
                <span style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#221616", letterSpacing: "0.02em", lineHeight: 1.6 }}>
                  認證加值送
                </span>
                {[0, 1].map((k) => (
                  <svg key={k} width="14" height="9" viewBox="0 0 19.811 12.5" aria-hidden="true">
                    <path d="M 8.338 10.522 C 9.139 11.532 10.672 11.532 11.473 10.522 L 14.858 6.25 L 17.335 3.125 C 18.336 1.861 17.436 0 15.824 0 L 9.906 0 L 3.987 0 C 2.375 0 1.475 1.861 2.476 3.125 L 4.953 6.25 Z" fill="rgb(250,188,1)" />
                  </svg>
                ))}
              </div>

              {/* Row 1: 4 items */}
              <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px,4vw,56px)", marginBottom: "48px", flexWrap: "wrap" }}>
                {certBonus.slice(0, 4).map((item, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", minWidth: "120px" }}>
                    <div style={{ width: "150px", height: "150px", borderRadius: "50%", overflow: "hidden", backgroundColor: "#f0f0f0", position: "relative", flexShrink: 0 }}>
                      <Image src={item.img} fill alt={item.line1} unoptimized style={{ objectFit: item.fit, objectPosition: item.pos }} />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "20px", color: "#221616", lineHeight: 1.6, letterSpacing: "0.02em" }}>{item.line1}</p>
                      {item.line2 && <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "20px", color: "#221616", lineHeight: 1.6, letterSpacing: "0.02em" }}>{item.line2}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: 5 items */}
              <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px,4vw,56px)", flexWrap: "wrap" }}>
                {certBonus.slice(4).map((item, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", minWidth: "120px" }}>
                    <div style={{ width: "150px", height: "150px", borderRadius: "50%", overflow: "hidden", backgroundColor: "#f0f0f0", position: "relative", flexShrink: 0 }}>
                      <Image src={item.img} fill alt={item.line1} unoptimized style={{ objectFit: item.fit, objectPosition: item.pos }} />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "20px", color: "#221616", lineHeight: 1.6, letterSpacing: "0.02em" }}>{item.line1}</p>
                      {item.line2 && <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600, fontSize: "20px", color: "#221616", lineHeight: 1.6, letterSpacing: "0.02em" }}>{item.line2}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc52OLdFL79IRuhW5DDyYMH7quJsxV5U7yA4_8ZW8nmWs_WDA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                洽詢認證課
              </a>
              <a
                href="https://lin.ee/4hHDypS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                加入官方 LINE
              </a>
            </div>
          </div>
        </section>

        {/* ── 常見問題 ── */}
        <section id="faq" style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner" style={{ maxWidth: "800px" }}>
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(22px, 2.4vw, 38px)",
                color: "#f9bd00",
                letterSpacing: "0.02em",
                lineHeight: 1.4,
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              &bull;&nbsp;&nbsp;常見問題&nbsp;&nbsp;&bull;
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    border: "1px solid rgba(34,22,22,0.1)",
                    overflow: "hidden",
                    boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 28px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#221616",
                      gap: "16px",
                    }}
                  >
                    <span>{faq.q}</span>
                    <span
                      style={{
                        flexShrink: 0,
                        fontSize: "14px",
                        color: "#f9bd00",
                        transition: "transform 0.2s",
                        transform: openFaq === i ? "rotate(180deg)" : "none",
                        display: "inline-block",
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  {openFaq === i && (
                    <div
                      style={{
                        padding: "0 28px 24px",
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: 1.85,
                        color: "#555",
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section
          style={{ backgroundColor: "#24201e" }}
          className="section-py-lg"
        >
          <div className="container-inner" style={{ textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(22px, 3vw, 40px)",
                color: "#f9bd00",
                lineHeight: 1.3,
                marginBottom: "20px",
              }}
            >
              善用科學工具，讓人才培訓更精準有效
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.8)",
                maxWidth: "560px",
                margin: "0 auto 36px",
              }}
            >
              導入 Lumina 企業認證，快速建立共通語言、強化領導效能、優化選才決策。讓人才成長與組織績效同步加速，現在就與我們洽詢，開啟轉變的第一步！
            </p>
            <a
              href="https://line.me/R/ti/p/@550ztoml"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
              style={{ fontSize: "16px", padding: "12px 32px" }}
            >
              立即諮詢
            </a>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .ll-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .ll-svc-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .ll-svc-row[data-imgright="false"] .ll-svc-text { order: 2; }
        .ll-svc-row[data-imgright="false"] .ll-svc-img  { order: 1; }
        .ll-svc-row[data-imgright="true"]  .ll-svc-text { order: 1; }
        .ll-svc-row[data-imgright="true"]  .ll-svc-img  { order: 2; }

        /* Tool card: text panel left, image right */
        .ll-tool-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          align-items: stretch;
          min-height: 280px;
        }
        .ll-tool-card-text {
          flex: 0 0 280px;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ll-tool-card-img {
          flex: 1;
          position: relative;
          min-height: 240px;
        }
        /* Reverse: image left, text right */
        .ll-tool-card-reverse .ll-tool-card-img { order: 1; }
        .ll-tool-card-reverse .ll-tool-card-text { order: 2; flex: 0 0 320px; }

        @media (max-width: 1199px) {
          .ll-two-col { grid-template-columns: 1fr; gap: 32px; }
          .ll-svc-row { grid-template-columns: 1fr; gap: 32px; }
          .ll-svc-row .ll-svc-text { order: 1 !important; }
          .ll-svc-row .ll-svc-img  { order: 2 !important; }
          .ll-tool-card { flex-direction: column; min-height: auto; }
          .ll-tool-card-text { flex: none; }
          .ll-tool-card-reverse .ll-tool-card-img { order: 1; }
          .ll-tool-card-reverse .ll-tool-card-text { order: 2; flex: none; }
        }
        @media (max-width: 809px) {
          .ll-two-col { grid-template-columns: 1fr; gap: 24px; }
          .ll-tool-card-text { padding: 32px 28px; }
        }

        /* Certification three-column layout */
        .cert-3col {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 1199px) {
          .cert-3col { grid-template-columns: 1fr 1fr; gap: 32px; }
          .cert-3col > p { grid-column: 1 / -1; }
        }
        @media (max-width: 809px) {
          .cert-3col { grid-template-columns: 1fr; gap: 24px; }
        }

        /* Header show/hide helpers */
        .hide-tablet-down { display: flex; }
        .hide-desktop { display: none; }
        @media (max-width: 1199px) {
          .hide-tablet-down { display: none !important; }
          .hide-desktop { display: flex !important; }
        }
      `}</style>
    </>
  );
}
