"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-gradient-to-b
      from-zinc-900
      to-zinc-950
      p-8
      "
    >
      {/* Голубое свечение */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Иконка */}
      <div
        className="
        relative
        z-10
        mb-8
        inline-flex
        h-20
        w-20
        items-center
        justify-center
        rounded-2xl
        bg-blue-500/10
        text-blue-400
        transition
        duration-300
        group-hover:scale-110
        group-hover:bg-blue-500/20
      "
      >
        {icon}
      </div>

      {/* Заголовок */}
      <h3
        className="
        relative
        z-10
        text-2xl
        font-bold
        text-white
      "
      >
        {title}
      </h3>

      {/* Описание */}
      <p
        className="
        relative
        z-10
        mt-5
        leading-8
        text-zinc-400
      "
      >
        {description}
      </p>

      {/* Нижняя линия */}
      <div
        className="
        absolute
        bottom-0
        left-0
        h-1
        w-0
        bg-blue-500
        transition-all
        duration-500
        group-hover:w-full
      "
      />
    </motion.div>
  );
}