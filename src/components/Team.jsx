import { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { teamInformation } from "../data/data";


const Team = ({ autoplay }) => {

  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % teamInformation.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + teamInformation.length) % teamInformation.length)
  }

  const isActive = (index) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  return (


    <div id="team" className="mx-auto max-w-sm bg-blue-50 px-4 py-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {teamInformation.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : teamInformation.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-between md:py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black ">{teamInformation[active].name}</h3>
            <p className="text-sm text-gray-500 ">{teamInformation[active].designation}</p>
            <motion.p className="mt-4 text-lg text-gray-500 ">
              {teamInformation[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="gap-4 pt-12 md:pt-0 hidden md:flex">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 transition-colors duration-300"
            >
              <ArrowBackIcon className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 transition-colors duration-300"
            >
              <ArrowForwardIcon className="h-6 w-6 text-white" />
            </button>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Team; 