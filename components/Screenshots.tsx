import { ScreenshotCard } from "@/components/PhoneFrame";

const screens = [
  {
    src:   "/screenshots/home.png",
    label: "ホーム",
    title: "ホーム",
    desc:  "今日のバイト・課題・収支をひと目で確認",
  },
  {
    src:   "/screenshots/schedule.png",
    label: "予定",
    title: "予定管理",
    desc:  "カレンダーでバイトと授業を一括管理",
  },
  {
    src:   "/screenshots/money.png",
    label: "お金",
    title: "お金管理",
    desc:  "収入・支出・サブスクを月ごとに整理",
  },
  {
    src:   "/screenshots/timetable.png",
    label: "時間割",
    title: "時間割管理",
    desc:  "授業・教室・出席率をひと目で把握",
  },
  {
    src:   "/screenshots/notification-settings.png",
    label: "通知設定",
    title: "通知設定",
    desc:  "各通知のタイミングを自由にカスタマイズ",
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

        {/* 5枚: 上段3・下段2 */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6">
            {screens.slice(0, 3).map((s) => (
              <ScreenshotCard
                key={s.label}
                src={s.src}
                alt={s.label}
                label={s.label}
                title={s.title}
                desc={s.desc}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto w-full">
            {screens.slice(3).map((s) => (
              <ScreenshotCard
                key={s.label}
                src={s.src}
                alt={s.label}
                label={s.label}
                title={s.title}
                desc={s.desc}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-10">
          ※ 表示されているデータはサンプルです。実際のデータは含まれません。
        </p>
      </div>
    </section>
  );
}
