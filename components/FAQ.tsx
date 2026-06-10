"use client";

import { useState } from "react";

const faqs = [
  {
    q: "無料で使えますか？",
    a: "はい、camply はすべての機能を完全無料でご利用いただけます。クレジットカードの登録も不要です。App Store からダウンロードして、メールアドレスでアカウントを作成するだけですぐに使い始められます。",
  },
  {
    q: "iPhoneカレンダーと連携できますか？",
    a: "現在、iPhoneの標準カレンダーへの直接書き出しには対応していません。ただし、アプリ内のカレンダーにバイト・課題・授業をまとめて表示できるため、camply だけで予定管理が完結します。",
  },
  {
    q: "大学生以外でも使えますか？",
    a: "もちろんご利用いただけます。ただし、時間割・課題管理・バイト給与計算など、大学生のライフスタイルに特化した機能が中心です。専門学校生や社会人の方も収支管理やスケジュール管理としてご活用いただけます。",
  },
  {
    q: "データはどこに保存されますか？",
    a: "すべてのデータはクラウド（Supabase）に安全に保存されます。機種変更時もアカウントにログインするだけでデータを引き継ぎできます。",
  },
  {
    q: "通知はどこまで細かく設定できますか？",
    a: "バイト（15分前〜2時間前から選択）・課題（3日前・前日・当日）・給料日（3日前・前日・当日）・サブスク更新（7日前・3日前・前日）をそれぞれ個別にON/OFFできます。",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#F5F7FA]" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#4F8EF7] text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 tracking-tight">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 pr-4">Q. {q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-6 pb-5">
          <div className="pt-0 border-t border-gray-100 pt-4">
            <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
          </div>
        </div>
      )}
    </div>
  );
}
