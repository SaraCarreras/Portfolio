import { Up } from "@/icons/Up";

export function Footer() {
  return (
    <div className="flex justify-between p-8 max-w-[100vw] ">
      <p>Sara Carreras ✨</p>
      <button className="rounded-full border border-solid border-white/25 bg-white/5 p-2 hover:scale-110 hover:bg-white/10 transition">
        <a href="#header" className="flex p-1">
          <Up />
        </a>
      </button>
    </div>
  );
}
