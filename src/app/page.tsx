'use client';
import Image from "next/image";
import wondersImages from "@/wonders";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      Photo Gallery
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {wondersImages.map((e) =>(
        <Link href={`/${e.id}`} key={e.id}>
          <Image src={e.src} alt={e.name} className="aspect-square w-full object-cover"/>
        </Link>
      ))}
      </div>
    </div>
  );
}
