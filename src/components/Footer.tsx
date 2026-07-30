import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#24201e",
        color: "#ffffff",
        padding: "48px 0 32px",
      }}
    >
      <div className="container-inner">
        {/* Main footer content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "40px",
          }}
          className="footer-grid"
        >
          {/* Logo & description */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "16px" }}>
              <Image
                src="https://framerusercontent.com/images/6aNmRnYaE0Qsr7TYhujtvePY1k.png"
                alt="Illumine 艾璐管顧"
                width={120}
                height={40}
                style={{ objectFit: "contain", height: "40px", width: "auto" }}
                unoptimized
              />
            </Link>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: "13px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.6)",
                maxWidth: "280px",
              }}
            >
              Illuminating your vision,<br />empowering your potential
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              頁面
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link
                href="/"
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.75)",
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
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                Lumina learning 工具與課程
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              聯絡我們
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="https://line.me/R/ti/p/@550ztoml"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                }}
              >
                LINE 立即諮詢
              </a>
              <a
                href="https://lin.ee/4hHDypS"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                }}
              >
                加入官方 LINE
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            © 2025 Illumine 艾璐管顧. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Lumina Learning Taiwan 唯一官方認證執行師培訓機構
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1199px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
