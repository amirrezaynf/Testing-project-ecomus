"use client";
export default function ServicesCard({ title, desc, icon, img }) {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl p-6 text-center text-stone-900 md:flex-row">
      <div className="mb-8 flex h-15 w-15 items-center justify-center rounded-full border border-stone-200 p-8">
        <div>{icon}</div>
      </div>
      <div className="mb-10 ml-3 flex w-full flex-col justify-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
