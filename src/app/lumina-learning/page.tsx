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
    color: "#f9bd00",
  },
  {
    id: "team",
    name: "Lumina Team",
    tag: "發展工具：團隊行為",
    desc: "透視「團隊」與「個人」在「潛在」、「日常」、「壓力下」情境 8 個維度及 4 個顏色能量展現的變化，可應用於文化形塑、人才盤點暨策略佈局、主管情境領導/適性領導力發展、團隊建構與促進溝通對話及共識凝聚，是組織、團隊與個人發展最佳策略幫手！",
    img: I("ll-team.png"),
    imgW: 846, imgH: 444,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "#4CAF50",
  },
  {
    id: "leader",
    name: "Lumina Leader",
    tag: "發展工具：領導力",
    desc: "幫助領導人全面透視及覺察他們在「願景領導」、「驅動領導」、「務實領導」和「賦能領導」 4 個面向中所展現出 16 個領導力特質及個人領導風格，看見其「有效」及「壓力下」領導力展現的慣性模式可能帶來的優勢以及風險，並提供個人領導力發展指南。",
    img: I("ll-leader.png"),
    imgW: 846, imgH: 444,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "#9C27B0",
  },
  {
    id: "sales",
    name: "Lumina Sales",
    tag: "發展工具：銷售力",
    desc: "協助專業銷售人員以及銷售團隊的領導者提升銷售業務管理的 6 個階段循環對應 24 個銷售特質能力，透視其在「有效」及「壓力下」情境的慣性模式可能帶來的優勢以及風險，並提供個人銷售力發展指南。",
    img: I("ll-sales.png"),
    imgW: 834, imgH: 444,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "#2196F3",
  },
  {
    id: "emotion",
    name: "Lumina Emotion",
    tag: "發展工具：情商力",
    desc: "透過 16 個情緒特質，交叉潛在、日常、壓力下情境，深度探索個人情緒、感覺、行為模式之間的關聯性，並提供個人化發展行動指南，從「覺察自我」、「覺察他人」、「情緒與行為掌控」到「採取有效行動」，協助你一步一步提升情商力！",
    img: I("ll-emotion.png"),
    imgW: 928, imgH: 444,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "#FF5722",
  },
  {
    id: "select",
    name: "Lumina Select",
    tag: "招募工具：職能與潛能",
    desc: "創新、客製化的招募測評工具，衡量 16 個關鍵職能，連結 Lumina Spark 24 個特質交叉分析，呈現候選人的溝通風格、優勢及個人待發展建議，並提供受測者訪談問題建議，為面試的 HR 與主管提供簡單、易用、有效的招募指南！",
    img: I("ll-select.png"),
    imgW: 926, imgH: 514,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
    color: "#607D8B",
  },
];

const targets = [
  {
    title: "部門主管、單位領導人",
    desc: "提升識才、用才、育才、留才及與跨世代、跨專業的多元特質組合團隊適性溝通、適性領導的能力，建立自主、當責的高績效團隊。",
    img: I("ll-target1.png"),
    imgW: 964, imgH: 1460,
  },
  {
    title: "HR / HRBP 專業人員",
    desc: "提升選才、培訓、人力資源策略佈局與發展能力，促進組織團隊與個人適性學習與發展及溝通、協作效能。",
    img: I("ll-target2.png"),
    imgW: 982, imgH: 514,
  },
  {
    title: "專案與跨部門團隊",
    desc: "促進團隊多元融合，減少衝突卡關，建立團隊信任，凝聚行爲共識。",
    img: I("ll-target3.png"),
    imgW: 1500, imgH: 896,
  },
  {
    title: "Sales 業務主管與團隊",
    desc: "更懂客戶與夥伴行為、提升成交率；建立信任與有效對話的能力，激勵團隊士氣與提升業績。",
    img: I("ll-target4.png"),
    imgW: 991, imgH: 579,
  },
  {
    title: "創辦人、總經理、CXO",
    desc: "建立高效的領導團隊與文化，用科學數據支持決策；發展接班梯隊，實現長期策略目標",
    img: I("ll-target5.png"),
    imgW: 1200, imgH: 1200,
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
  "Spark coach / JTC 線上教練系統",
  "Lumina Team 團隊動態模擬器",
  "Lumina Learning HQ 全球學習資源 Premium 帳戶一年",
  "專業版 APP 使用",
  "Start Up 315 點",
  "Lumina Learning 線上學習活動",
  "原廠直購優惠",
  "自主雲端管理系統",
];

const faqs = [
  {
    q: "Lumina Spark 跟其他性格測驗有什麼不同？",
    a: "Lumina Spark 打破傳統性格測驗「定型化」的限制，不將人貼上固定標籤。它以動態、視覺化的方式呈現每個人在「潛在」、「日常」、「壓力下」三種情境下的差異，並提供 24 個特質的個人化分析，更真實地反映人的多元面貌。",
  },
  {
    q: "做完 Lumina 測驗後會得到什麼？",
    a: "完成測驗後，您將獲得一份專屬的個人特質肖像（Portrait），包含您在 24 個特質面向的動態分析、溝通風格建議、領導力發展建議，以及與不同特質的人相處的具體指南。",
  },
  {
    q: "Lumina 適合什麼樣的人使用？",
    a: "Lumina 系列工具適合所有希望提升自我覺察與人際溝通的人，無論是企業主管、HR、團隊成員，還是教練、顧問都能從中獲益。Lumina Spark 特別適合希望了解自己和團隊特質、促進溝通與協作的組織。",
  },
  {
    q: "Lumina 能幫助企業什麼？",
    a: "Lumina 能幫助企業建立共同語言與文化、優化人才招募與發展、提升領導力與團隊效能、促進跨部門溝通與協作、規劃接班人培育計劃，以及推動組織文化轉型。",
  },
  {
    q: "成為 Lumina Spark 認證執行師後，可以做什麼？對我有什麼幫助？",
    a: "取得認證後，您將獲得原廠技術授權，可在企業內部或外部推廣應用 Lumina 工具。您能獨立帶領工作坊、提供一對一教練諮詢、協助企業進行人才發展規劃，並享有持續更新的全球學習資源與在地技術支援。",
  },
  {
    q: "執行師認證課程會學到哪些內容？需要具備什麼背景嗎？",
    a: "課程涵蓋 Lumina Spark 完整理論框架、評測報告解讀與應用、工作坊帶領技巧、教練對話技術，以及數位工具操作。不需要特定的專業背景，只要對人才發展與組織學習有熱情的人都可以參與。",
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
                fontSize: "clamp(27px, 3vw, 48px)",
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
            ) : (
              tabContent.slice(1).map((tab, i) => (
                <div
                  key={i + 1}
                  style={{ display: activeTab === i + 1 ? "grid" : "none" }}
                  className="ll-two-col"
                >
                  <div>
                    {tab.content.split("\n\n").map((para, pi) => (
                      <p
                        key={pi}
                        style={{
                          fontFamily: "'Noto Sans', sans-serif",
                          fontWeight: pi === 0 ? 700 : 400,
                          fontSize: pi === 0 ? "17px" : "15px",
                          lineHeight: 1.85,
                          color: "#221616",
                          marginBottom: "20px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  <div style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "1/1", position: "relative" }}>
                    <Image src={tab.img} alt={tab.label} fill style={{ objectFit: "cover" }} unoptimized />
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* ── 多元應用情境 ── */}
        <section style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "16px" }}>
              <div className="section-label">多元應用情境</div>
            </div>
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(20px, 2.5vw, 32px)",
                color: "#221616",
                lineHeight: 1.3,
                marginBottom: "8px",
              }}
            >
              Transforming Organizations by Transforming People.
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                color: "#333",
                marginBottom: "24px",
              }}
            >
              從人的發展與轉化，帶動組織的發展與轉化。
            </p>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#333",
                marginBottom: "40px",
                maxWidth: "840px",
              }}
            >
              企業可應用 Lumina Learning 多元完整、一致性、系統化的工具與方法，建構組織內共同的語言、形塑文化和價值觀。可應用於組織人力資源的盤點、佈局、規劃，新事業部、專案團隊或組織重整人才配置模擬，關鍵人才 / 接班人的遴選與培育發展，使團隊融合、凝聚、溝通、協作性提升，領導人自我覺察力、領導力、溝通力、教練力提升，透過「個人」與「團隊」的持續學習發展，推動企業組織的創新、轉型、升級！
            </p>
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image
                src={I("ll-applications.png")}
                alt="多元應用情境"
                width={1330}
                height={560}
                style={{ width: "100%", height: "auto", display: "block" }}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ── 解決方案：全系列 ── */}
        <section id="products" style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "16px" }}>
              <h2
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                  color: "#221616",
                  lineHeight: 1.3,
                  marginBottom: "16px",
                }}
              >
                解決方案：Lumina Learning 全系列服務工具
              </h2>
            </div>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#333",
                marginBottom: "56px",
                maxWidth: "840px",
              }}
            >
              我們提供 Lumina Spark、Lumina Team、Lumina Leader、Lumina Sales、Lumina Emotion、Lumina Select 等涵蓋組織、團隊與個人，從招募到發展的完整多元應用工具，包括測評及結合實體、線上與數位化的學習發展應用工具。
            </p>

            {/* Products */}
            <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
              {products.map((p, i) => (
                <div
                  key={p.id}
                  className="ll-svc-row"
                  data-imgright={i % 2 === 0 ? "true" : "false"}
                >
                  {/* Text */}
                  <div className="ll-svc-text">
                    <h3
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(18px, 2vw, 24px)",
                        color: "#221616",
                        lineHeight: 1.3,
                        marginBottom: "4px",
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#555",
                        marginBottom: "16px",
                      }}
                    >
                      {p.tag}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: 1.85,
                        color: "#333",
                        marginBottom: "24px",
                      }}
                    >
                      {p.desc}
                    </p>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dark"
                    >
                      了解更多
                    </a>
                  </div>

                  {/* Image */}
                  <div
                    className="ll-svc-img"
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      aspectRatio: `${p.imgW}/${p.imgH}`,
                    }}
                  >
                    <Image
                      src={p.img}
                      alt={p.name}
                      width={p.imgW}
                      height={p.imgH}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3層架構 ── */}
        <section style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(20px, 2.5vw, 32px)",
                color: "#221616",
                lineHeight: 1.3,
                marginBottom: "16px",
              }}
            >
              看見 3 層架構交叉 3 種情境的你，讓你的特質動起來！
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#333",
                marginBottom: "40px",
                maxWidth: "760px",
              }}
            >
              透視每個人 24 個特質、8 個維度、4 個顏色能量在「潛在」、「日常」、「壓力下」情境的展現動態、慣性以及個人發展的優勢、機會、盲點、風險，提升自我覺察與自我發展的意識。
            </p>
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image
                src={I("ll-3layers.png")}
                alt="3層架構交叉3種情境"
                width={1748}
                height={1412}
                style={{ width: "100%", height: "auto", display: "block" }}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ── 個人化特質肖像 ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            <div className="ll-two-col">
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(20px, 2.5vw, 32px)",
                    color: "#221616",
                    lineHeight: 1.3,
                    marginBottom: "20px",
                  }}
                >
                  獨一無二特質肖像，
                  <br />
                  個人化發展指南！
                </h2>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.85,
                    color: "#333",
                  }}
                >
                  專屬於您、獨一無二的個人特質肖像 (Portrait)，完整呈現出您在不同情境的樣貌，並提供您在溝通、領導、與相似相異的人共事、特質調適發展的具體、個人化建議。
                </p>
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "1930/1444",
                }}
              >
                <Image
                  src={I("ll-portrait.png")}
                  alt="個人化特質肖像"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 敏捷學習發展工具 ── */}
        <section style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "16px" }}>
              <div className="section-label">好玩、實用的</div>
            </div>
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(20px, 2.5vw, 32px)",
                color: "#221616",
                lineHeight: 1.3,
                marginBottom: "40px",
              }}
            >
              敏捷學習發展工具
            </h2>
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image
                src={I("ll-agile-tools.png")}
                alt="敏捷學習發展工具"
                width={2022}
                height={1252}
                style={{ width: "100%", height: "auto", display: "block" }}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ── 虛實整合數位應用 ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "16px" }}>
              <div className="section-label">虛實整合</div>
            </div>
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(20px, 2.5vw, 32px)",
                color: "#221616",
                lineHeight: 1.3,
                marginBottom: "16px",
              }}
            >
              多元創新的數位應用
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#333",
                marginBottom: "40px",
                maxWidth: "760px",
              }}
            >
              探索您 8 個維度的特質在「潛在」、「日常」、「壓力下」情境展現的變化。跟您的同事、朋友與家人分享、比對彼此的特質圖騰，討論彼此認知有哪些相同、哪些不同，透過不同人的反饋相互學習，提升個人覺察，同時也提升對於不同人更深層的認識與理解，幫助您學習了解跟不同人如何更有效地溝通、相處及互補協作！
            </p>
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image
                src={I("ll-digital.png")}
                alt="虛實整合多元創新的數位應用"
                width={2022}
                height={1252}
                style={{ width: "100%", height: "auto", display: "block" }}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ── Spark Coach ── */}
        <section style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">
            <div className="ll-two-col">
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(18px, 2vw, 24px)",
                    color: "#221616",
                    lineHeight: 1.3,
                    marginBottom: "4px",
                  }}
                >
                  Spark Coach 線上即時教練系統
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#f9bd00",
                    marginBottom: "20px",
                  }}
                >
                  特質發展與目標行動推進器
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.85,
                    color: "#333",
                  }}
                >
                  4 個步驟探索個人特質展現模式<br />
                  啟動個人化發展目標與行動計畫
                </p>
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "1754/1350",
                  position: "relative",
                }}
              >
                <Image
                  src={I("ll-spark-coach.png")}
                  alt="Spark Coach"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Journey to Composure ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            <div className="ll-two-col" style={{ direction: "rtl" }}>
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "1754/1350",
                  position: "relative",
                  direction: "ltr",
                }}
              >
                <Image
                  src={I("ll-jtc.png")}
                  alt="Journey to Composure"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  direction: "ltr",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(18px, 2vw, 24px)",
                    color: "#221616",
                    lineHeight: 1.3,
                    marginBottom: "4px",
                  }}
                >
                  Journey to Composure 線上即時練系統
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#f9bd00",
                    marginBottom: "20px",
                  }}
                >
                  壓力感知與調適器
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.85,
                    color: "#333",
                  }}
                >
                  5 個步驟探索個人「壓力情境」特質展現行為<br />
                  透過有意識地練習提升對於壓力的覺察與韌性
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 應用情境及使用對象 ── */}
        <section id="use-cases" style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "16px" }}>
              <div className="section-label">應用情境及使用對象</div>
            </div>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#333",
                marginBottom: "48px",
                maxWidth: "840px",
              }}
            >
              企業可應用 Lumina Learning 多元完整、一致性、系統化的工具與方法，建構組織內共同的語言、形塑文化和價值觀，可應用於組織人力資源的盤點、佈局、規劃，新事業部、專案團隊或組織重整人才配置模擬，關鍵人才 / 接班人的遴選與培育發展，團隊融合、凝聚、溝通、協作性提升，領導人自我覺察力、領導力、溝通力、教練力提升，透過「個人」與「團隊」的持續學習發展，推動企業組織的創新、轉型、升級！
            </p>

            <div className="ll-five-col">
              {targets.map((t, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                  }}
                >
                  <div style={{ aspectRatio: "4/3", position: "relative" }}>
                    <Image
                      src={t.img}
                      alt={t.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      unoptimized
                    />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <p
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#221616",
                        marginBottom: "8px",
                        lineHeight: 1.4,
                      }}
                    >
                      {t.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "13px",
                        lineHeight: 1.7,
                        color: "#555",
                      }}
                    >
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 認證合作夥伴計劃 ── */}
        <section id="certification" style={{ backgroundColor: "#221616" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  color: "#f9bd00",
                  marginBottom: "12px",
                }}
              >
                <span style={{ display: "block", width: "16px", height: "2px", background: "#f9bd00" }} />
                認證合作夥伴計劃
              </div>
            </div>
            <div className="ll-two-col">
              <div>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.85,
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "32px",
                  }}
                >
                  根據企業組織發展需求，由 Lumina Learning 原廠認證技術導入，培育內部種子，應用 Lumina 簡單、易用、有效的系統化工具與方法，建構組織內共同的語言、文化與價值觀，深化組織、團隊、個人適性學習與發展，提升團隊默契、信任、向心力，共創共贏。
                </p>
                <h3
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(16px, 1.8vw, 20px)",
                    color: "#ffffff",
                    marginBottom: "24px",
                    lineHeight: 1.4,
                  }}
                >
                  「Lumina Spark 國際認證執行師」認證班
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "32px",
                  }}
                >
                  認證學程結業，獲得原廠技術授權導入應用，擁有與全球同步、持續創新的系統化學習資訊、技術、工具與方法及在地化的技術支援與應用發展支持。
                </p>

                {/* Benefits grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    marginBottom: "32px",
                  }}
                >
                  {certBenefits.map((b, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "'Noto Sans', sans-serif",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#f9bd00",
                          flexShrink: 0,
                        }}
                      />
                      {b}
                    </div>
                  ))}
                </div>

                {/* Bonus */}
                <div
                  style={{
                    backgroundColor: "rgba(249,189,0,0.1)",
                    borderRadius: "12px",
                    padding: "20px",
                    marginBottom: "32px",
                    border: "1px solid rgba(249,189,0,0.3)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#f9bd00",
                      marginBottom: "12px",
                    }}
                  >
                    認證加值送
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    {certBonus.map((b, i) => (
                      <div
                        key={i}
                        style={{
                          fontFamily: "'Noto Sans', sans-serif",
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.7)",
                          display: "flex",
                          gap: "6px",
                          alignItems: "flex-start",
                        }}
                      >
                        <span style={{ color: "#f9bd00", flexShrink: 0 }}>✓</span>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc52OLdFL79IRuhW5DDyYMH7quJsxV5U7yA4_8ZW8nmWs_WDA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    洽詢認證課
                  </a>
                  <a
                    href="https://lin.ee/4hHDypS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-white"
                  >
                    加入官方 LINE
                  </a>
                </div>
              </div>

              {/* Image */}
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "1/1",
                  position: "relative",
                }}
              >
                <Image
                  src={I("NSH2um5HBjMsbuYI97pt4ImkcM.png")}
                  alt="Lumina Spark 國際認證執行師"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── YouTube 影片 ── */}
        <section style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "40px" }}>
              <div className="section-label">影片介紹</div>
            </div>
            <div className="ll-yt-grid">
              {ytVideos.map((v, i) => (
                <div key={i} style={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0`}
                    title={v.title}
                    allowFullScreen
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "12px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 常見問題 ── */}
        <section id="faq" style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner" style={{ maxWidth: "800px" }}>
            <div style={{ marginBottom: "40px" }}>
              <div className="section-label">常見問題</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{ borderBottom: "1px solid rgba(34,22,22,0.12)" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 0",
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
                        fontSize: "20px",
                        color: "#f9bd00",
                        transition: "transform 0.2s",
                        transform: openFaq === i ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div
                      style={{
                        paddingBottom: "20px",
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: 1.85,
                        color: "#333",
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
          style={{
            backgroundColor: "#24201e",
            position: "relative",
            overflow: "hidden",
          }}
          className="section-py-lg"
        >
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "45%",
              opacity: 0.3,
            }}
          >
            <Image
              src={I("ll-cta-bg.png")}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              unoptimized
            />
          </div>
          <div className="container-inner" style={{ position: "relative", zIndex: 2 }}>
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(22px, 3vw, 40px)",
                color: "#ffffff",
                lineHeight: 1.3,
                marginBottom: "20px",
                maxWidth: "560px",
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
                marginBottom: "36px",
                maxWidth: "500px",
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

        .ll-five-col {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .ll-yt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1199px) {
          .ll-two-col { grid-template-columns: 1fr; gap: 32px; }
          .ll-svc-row { grid-template-columns: 1fr; gap: 32px; }
          .ll-svc-row .ll-svc-text { order: 1 !important; }
          .ll-svc-row .ll-svc-img  { order: 2 !important; }
          .ll-five-col { grid-template-columns: repeat(3, 1fr); }
          .ll-yt-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 809px) {
          .ll-two-col { grid-template-columns: 1fr; gap: 24px; }
          .ll-five-col { grid-template-columns: repeat(2, 1fr); }
          .ll-yt-grid { grid-template-columns: 1fr; }
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
