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
    <section className="bg-[#F6F7FC] py-24" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-black uppercase tracking-[0.34em] text-[#5861D9]">FAQ</span>
          <h2 className="mt-6 text-4xl font-black tracking-normal text-[#0F1833] sm:text-5xl">
            よくあるご質問
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#E8ECF5] bg-white shadow-[0_18px_44px_rgba(15,24,51,0.05)]">
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
    <div className="border-b border-[#E8ECF5] last:border-b-0">
      <button
        className="flex w-full items-center justify-between px-7 py-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-4 font-black text-[#0F1833]">{q}</span>
        <span
          className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-[#F2F4FF] text-[#5861D9] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-7 pb-6">
          <p className="text-base font-medium leading-8 text-[#5F667A]">{a}</p>
        </div>
      )}
    </div>
  );
}
