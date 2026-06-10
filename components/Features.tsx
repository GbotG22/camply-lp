const features = [
  {
    icon:  "🗓",
    color: "bg-blue-50 text-blue-500",
    title: "授業管理",
    desc:  "時間割を登録してカレンダーに表示。休講や補講もすぐ更新できます。",
  },
  {
    icon:  "📝",
    color: "bg-orange-50 text-orange-500",
    title: "課題・テスト管理",
    desc:  "締切日を登録すれば3日前・前日・当日に自動通知。提出漏れをゼロに。",
  },
  {
    icon:  "💼",
    color: "bg-purple-50 text-purple-500",
    title: "バイト管理",
    desc:  "シフトを登録して給与を自動計算。開始前に通知でリマインドします。",
  },
  {
    icon:  "💰",
    color: "bg-green-50 text-green-600",
    title: "給料管理",
    desc:  "勤務時間から給与を自動集計。給料日の通知で振込を見逃しません。",
  },
  {
    icon:  "📊",
    color: "bg-teal-50 text-teal-600",
    title: "支出管理",
    desc:  "収入・支出をカテゴリ別に記録。月ごとのグラフで使いすぎを防げます。",
  },
  {
    icon:  "💳",
    color: "bg-pink-50 text-pink-500",
    title: "サブスク管理",
    desc:  "Netflix・Spotify など月額サービスを一覧管理。更新前に通知でうっかり請求を防止。",
  },
  {
    icon:  "🔔",
    color: "bg-yellow-50 text-yellow-600",
    title: "通知機能",
    desc:  "バイト・課題・給料日・サブスク更新を細かく設定。必要な通知だけを受け取れます。",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#4F8EF7] text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 tracking-tight">
            大学生活に必要なことを<br className="hidden sm:block" />すべてカバー
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            「これ、どこで管理してたっけ？」がなくなります。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.slice(0, 6).map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        {/* 7枚目（通知機能）は全幅で中央に */}
        <div className="mt-5 flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <FeatureCard {...features[6]} />
          </div>
        </div>
      </div>
    </section>
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
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl text-2xl mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
