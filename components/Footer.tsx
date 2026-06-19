const APP_STORE_URL = "#"; // 公開後にURLを差し替えてください

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#5861D9] px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-black tracking-normal sm:text-5xl">
          大学生活を、もっとスマートに。
        </h2>
        <p className="mt-6 text-lg font-bold text-white/82">
          アカウント登録だけで、今すぐ無料で始められます。
        </p>
        <a
          href={APP_STORE_URL}
          className="mt-9 inline-flex h-14 items-center justify-center rounded-xl bg-white px-8 text-base font-black text-[#0F1833] shadow-[0_18px_40px_rgba(15,24,51,0.18)] transition hover:bg-[#F4F6FA]"
        >
          App Storeでダウンロード
        </a>
      </div>

      <div className="bg-[#0B132B] text-[#AAB2C6]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-3 text-xl font-black text-white">
              <span className="h-6 w-6 rounded-md bg-[#5861D9]" />
              camply
            </p>
            <p className="mt-5 max-w-xs text-base font-medium leading-8">
              大学生活を、もっとスマートに。授業・課題・バイト・お金を、ひとつのアプリで。
            </p>
          </div>

          <FooterLinks title="プロダクト" links={["機能", "画面", "料金", "ダウンロード"]} />
          <FooterLinks title="サポート" links={["よくある質問", "お問い合わせ"]} />

          <div>
            <p className="font-black text-white">規約</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-bold">
              <a href="/legal/terms" className="hover:text-white">利用規約</a>
              <a href="/legal/privacy" className="hover:text-white">プライバシーポリシー</a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl border-t border-white/10 px-6 py-8 text-xs font-bold text-[#6E7892]">
          © {new Date().getFullYear()} camply. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  const hrefs: Record<string, string> = {
    "機能": "#features",
    "画面": "#screenshots",
    "料金": "#pricing",
    "ダウンロード": "#",
    "よくある質問": "#faq",
    "お問い合わせ": "mailto:Kazukioikawa14@icloud.com",
  };

  return (
    <div>
      <p className="font-black text-white">{title}</p>
      <div className="mt-4 flex flex-col gap-3 text-sm font-bold">
        {links.map((link) => (
          <a key={link} href={hrefs[link]} className="hover:text-white">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
