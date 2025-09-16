"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <Image
        src="/landing-splash.jpg"
        alt="Reintufll Rental"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">
            Start your journey with us
          </h1>
          <p className="text-xl text-white mb-8">
            Explore our wide range of rental properties
          </p>

          <div className="flex justify-center">
            <Input
              type="text"
              value={"search query"}
              placeholder="Search by city"
              className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
            />
            <Button
              className={
                "bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12"
              }
              onClick={() => {}}
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
