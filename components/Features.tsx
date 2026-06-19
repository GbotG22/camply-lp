const features = [
  {
    icon: "🗓",
    color: "bg-[#F2F4FF]",
    title: "授業・時間割管理",
    desc: "時間割を登録してカレンダーに表示。休講や補講もすぐ更新できます。",
  },
  {
    icon: "📝",
    color: "bg-[#F2F4FF]",
    title: "課題・テスト管理",
    desc: "締切日を登録すれば3日前・前日・当日に自動通知。提出漏れをゼロに。",
  },
  {
    icon: "💼",
    color: "bg-[#F2F4FF]",
    title: "バイト管理",
    desc: "シフトを登録して給与を自動計算。開始前に通知でリマインドします。",
  },
  {
    icon: "💰",
    color: "bg-[#F2F4FF]",
    title: "給料管理",
    desc: "勤務時間から給与を自動集計。給料日の通知で振込を見逃しません。",
  },
  {
    icon: "📊",
    color: "bg-[#F2F4FF]",
    title: "支出管理",
    desc: "収入・支出をカテゴリ別に記録。月ごとのグラフで使いすぎを防げます。",
  },
  {
    icon: "💳",
    color: "bg-[#F2F4FF]",
    title: "サブスク管理",
    desc: "Netflix・Spotifyなど月額サービスを一覧管理。更新前に通知します。",
  },
];

export default function Features() {
  return (
    <>
      <section className="bg-[#F8F6F1] py-28" id="features">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-28 max-w-2xl">
            <SectionLabel>Why Camply</SectionLabel>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-normal text-[#11172D] sm:text-5xl">
              「これ、どこで管理してたっけ？」を、なくす。
            </h2>
            <p className="mt-6 text-lg font-medium leading-9 text-[#5F667A]">
              予定もお金も、散らばらせない。大学生の毎日に必要なものを、camplyひとつに集約します。
            </p>
          </div>

          <FeatureStory
            badge="01 ／ 予定管理"
            title="授業もバイトも、ひとつのカレンダーに。"
            body="時間割と毎週のシフトをまとめて登録。休講や補講もすぐに更新でき、今日やることがひと目で分かります。"
            bullets={["時間割・授業をカレンダーに表示", "バイトのシフトを一括管理", "休講・補講もすぐ反映"]}
            image="/screenshots/schedule.png"
          />

          <FeatureStory
            reverse
            badge="02 ／ お金管理"
            title="収入も支出も、毎月きちんと見える。"
            body="勤務時間から給与を自動集計。収入・支出をカテゴリ別に記録し、月ごとのグラフで使いすぎを防ぎます。"
            bullets={["シフトから給与を自動計算", "収支をカテゴリ別にグラフ化", "サブスクの更新前に通知"]}
            image="/screenshots/money.png"
          />

          <FeatureStory
            badge="03 ／ 通知機能"
            title="大事な予定を、通知でうっかり防止。"
            body="課題の締切、シフト開始、給料日、サブスクの更新日。必要なタイミングで自動リマインドします。"
            bullets={["課題は3日前・前日・当日に通知", "シフト開始前にリマインド", "給料日・サブスク更新も通知"]}
            image="/screenshots/notification-settings.png"
          />
        </div>
      </section>

      <section className="bg-[#F0EEE8] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14">
            <SectionLabel>Features</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-normal text-[#11172D] sm:text-5xl">
              大学生活に必要なこと、すべて。
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureStory({
  badge,
  title,
  body,
  bullets,
  image,
  reverse,
}: {
  badge: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid items-center gap-16 py-14 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <span className="text-sm font-black text-[#5861D9]">
          {badge}
        </span>
        <h3 className="mt-5 text-3xl font-black leading-tight tracking-normal text-[#11172D] sm:text-4xl">
          {title}
        </h3>
        <p className="mt-6 max-w-xl text-lg font-medium leading-9 text-[#5F667A]">{body}</p>
        <ul className="mt-8 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 text-base font-black text-[#2D3448]">
              <span className="text-[#5861D9]">✓</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute inset-x-8 bottom-4 h-24 rounded-full bg-[#D8DDF2] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.1rem] border-[9px] border-[#0D1733] bg-white shadow-[0_24px_60px_rgba(15,24,51,0.16)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" className="h-[520px] w-[248px] object-cover object-top" />
            <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  color,
  title,
  desc,
}: {
  icon: string;
  color: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-[#E8E4DA] bg-white p-8 shadow-[0_14px_32px_rgba(15,24,51,0.04)]">
      <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${color}`}>
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-black text-[#11172D]">{title}</h3>
      <p className="text-base font-medium leading-8 text-[#5F667A]">{desc}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.34em] text-[#5861D9]">
      <span className="h-px w-8 bg-[#5861D9]" />
      {children}
    </p>
  );
}
