import { ScreenshotCard } from "@/components/PhoneFrame";

const screens = [
  {
    src: "/screenshots/home.png",
    label: "ホーム",
    desc: "今日の予定と収支を確認",
  },
  {
    src: "/screenshots/schedule.png",
    label: "予定",
    desc: "バイトと授業を一括管理",
  },
  {
    src: "/screenshots/money.png",
    label: "お金",
    desc: "収支とサブスクを整理",
  },
  {
    src: "/screenshots/timetable.png",
    label: "時間割",
    desc: "授業・出席率を把握",
  },
  {
    src: "/screenshots/notification-settings.png",
    label: "通知設定",
    desc: "タイミングを自由に設定",
  },
];

export default function Screenshots() {
  return (
    <section className="bg-[#F8F6F1] py-24" id="screenshots">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.34em] text-[#5861D9]">
            <span className="h-px w-8 bg-[#5861D9]" />
            App Preview
          </p>
          <h2 className="mt-6 text-4xl font-black tracking-normal text-[#11172D] sm:text-5xl">
            実際の画面を、見てみましょう。
          </h2>
          <p className="mt-5 text-lg font-medium text-[#7A8193]">
            シンプルで使いやすいUIにこだわっています。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
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

        <p className="mt-12 text-center text-xs font-bold text-[#A2A8B7]">
          ※ 表示されているデータはサンプルです。実際のデータは含まれません。
        </p>
      </div>
    </section>
  );
}
