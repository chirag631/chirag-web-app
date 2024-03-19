import React from "react";
import { Text, Img } from "./..";

export default function SpalshFourUsp({
  usp = "USP",
  coffeelovers = "Coffee Lovers Assemble",
  forcoffee = "For coffee connoisseurs, who can tell apart a great cup of coffee from an average one.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="self-stretch h-[498px] bg-black-900_3f relative rounded-[15px]">
        <Img
          src="images/img_nathan_dumlao_y.png"
          alt="nathandumlaoy"
          className="justify-center h-[498px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[15px]"
        />
        <div className="flex flex-col justify-center w-full h-full gap-[9px] left-0 bottom-0 right-0 top-0 p-5 m-auto bg-gradient absolute rounded-[15px]">
          <Text as="p" className="mt-[303px] uppercase">
            {usp}
          </Text>
          <Text size="xl" as="p" className="!text-gray-400 !font-ranade !font-medium">
            {coffeelovers}
          </Text>
          <Text size="lg" as="p" className="mb-[38px]">
            {forcoffee}
          </Text>
        </div>
      </div>
    </div>
  );
}
