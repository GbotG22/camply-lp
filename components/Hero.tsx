import { PhoneFrame } from "@/components/PhoneFrame";

const APP_STORE_URL = "#"; // 公開後にURLを差し替えてください

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E4E1D8] bg-[#F8F6F1] text-[#11172D]">
      <SiteHeader />

      <div className="mx-auto grid min-h-[680px] max-w-5xl grid-cols-1 items-center gap-14 px-6 pb-10 pt-24 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E2DED3] bg-white px-4 py-2 text-sm font-bold text-[#5360D6] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#5360D6]" />
            iOSアプリ・完全無料
          </div>

          <h1 className="text-[42px] font-black leading-[1.16] tracking-normal sm:text-6xl lg:text-[62px]">
            授業・課題・バイト・お金を
            <br />
            <span className="text-[#5861D9]">ひとつにまとめる、</span>
            <br />
            大学生のための相棒。
          </h1>

          <p className="mt-8 max-w-lg text-lg font-medium leading-8 text-[#555B6D]">
            時間割から給料日まで。大学生のスケジュールと支出を、camplyだけで完結。
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={APP_STORE_URL}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#5861D9] px-8 text-base font-black text-white shadow-[0_16px_34px_rgba(88,97,217,0.26)] transition hover:bg-[#4751C9]"
            >
              <span aria-hidden="true">●</span>
              App Storeでダウンロード
            </a>
            <a
              href="#features"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-[#DEDAD0] bg-white px-8 text-base font-black text-[#11172D] shadow-sm transition hover:border-[#C9C3B7]"
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

        <div className="relative mx-auto flex h-[450px] w-full max-w-[430px] items-end justify-center overflow-hidden rounded-[2rem] bg-[#EBEAF8] shadow-[0_26px_70px_rgba(17,23,45,0.08)]">
          <div className="absolute bottom-10 left-1/2 h-28 w-[82%] -translate-x-1/2 rounded-full bg-[#C7CDED] blur-2xl" />
          <div className="absolute right-8 top-14 rotate-[8deg] opacity-95">
            <PhoneFrame src="/screenshots/money.png" alt="お金画面" compact />
          </div>
          <div className="relative z-10 translate-y-12 rotate-[-1deg]">
            <PhoneFrame src="/screenshots/home.png" alt="ホーム画面" />
          </div>
        </div>
      </div>

      <StatsStrip />
    </section>
  );
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E4E1D8] bg-[#F8F6F1]/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3 text-xl font-black text-[#101935]">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#5861D9] text-xs text-white">c</span>
          camply
        </a>
        <nav className="hidden items-center gap-9 text-sm font-black text-[#2D3448] md:flex">
          <a href="#features" className="hover:text-[#5861D9]">機能</a>
          <a href="#screenshots" className="hover:text-[#5861D9]">画面</a>
          <a href="#pricing" className="hover:text-[#5861D9]">料金</a>
          <a href="#faq" className="hover:text-[#5861D9]">よくある質問</a>
          <a
            href={APP_STORE_URL}
            className="rounded-xl bg-[#5861D9] px-6 py-3 text-white shadow-[0_10px_26px_rgba(88,97,217,0.24)] hover:bg-[#4751C9]"
          >
            ● App Storeで入手
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
    <div className="border-t border-[#E4E1D8] bg-[#F8F6F1]">
      <div className="mx-auto grid max-w-5xl grid-cols-2 border-l border-[#E4E1D8] md:grid-cols-4">
        {stats.map(([title, desc]) => (
          <div key={title} className="border-r border-[#E4E1D8] px-5 py-9">
            <p className="text-3xl font-black text-[#5861D9]">{title}</p>
            <p className="mt-2 text-sm font-bold text-[#5F667A]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
