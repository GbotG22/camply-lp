import { ScreenshotCard } from "@/components/PhoneFrame";

const screens = [
  {
    src:   "/screenshots/home.png",
    label: "ホーム",
    desc:  "今日のバイト・課題・収支をひと目で確認",
  },
  {
    src:   "/screenshots/schedule.png",
    label: "予定",
    desc:  "カレンダーでバイトと授業を一括管理",
  },
  {
    src:   "/screenshots/money.png",
    label: "お金",
    desc:  "収入・支出・サブスクを月ごとに整理",
  },
  {
    src:   "/screenshots/notification-settings.png",
    label: "通知設定",
    desc:  "締切・バイト・給料日の通知を細かく設定",
  },
];

export default function Screenshots() {
  return (
    <section className="py-24 bg-[#F5F7FA]" id="screenshots">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#4F8EF7] text-sm font-semibold uppercase tracking-widest">App Preview</span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 tracking-tight">
            実際の画面を見てみましょう
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            シンプルで使いやすい UI にこだわっています。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {screens.map((s) => (
            <ScreenshotCard
              key={s.label}
              src={s.src}
              alt={s.label}
              label={s.label}
              desc={s.desc}
            />
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-10">
          ※ スクリーンショットはサンプル画面です。実際のデータは含まれません。
        </p>
      </div>
    </section>
  );
}
