"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-blue-400 font-medium mb-4">
              SOFTWARE DEVELOPMENT ENGINEER
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              ABD-ALRAHMAN <span className="text-blue-400">AMEEN</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Experienced backend developer specializing in Java, Kotlin, and
              cloud technologies. Building scalable solutions at Amazon and
              contributing to open-source projects.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-900/20 rounded-full px-8"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span>Denver, CO</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <span>abdu.ameen000@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 lg:ml-10">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer Workspace"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
