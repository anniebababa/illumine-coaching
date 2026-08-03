"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const dropdownItems = [
    { label: "什麼是 Lumina？", href: "/lumina-learning#about-lumina" },
    { label: "Lumina 產品暨應用工具", href: "/lumina-learning#products" },
    { label: "應用情境及使用對象", href: "/lumina-learning#use-cases" },
    { label: "認證合作夥伴計畫", href: "/lumina-learning#certification" },
    { label: "常見問題", href: "/lumina-learning#faq" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "#ffffff",
          height: "148px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div
          className="container-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <Image
              src="/images/dialogmat.png"
              alt="Illumine 艾璐管顧"
              width={375}
              height={125}
              style={{ objectFit: "contain", height: "125px", width: "auto" }}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="header-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <Link
              href="/"
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                color: pathname === "/" ? "#221616" : "#666666",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              首頁
            </Link>

            <div style={{ position: "relative" }}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  color: pathname === "/lumina-learning" ? "#221616" : "#666666",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: 0,
                }}
              >
                Lumina learning 工具與課程
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    marginTop: "1px",
                    transition: "transform 0.2s",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    d="M1 1l5 5 5-5"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <>
                  {/* backdrop to close on outside click */}
                  <div
                    onClick={() => setDropdownOpen(false)}
                    style={{ position: "fixed", inset: 0, zIndex: 48 }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 20px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                      padding: "8px 0",
                      minWidth: "220px",
                      zIndex: 49,
                    }}
                  >
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "block",
                          fontFamily: "'Noto Sans', sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          color: "#221616",
                          textDecoration: "none",
                          padding: "12px 20px",
                          transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#fff8e6";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#f9bd00";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#221616";
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <a
              href="https://line.me/R/ti/p/@550ztoml"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
              style={{ fontSize: "14px", padding: "9px 20px" }}
            >
              立即諮詢
            </a>
          </nav>

          {/* Hamburger button — mobile/tablet only */}
          <button
            className="header-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="開啟選單"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <span style={{ display: "block", width: "26px", height: "2px", backgroundColor: "#221616", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "26px", height: "2px", backgroundColor: "#221616", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "26px", height: "2px", backgroundColor: "#221616", borderRadius: "2px" }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay${menuOpen ? " open" : ""}`} style={{ zIndex: 200 }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "48px",
          }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Illumine"
              width={120}
              height={40}
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
              unoptimized
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="關閉選單"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#ffffff",
              fontSize: "28px",
              lineHeight: 1,
              padding: "4px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav style={{ display: "flex", flexDirection: "column" }}>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontWeight: 700,
              fontSize: "26px",
              color: pathname === "/" ? "#f9bd00" : "#ffffff",
              textDecoration: "none",
              padding: "20px 0",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            首頁
          </Link>
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <button
              onClick={() => setMobileSubOpen((v) => !v)}
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "26px",
                color: pathname === "/lumina-learning" ? "#f9bd00" : "#ffffff",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "20px 0",
                width: "100%",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Lumina Learning 工具與課程
              <svg
                width="14"
                height="9"
                viewBox="0 0 12 7"
                fill="none"
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  transition: "transform 0.2s",
                  transform: mobileSubOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileSubOpen && (
              <div style={{ paddingBottom: "12px" }}>
                {dropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setMenuOpen(false); setMobileSubOpen(false); }}
                    style={{
                      display: "block",
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "18px",
                      color: "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      padding: "10px 0 10px 16px",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div style={{ marginTop: "40px" }}>
            <a
              href="https://line.me/R/ti/p/@550ztoml"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
              style={{ fontSize: "16px", padding: "12px 32px" }}
              onClick={() => setMenuOpen(false)}
            >
              立即諮詢
            </a>
          </div>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: "148px" }} />

      <style>{`
        @media (max-width: 1199px) {
          .header-desktop-nav { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
