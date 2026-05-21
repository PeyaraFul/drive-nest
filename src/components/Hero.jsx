import React from "react";
import BannerImage from "../../public/banner-car.png";
import { Button } from "@heroui/react";
import { FaExpandAlt } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-between md pt-16 md:pt-30 pb-10 h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${BannerImage.src})` }}
    >
      <h1 className="text-4xl text-center font-semibold">
        Drive Anytime Anywhere <br /> Your Perfect Ride{" "}
      </h1>
      <p className="max-w-180">
        The largest car sharing and rental marketplace. Drive your dreams and
        get experience the freedom of traveling anywhere. Book your car today
        and start your journey. To see available cars go to Explore Cars page.{" "}
        <br />
        <Link href="/exploreCars">
          <Button variant="secondary" className="bg-black/50 mt-4">
            <FaExpandAlt />
            Explore More Cars
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default Hero;
