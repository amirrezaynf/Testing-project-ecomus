import Image from "next/image";

export default function ReviewImg({ img, name }) {
  return (
    <div className="relative hidden overflow-hidden rounded-2xl md:flex md:h-[20rem]! md:w-[20rem]! xl:h-[20rem]! xl:w-[20rem]!">
      <Image src={img} alt={name || "user image"} fill />
    </div>
  );
}
