import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina Spark唯一官方認證執行師培訓機構｜提供Lumina Learning全系列人才招募與發展測評、思考圖工具及企業教練等服務，協助企業組織/團隊/個人發展應用技術導入暨協作夥伴－Illumine艾璐管顧",
  description: "提供Lumina Spark, Lumina Leader, Lumina Team, Lumina Sales, Lumina Emotion及Lumina Select等創新、全方位人才招募與發展評測工具及系統化整體解決方案，並認證培訓相關工具之專業執行師，協助企業導入應用;結合擁有跨產業實務經驗及Lumina產品服務的專業認證執行師，提供企業教練、顧問及培訓等服務。",
  icons: {
    icon: "https://framerusercontent.com/images/6aNmRnYaE0Qsr7TYhujtvePY1k.png",
    apple: "https://framerusercontent.com/images/6aNmRnYaE0Qsr7TYhujtvePY1k.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={notoSans.variable}>
      <body style={{ fontFamily: "'Noto Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
