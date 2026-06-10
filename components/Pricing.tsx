const freeFeatures = [
  "時間割・授業管理",
  "課題・テスト・レポート管理",
  "バイトシフト管理・給与計算",
  "給料日通知",
  "月ごとの収支トラッキング",
  "サブスク管理",
  "詳細な通知設定",
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#4F8EF7] text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 tracking-tight">
            すべての機能を無料で使えます
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            隠れた課金なし。広告なし。大学生のために設計しました。
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative bg-gradient-to-br from-[#4F8EF7] to-[#7C3AED] rounded-3xl p-0.5 shadow-2xl">
            <div className="bg-white rounded-[calc(1.5rem-2px)] p-8">
              {/* ヘッダー */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 font-medium">camply</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">完全無料</span>
              </div>

              <div className="flex items-end gap-2 mb-1">
                <span className="text-6xl font-bold text-gray-900">¥0</span>
              </div>
              <p className="text-gray-400 text-sm mb-8">永久に無料。クレジットカード不要。</p>

              {/* 機能リスト */}
              <ul className="space-y-3 mb-8">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#4F8EF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-[#4F8EF7] to-[#7C3AED] text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg"
              >
                App Store で無料ダウンロード
              </a>

              <p className="text-center text-gray-400 text-xs mt-4">
                iOS 対応 / アカウント登録のみで開始
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
