import { PhoneFrame } from "@/components/PhoneFrame";

const APP_STORE_URL = "#"; // 公開後にURLを差し替えてください

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E8ECF5] bg-white text-[#0F1833]">
      <SiteHeader />

      <div className="mx-auto grid min-h-[640px] max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-10 pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:pt-24">
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#F2F4FF] px-4 py-2 text-sm font-bold text-[#5360D6]">
            <span className="h-2 w-2 rounded-full bg-[#5360D6]" />
            iOSアプリ・完全無料
          </div>

          <h1 className="text-[42px] font-black leading-[1.13] tracking-normal sm:text-6xl lg:text-[64px]">
            授業・課題・バイト・お金を
            <br />
            <span className="text-[#5861D9]">ひとつにまとめる</span>大学生アプリ
          </h1>

          <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-[#5F667A]">
            時間割から給料日まで。大学生のすべてのスケジュールと支出を、camplyだけで完結させましょう。
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={APP_STORE_URL}
              className="inline-flex h-14 items-center justify-center rounded-xl bg-[#5861D9] px-8 text-base font-black text-white shadow-[0_16px_34px_rgba(88,97,217,0.28)] transition hover:bg-[#4751C9]"
            >
              App Storeでダウンロード
            </a>
            <a
              href="#features"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-[#DDE2EF] bg-white px-8 text-base font-black text-[#0F1833] transition hover:border-[#BEC6DA]"
            >
              機能を見る
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-sm font-black text-[#101935]">
            <span>✓ 完全無料</span>
            <span>✓ 広告なし</span>
            <span>✓ アカウント登録のみ</span>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[430px] w-full max-w-[520px] items-center justify-center">
          <div className="absolute bottom-12 left-1/2 h-28 w-[82%] -translate-x-1/2 rounded-full bg-[#C7CDED] blur-2xl" />
          <div className="absolute right-4 top-9 rotate-[8deg] opacity-95">
            <PhoneFrame src="/screenshots/money.png" alt="お金画面" />
          </div>
          <div className="relative z-10 -translate-x-10 translate-y-8 rotate-[-1deg] sm:-translate-x-16">
            <PhoneFrame src="/screenshots/home.png" alt="ホーム画面" large />
          </div>
        </div>
      </div>

      <StatsStrip />
    </section>
  );
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E8ECF5] bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3 text-xl font-black text-[#101935]">
          <span className="h-6 w-6 rounded-md bg-[#5861D9]" />
          camply
        </a>
        <nav className="hidden items-center gap-9 text-sm font-black text-[#2D3448] md:flex">
          <a href="#features" className="hover:text-[#5861D9]">機能</a>
          <a href="#screenshots" className="hover:text-[#5861D9]">画面</a>
          <a href="#pricing" className="hover:text-[#5861D9]">料金</a>
          <a href="#faq" className="hover:text-[#5861D9]">よくある質問</a>
          <a
            href={APP_STORE_URL}
            className="rounded-xl bg-[#5861D9] px-6 py-3 text-white shadow-[0_10px_26px_rgba(88,97,217,0.25)] hover:bg-[#4751C9]"
          >
            App Storeで入手
          </a>
        </nav>
      </div>
    </header>
  );
}

function StatsStrip() {
  const stats = [
    ["¥0", "完全無料・追加課金なし"],
    ["広告なし", "集中をジャマしない設計"],
    ["登録のみ", "アカウント登録だけで開始"],
    ["iOS", "iPhoneに最適化"],
  ];

  return (
    <div className="border-t border-[#E8ECF5] bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 border-l border-[#E8ECF5] md:grid-cols-4">
        {stats.map(([title, desc]) => (
          <div key={title} className="border-r border-[#E8ECF5] px-5 py-9">
            <p className="text-3xl font-black text-[#5861D9]">{title}</p>
            <p className="mt-2 text-sm font-bold text-[#5F667A]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
