const freeFeatures = [
  "時間割・授業管理",
  "課題・テスト・レポート管理",
  "バイトシフト管理・給与計算",
  "給料日通知",
  "月ごとの収支トラッキング",
  "サブスク管理",
  "詳細な通知設定",
];

const steps = [
  ["1", "ダウンロード", "App Storeから無料で入手。iPhoneに対応しています。"],
  ["2", "アカウント登録", "メールアドレスの登録だけ。約30秒で完了。クレジットカードは不要です。"],
  ["3", "予定とお金を登録", "授業・バイト・支出を登録すれば、毎日ひらきたくなるアプリに。"],
];

export default function Pricing() {
  return (
    <>
      <section className="bg-[#0D1733] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.34em] text-[#8590E8]">
              <span className="h-px w-8 bg-[#8590E8]" />
              How It Works
            </p>
            <h2 className="mt-6 text-4xl font-black tracking-normal sm:text-5xl">
              はじめ方は、かんたん3ステップ。
            </h2>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {steps.map(([num, title, desc]) => (
              <div key={num} className="border-white/10 py-4 md:border-l md:px-8 first:md:border-l-0">
                <div className="text-5xl font-black text-[#8590E8]">
                  {num}
                </div>
                <h3 className="mt-7 text-xl font-black">{title}</h3>
                <p className="mt-4 text-base font-medium leading-8 text-[#C2C8DA]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-24" id="pricing">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.34em] text-[#5861D9]">
              <span className="h-px w-8 bg-[#5861D9]" />
              Pricing
              <span className="h-px w-8 bg-[#5861D9]" />
            </span>
            <h2 className="mt-6 text-4xl font-black tracking-normal text-[#0F1833] sm:text-5xl">
              すべての機能を、無料で。
            </h2>
            <p className="mt-5 text-lg font-medium text-[#7A8193]">
              隠れた課金なし。広告なし。大学生のために設計しました。
            </p>
          </div>

          <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-[#E8E4DA] bg-white shadow-[0_24px_70px_rgba(17,23,45,0.08)]">
            <div className="px-8 py-12 text-center">
              <p className="text-sm font-black text-[#7A8193]">camply 完全無料プラン</p>
              <div className="mt-8 flex items-end justify-center gap-2">
                <span className="text-7xl font-black leading-none text-[#0F1833]">¥0</span>
                <span className="pb-2 text-lg font-black text-[#7A8193]">/ 永久</span>
              </div>
              <p className="mt-6 text-base font-bold text-[#7A8193]">クレジットカード不要。iOS対応。</p>
            </div>

            <div className="border-t border-[#E8ECF5] px-8 py-10">
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-black text-[#2D3448]">
                    <span className="text-[#5861D9]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-9 block rounded-xl bg-[#5861D9] px-6 py-4 text-center text-base font-black text-white shadow-[0_14px_32px_rgba(88,97,217,0.24)] transition hover:bg-[#4751C9]"
              >
                ● App Store で無料ダウンロード
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
