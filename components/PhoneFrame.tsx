"use client";

import Image from "next/image";

export function PhoneFrame({
  src,
  alt,
  large,
}: {
  src: string;
  alt: string;
  large?: boolean;
}) {
  const w = large ? 235 : 205;
  const h = large ? 480 : 418;

  return (
    <div className="relative flex-shrink-0">
      <div className="absolute inset-0 translate-y-8 rounded-[2.2rem] bg-[#BFC6DD] blur-2xl" />
      <div
        className="relative overflow-hidden rounded-[2rem] border-[9px] border-[#0D1733] bg-white shadow-[0_24px_60px_rgba(15,24,51,0.22)]"
        style={{ width: w, height: h }}
      >
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.style.background = "linear-gradient(160deg,#e0e7ff,#f0f9ff)";
              parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;padding:16px;text-align:center"><div style="font-size:32px">📱</div><div style="font-size:11px;color:#94a3b8;line-height:1.4">${alt}</div></div>`;
            }
          }}
        />
      </div>
    </div>
  );
}

export function ScreenshotCard({
  src,
  alt,
  label,
  desc,
}: {
  src: string;
  alt: string;
  label: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full overflow-hidden rounded-[1.8rem] border-[7px] border-[#0D1733] bg-white shadow-[0_20px_44px_rgba(15,24,51,0.13)]">
        <div className="absolute left-1/2 top-1.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          className="aspect-[9/19] h-full w-full object-cover object-top"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement;
            if (parent) {
              parent.style.background = "linear-gradient(160deg,#e0e7ff 0%,#f0f9ff 100%)";
              parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;padding:20px;text-align:center"><div style="font-size:40px">📱</div><div style="font-size:13px;font-weight:600;color:#5861D9">${label}</div><div style="font-size:11px;color:#94a3b8;line-height:1.4">${desc}</div></div>`;
            }
          }}
        />
      </div>
      <div className="text-center">
        <p className="font-black text-[#0F1833]">{label}</p>
        <p className="mt-1 text-sm font-bold leading-relaxed text-[#7A8193]">{desc}</p>
      </div>
    </div>
  );
}
