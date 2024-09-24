"use client";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { IconSpinner } from "@/components/ui/icons";
import { useRouter } from "next/navigation";
import { FaGoogle, FaMagic } from "react-icons/fa";
import { BackgroundLines } from "./ui/background-lines";
import { BorderBeam } from "./magicui/border-beam";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";

interface LoginFormProps {
  customChatId?: string;
}

export default function LoginForm() {
  // {customChatId}: LoginFormProps
  // const router = useRouter();
  // const [result, dispatch] = useFormState(authenticate, undefined);

  // useEffect(() => {
  //     if (result) {
  //         if (result.type === 'error') {
  //             toast.error(getMessageFromCode(result.resultCode));
  //         } else {
  //             toast.success(getMessageFromCode(result.resultCode));
  //             router.refresh();
  //         }
  //     }
  // }, [result, router]);

  // const handleMagicLink = async () => {
  //     const emailElement = document.getElementById('email') as HTMLInputElement | null;
  //     if (emailElement) {
  //         const email = emailElement.value;
  //         const user = await signInWithMagicLink(email,customChatId);
  //         if (user) {
  //             toast.success('Magic link sent! Check your email.');
  //         }
  //     } else {
  //         toast.error('Email input not found.');
  //     }
  // };

  // const handleGoogle = async () => {
  //     const url = await signInWithGoogle(customChatId);
  //     if (url) {
  //         toast.success('Wet connexion with email.');
  //         window.location.href = url;
  //     } else {
  //         toast.error('Load Failed.');
  //     }
  // };
  {
    /***********effect icon google */
  }
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [showText, setShowText] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isIconHovered) {
      controls
        .start({
          rotate: 360,
          transition: { duration: 1, ease: "linear" },
        })
        .then(() => {
          setShowText(true);
        });
    } else {
      setShowText(false);
      controls.set({ rotate: 0 });
    }
  }, [isIconHovered, controls]);

  const handleMouseEnter = () => {
    setIsIconHovered(true);
  };

  const handleMouseLeave = () => {
    setIsIconHovered(false);
  };
  {
    /*****end effet icon google */
  }

  {
    /*****effet icon magic */
  }
  const [isHovered, setIsHovered] = useState(false);
  const [showText1, setShowText1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered(true);
    setTimeout(() => setShowText1(true), 500); // Affiche le texte après 500ms
  };

  const handleMouseLeave1 = () => {
    setIsHovered(false);
    setShowText1(false);
  };

  {
    /******end effet icon magic */
  }

  const words = [
    {
      text: "Or",
    },
    {
      text: "connect",
    },
    {
      text: "with",
    },
    {
      text: "...",
    },
  ];


  return (
    <div className="flex flex-col items-center justify-center h-full">
      <form
        //action={dispatch}
        className="flex flex-col items-center h-[400px] gap-4 space-y-3 mt-28"
      >
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="z-10 fixed flex-1 rounded-lg border bg-white px-6 pb-4 pt-8 shadow-md md:w-96 dark:bg-zinc-950">
            <h1 className="z-10 mb-3 text-2xl font-bold">
              Please log in to continue.
            </h1>
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                </div>
              </div>
            </div>
            <div className="z-30">
              <LoginButton />
            </div>
            <BorderBeam size={250} duration={12} delay={9} />

            {/*************icon connect */}
            <TypewriterEffect words={words} className="mb-2"/>

            <div className="flex flex-col items-center justify-center space-y-2">
              <button
                // onClick={handleGoogle}
                className="flex items-center justify-center w-full py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 relative overflow-hidden"
                aria-label="Connect with Email using Google"
              >
                <motion.div
                  ref={iconRef}
                  animate={controls}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute flex"
                  style={{ opacity: showText ? 0 : 1 }}
                >
                  <FaGoogle className="text-3xl" />
                  oogle
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: showText ? 1 : 0,
                    y: showText ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Login with Google
                </motion.span>
              </button>

              <button
                // onClick={handleMagicLink
                className="flex items-center justify-center w-full py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <AnimatePresence>
                  {!showText1 && (
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: isHovered ? [1, 1.2, 0.9, 1.1, 1] : 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaMagic className="text-3xl" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {showText1 && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Connect with Magic
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </BackgroundLines>
      </form>

      {/*<Link
                // href={`/customchat/${customChatId}/signup`}
                className="flex flex-row gap-1 text-sm text-zinc-400"
            >
                No account yet? <div className="font-semibold underline">Sign up</div>
            </Link>*/}
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="my-4 flex h-10 w-full flex-row items-center justify-center rounded-md bg-zinc-900 p-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      aria-disabled={pending}
    >
      {pending ? <IconSpinner /> : "Log in"}
    </button>
  );
}
