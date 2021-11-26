import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiStrapi, SiGraphql, SiNextdotjs, SiPostman, SiTrello} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

// Buscar los iconos https://react-icons.github.io/react-icons/
export const Skills = [
  {
    slug: "Next",
    Component: SiNextdotjs,
    title: "Next",
    Description: () => <>I work on ROMs, Kernels & Android Apps using Java.</>,
    value:50,
  },
  {
    slug: "Gatsby",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>Currently working with Dart & Flutter for app development. </>,
    value: 20,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I can code in Java. But I mainly use it for Android app development.</>,
    value: 80,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written dozens of Shell scripts for various purposes.</>,
    value: 70,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
    value: 90,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
    value: 90,
  },
  {
    slug: "git2",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
    value: 10,
  },
];

export const SkillsBackEnd = [
  {
    slug: "Node",
    Component: FaNodeJs,
    title: "Node",
    Description: () => <>He trabajado con Node usando Librerias como bcrypt , express-validator , jsonwebtoken , multer </>,
    value: 50,
  },
  {
    slug: "Strapi",
    Component: SiStrapi,
    title: "Strapi",
    Description: () => <>Currently working with Dart & Flutter for app development. </>,
    value: 20,
  },
  {
    slug: "GraphQL",
    Component: SiGraphql,
    title: "GraphQL",
    Description: () => <>Currently working with Dart & Flutter for app development. </>,
    value: 40,
  },
  {
    slug: "Postman",
    Component: SiPostman,
    title: "Postman",
    Description: () => <> He trabajado durante 4 años </>,
    value: 80,
  },


];

export const SkillsColaboration = [
  {
    slug: "Trello",
    Component: SiTrello,
    title: "Trello",
    Description: () => <>He trabajado con Node usando Librerias como bcrypt , express-validator , jsonwebtoken </>,
    value: 50,
  },
  
];

