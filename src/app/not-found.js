"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

// import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      {/* Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-2xl text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            {/* <SearchX size={60} className="text-violet-400" /> */}
          </div>
        </div>

        {/* 404 */}
        <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-8xl font-black text-transparent md:text-9xl">
          404
        </h1>

        {/* Text */}
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Page Not Found</h2>

        <p className="mt-4 text-gray-400">
          The page you are looking for doesn&apos;t exist or may have been
          moved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button
              href="/"
              size="lg"
              color="primary"
              // startContent={<Home size={18} />}
              className="font-semibold"
            >
              Back Home
            </Button>
          </Link>

          <Button
            onClick={() => router.back()}
            variant="bordered"
            size="lg"
            // startContent={<ArrowLeft size={18} />}
            className="border-white/20 bg-white/5 text-white backdrop-blur-md"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
