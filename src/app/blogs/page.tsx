"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BlogBox } from "@/components/blogs";

export default function Blogs() {
  return (
    <main>
      <Navbar />
      <div className="mx-6 h-screen md:mx-20 md:h-full xl:mx-20 xl:h-screen">
        <h1 className="mt-20 text-center text-3xl font-semibold xl:text-4xl">
          Read <span className="text-[#F9ED69]">My Blogs</span>
        </h1>

        <div className="mt-8 flex flex-col-reverse justify-center space-y-8 xl:flex-row-reverse xl:space-x-8 xl:space-y-0">
          {/* Post 1 */}
          <BlogBox
            linkTo="/blogs/blog-1"
            title="Halo dunia!"
            date="22 August 2023"
          >
            Welcome in my blogs guys!!
          </BlogBox>
          {/* Post 2 */}
          <BlogBox
            linkTo="/blogs/blog-2"
            title="Practice Makes Perfect"
            date="23 August 2023"
          >
            “Practice makes perfect. After a long time of practicing, our work
            will become natural, skillful, swift, and steady.” ― Bruce Lee
          </BlogBox>
        </div>
      </div>
      <Footer />
    </main>
  );
}
