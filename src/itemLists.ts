import addBlocksWebP from "./img/portfolio/addblocks.webp";
import anreddWebP from "./img/portfolio/anredd.webp";
import antweetWebP from "./img/portfolio/antweet.webp";
import anwritingWebP from "./img/portfolio/anwriting.webp";
import cakeModuleWebP from "./img/portfolio/cake-module.webp";
import clockWebP from "./img/portfolio/clock.webp";
import doomPerfWebP from "./img/portfolio/doom-perf.webp";
import githubUserStatsWebP from "./img/portfolio/githubUserStats.webp";
import graphitWebP from "./img/portfolio/graphit.webp";
import howFastWebP from "./img/portfolio/howfast_circle.webp";
import ipWebP from "./img/portfolio/ip.webp";
import k8sDOWebP from "./img/portfolio/k8sDO.webp";
import mergeAMaticWebP from "./img/portfolio/merge-a-matic.webp";
import netmaskBitsWebP from "./img/portfolio/netmask-bits.webp";
import osiVizWebP from "./img/portfolio/osi-viz.webp";
import parsonsWebP from "./img/portfolio/parsons.webp";
import percentWheelWebP from "./img/portfolio/percentwheel.webp";
import portsAndSocketsWebP from "./img/portfolio/ports-and-sockets.webp";
import pypobotWebP from "./img/portfolio/pypobot.webp";
import rebasicWebP from "./img/portfolio/rebasic.webp";
import reflogPowerWebP from "./img/portfolio/reflog-power.webp";
import rhymeMatchWebP from "./img/portfolio/rhyme-match.webp";
import sadPodsWebP from "./img/portfolio/sadpods-smallest.webp";
import semverWebP from "./img/portfolio/semver.webp";
import sentenceFactoryWebP from "./img/portfolio/sentence-factory.webp";
import stressMazeWebP from "./img/portfolio/stress-maze.webp";
import stressMatchWebP from "./img/portfolio/stress-match-small.webp";
import toneVizWebP from "./img/portfolio/tone-viz.webp";
import touchwordsWebP from "./img/portfolio/touchwords.webp";
import usePracticeWebP from "./img/portfolio/use-practice.webp";
import useToolWebP from "./img/portfolio/use-tool.webp";
import wordSliceWebP from "./img/portfolio/word-slice.webp";

const GITHUB_BASE_URL = "https://github.com/lpmi-13/";

export type PortfolioItemData = {
  altText: string;
  date: string;
  description: string;
  focus: string;
  imageNameWebP: string;
  projectName: string;
  repoURL?: string;
  webURL?: string;
};

export const techItemList: PortfolioItemData[] = [
  {
    altText:
      "Chain of commits with one commit lifted out by an arrow as the line closes behind it",
    date: "October 2018",
    description:
      "A command line micromaterial for users to practice rebasing to remove unneeded commit messages",
    focus: "Git",
    imageNameWebP: rebasicWebP,
    projectName: "rebasic",
    repoURL: GITHUB_BASE_URL + "rebasic",
  },
  {
    altText:
      "Git branch diagram with three connected nodes inside an orange circle",
    date: "November 2018",
    description:
      "A command line micromaterial for users to practice resolving merge conflicts",
    focus: "Git",
    imageNameWebP: mergeAMaticWebP,
    projectName: "merge-a-matic",
    repoURL: GITHUB_BASE_URL + "merge-a-matic",
  },
  {
    altText: "Zombie hand with clawed fingers and a stitched palm rising from the ground beside a tombstone engraved with a commit symbol",
    date: "February 2019",
    description:
      "A command line micromaterial to practice bringing deleted branches back from the dead with the power of the reflog",
    focus: "Git",
    imageNameWebP: reflogPowerWebP,
    projectName: "reflog power",
    repoURL: GITHUB_BASE_URL + "reflog-power",
  },
  {
    altText:
      "Tilted address card showing the public IP 8.8.8.8 between swipe buttons, with the public side highlighted",
    date: "January 2020",
    description:
      "A browser-based micromaterial to practice identifying public and private IP addresses",
    focus: "Networking",
    imageNameWebP: ipWebP,
    projectName: "ipinder",
    repoURL: GITHUB_BASE_URL + "ipinder",
    webURL: "https://ipinder.netlify.app",
  },
  {
    altText:
      "Four octets of bits, three shaded as network bits, above a slider set at the boundary",
    date: "March 2020",
    description:
      "a simple micromaterial to practice visualizing the effects of netmasks on subnets",
    focus: "Networking",
    imageNameWebP: netmaskBitsWebP,
    projectName: "netmask slider",
    repoURL: GITHUB_BASE_URL + "netmask-slider",
    webURL: "https://netmask-slider.netlify.app",
  },
  {
    altText: "Round iced cake topped with a cherry beside one orange slice cut from it, the slice flagged with commit 4a1d578",
    date: "July 2020",
    description: "a micromaterial to practice updating a git submodule",
    focus: "Git",
    imageNameWebP: cakeModuleWebP,
    projectName: "submodz",
    repoURL: GITHUB_BASE_URL + "submodz",
  },
  {
    altText: "Six staggered code-like lines inside a purple circle",
    date: "October 2020",
    description: "Using code from github to create parsons problems",
    focus: "code organization",
    imageNameWebP: parsonsWebP,
    projectName: "parsons problems",
    repoURL: GITHUB_BASE_URL + "parsons-problems",
    webURL: "https://parsons-problems.netlify.app",
  },
  {
    altText: "Analogue clock face with black hands and a red second hand",
    date: "April 2021",
    description:
      "a micromaterial to practice reading and understanding cron expressions",
    focus: "Cron expressions",
    imageNameWebP: clockWebP,
    projectName: "cron-trigger",
    repoURL: GITHUB_BASE_URL + "cron-trigger",
    webURL: "https://cron-trigger.netlify.app",
  },
  {
    altText: "Semantic version 4.2.1 labelled major, minor, and patch",
    date: "May 2021",
    description:
      "a quick primer on what semantic version numbers mean and how to use them",
    focus: "Semantic versioning",
    imageNameWebP: semverWebP,
    projectName: "semver-questions",
    repoURL: GITHUB_BASE_URL + "semver-questions",
    webURL: "https://semver-questions.netlify.app",
  },
  {
    altText: "Sad face inside a blue Kubernetes-style pod icon",
    date: "August 2022",
    description:
      "a project to re-implement the great sadservers.com, but in Gitpod. They all have the format of https://github.com/lpmi-13/sadpods-* (eg, sadpods-webserver), so just search for them in my respositories",
    focus: "linux sysadmin practice",
    imageNameWebP: sadPodsWebP,
    projectName: "sadpods",
  },
  {
    altText:
      "Colour-coded protocol layer blocks stacked inside a dashed network boundary, with a payload toggle and one more layer being added",
    date: "July 2026",
    description:
      "An interactive visualization that makes network encapsulation visible by showing how HTTP data is wrapped in TLS, TCP, IP, and VXLAN metadata. Learners can inspect each layer and step through a request being wrapped and unwrapped.",
    focus: "JavaScript + TCP/IP encapsulation",
    imageNameWebP: osiVizWebP,
    projectName: "OSI Viz",
    repoURL: GITHUB_BASE_URL + "osi-viz",
    webURL: "https://osi-viz.netlify.app",
  },
  {
    altText:
      "One port fanning out to a column of power sockets that continues past the frame",
    date: "July 2026",
    description:
      "An interactive explainer for the difference between ports, kernel sockets, and process file descriptors. Learners can follow either side of an nginx connection and explore what happens when the server reaches its file-descriptor limit.",
    focus: "TypeScript + TCP sockets + Linux",
    imageNameWebP: portsAndSocketsWebP,
    projectName: "ports ≠ sockets",
    repoURL: GITHUB_BASE_URL + "ports-and-sockets",
    webURL: "https://ports-and-sockets.netlify.app",
  },
  {
    altText:
      "Terminal showing utilisation, saturation and error dials, wired to CPU, memory, disk and network resources",
    date: "June 2026",
    description:
      "A terminal learning harness for practising Brendan Gregg's USE method on a live Linux system. Guided walkthroughs and free-form practice cover CPU, memory, disk I/O, and networking, then ask learners to interpret the captured evidence and diagnose utilization, saturation, and errors.",
    focus: "Go + Linux performance + USE method",
    imageNameWebP: useToolWebP,
    projectName: "use-tool",
    repoURL: GITHUB_BASE_URL + "use-tool",
  },
  {
    altText:
      "Grid of identical workload tiles with a magnifying glass isolating one spiking orange tile",
    date: "June 2026",
    description:
      "Hands-on Linux performance investigation scenarios running in disposable iximiuz Labs VMs. Randomized CPU, memory, disk, and network workloads hide one problematic service among realistic baselines, so learners must find it from system signals rather than process names.",
    focus: "Go + Rust + Linux performance + iximiuz Labs",
    imageNameWebP: usePracticeWebP,
    projectName: "use-practice",
    repoURL: GITHUB_BASE_URL + "use-practice",
    webURL: "https://labs.iximiuz.com/playgrounds/use-practice-4ce4816f",
  },
  {
    altText:
      "8-bit pixel-art Doom Perf room: a glowing green memory spire capped in orange and blue between library shelves",
    date: "September 2026",
    description:
      "A fork of a browser Doom port turned into a USE-methodology performance lab. CPU, memory, disk, and network utilization, saturation, and errors become explorable Doom rooms and live, engine-driven instruments, fed by a Go telemetry service that samples Linux /proc and /sys and streams it into the patched WebAssembly engine. Runs live in an iximiuz Labs playground with a bundled load generator for creating real host load.",
    focus: "TypeScript + Go + WebAssembly + Doom + Linux performance + USE method",
    imageNameWebP: doomPerfWebP,
    projectName: "Doom Perf",
    repoURL: GITHUB_BASE_URL + "doom-perf",
    webURL: "https://labs.iximiuz.com/playgrounds/doom-perf-c0bd32e1",
  },
];

export const languageItemList: PortfolioItemData[] = [
  {
    altText:
      "Speaker and microphone, each followed by one continuous pitch contour, with the recorded contour in orange",
    date: "June 2026",
    description:
      "A local-first browser app for listening to and reproducing pitch relationships across complete Thai phrases. Learners can compare their own recording with contextual reference audio and phrase-relative pitch contours, with all analysis kept in the browser.",
    focus: "TypeScript + Web Audio + Thai phrase tones",
    imageNameWebP: toneVizWebP,
    projectName: "Thai phrase tones",
    repoURL: GITHUB_BASE_URL + "tone-viz",
    webURL: "https://tone-viz.netlify.app",
  },
  {
    altText:
      "Thai phrase ฉันกินข้าว on a conveyor belt, with ฉัน lifted off at the word boundary",
    date: "April 2026",
    description:
      "A factory-themed slicing game for practising Thai word boundaries. Learners cut moving phrases at valid boundaries across six levels built from a 500-entry, beginner-to-intermediate corpus.",
    focus: "JavaScript + Thai word segmentation",
    imageNameWebP: wordSliceWebP,
    projectName: "Thai word slice",
    repoURL: GITHUB_BASE_URL + "word-slice",
    webURL: "https://word-slice.netlify.app",
  },
  {
    altText: "Honeycomb maze with a zigzag path traced through orange cells",
    date: "March 2026",
    description:
      "A hex-grid maze for practising English word stress with academic vocabulary. Learners trace a contiguous path of words that matches a target stress pattern.",
    focus: "JavaScript + Academic Word List + word stress",
    imageNameWebP: stressMazeWebP,
    projectName: "stress maze",
    repoURL: GITHUB_BASE_URL + "stress-maze",
    webURL: "https://stress-maze.netlify.app",
  },
  {
    altText:
      "Two word cards with the same strong-weak stress dots joined by an equals sign",
    date: "September 2019",
    description:
      "A simple game to help learners focus on the stress in academic vocabulary.",
    focus: "Preact + the Academic Word List (Coxhead, 2000)",
    imageNameWebP: stressMatchWebP,
    projectName: "stress match",
    repoURL: GITHUB_BASE_URL + "stress-match-game",
    webURL: "https://stress-match.netlify.app",
  },
  {
    altText:
      "Word blocks on a conveyor belt with one orange block lifted off the line",
    date: "March 2017",
    description:
      "An English-learning game for noticing incorrect verb forms in context. Learners find a verb reset to its lemma as each sentence moves along a production line, then compare it with the original form across simple-past, -ing, and past-participle shifts.",
    focus: "TypeScript + Universal Dependencies corpus + verb forms",
    imageNameWebP: sentenceFactoryWebP,
    projectName: "sentence factory",
    repoURL: GITHUB_BASE_URL + "sentencefactory",
    webURL: "https://sentencefactory.netlify.app",
  },
  {
    altText:
      "The word taked bursting in an orange starburst, with gems flying out and a tap cursor",
    date: "August 2016",
    description:
      "A visual game for practising irregular past-tense forms. Learners tap incorrectly regularised verbs while avoiding genuine regular verbs, then type the correct forms in a timed correction round.",
    focus: "JavaScript + irregular past tense",
    imageNameWebP: touchwordsWebP,
    projectName: "Touchwords",
    repoURL: GITHUB_BASE_URL + "touchwords",
    webURL: "https://touchwords.netlify.app",
  },
  {
    altText:
      "Document page with a proofreading caret inserting an orange word between two words",
    date: "April 2016",
    description:
      "A genre-based proofreading studio for practising a, an, and the in fiction, academic, and business writing. Guided mode offers inline choices, while Editor mode asks learners to restore every article in an editable draft.",
    focus: "TypeScript + English articles + proofreading",
    imageNameWebP: anwritingWebP,
    projectName: "A(n)Writing",
    repoURL: GITHUB_BASE_URL + "anwriting",
    webURL: "https://anwriting.netlify.app",
  },
  {
    altText:
      "Search bar above a paragraph with three orange article slots restored",
    date: "July 2015",
    description:
      "An English article practice app built around complete, attributed Wikipedia paragraphs. Learners search by topic and restore every missing a, an, and the in either guided or hard mode.",
    focus: "TypeScript + Wikipedia API + English articles",
    imageNameWebP: anreddWebP,
    projectName: "A(n)Redd",
    repoURL: GITHUB_BASE_URL + "anredd",
    webURL: "https://anredd.netlify.app",
  },
  {
    altText:
      "Speech bubble sentence with one empty slot and three answer choices, the middle one selected",
    date: "June 2015",
    description:
      "An English article practice app built around attributed Tatoeba sentences. Learners search by topic and restore one missing a, an, or the in balanced sets of short, authentic examples.",
    focus: "TypeScript + Tatoeba API + English articles",
    imageNameWebP: antweetWebP,
    projectName: "A(n)Tweet",
    repoURL: GITHUB_BASE_URL + "antweet",
    webURL: "https://antweet.netlify.app",
  },
  {
    altText:
      "Word bars that all end in the same orange segment, except one ending in black",
    date: "September 2026",
    description:
      "An accessible arcade-style game for practising English rhymes. Learners choose an IPA-labelled reference word, find six words with the same final stressed sound among same-syllable distractors, and get immediate feedback across repeatable rounds.",
    focus: "TypeScript + English rhymes + IPA + CMU Pronouncing Dictionary",
    imageNameWebP: rhymeMatchWebP,
    projectName: "Rhyme Match",
    repoURL: GITHUB_BASE_URL + "rhyme-match-game",
    webURL: "https://rhyme-match-game.netlify.app",
  }
];

export const mathItemList: PortfolioItemData[] = [
  {
    altText: "Integral and x symbols inside a graphing frame",
    date: "April 2019",
    description:
      "This is an attempt to make it easier to just physically draw a graph and then see what the equation is for that graph.",
    focus: "Javascript + mathematics",
    imageNameWebP: graphitWebP,
    projectName: "graphit",
    repoURL: GITHUB_BASE_URL + "graphit",
    webURL: "https://mathbuffet.party",
  },
  {
    altText:
      "Two ten-frames of blocks, with an arrow carrying a full frame of ones over to the tens",
    date: "October 2026",
    description:
      "An interactive place-value activity that represents two-, three-, and four-digit addition with blocks. Learners move the blocks together and see how groups of ten carry into the next column.",
    focus: "TypeScript + place-value addition",
    imageNameWebP: addBlocksWebP,
    projectName: "Add Blocks",
    repoURL: GITHUB_BASE_URL + "addblocks",
    webURL: "https://addblocks.netlify.app",
  },
  {
    altText:
      "Wheel divided into eight outlined sections with five shaded and a drag handle on the edge",
    date: "October 2026",
    description:
      "An interactive wheel for exploring fractions as percentages. Learners can change the numerator or denominator, or drag around the wheel to adjust the shaded fraction and see its percentage.",
    focus: "TypeScript + fractions + percentages",
    imageNameWebP: percentWheelWebP,
    projectName: "Percent Wheel",
    repoURL: GITHUB_BASE_URL + "percentwheel",
    webURL: "https://percentwheel.netlify.app",
  },
];

export const miscItemList: PortfolioItemData[] = [
  {
    altText: "Kubernetes and DigitalOcean logos joined by a plus sign",
    date: "June 2021",
    description: "An adaptation of Kubernetes The Hardway on Digital Ocean.",
    focus: "Kubernetes",
    imageNameWebP: k8sDOWebP,
    projectName: "K8s The Hard Way - DO",
    repoURL: GITHUB_BASE_URL + "kubernetes-the-hard-way-do",
  },
  {
    altText: "Silhouette of a person sprinting with motion lines",
    date: "April 2020",
    description:
      "A static browser app that compares a runner's time with senior outdoor national athletics records from around the world. Learners can explore every country they are faster than on an interactive map, with an attributed Wikipedia snapshot refreshed at build time.",
    focus: "TypeScript + Vite + Wikipedia ingestion + d3-geo",
    imageNameWebP: howFastWebP,
    projectName: "how fast am I?",
    repoURL: GITHUB_BASE_URL + "howfast",
    webURL: "https://howfastami.netlify.app",
  },
  {
    altText: "Robot head with a wavy typo-underline mouth and a green python coiled around it",
    date: "July 2017",
    description:
      "A simple python command line utility to find typos in github readmes, then automatically submit pull requests to fix them.",
    focus: "Python + Github Search API + MongoDB",
    imageNameWebP: pypobotWebP,
    projectName: "pypobot",
    repoURL: GITHUB_BASE_URL + "pypobot",
  },
  {
    altText: "Pie and bar charts representing GitHub contribution statistics",
    date: "January 2019",
    description:
      "This emerged from an idea about a different way to measure contributions to open source software. Instead of counting total commits, it only counts unique PR's merged to repos not owned by the user.",
    focus: "Django + PostgreSQL + React + Material-UI",
    imageNameWebP: githubUserStatsWebP,
    projectName: "GitHub user stats",
    repoURL: GITHUB_BASE_URL + "githubuserstats",
  },
];
