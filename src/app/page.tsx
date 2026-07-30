"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IMGS = {
  hero: "/images/hero.webp",
  about: "/images/about.jpg",
  lumina: "/images/lumina.png",
  dialogmat: "/images/dialogmat.png",
  training: "/images/training.jpg",
  coaching: "/images/coaching.png",
  development: "/images/development.png",
  event1: "/images/event1.png",
  event2: "/images/event2.png",
  event3: "/images/event3.png",
  article1: "/images/article1.png",
  article2: "/images/article2.png",
  article3: "/images/article3.png",
  podcast: "/images/podcast.png",
  testimonial1: "/images/partner1.png",
  testimonial2: "/images/partner2.jpg",
  partner1: "/images/partner1.png",
  partner2: "/images/partner2.jpg",
  cta: "/images/cta.png",
};

const whatWeDo = [
  { en: "Talent Developmont", en2: "Successor Planning", zh: "關鍵人才培育", zh2: "接班人計劃" },
  { en: "Leadership Developmont", en2: "", zh: "領導人 / 領導力", zh2: "提升與發展" },
  { en: "Organization Change &", en2: "Transformation", zh: "組織變革與轉型", zh2: "" },
  { en: "Communication &", en2: "Cohesion", zh: "多元融合 / 有效溝通 / 團隊凝聚", zh2: "" },
  { en: "Team Collaboration", en2: "", zh: "團隊 / 跨部協作", zh2: "當責與效能提升" },
  { en: "Sales Team Development", en2: "", zh: "銷售團隊人員發展", zh2: "與績效提升" },
];

const services = [
  {
    tag: "服務項目",
    en: "Lumina Assessment",
    zh: "特質測評發展工具",
    desc: "Lumina Learning 打破傳統「定型、分類」的性格測試格局，用動態、數位化、視覺化、互動體驗的方式展現出每個人的獨一無二及「個體性差異」，提供兼具科技與人性的「分析人的技術及學習發展應用工具」，協助組織、團隊、個人發展敏捷的思維與行動力！",
    img: IMGS.lumina,
    imgW: 1024, imgH: 768,
    btns: [
      { label: "了解更多", href: "/lumina-learning", external: false },
      { label: "洽詢認證課", href: "https://docs.google.com/forms/d/e/1FAIpQLSc52OLdFL79IRuhW5DDyYMH7quJsxV5U7yA4_8ZW8nmWs_WDA/viewform", external: true },
    ],
    prefix: "來自英國的 Lumina Learning 提供人格特質 (Personality)、情商 (Emotion Intelligence)、職能 (Competency) 等測評工具及「組織」、「團隊」、「個人」的「招募」與「發展」整體解決方案，並提供相關產品技術服務導入企業應用之認證培育及輔導。",
    imgRight: false,
  },
  {
    tag: "",
    en: "DialogMat 思考圖",
    zh: "",
    desc: "透過結合 SPECIFIQUE 的 DialogMat 思考圖，將可幫助您的團隊針對組織發展、變革管理、內部溝通、流程優化等各種議題實現「對話-對焦-對策」，高效聚焦、深度對話、同步資訊、凝聚共識，產出精準且具執行力的決策方案。",
    img: IMGS.dialogmat,
    imgW: 2480, imgH: 1748,
    btns: [
      { label: "了解更多", href: "https://weekielife.com/blog/dialogmat-visual-dialogue-tool", external: true },
    ],
    prefix: "來自法國的 SPECIFIQUE，研發提供 DialogMat 思考圖的圖像化桌布工具、系統化引導流程與方法，涵蓋「領導」、「市場」、「創新」、「組織」、「個人」效能提升等模組化培訓解決方案，提供繁體中文及多國語言。",
    imgRight: false,
  },
  {
    tag: "",
    en: "Interesting. Interactive. Innovative. Inspiring. In-depth Learning.",
    zh: "培訓學程",
    desc: "我們提供各式主題學習工作坊，並可根據客戶需求，結合 Lumina Learning 人才測評工具、DialogMat思考圖及其他理論應用工具與方法，規劃客製化主題學程，營造有趣、互動的體驗式共學場域，激發學員創造力，促進深度覺察與有效學習。",
    img: IMGS.training,
    imgW: 2653, imgH: 1580,
    btns: [
      { label: "了解更多", href: "https://weekielife.com/blog/illumine-what-we-do", external: true },
    ],
    prefix: "",
    imgRight: true,
  },
  {
    tag: "",
    en: "Coaching Programs",
    zh: "教練支持發展計劃",
    desc: "根據企業組織團隊與個人的學習發展需求，為企業內的高階主管、團隊成員客製規劃長期、短期的教練支持計畫，有效支持個人與團隊的共學、共創，讓想要的改變發生！",
    img: IMGS.coaching,
    imgW: 1220, imgH: 911,
    btns: [
      { label: "了解更多", href: "https://weekielife.com/blog/illumine-what-we-do", external: true },
    ],
    prefix: "",
    imgRight: false,
  },
  {
    tag: "",
    en: "Development Solutions",
    zh: "組織人員適性發展解決方案",
    desc: "依據組織團隊現況及目標，做人才資源盤點檢核，針對「高階領導接班人」做個人化學習與發展支持，提升個人的領導能力；針對跨部門及不同階層的關鍵人才，規畫短中長期的組織暨個人化學習發展計劃。",
    img: IMGS.development,
    imgW: 1024, imgH: 770,
    btns: [
      { label: "了解更多", href: "https://weekielife.com/blog/illumine-what-we-do", external: true },
    ],
    prefix: "",
    imgRight: true,
  },
];

const events = [
  {
    title: "2025 ATD亞太年會 × Lumina Learning Taiwan｜限量VIP免費觀展證申請中！",
    img: IMGS.event1, imgW: 1024, imgH: 639,
    link: "https://weekielife.com/blog/atd-lumina-vip-2025",
  },
  {
    title: "9月共學會｜Lumina Spark高階主管教練應用全攻略",
    img: IMGS.event2, imgW: 889, imgH: 498,
    link: "https://weekielife.com/blog/lumina-spark-executive-coaching-0923",
  },
  {
    title: "擁抱不確定性：Lumina Spark × 即興 的探索與創造之旅",
    img: IMGS.event3, imgW: 1024, imgH: 566,
    link: "https://weekielife.com/blog/lumina-spark-improvisation-workshop",
  },
];

const articles = [
  {
    title: "Lumina Learning 應用工具介紹｜Leader・Team・Sales・Emotion・Select 全解析",
    img: IMGS.article1, imgW: 720, imgH: 540,
    link: "https://weekielife.com/blog/lumina-learning-tools-overview",
  },
  {
    title: "Illumine Coaching｜打造覺察力 × 行動力 × 領導力的企業成長夥伴",
    subtitle: "從學習設計、教練支持到組織發展，一站式培訓方案，助力企業蛻變與升級",
    img: IMGS.article2, imgW: 720, imgH: 540,
    link: "https://weekielife.com/blog/illumine-what-we-do",
  },
  {
    title: "Lumina Learning 認證合作夥伴計畫",
    img: IMGS.article3, imgW: 720, imgH: 540,
    link: "https://weekielife.com/hashtag/illumine-lumine-course",
  },
];

const testimonials = [
  {
    label: "企業高階領導人",
    title: "企業高階領導人帶領組織轉化之旅",
    desc: "關鍵數位行銷創辦人謝依如 (RubyHsieh) 是一位業界知名、帶領團隊不斷創新、突破的優秀領導人。她就像是員工和客戶心目中的太陽，總是光芒四射，總是知道自己要什麽，總是為大家指引方向。當每個人都說她很棒、員工都仰望她時，沒有人聽到她內心真正的聲音。一個 CEO，如何突破創業十年的瓶頸？如何找回自己的初心與熱情？",
    videoId: "2HOcOpbOtGI",
  },
  {
    label: "VUCA 時代轉型",
    title: "VUCA時代「思維心態+創新智慧工具+ 專業技能」轉化升級，提升組織與個人競爭力",
    desc: "Lumina Learning Taiwan 專訪四位在組織發展、領導力人才發展的管理顧問創辦人、教練、顧問等專家，分享他們成為 Lumina Spark 企業認證合作夥伴，應用 Lumina 的創新組織與個人發展應用，協助他們與他們的企業客戶組織團隊轉化的旅程！",
    videoId: "VJTaP6F5VZ0",
  },
  {
    label: "企業認證合作夥伴",
    title: "企業認證合作夥伴見證分享",
    desc: "Lumina Learning Taiwan 專訪三位企業高階領導人，分享他們成為 Lumina Spark 企業認證合作夥伴，應用 Lumina 的創新組織與個人發展應用，協助他們與他們的組織團隊轉化的旅程！",
    videoId: "q77Fx1qVaTA",
    btns: [
      { label: "洽詢認證課", href: "https://docs.google.com/forms/d/e/1FAIpQLSc52OLdFL79IRuhW5DDyYMH7quJsxV5U7yA4_8ZW8nmWs_WDA/viewform", style: "accent" },
      { label: "立即諮詢", href: "https://line.me/R/ti/p/@550ztoml", style: "dark" },
    ],
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            minHeight: "clamp(400px, 55vw, 600px)",
            overflow: "hidden",
            backgroundColor: "#24201e",
          }}
        >
          <Image
            src={IMGS.hero}
            alt="Illumine Hero"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
            unoptimized
          />
        </section>

        {/* ── Hero Text Block ── */}
        <section style={{ backgroundColor: "#f2f2f2" }}>
          <div
            className="container-inner"
            style={{ paddingTop: "48px", paddingBottom: "48px" }}
          >
            <h1
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(11px, 1.5vw, 21px)",
                lineHeight: 1.25,
                color: "#221616",
                marginBottom: "16px",
                textAlign: "left",
              }}
            >
              Illuminating your vision, empowering your potential
            </h1>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(31px, 3.5vw, 43px)",
                color: "#221616",
                marginBottom: "12px",
                textAlign: "left",
              }}
            >
              打造高績效團隊，從了解人開始
            </p>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(18px, 1.6vw, 21px)",
                lineHeight: 1.75,
                color: "#221616",
                textAlign: "left",
              }}
            >
              從領導者到團隊夥伴，illumine 幫助你掌握個人與團隊潛能，提升溝通、合作與績效
            </p>
          </div>
        </section>

        {/* ── About ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            <div
              style={{
                maxWidth: "820px",
                margin: "0 auto",
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              {/* 左引號 */}
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "80px",
                  lineHeight: 1,
                  color: "#221616",
                  flexShrink: 0,
                  marginTop: "-8px",
                }}
              >
                &#8220;
              </span>

              {/* 文字 + 右引號 */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: 2,
                    color: "#221616",
                    textAlign: "center",
                  }}
                >
                  艾璐管顧集結來自不同產業、跨專業、企業實務經驗豐富的高階專業經理人，擁有 Lumina Learning 認證執行師、ICF 國際認證專業教練、DialogMat 思考圖認證執行師、ATD 培訓大師等多元專業，成為您企業的協作夥伴及陪跑教練，與您的組織團隊一起轉化、成長！
                </p>
              </div>

              {/* 右引號 */}
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "80px",
                  lineHeight: 1,
                  color: "#221616",
                  flexShrink: 0,
                  alignSelf: "flex-end",
                  marginBottom: "-36px",
                }}
              >
                &#8221;
              </span>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            {/* Title */}
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  color: "#f9bd00",
                  letterSpacing: "0.08em",
                }}
              >
                &bull;&nbsp;&nbsp;WHAT WE DO&nbsp;&nbsp;&bull;
              </span>
            </div>

            {/* Grid */}
            <div className="wwdo-grid">
              {whatWeDo.map((item, i) => {
                const gradients = [
                  "linear-gradient(135deg, #6B5EF8, #FF3366)",
                  "linear-gradient(135deg, #FF4422, #FF9900)",
                  "linear-gradient(135deg, #CCDD11, #00CCBB)",
                  "linear-gradient(135deg, #6B5EF8, #FF3366)",
                  "linear-gradient(135deg, #FF4422, #FF9900)",
                  "linear-gradient(135deg, #CCDD11, #00CCBB)",
                ];
                return (
                  <div
                    key={i}
                    style={{
                      background: gradients[i],
                      padding: "8px",
                      borderRadius: "24px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "17px",
                        padding: "32px 24px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        boxSizing: "border-box",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Noto Sans', sans-serif",
                          fontWeight: 400,
                          fontSize: "16px",
                          color: "#888",
                          lineHeight: 1.6,
                          marginBottom: "12px",
                        }}
                      >
                        {item.en}
                        {item.en2 && (
                          <>
                            <br />
                            {item.en2}
                          </>
                        )}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Noto Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "22px",
                          color: "#221616",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.zh}
                        {item.zh2 && (
                          <>
                            <br />
                            {item.zh2}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 服務項目 ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            {/* 置中金色標題 */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <span
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  color: "#f9bd00",
                  letterSpacing: "0.06em",
                }}
              >
                &bull;&nbsp;&nbsp;服務項目&nbsp;&nbsp;&bull;
              </span>
            </div>

            {/* 前言 */}
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#444",
                marginBottom: "56px",
              }}
            >
              {services[0].prefix}
            </p>

            {/* 服務列表 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {services.map((svc, i) => (
                <div key={i}>
                  <div className="svc-row" data-imgright={svc.imgRight ? "true" : "false"}>
                    {/* 圖片 */}
                    <div
                      className="svc-img"
                      style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        aspectRatio: `${svc.imgW}/${svc.imgH}`,
                      }}
                    >
                      <Image
                        src={svc.img}
                        alt={svc.zh || svc.en}
                        width={svc.imgW}
                        height={svc.imgH}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        unoptimized
                      />
                    </div>

                    {/* 文字 */}
                    <div className="svc-text">
                      {/* 英文小標（灰色） */}
                      <p
                        style={{
                          fontFamily: "'Noto Sans', sans-serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          color: "#888",
                          marginBottom: "8px",
                        }}
                      >
                        {svc.en}
                      </p>
                      {/* 中文大標（金色） */}
                      {svc.zh && (
                        <h3
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(22px, 2.5vw, 34px)",
                            color: "#f9bd00",
                            lineHeight: 1.3,
                            marginBottom: "20px",
                          }}
                        >
                          {svc.zh}
                        </h3>
                      )}
                      {/* 說明文字 */}
                      <p
                        style={{
                          fontFamily: "'Noto Sans', sans-serif",
                          fontWeight: 400,
                          fontSize: "15px",
                          lineHeight: 1.9,
                          color: "#333",
                          marginBottom: "28px",
                        }}
                      >
                        {svc.desc}
                      </p>
                      {/* 按鈕 */}
                      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                        {svc.btns.map((btn, bi) => (
                          <a
                            key={bi}
                            href={btn.href}
                            target={btn.external ? "_blank" : undefined}
                            rel={btn.external ? "noopener noreferrer" : undefined}
                            className={bi === 0 ? "btn-accent" : "btn-dark"}
                          >
                            {btn.label} &rsaquo;
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 虛線分隔 */}
                  {i < services.length - 1 && (
                    <div
                      style={{
                        borderTop: "2px dashed rgba(249,189,0,0.45)",
                        margin: "64px 0",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 最新活動 ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "40px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div className="section-label">最新活動</div>
              <a
                href="https://weekielife.com/hashtag/illumine-lumina-event"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                瀏覽全部
              </a>
            </div>
            <div className="three-col-grid">
              {events.map((ev, i) => (
                <a
                  key={i}
                  href={ev.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f8f8fa",
                  }}
                >
                  <div style={{ aspectRatio: "4/3", position: "relative" }}>
                    <Image
                      src={ev.img}
                      alt={ev.title}
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <div style={{ padding: "20px 20px 24px" }}>
                    <p
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        lineHeight: 1.65,
                        color: "#221616",
                      }}
                    >
                      {ev.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 最新文章 ── */}
        <section style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "40px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div className="section-label">最新文章</div>
              <a
                href="https://weekielife.com/hashtag/illumine-lumine-course"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                瀏覽全部
              </a>
            </div>
            <div className="three-col-grid">
              {articles.map((art, i) => (
                <a
                  key={i}
                  href={art.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ aspectRatio: "4/3", position: "relative" }}>
                    <Image
                      src={art.img}
                      alt={art.title}
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <div style={{ padding: "20px 20px 24px" }}>
                    <p
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        lineHeight: 1.65,
                        color: "#221616",
                        marginBottom: "subtitle" in art && art.subtitle ? "6px" : "0",
                      }}
                    >
                      {art.title}
                    </p>
                    {"subtitle" in art && art.subtitle && (
                      <p
                        style={{
                          fontFamily: "'Noto Sans', sans-serif",
                          fontWeight: 400,
                          fontSize: "13px",
                          lineHeight: 1.65,
                          color: "#666",
                        }}
                      >
                        {art.subtitle}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Podcast ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "40px" }}>
              <div className="section-label">Podcast</div>
            </div>
            <div className="about-grid">
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "1/1",
                  position: "relative",
                }}
              >
                <Image
                  src={IMGS.podcast}
                  alt="Me.We Palette Podcast"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(20px, 2.5vw, 32px)",
                    color: "#221616",
                    lineHeight: 1.4,
                    marginBottom: "24px",
                  }}
                >
                  Me.We_Palette Podcast
                </h3>
                <div>
                  <a
                    href="https://linktr.ee/Me.We_Palette"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark"
                  >
                    瀏覽全部
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 客戶見證 ── */}
        <section style={{ backgroundColor: "#f8f8fa" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "32px" }}>
              <div className="section-label-dark">客戶見證</div>
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "8px 20px",
                    borderRadius: "100px",
                    cursor: "pointer",
                    border: activeTab === i ? "none" : "1px solid #ddd",
                    background: activeTab === i ? "#221616" : "transparent",
                    color: activeTab === i ? "#ffffff" : "#555",
                    transition: "all 0.2s",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Active testimonial */}
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{ display: activeTab === i ? "grid" : "none" }}
                className="about-grid"
              >
                {/* YouTube embed */}
                <div style={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${t.videoId}?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0`}
                    title={t.title}
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

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3
                    style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(16px, 1.8vw, 22px)",
                      color: "#221616",
                      lineHeight: 1.45,
                      marginBottom: "16px",
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: 1.85,
                      color: "#333",
                      marginBottom: t.btns ? "24px" : "0",
                    }}
                  >
                    {t.desc}
                  </p>
                  {t.btns && (
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      {t.btns.map((btn, bi) => (
                        <a
                          key={bi}
                          href={btn.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={btn.style === "accent" ? "btn-accent" : "btn-dark"}
                        >
                          {btn.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 策略合作夥伴 ── */}
        <section style={{ backgroundColor: "#ffffff" }} className="section-py">
          <div className="container-inner">
            <div style={{ marginBottom: "48px" }}>
              <div className="section-label">策略合作夥伴</div>
            </div>
            <div className="about-grid">
              {/* Partner 1 */}
              <div
                style={{
                  backgroundColor: "#f8f8fa",
                  borderRadius: "16px",
                  padding: "40px",
                }}
              >
                <div style={{ marginBottom: "20px", height: "60px", display: "flex", alignItems: "center" }}>
                  <Image
                    src={IMGS.partner1}
                    alt="拾田創意"
                    width={506}
                    height={206}
                    style={{ height: "48px", width: "auto", objectFit: "contain" }}
                    unoptimized
                  />
                </div>
                <h4
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#221616",
                    marginBottom: "12px",
                  }}
                >
                  拾田創意
                </h4>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.85,
                    color: "#333",
                  }}
                >
                  拾田創意以「用溫柔的心培育土地與人之間的關係，用行動守護共生的土壤」為宗旨，透過視覺創作、U型理論與前瞻引導，融合社會藝術（敘畫 Scribing 與社會流現劇場 SPT）及生態系統領導力，啟動集體深度對話與共創洞見，滋養永續共生的未來想像。
                </p>
              </div>

              {/* Partner 2 */}
              <div
                style={{
                  backgroundColor: "#f8f8fa",
                  borderRadius: "16px",
                  padding: "40px",
                }}
              >
                <div style={{ marginBottom: "20px", height: "60px", display: "flex", alignItems: "center" }}>
                  <Image
                    src={IMGS.partner2}
                    alt="群特管顧"
                    width={398}
                    height={300}
                    style={{ height: "48px", width: "auto", objectFit: "contain" }}
                    unoptimized
                  />
                </div>
                <h4
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#221616",
                    marginBottom: "12px",
                  }}
                >
                  群特管顧
                </h4>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.85,
                    color: "#333",
                  }}
                >
                  組織發展專家 - Specifique 擁有超過 35 年協助企業變革的實務經驗，其獨創的「Dialogmat思考圖™」方法論，擅長將複雜的商業議題轉化，引導團隊以高效的對話，對焦組織議題，進而產出對策與行動。
                </p>
              </div>
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
              width: "48%",
              opacity: 0.35,
            }}
          >
            <Image
              src={IMGS.cta}
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              unoptimized
            />
          </div>
          <div className="container-inner" style={{ position: "relative", zIndex: 2 }}>
            <h2
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(24px, 3.5vw, 44px)",
                color: "#ffffff",
                lineHeight: 1.3,
                marginBottom: "24px",
                maxWidth: "540px",
              }}
            >
              遇見更好的自己
              <br />
              與更有默契的團隊
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.8)",
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              透過科學化的人格分析工具，協助團隊成員看見自己與他人的行為風格，
              提升溝通效率、合作默契與領導效能。
              不論是組織成長、人才發展或部門共識建立，都是一場值得投資的旅程，
              現在就讓我們一起開始！
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
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .wwdo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .three-col-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .svc-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .svc-row[data-imgright="false"] .svc-text { order: 2; }
        .svc-row[data-imgright="false"] .svc-img  { order: 1; }
        .svc-row[data-imgright="true"]  .svc-text { order: 1; }
        .svc-row[data-imgright="true"]  .svc-img  { order: 2; }

        @media (max-width: 1199px) {
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
          .svc-row { grid-template-columns: 1fr; gap: 32px; }
          .svc-row .svc-text { order: 1 !important; }
          .svc-row .svc-img  { order: 2 !important; }
          .three-col-grid { grid-template-columns: repeat(2, 1fr); }
          .wwdo-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 809px) {
          .about-grid { grid-template-columns: 1fr; gap: 24px; }
          .three-col-grid { grid-template-columns: 1fr; }
          .wwdo-grid { grid-template-columns: 1fr 1fr; }
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
