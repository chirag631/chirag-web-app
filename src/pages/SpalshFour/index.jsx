import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import SpalshFourServicing from "../../components/SpalshFourServicing";
import SpalshFourUsp from "../../components/SpalshFourUsp";
import SpalshFourValue from "../../components/SpalshFourValue";

export default function SpalshFourPage() {
  return (
    <>
      <Helmet>
        <title>Chirag's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900">
        <div className="bg-gray-900">
          <div>
            <header className="flex justify-center items-center p-5 bg-white-A700">
              <Img src="images/img_logo.svg" alt="logo_one" className="h-[52px] mb-[3px]" />
              <div className="flex justify-between w-[38%] mb-3.5 ml-[286px] gap-5">
                <a href="#">
                  <Text as="p" className="!text-teal-900 !font-ranade">
                    HOME
                  </Text>
                </a>
                <a href="#">
                  <Text as="p" className="!text-teal-900 !font-ranade">
                    COFFEE PODS
                  </Text>
                </a>
                <a href="#">
                  <Text as="p" className="!text-teal-900 !font-ranade">
                    ABOUT US
                  </Text>
                </a>
              </div>
              <div className="flex sm:flex-col justify-center items-center ml-[317px] gap-[5px] p-[9px] bg-teal-900 rounded-[20px]">
                <Img src="images/img_icon_iconoir.svg" alt="iconiconoir_one" className="h-[18px] w-[18px]" />
                <Text as="p" className="self-start">
                  SEE DIGITAL MENU
                </Text>
              </div>
            </header>
            <div>
              <div>
                <div className="h-[799px] z-[1] relative">
                  <Img
                    src="images/img_frame_animation.svg"
                    alt="image"
                    className="justify-center h-[799px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <div className="flex sm:flex-col justify-between items-center w-[53%] right-[4%] top-[4%] gap-5 m-auto absolute">
                    <div className="flex self-end justify-between w-[31%] sm:w-full mb-[7px] gap-5 sm:p-5">
                      <Text as="p" className="!text-teal-900 !font-ranade">
                        COFFEE PODS
                      </Text>
                      <Text as="p" className="!text-teal-900 !font-ranade">
                        ABOUT US
                      </Text>
                    </div>
                    <Button
                      shape="round"
                      leftIcon={<Img src="images/img_icon_iconoir.svg" alt="icon / iconoir / page" />}
                      className="sm:px-5"
                    >
                      SEE DIGITAL MENU
                    </Button>
                  </div>
                </div>
                <div className="mt-[-799px]">
                  <div>
                    <div className="p-[26px] sm:p-5 bg-gradient1">
                      <div className="flex flex-col items-center w-full mt-[18px] mx-auto max-w-[1392px]">
                        <div className="flex md:flex-col self-stretch justify-between items-start gap-5">
                          <div className="flex mt-[136px] pr-3 py-3 md:p-5">
                            <div className="flex mt-[45px] mb-[116px]">
                              <Text size="3xl" as="p" className="!text-gray-400 !font-ranade uppercase">
                                Brewing your
                              </Text>
                            </div>
                          </div>
                          <div className="flex justify-center w-[48%] md:w-full md:p-5">
                            <div className="h-[620px] w-full relative">
                              <Img
                                src="images/img_symbol.svg"
                                alt="symbol_one"
                                className="h-[614px] w-[614px] ml-[5px] left-[1%] bottom-0 top-0 my-auto absolute"
                              />
                              <Img
                                src="images/img_cup.png"
                                alt="cup_one"
                                className="justify-center h-[620px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                            </div>
                          </div>
                        </div>
                        <Text size="2xl" as="p" className="mt-[158px] !text-gray-400 !font-ranade uppercase">
                          Brand Story
                        </Text>
                        <div className="flex md:flex-col justify-between w-[89%] md:w-full mt-[65px] gap-5">
                          <Img src="images/img_glass.svg" alt="glass_one" className="h-[180px] w-[180px]" />
                          <Img src="images/img_glass.svg" alt="lotus_one" className="h-[180px] w-[180px]" />
                          <Img src="images/img_glass.svg" alt="jade_one" className="h-[180px] w-[180px]" />
                          <Img src="images/img_glass.svg" alt="fish_one" className="h-[180px] w-[180px]" />
                        </div>
                        <div className="flex justify-between w-[57%] md:w-full mt-9 gap-5">
                          <Text size="lg" as="p" className="text-center">
                            Lotus Flower
                          </Text>
                          <Text size="lg" as="p" className="text-center">
                            Jade Stone
                          </Text>
                          <Text size="lg" as="p" className="text-center">
                            Koi Fish
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full mt-[-51px] gap-[30px] mx-auto md:p-5 z-[1] max-w-[1232px]">
                      <Text size="lg" as="p" className="w-[7%] md:w-full ml-[49px] md:ml-0 text-center leading-[26px]">
                        <>
                          Mystic
                          <br />
                          Ball Glass
                        </>
                      </Text>
                      <Text size="xl" as="p" className="text-justify leading-[26px]">
                        <>
                          Fortune Coffee gets its name from a simple yet profound experience. It began with a fortune
                          cookie on a date—a simple message that read &quot;marry your match.&quot; Fast forward a few
                          months, and a wedding turned that message into a shared memory. It&#39;s this kind of everyday
                          magic that our brand captures.
                          <br />
                          The logo combines symbols of good luck: mystic ball mirrors the unseen forces that guide us
                          towards our destinies, a lotus flower for beauty in the everyday, a jade stone for a
                          harmonious life, and a koi fish for the strength to keep going. Together, they&#39;re not just
                          decorations; they&#39;re a nod to the little moments of serendipity we encounter every day.
                          It&#39;s about the personal signs we choose to see and the connections we make. Every cup
                          serves as a reminder that sometimes, the universe does have something to say. So, grab a cup
                          of Fortune Coffee and listen….
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="mt-[-70px] z-[1]">
                    <div className="flex md:flex-col justify-center items-center">
                      <Img
                        src="images/img_mask.png"
                        alt="mask_one"
                        className="w-[29%] md:w-full md:h-auto object-cover"
                      />
                      <div className="flex flex-col self-end items-center mb-[57px] gap-[63px] md:p-5 sm:gap-[31px] flex-1">
                        <div className="flex flex-col self-stretch items-end pl-14 pr-[59px] gap-6 py-[59px] md:p-5 bg-teal-900">
                          <Text
                            size="2xl"
                            as="p"
                            className="mt-[30px] mr-[480px] md:mr-0 !text-gray-400 !font-ranade uppercase"
                          >
                            Coffee Pods
                          </Text>
                          <Text size="xl" as="p" className="w-[55%] md:w-full mb-5 text-justify leading-[26px]">
                            <>
                              Fortune Coffee Pods take their cue from the self-sufficiency of an aircraft&#39;s
                              unit—compact, efficient, and a haven amidst the daily grind of office life. They&#39;re
                              social spots in an age where screens often replace handshakes. At these pods, a quick
                              coffee can turn into an unexpected conversation, turning new faces into friends, and
                              giving familiar ones more stories to share.
                              <br />
                              <br />
                              The setup is simple: come for the coffee, stay for the chat, with no pressure to linger
                              any longer than you want. It&#39;s a casual spot that invites you to pause, chat, and
                              connect without the wait you&#39;d find at a regular café. Speedy service for the busy
                              bees looking for a caffeine fix in between meetings, but with the space to stick around if
                              that&#39;s where the moment takes you.
                              <br />
                              <br />
                              What Fortune Coffee is brewing up with its Coffee Pods isn&#39;t just about drinking
                              coffee—it&#39;s about redefining coffee breaks.
                            </>
                          </Text>
                        </div>
                        <Text size="2xl" as="p" className="!text-gray-400 !font-ranade uppercase">
                          Strategic Levers
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col w-full mt-1 gap-[50px] mx-auto md:p-5 max-w-[1390px]">
              <SpalshFourUsp className="flex flex-col w-full" />
              <SpalshFourValue className="flex flex-col w-full" />
              <SpalshFourServicing className="flex flex-col w-full" />
            </div>
            <div className="h-[463px] mt-[92px] pt-[27px] pl-[27px] sm:pt-5 sm:pl-5 relative">
              <div className="flex md:flex-col justify-center items-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Text size="xl" as="p" className="self-end w-[41%] md:w-full mb-[109px] z-[1]">
                  Walk into our world of fortune. Latest launches, new coffee pods, exciting offers- unpacking magic and
                  more. Tag us and stand a chance at getting featured on our page!
                </Text>
                <Img
                  src="images/img_symbol_gray_400_01.svg"
                  alt="symbol_three"
                  className="h-[436px] md:w-full md:h-auto ml-[-32px] md:ml-0"
                />
              </div>
              <Text
                size="2xl"
                as="p"
                className="w-[51%] left-[4%] top-[24%] m-auto !text-teal-900 !font-ranadevariable !font-light absolute"
              >
                <span className="text-white-A700 text-2xl">
                  <>
                    Follow us on
                    <br />
                  </>
                </span>
                <span className="text-gray-400 font-medium">@fortunecoffee.co</span>
              </Text>
            </div>
            <div className="p-[37px] sm:p-5 bg-teal-900">
              <div className="flex flex-col mb-2 gap-[15px]">
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex sm:flex-col justify-between items-center w-[44%] md:w-full gap-5 md:p-5">
                    <Img src="images/img_logo_gray_400.svg" alt="logo_three" className="h-[52px] sm:w-full sm:h-auto" />
                    <div className="flex flex-col self-end items-start gap-2.5">
                      <Text size="xs" as="p" className="!text-indigo-50_7e tracking-[0.40px] uppercase opacity-0.4">
                        Address
                      </Text>
                      <Text size="s" as="p" className="!text-indigo-50">
                        EEPS-01, Emerald Estate , Sector 65, Gurugram
                      </Text>
                    </div>
                  </div>
                  <div className="flex self-end justify-between w-[22%] md:w-full gap-5 md:p-5">
                    <div className="h-[40px] w-[43%] bg-white-A700 relative rounded-[20px]">
                      <a href="#" className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Text as="p" className="!text-teal-900">
                          Contact Us
                        </Text>
                      </a>
                      <a
                        href="#"
                        className="flex justify-center items-center h-[40px] w-max left-0 bottom-0 right-0 top-0 px-[23px] py-2.5 m-auto sm:px-5 bg-white-A700 absolute rounded-[20px]"
                      >
                        <Text as="p" className="!text-teal-900">
                          Contact Us
                        </Text>
                      </a>
                    </div>
                    <div className="h-[40px] w-[43%] bg-white-A700 relative rounded-[20px]">
                      <Text as="p" className="w-max bottom-[22%] right-0 left-0 m-auto !text-teal-900 absolute">
                        Be a partner
                      </Text>
                      <div className="flex justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-2 m-auto bg-white-A700 absolute rounded-[20px]">
                        <Text as="p" className="self-end mt-0.5 !text-teal-900">
                          Be a partner
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-400" />
                <div className="flex justify-between gap-5">
                  <Text size="xs" as="p" className="self-end !text-gray-400">
                    © 2024 — Copyright
                  </Text>
                  <div className="flex self-end justify-between w-[13%] gap-5">
                    <Text size="xs" as="p" className="self-start">
                      Fortune Coffee Pvt. Ltd.
                    </Text>
                    <a href="#" className="self-end">
                      <Text size="xs" as="p">
                        Privacy
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
