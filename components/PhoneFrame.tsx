"use client";

import Image from "next/image";

export function PhoneFrame({
  src,
  alt,
  tilt,
  yOffset,
  large,
}: {
  src: string;
  alt: string;
  tilt: string;
  yOffset: string;
  large?: boolean;
}) {
  const w = large ? 200 : 160;
  const h = large ? 430 : 345;

  return (
    <div
      className="relative flex-shrink-0"
      style={{ transform: `rotate(${tilt}) translateY(${yOffset})` }}
    >
      <div
        className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/30"
        style={{ width: w, height: h }}
      >
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
  title,
  desc,
}: {
  src: string;
  alt: string;
  label: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full aspect-[9/19] bg-white rounded-[1.75rem] overflow-hidden shadow-lg border-4 border-white ring-1 ring-gray-100">
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement;
            if (parent) {
              parent.style.background = "linear-gradient(160deg,#e0e7ff 0%,#f0f9ff 100%)";
              parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;padding:20px;text-align:center"><div style="font-size:40px">📱</div><div style="font-size:13px;font-weight:600;color:#4F8EF7">${title}</div><div style="font-size:11px;color:#94a3b8;line-height:1.4">${desc}</div></div>`;
            }
          }}
        />
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-900 text-sm">{title}</p>
        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
