"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fade } from "@/components/motion";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const text = "Randy Verdian";
  const index = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    function type() {
      if (isDeleting.current) {
        setTypedText(text.slice(0, index.current));
        index.current--;

        if (index.current < 0) {
          isDeleting.current = false;
          index.current = 0;
        }
      } else {
        setTypedText(text.slice(0, index.current));
        index.current++;

        if (index.current > text.length) {
          isDeleting.current = true;
          index.current = text.length;
        }
      }

      setTimeout(type, isDeleting.current ? 100 : 200);
    }

    type();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:h-full">
      <Navbar />
      <section className="container overflow-hidden mx-auto">
        <div className="flex h-screen flex-col items-center md:h-full xl:mx-20 xl:mt-[-60px] xl:h-screen xl:flex-row">
          <motion.div
            className="mx-auto mt-20 w-[80%] overflow-hidden rounded-full border-4 border-[#F9ED69] md:w-[40%] xl:w-[30%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <Image
              src="/profile_randy.png"
              alt="Profile Image"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="mx-6 mt-4 md:mx-20 xl:ml-8 xl:mt-0 xl:p-8">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, translateX: "80%" }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 1, type: "spring", duration: 2 }}
            >
              <p className="text-[30px] font-semibold xl:text-[40px]">
                Hai! I am
              </p>
              <p
                id="typewriter-text"
                className="absolute text-[30px] font-bold text-[#F9ED69] xl:text-[40px]"
              >
                {typedText}
              </p>
            </motion.div>

            <motion.p
              className="mt-20 text-lg xl:text-[20px]"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              A passionate Informatics Engineering student on a journey to
              become a Software Engineer.
            </motion.p>
          </div>
        </div>

        <div className="mx-6 mt-0 h-screen md:mx-20 md:my-40 md:h-full xl:mx-20 xl:my-20 xl:h-screen">
          <Fade direction="left">
            <div className="mb-10 flex justify-end xl:mx-20">
              <h1 className="text-3xl font-semibold xl:text-4xl">
                About <span className="text-[#F9ED69]">Me</span>
              </h1>
            </div>
          </Fade>
          <div className="flex flex-col xl:flex-row">
            {/* image */}
            <div className="xl:order-2 xl:ml-40 xl:w-[100%]">
              <Fade direction="left">
                <Image
                  src="/programmer.png"
                  width={200}
                  height={200}
                  alt="about me"
                  className="mt-4 xl:order-1 xl:mx-auto xl:w-[300px]"
                />
              </Fade>
            </div>
            {/* text */}
            <Fade direction="right">
              <p className="mb-10 mt-4 xl:text-right xl:text-[20px]">
                I am an{" "}
                <span className="text-[#F9ED69]">Informatics Engineering</span>{" "}
                student at{" "}
                <span className="text-[#F9ED69]">
                  Bandung Institute of Technology
                </span>
                , I have interest in{" "}
                <span className="text-[#F9ED69]">programming</span> and focusing
                on
                <span className="text-[#F9ED69]">
                  {" "}
                  software engineering
                </span>{" "}
                field. I am excited to make projects especially{" "}
                <span className="text-[#F9ED69]">website development</span>.
                Let's collaborate and create something extraordinary together!
              </p>
              <div className="flex xl:justify-end">
                <a
                  href="https://drive.google.com/file/d/1xG3ltNKhS_lf3fnm6qGT4wssNtL39Zz5/view?usp=sharing"
                  className="mt-4 inline-block w-40 cursor-pointer rounded-lg bg-[#F9ED69] px-4 py-2 text-center text-white transition duration-300 ease-in-out hover:scale-110"
                >
                  <p className="text-black">Download CV</p>
                </a>
              </div>
              <p className="mt-20 flex justify-end text-3xl font-semibold  xl:text-4xl">
                Find Me On
              </p>
              <div className="mt-6 flex justify-end space-x-4">
                <a href="https://github.com/randyver">
                  <Image
                    className="cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                    src="/github(2).png"
                    width={40}
                    height={40}
                    alt="GitHub"
                  />
                </a>
                <a href="http://randyverdian99@gmail.com/">
                  <Image
                    className="cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                    src="/email(1).png"
                    width={40}
                    height={40}
                    alt="Email"
                  />
                </a>
                <a href="https://www.linkedin.com/in/randy-verdian">
                  <Image
                    className="cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                    src="/linkedin(1).png"
                    width={40}
                    height={40}
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://www.instagram.com/randyverdian_/">
                  <Image
                    className="cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                    src="/instagram(1).png"
                    width={40}
                    height={40}
                    alt="Instagram"
                  />
                </a>
              </div>
            </Fade>
          </div>
        </div>

        <div className="mx-6 mt-40 md:mx-20 xl:mx-20 xl:mt-[-60px]">
          <h1 className="text-3xl font-semibold text-[#F9ED69] xl:text-4xl">
            Explore <span className="text-white">My Projects</span>
          </h1>
          <p className="mt-4  xl:text-[20px]">
            A collection of my past projects!
          </p>
          <div className="mx-6 mt-8 flex flex-col items-center justify-center space-y-8 xl:flex-row xl:space-x-8 xl:space-y-0">
            {/* Project 1 */}
            <Fade direction="right">
              <div className="w-[300px]  rounded-lg bg-white p-4 shadow-xl md:w-[400px]">
                <Image
                  src="/belajar-olim.png"
                  width={500}
                  height={500}
                  alt="belajar olim"
                  className="rounded-lg"
                />
                <div className="text-center">
                  <h2 className="mt-4 text-lg font-semibold text-gray-800 xl:text-xl">
                    BelajarOlim
                  </h2>
                  <p className="my-4 h-[100px] text-gray-600 xl:h-[80px]">
                    A website for preparing mathematical olympiads consisting of
                    materials, e-books, and practice problems.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="https://belajarolim.vercel.app/"
                      className="text-[#E23E57] hover:underline"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
            {/* Project 2 */}
            <Fade direction="zoom">
              <div className="w-[300px]  rounded-lg bg-white p-4 shadow-xl md:w-[400px]">
                <Image
                  src="/indo-food.png"
                  width={500}
                  height={500}
                  alt="indonesian food"
                  className="rounded-lg"
                />
                <div className="text-center">
                  <h2 className="mt-4 text-lg font-semibold text-gray-800 xl:text-xl">
                    Indonesian Food
                  </h2>
                  <p className="my-4 h-[100px] text-gray-600 xl:h-[80px]">
                    This website shows a variety of food descriptions from
                    different regions in Indonesia.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="https://makanan-indo.vercel.app/"
                      className="text-[#E23E57] hover:underline"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
            {/* Project 3 */}
            <Fade direction="left">
              <div className="w-[300px]  rounded-lg bg-white p-4 shadow-xl md:w-[400px]">
                <Image
                  src="/bomb-game.png"
                  width={500}
                  height={500}
                  alt="bomb game"
                  className="rounded-lg"
                />
                <div className="text-center">
                  <h2 className="mt-4 text-lg font-semibold text-gray-800 xl:text-xl">
                    Bomb Game
                  </h2>
                  <p className="my-4 h-[100px] text-gray-600 xl:h-[80px]">
                    A squares game where players select squares one by one, and
                    beware, there's a bomb!
                  </p>
                  <div className="mt-4">
                    <Link
                      href="https://bomb-game-square.vercel.app/"
                      className="text-[#E23E57] hover:underline"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="my-8 inline-block w-40 cursor-pointer rounded-lg bg-[#F9ED69] px-4 py-2 text-center text-white transition duration-300 ease-in-out hover:scale-110"
            >
              <p className="text-black">View More</p>
            </Link>
          </div>
        </div>
        <div>
          <div className="mx-6 my-40 md:mx-20 xl:mx-20">
            <div className="mb-10 flex justify-end xl:mx-20">
              <h1 className="text-3xl font-semibold  xl:text-4xl">
                Read <span className="text-[#F9ED69]">My Blogs</span>
              </h1>
            </div>
            <p className="mt-4 flex  xl:mx-20 xl:justify-end xl:text-[20px]">
              This section contains various articles and interesting topics that
              I have written.
            </p>
            <div className="flex flex-col-reverse justify-center space-y-8 xl:flex-row-reverse xl:space-x-8 xl:space-y-0">
              {/* Post 1 */}
              <Fade direction="left">
                <Link href="/blogs/blog-1">
                  <div className="my-6 h-[200px] cursor-pointer rounded-lg bg-white p-4 shadow-xl xl:mx-6 xl:w-[600px]">
                    <p className="text-lg font-semibold text-black xl:text-xl">
                      Halo dunia!
                    </p>
                    <p className="italic text-gray-600">22 August 2023</p>
                    <p className="mt-4 line-clamp-4 text-gray-700">
                      Welcome in my blogs guys!!
                    </p>
                  </div>
                </Link>
              </Fade>
              {/* Post 2 */}
              <Fade direction="right">
                <Link href="/blogs/blog-2">
                  <div className="my-6 h-[200px] cursor-pointer rounded-lg bg-white p-4 shadow-xl xl:mx-6 xl:w-[600px]">
                    <p className="text-lg font-semibold text-black xl:text-xl">
                      Practice Makes Perfect
                    </p>
                    <p className="italic text-gray-600">23 August 2023</p>
                    <p className="mt-4 line-clamp-4 text-gray-700">
                      “Practice makes perfect. After a long time of practicing,
                      our work will become natural, skillful, swift, and
                      steady.” ― Bruce Lee
                    </p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="flex justify-center">
              <Link
                href="/blogs"
                className="my-8 inline-block w-40 cursor-pointer rounded-lg bg-[#F9ED69] px-4 py-2 text-center text-white transition duration-300 ease-in-out hover:scale-110"
              >
                <p className="text-black">View More</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
