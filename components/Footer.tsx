const APP_STORE_URL = "#"; // 公開後にURLを差し替えてください

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* 最終CTA */}
      <div className="border-b border-white/10 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          今すぐ無料で始めよう
        </h2>
        <p className="text-gray-400 mb-8 text-base">
          大学生のスケジュールとお金を、camply でまとめて管理。
        </p>
        <a
          href={APP_STORE_URL}
          className="inline-flex items-center gap-3 bg-white text-gray-900 rounded-2xl px-7 py-4 text-base font-semibold hover:bg-gray-100 transition-colors shadow-xl"
          aria-label="App Store でダウンロード"
        >
          <AppleIcon />
          <span>
            <span className="block text-xs font-normal opacity-50 leading-none mb-0.5">Download on the</span>
            <span className="text-lg leading-none">App Store</span>
          </span>
        </a>
      </div>

      {/* フッターリンク */}
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white font-bold text-xl tracking-tight">camply</p>
          <p className="text-sm mt-1 text-gray-500">大学生活を、もっとスマートに。</p>
        </div>
        <div className="flex gap-8 text-sm">
          <a href="/legal/terms"   className="hover:text-white transition-colors">利用規約</a>
          <a href="/legal/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
          <a href="mailto:support@camply.app" className="hover:text-white transition-colors">お問い合わせ</a>
        </div>
      </div>

      <div className="text-center text-xs pb-8 text-gray-600">
        © {new Date().getFullYear()} camply. All rights reserved.
      </div>
    </footer>
  );
}

function AppleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
