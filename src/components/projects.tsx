import Image from "next/image";
import Link from "next/link";
import { Fade } from "./motion";

interface ProjectProps {
  imageSrc: string;
  tittle: string;
  desc: string;
  linkTo: string;
}

export function ProjectBox({ imageSrc, tittle, desc, linkTo }: ProjectProps) {
  return (
    <Fade direction="down">
      <div className="w-[300px] rounded-lg bg-white p-4 shadow-md md:w-[400px]">
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt="belajar olim"
          className="rounded-lg"
        />
        <div className="text-center">
          <h2 className="mt-4 text-lg font-semibold text-gray-800 md:text-xl">
            {tittle}
          </h2>
          <p className="my-4 h-[100px] text-gray-600 md:h-[80px]">{desc}</p>
          <div className="mt-4">
            <Link href={linkTo} className="text-[#E23E57] hover:underline">
              Demo
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
