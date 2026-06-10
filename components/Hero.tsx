import { PhoneFrame } from "@/components/PhoneFrame";

const APP_STORE_URL = "#"; // 公開後にURLを差し替えてください

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4F8EF7] via-[#5B6CF5] to-[#7C3AED] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-0 flex flex-col items-center text-center gap-6">
        {/* バッジ */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          iOS アプリ — 完全無料で使い始められます
        </div>

        {/* キャッチコピー */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
          授業・課題・バイト・お金を<br />
          <span className="text-yellow-300">ひとつにまとめる</span>大学生アプリ
        </h1>

        <p className="max-w-lg text-base md:text-lg text-white/80 leading-relaxed">
          時間割から給料日まで、大学生のすべてのスケジュールと支出を<br className="hidden md:block" />
          camply だけで完結させましょう。
        </p>

        {/* CTA */}
        <AppStoreButton href={APP_STORE_URL} />

        {/* 信頼指標 */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/60 text-sm mt-2">
          <span>✓ 完全無料</span>
          <span>✓ 広告なし</span>
          <span>✓ アカウント登録のみ</span>
        </div>

        {/* スクリーンショット群（浮かせて配置） */}
        <div className="mt-12 w-full max-w-4xl mx-auto relative flex justify-center items-end gap-3 md:gap-5">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-400/30 blur-3xl rounded-full" />
          <PhoneFrame src="/screenshots/schedule.png" alt="予定画面" tilt="-6deg" yOffset="24px" />
          <PhoneFrame src="/screenshots/home.png"     alt="ホーム画面" tilt="0deg"  yOffset="0px"  large />
          <PhoneFrame src="/screenshots/money.png"    alt="お金画面"   tilt="6deg"  yOffset="24px" />
        </div>
      </div>
    </section>
  );
}

export function AppStoreButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 bg-black text-white rounded-2xl px-7 py-4 text-base font-semibold hover:bg-gray-900 transition-colors shadow-2xl"
      aria-label="App Store でダウンロード"
    >
      <AppleIcon />
      <span>
        <span className="block text-xs font-normal opacity-60 leading-none mb-0.5">Download on the</span>
        <span className="text-lg leading-none">App Store</span>
      </span>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
