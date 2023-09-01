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
        <div className="min-h-screen w-[calc(100%-8rem)] space-y-6 rounded-lg bg-white p-10 text-black">
          <p className="text-3xl font-bold">{title}</p>
          <p className="italic text-gray-600">{date}</p>
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
          <p className="text-lg font-semibold text-black xl:text-xl">{title}</p>
          <p className="italic text-gray-600">{date}</p>
          <p className="mt-4 line-clamp-4 text-gray-700">{children}</p>
        </div>
      </Link>
    </Fade>
  );
}
