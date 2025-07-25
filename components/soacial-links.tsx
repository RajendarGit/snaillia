import React from "react";
import { Button } from "./ui/button";

const SocialLinks = () => {
  return (
    <div className="hidden bg-gray-900 lg:block absolute bottom-15 left-[-65px] font-bold mt-4 rotate-270">
      <Button
        variant="ghost"
        size="lg"
        className="rounded-none text-white hover:bg-[#7fa58d] hover:text-white"
      >
        fb
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="rounded-none text-white hover:bg-[#7fa58d] hover:text-white"
      >
        pi
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="rounded-none text-white hover:bg-[#7fa58d] hover:text-white"
      >
        li
      </Button>
    </div>
  );
};

export default SocialLinks;
