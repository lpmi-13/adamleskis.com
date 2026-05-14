import apiWebP from "./img/portfolio/api.webp";
import convoWebP from "./img/portfolio/convo.webp";
import cakeModuleWebP from "./img/portfolio/cake-module.webp";
import cartoonBirdWebP from "./img/portfolio/cartoon_bird.smallest.webp";
import cartoonBookWebP from "./img/portfolio/cartoon_book.webp";
import clockWebP from "./img/portfolio/clock.webp";
import foodPlateWebP from "./img/portfolio/food-plate.smallest.webp";
import githubUserStatsWebP from "./img/portfolio/githubUserStats.webp";
import graphitWebP from "./img/portfolio/graphit.webp";
import howFastWebP from "./img/portfolio/howfast_circle.webp";
import ipWebP from "./img/portfolio/ip.webp";
import k8sDOWebP from "./img/portfolio/k8sDO.webp";
import mergeAMaticWebP from "./img/portfolio/merge-a-matic.webp";
import minimalsWebP from "./img/portfolio/minimals.webp";
import netmaskBitsWebP from "./img/portfolio/netmask-bits.webp";
import parsonsWebP from "./img/portfolio/parsons.webp";
import pypobotWebP from "./img/portfolio/pypobot.webp";
import rebasicWebP from "./img/portfolio/rebasic.webp";
import reflogPowerWebP from "./img/portfolio/reflog-power.webp";
import sadPodsWebP from "./img/portfolio/sadpods-smallest.webp";
import semverWebP from "./img/portfolio/semver.webp";
import sentenceWebP from "./img/portfolio/sentence.webp";
import stressMatchWebP from "./img/portfolio/stress-match-small.webp";
import wordsWebP from "./img/portfolio/words.webp";

const GITHUB_BASE_URL = "https://github.com/lpmi-13/";

export type PortfolioItemData = {
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
    date: "October 2018",
    description:
      "A command line micromaterial for users to practice rebasing to remove unneeded commit messages",
    focus: "Git",
    imageNameWebP: rebasicWebP,
    projectName: "rebasic",
    repoURL: GITHUB_BASE_URL + "rebasic",
  },
  {
    date: "November 2018",
    description:
      "A command line micromaterial for users to practice resolving merge conflicts",
    focus: "Git",
    imageNameWebP: mergeAMaticWebP,
    projectName: "merge-a-matic",
    repoURL: GITHUB_BASE_URL + "merge-a-matic",
  },
  {
    date: "February 2019",
    description:
      "A command line micromaterial to practice bringing deleted branches back from the dead with the power of the reflog",
    focus: "Git",
    imageNameWebP: reflogPowerWebP,
    projectName: "reflog power",
    repoURL: GITHUB_BASE_URL + "reflog-power",
  },
  {
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
    date: "July 2020",
    description: "a micromaterial to practice updating a git submodule",
    focus: "Git",
    imageNameWebP: cakeModuleWebP,
    projectName: "submodz",
    repoURL: GITHUB_BASE_URL + "submodz",
  },
  {
    date: "October 2020",
    description: "Using code from github to create parsons problems",
    focus: "code organization",
    imageNameWebP: parsonsWebP,
    projectName: "parsons problems",
    repoURL: GITHUB_BASE_URL + "parsons-problems",
    webURL: "https://parsons-problems.netlify.app",
  },
  {
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
    date: "August 2022",
    description:
      "a project to re-implement the great sadservers.com, but in Gitpod. They all have the format of https://github.com/lpmi-13/sadpods-* (eg, sadpods-webserver), so just search for them in my respositories",
    focus: "linux sysadmin practice",
    imageNameWebP: sadPodsWebP,
    projectName: "sadpods",
  },
];

export const languageItemList: PortfolioItemData[] = [
  {
    date: "September 2019",
    description:
      "A simple game to help learners focus on the stress in academic vocabulary.",
    focus: "Preact + the Academic Word List (Coxhead, 2000)",
    imageNameWebP: stressMatchWebP,
    projectName: "stress match",
    repoURL: GITHUB_BASE_URL + "stress-match-game",
    webURL: "https://grammarbuffet.org/stress-game",
  },
  {
    date: "Feb 2018",
    description:
      "A project to generate minimal pair (eg, bat/bet) audio samples from TED talks on YouTube and present these to English language learners for discrimination practice",
    focus: "Python + Bash + Docker + jQuery",
    imageNameWebP: minimalsWebP,
    projectName: "minimals",
    repoURL: GITHUB_BASE_URL + "minimalPairGenerator",
  },
  {
    date: "March 2017",
    description:
      "A game intended as a way for students to practice revising contextualized writing for various features (eg, past participles, plural nouns, possessives). Students check sentences as they come down the production line and tap those that need to be corrected. Current functionality allows for identification, but future work will involve actual correction of forms. Here's a link to the game",
    focus: "Reddit API + Flask + PhaserJS",
    imageNameWebP: sentenceWebP,
    projectName: "sentence factory",
    repoURL: GITHUB_BASE_URL + "sentencefactory",
  },
  {
    date: "November 2016",
    description:
      "This is an API to serve text content together with parts of speech and lemma tags. It currently uses content from the writing prompts subreddit stored in a database. Right now it's only text-based resources served, but future plans include serving audio resources. For more specific implementation details, check out the documentation with example endpoints, query parameters, and responses. Many thanks to Rich Douglas for his invaluable help in creating this API.",
    focus: "Reddit API + Flask + MongoDB",
    imageNameWebP: apiWebP,
    projectName: "micromaterials API",
    repoURL: GITHUB_BASE_URL + "micromaterials-api",
  },
  {
    date: "September 2016",
    description:
      "An app developed to scaffold turn-taking in academic discussion exercises. Students are able to use the interface to signal when they would like to interject, and group members receive notifications along with helpful ways to yield the floor.",
    focus: "Node + Pusher + jQuery",
    imageNameWebP: convoWebP,
    projectName: "convo helper",
    repoURL: GITHUB_BASE_URL + "convohelper",
  },
  {
    date: "August 2016",
    description:
      "A web game to practice identifying and correcting overgeneralized -ed suffixes on irregular simple past verbs. In the regular levels, just identify the verbs that have been overgeneralized to have -ed past tense forms. In the bonus round, students need to type in the correct irregular past tense.",
    focus: "Reddit API + Flask + PhaserJS",
    imageNameWebP: wordsWebP,
    projectName: "touchwords",
    repoURL: GITHUB_BASE_URL + "touchwords",
    webURL: "https://grammarbuffet.org/touchwords",
  },
  {
    date: "April 2016",
    description:
      "A web application created as a demonstration of a Micro-material for English language learning. Automatically generates materials at two different difficulty levels from up-to-date public internet resources. Targets revision of articles (a/an/the) in written English in three different genres: Business journalism, Academic abstracts, and short Fiction stories.",
    focus: "Web scraping + search APIs + Node + Angular",
    imageNameWebP: foodPlateWebP,
    projectName: "anwriting",
    repoURL: GITHUB_BASE_URL + "anwriting",
    webURL: "https://anwriting.herokuapp.com",
  },
  {
    date: "July 2015",
    description:
      "A project focused on assisting students with sensitising themselves to article (a/an/the) usage in fiction writing. Uses real-time data from The Writing Prompts Sub-Reddit to compile the materials.",
    focus: "Reddit API + Node + jQuery",
    imageNameWebP: cartoonBookWebP,
    projectName: "anredd",
    repoURL: GITHUB_BASE_URL + "anredd",
  },
  {
    date: "June 2015",
    description:
      "A project using real-time data from Twitter to help students practise using articles (a/an/the) in short authentic texts.",
    focus: "Twitter Search API + Node + jQuery",
    imageNameWebP: cartoonBirdWebP,
    projectName: "antweet",
    repoURL: GITHUB_BASE_URL + "antweet",
  },
];

export const mathItemList: PortfolioItemData[] = [
  {
    date: "April 2019",
    description:
      "This is an attempt to make it easier to just physically draw a graph and then see what the equation is for that graph.",
    focus: "Javascript + mathematics",
    imageNameWebP: graphitWebP,
    projectName: "graphit",
    repoURL: GITHUB_BASE_URL + "graphit",
    webURL: "https://mathbuffet.party",
  },
];

export const miscItemList: PortfolioItemData[] = [
  {
    date: "June 2021",
    description: "An adaptation of Kubernetes The Hardway on Digital Ocean.",
    focus: "Kubernetes",
    imageNameWebP: k8sDOWebP,
    projectName: "K8s The Hard Way - DO",
    repoURL: GITHUB_BASE_URL + "kubernetes-the-hard-way-do",
  },
  {
    date: "April 2020",
    description:
      "This is a fun project using data from Wikipedia to determine how many countries' national records in athletics the user is faster than. Just input your time and find out.",
    focus: "Web scraping + Python + React + D3",
    imageNameWebP: howFastWebP,
    projectName: "how fast am I?",
    repoURL: GITHUB_BASE_URL + "howfast",
    webURL: "https://howfastami.netlify.app",
  },
  {
    date: "July 2017",
    description:
      "A simple python command line utility to find typos in github readmes, then automatically submit pull requests to fix them.",
    focus: "Python + Github Search API + MongoDB",
    imageNameWebP: pypobotWebP,
    projectName: "pypobot",
    repoURL: GITHUB_BASE_URL + "pypobot",
  },
  {
    date: "January 2019",
    description:
      "This emerged from an idea about a different way to measure contributions to open source software. Instead of counting total commits, it only counts unique PR's merged to repos not owned by the user.",
    focus: "Django + PostgreSQL + React + Material-UI",
    imageNameWebP: githubUserStatsWebP,
    projectName: "GitHub user stats",
    repoURL: GITHUB_BASE_URL + "githubuserstats",
  },
];
