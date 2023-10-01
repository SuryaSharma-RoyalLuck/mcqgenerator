"use client";
import { ExternalLink, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full  text-md  bg-black text-white border-t-4 border-blue-500 py-3 2xl:py-6  flex flex-col justify-center items-center">
      <div className="flex justify-center items-center font-light py-2 flex-wrap">
        Copyright © {new Date().getFullYear()} |{" "}
        <Link href="https://sharmasurya.com/" className="flex gap-1 mx-1 hover:text-blue-200">
          {" "}
          Surya Sharma <ExternalLink className="mx-1" target="_blank" />{" "}
        </Link>{" "}
        | Australia |
        <Link href="https://www.linkedin.com/in/surya-sharma-686a28250/">
          <Linkedin className="mx-1 hover:text-blue-200" target="_blank" />{" "}
        </Link>
      </div>
      <div className=" w-full"></div>
    </footer>
  );
};

export default Footer;
