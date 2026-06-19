import Link from "next/link";

const sections = [
  {
    title: "1. 収集する情報",
    body: [
      "本アプリが収集・保存する情報は以下のとおりです。",
      "メールアドレス（アカウント作成時）、時間割・授業情報、予定・課題・イベント、バイトシフト・収支情報、出席記録。",
      "Googleカレンダー連携を有効にした場合、Google Calendar APIを通じて、ユーザーがアクセスできるカレンダーの予定情報を読み取ります。",
    ],
  },
  {
    title: "2. 情報の利用目的",
    body: [
      "収集した情報は、本アプリのサービス提供、ユーザー認証とデータ同期、通知、アプリの改善・デバッグのために利用します。",
      "Googleカレンダーの予定情報は、Camplyのスケジュール画面に予定を表示する目的にのみ利用します。",
    ],
  },
  {
    title: "3. 情報の保管",
    body: [
      "ユーザーデータはSupabaseのサーバーに保存されます。",
      "Googleカレンダー連携で取得した予定本文はCamplyのサーバーには保存しません。Google認証トークンは端末の安全な保存領域に保存され、連携解除時に削除されます。",
    ],
  },
  {
    title: "4. 第三者への提供",
    body: [
      "法令に基づく開示要求がある場合、またはサービス提供に必要な外部サービスとの連携を除き、収集した情報を第三者に提供することはありません。",
      "Googleユーザーデータを広告配信、第三者への販売、またはAIモデルの学習目的で使用することはありません。",
    ],
  },
  {
    title: "5. 利用する外部サービス",
    body: [
      "Supabase（データベース・認証）を利用します。RevenueCat（課金管理）、Anthropic Claude（AIアドバイス機能）、Google Calendar API（Googleカレンダー連携）は、対象機能を公開する場合に利用します。",
    ],
  },
  {
    title: "6. Googleカレンダー連携",
    body: [
      "本アプリが利用するGoogle Calendar APIの権限は読み取り専用（https://www.googleapis.com/auth/calendar.events.readonly）です。",
      "ユーザーはアプリ内の連携解除操作、またはGoogleアカウントの「サードパーティ製アプリとサービス」設定から連携を解除できます。",
      "本アプリによるGoogleユーザーデータの利用および他のアプリへの転送は、Google API Services User Data Policy（Limited Useを含む）に準拠します。",
    ],
  },
  {
    title: "7. データの削除",
    body: [
      "アカウントを削除すると、関連するデータは削除されます。削除のご要望はお問い合わせ先までご連絡ください。",
      "Googleカレンダー連携を解除すると、本アプリに保存されたGoogle認証トークンは削除されます。",
    ],
  },
  {
    title: "8. 未成年者",
    body: ["本アプリは13歳以上を対象としています。13歳未満のお子様の個人情報を意図的に収集することはありません。"],
  },
  {
    title: "9. ポリシーの変更",
    body: ["本ポリシーは必要に応じて変更されることがあります。重要な変更がある場合は、アプリ内またはWebサイト上で通知します。"],
  },
  {
    title: "10. お問い合わせ",
    body: ["プライバシーに関するご質問・ご要望は Kazukioikawa14@icloud.com までご連絡ください。"],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          camply トップへ戻る
        </Link>

        <header className="mt-8 border-b border-gray-200 pb-8">
          <p className="text-sm text-gray-500">最終更新日：2026年6月18日</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">プライバシーポリシー</h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Camplyは、大学生活の予定・課題・お金を管理するために必要な情報を、目的を限定して取り扱います。
          </p>
        </header>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-gray-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
