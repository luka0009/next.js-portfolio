import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, image, className }: any) => {
  return (
    <motion.div
      className="flex justify-center items-center rounded-full font-semibold bg-black text-white p-2 px-4 absolute"
      initial={{ x: 0, y: 9 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between gap-x-3 items-center">
        <img src={image} className={`w-8 h-8`} style={className} />
        {name}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl w-full text-center md:text-6xl">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full"
        style={{
          background:
            "repeating-radial-gradient(pink 2px, #1F0A3A 5px, #1F0A3A 100px)",
        }}
      >
        <motion.div className="flex justify-center items-center rounded-full font-semibold bg-black text-white p-2 px-4">
          Web
        </motion.div>
        <Skill name="HTML" image="/assets/skills/html.png" x="-5vw" y="-13vw" />
        <Skill name="CSS" image="/assets/skills/css.png" x="-20vw" y="2vw" />
        <Skill name="Tailwind" image="/assets/skills/tailwind.png" x="-32vw" y="2vw" />
        <Skill name="JS" image="/assets/skills/js.png" x="5vw" y="10vw" />
        <Skill name="TS" image="/assets/skills/ts.png" x="18vw" y="-8vw" />
        <Skill
          name="Bootstrap"
          image="/assets/skills/bootstrap.png"
          x="20vw"
          y="-15vw"
        />
        <Skill
          name="Express"
          image="/assets/skills/express.png"
          x="-20vw"
          y="-15vw"
          className={{ filter: "brightness(0) invert(1)" }}
        />
        <Skill
          name="React"
          image="/assets/skills/react.png"
          x="20vw"
          y="15vw"
        />
        <Skill
          name="Firebase"
          image="/assets/skills/firebase.png"
          x="-26vw"
          y="12vw"
        />
        <Skill
          name="Vue"
          image="/assets/skills/vue.png"
          x="0vw"
          y="17vw"
        />
        <Skill
          name="Git"
          image="/assets/skills/git-github.png"
          x="22vw"
          y="0vw"
        />
        <Skill
          name="Prisma"
          image="/assets/skills/prisma.png"
          x="-32vw"
          y="-7vw"
        />
        <Skill
          name="MongoDB"
          image="/assets/skills/mongodb.png"
          x="-18vw"
          y="-8vw"
        />
        <Skill
          name="MySQL"
          image="/assets/skills/MySQL.png"
          x="-13vw"
          y="9vw"
        />
        <Skill
          name="npm"
          image="/assets/skills/npm.png"
          x="35vw"
          y="0vw"
        />
        <Skill
          name="Next.js"
          image="/assets/skills/nextjs.png"
          x="7vw"
          y="-13vw"
        />
        <Skill
          name="Node.js"
          image="/assets/skills/nodejs.png"
          x="16vw"
          y="7vw"
        />
        <Skill
          name="Redux"
          image="/assets/skills/redux.png"
          x="30vw"
          y="7vw"
        />
        <Skill
          name="SCSS"
          image="/assets/skills/scss.png"
          x="30vw"
          y="-7vw"
        />
        <Skill
          name="Pinia"
          image="https://user-images.githubusercontent.com/6919381/149651295-0bf814f5-ad07-4d40-9af2-78dd99d8e1e7.png"
          x="0vw"
          y="-19vw"
        />
      </div>
    </>
  );
};

export default Skills;
