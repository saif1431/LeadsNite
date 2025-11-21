"use client"

import { Star, Users, Award, TrendingUp } from "lucide-react"
import { BiRightArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom"

export default function ReviewHero({ activeTab, onNavigate }) {
  return (
    <section className="h-screen flex flex-col items-center justify-center  text-center relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute md:top-20 top-16 left-[10%] w-8 h-8 text-primary/20 animate-[spin_20s_linear_infinite]" />
        <Award className="absolute top-32 right-[15%] w-10 h-10 text-primary/30 animate-[bounce_3s_ease-in-out_infinite]" />
        <Users className="absolute md:bottom-32 bottom-24 left-[20%] w-12 h-12 text-primary/20 animate-[pulse_4s_ease-in-out_infinite]" />
        <TrendingUp className="absolute lg:bottom-40 bottom-72 right-[25%] w-10 h-10 text-primary/25 animate-[bounce_5s_ease-in-out_infinite]" />
        <Star className="absolute md:top-1/3 right-[10%] w-6 h-6 text-primary/15 animate-[spin_15s_linear_infinite_reverse]" />
        <Award className="absolute md:bottom-1/4 bottom-30 lg:left-[15%] w-8 h-8 text-primary/20 animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />

      {/* Content */}
      <div className="relative z-10 ">
        <h1 className="title2">Client Reviews</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 mx-auto animate-fade-in [animation-delay:200ms] text-pretty">
          See what clients say about our work across Fiverr, Upwork, and direct collaborations. Quality service, proven
          results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
       <button
            aria-pressed={activeTab === "fiverr"}
            onClick={() => onNavigate("fiverr")}
            className={
              activeTab === "fiverr"
                ? `btn cursor-pointer`
                : `btn2`
            }
          >
            Fiverr Review
          </button>
          <button
            aria-pressed={activeTab === "upwork"}
            onClick={() => onNavigate("upwork")}
            className={
              activeTab === "upwork"
                ? ` btn`
                : `btn`
            }
          >
            Upwork Review
          </button>
         
        </div>
      </div>
    </section>
  )
}
