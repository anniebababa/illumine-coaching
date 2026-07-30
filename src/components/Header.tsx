"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
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
          <nav
            style={{ display: "flex", alignItems: "center", gap: "32px" }}
          >
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

            <Link
              href="/lumina-learning"
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                color: pathname === "/lumina-learning" ? "#221616" : "#666666",
                textDecoration: "none",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Lumina learning 工具與課程
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                aria-hidden="true"
                style={{ flexShrink: 0, marginTop: "1px" }}
              >
                <path
                  d="M1 1l5 5 5-5"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

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
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: "148px" }} />
    </>
  );
}
