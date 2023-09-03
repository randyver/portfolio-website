import Navbar from "./navbar";
import Footer from "./footer";
import { Fade } from "./motion";
import Link from "next/link";

interface BlogProps {
  title: string;
  date: string;
  children: React.ReactNode;
}

export function Blog({ title, date, children }: BlogProps) {
  return (
    <div>
      <Navbar />
      <div className="my-[60px] flex items-center justify-center">
        <div className="min-h-screen space-y-6 rounded-lg w-[calc(100%-2rem)] md:w-[calc(100%-6rem)] bg-white p-6 md:p-10 text-justify text-[12px] md:text-[16px] text-black">
          <p className="text-left text-[20px] md:text-[30px] font-bold">{title}</p>
          <p className="text-left text-[12px] md:text-[16px] italic text-gray-600">{date}</p>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

interface BlogBoxProps extends BlogProps {
  linkTo: string;
}

export function BlogBox({ title, date, children, linkTo }: BlogBoxProps) {
  return (
    <Fade direction="down">
      <Link href={linkTo}>
        <div className="my-6 h-[200px] cursor-pointer rounded-lg bg-white p-4 shadow-xl xl:mx-6 xl:w-[600px]">
          <p className="text-[16px] md:text-[18px] font-semibold text-black xl:text-xl">{title}</p>
          <p className="italic text-[12px] md:text-[14px] text-gray-600">{date}</p>
          <p className="mt-4 text-[14px] md:text-[16px] line-clamp-4 text-gray-700">{children}</p>
        </div>
      </Link>
    </Fade>
  );
}
