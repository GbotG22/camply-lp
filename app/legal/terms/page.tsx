import Link from "next/link";

const sections = [
  {
    title: "第1条（本規約の適用）",
    body: "本利用規約は、Camply（以下「本アプリ」）の利用条件を定めるものです。ユーザーは本規約に同意したうえで本アプリをご利用ください。",
  },
  {
    title: "第2条（サービス内容）",
    body: "本アプリは、大学生向けの学習・生活管理アプリです。時間割管理、課題管理、収支管理、バイトシフト管理などの機能を提供します。一部の外部連携・AI機能は、準備が整い次第提供する場合があります。",
  },
  {
    title: "第3条（アカウント）",
    body: "ユーザーはメールアドレスとパスワードでアカウントを作成できます。アカウント情報はユーザー自身の責任で適切に管理してください。",
  },
  {
    title: "第4条（外部サービス連携）",
    body: "本アプリは、Googleカレンダーなどの外部サービスと連携する機能を提供することがあります。外部サービスの利用には、各サービスの規約およびポリシーが適用されます。",
  },
  {
    title: "第5条（課金・有料機能）",
    body: "現在、本アプリの基本機能は無料で提供しています。将来、有料機能またはサブスクリプションを提供する場合は、料金・更新条件・解約方法をApp Store、Google Playまたはアプリ内で明示します。ユーザーの同意なく有料課金を開始することはありません。",
  },
  {
    title: "第6条（禁止事項）",
    body: "本アプリの不正利用、改ざん、リバースエンジニアリング、他のユーザーへの迷惑行為、法令に違反する行為、その他当方が不適切と判断する行為を禁止します。",
  },
  {
    title: "第7条（免責事項）",
    body: "本アプリは現状有姿で提供されます。本アプリの利用によって生じた損害、サービスの中断・終了によって生じた損害について、当方は法令で認められる範囲で責任を負いません。",
  },
  {
    title: "第8条（サービスの変更・終了）",
    body: "当方は必要に応じて、サービス内容の変更、機能の追加・削除、サービスの終了を行うことができます。",
  },
  {
    title: "第9条（規約の変更）",
    body: "当方は必要に応じて本規約を変更できます。変更後も継続して本アプリを利用された場合、変更後の規約に同意したものとみなします。",
  },
  {
    title: "第10条（準拠法・管轄）",
    body: "本規約は日本法に準拠します。本アプリに関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          camply トップへ戻る
        </Link>

        <header className="mt-8 border-b border-gray-200 pb-8">
          <p className="text-sm text-gray-500">最終更新日：2026年6月18日</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">利用規約</h1>
        </header>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
