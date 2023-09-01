"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ProjectBox } from "@/components/projects";

export default function Projects() {
  return (
    <main>
      <Navbar />
      <div className="my-20 min-h-screen">
        <div className="text-center text-3xl font-bold text-[#F9ED69]">
          Explore <span className="text-white">My Projects</span>
        </div>
        <div className="mx-6 mt-8 flex flex-col items-center justify-center space-y-8 xl:flex-row xl:space-x-8 xl:space-y-0">
          <ProjectBox
            imageSrc="/belajar-olim.png"
            tittle="BelajarOlim"
            desc="A website for preparing mathematical olympiads consisting of
                  materials, e-books, and practice problems."
            linkTo="https://belajarolim.vercel.app/"
          ></ProjectBox>
          <ProjectBox
            imageSrc="/indo-food.png"
            tittle="Indonesian Food"
            desc="This website shows a variety of food descriptions from
                  different regions in Indonesia."
            linkTo="https://makanan-indo.vercel.app/"
          ></ProjectBox>
          <ProjectBox
            imageSrc="/bomb-game.png"
            tittle="Bomb Game"
            desc="A squares game where players select squares one by one, and
                  beware, there's a bomb!"
            linkTo="https://bomb-game-square.vercel.app/"
          ></ProjectBox>
        </div>
      </div>
      <Footer />
    </main>
  );
}
