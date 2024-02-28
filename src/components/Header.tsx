import photoSara from "@/assets/photo-cv-optimized.webp";

export function Header() {
  return (
    <div className="flex justify-left items-center py-3 w-[1120px]">
      <img
        src={photoSara}
        alt="Sara's face"
        className="rounded-full w-20 h-20 object-cover"
      />
      <p>Hi!</p>
    </div>
  );
}
