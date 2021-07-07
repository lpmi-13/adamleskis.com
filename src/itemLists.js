import apiPng from './img/portfolio/api.png';
import apiWebP from './img/portfolio/api.webp';
import convoPng from './img/portfolio/convo.png';
import convoWebP from './img/portfolio/convo.webp';
import cakeModulePng from './img/portfolio/cake-module.png';
import cakeModuleWebP from './img/portfolio/cake-module.webp';
import cartoonBirdPng from './img/portfolio/cartoon_bird.smallest.png';
import cartoonBirdWebP from './img/portfolio/cartoon_bird.smallest.webp';
import cartoonBookWebP from './img/portfolio/cartoon_book.webp';
import cartoonBookPng from './img/portfolio/cartoon_book.png';
import foodPlateWebP from './img/portfolio/food-plate.smallest.webp';
import foodPlatePng from './img/portfolio/food-plate.smallest.png';
import githubUserStatsPng from './img/portfolio/githubUserStats.png';
import githubUserStatsWebP from './img/portfolio/githubUserStats.webp';
import graphitPng from './img/portfolio/graphit.png';
import graphitWebP from './img/portfolio/graphit.webp';
import howFastPng from './img/portfolio/howfast_circle.png';
import howFastWebP from './img/portfolio/howfast_circle.webp';
import ipPng from './img/portfolio/ip.png';
import ipWebP from './img/portfolio/ip.webp';
import mergeAMaticWebP from './img/portfolio/merge-a-matic.webp';
import mergeAMaticPng from './img/portfolio/merge-a-matic.png';
import minimalsPng from './img/portfolio/minimals.png';
import minimalsWebP from './img/portfolio/minimals.webp';
import netmaskBitsPng from './img/portfolio/netmask-bits.png';
import netmaskBitsWebP from './img/portfolio/netmask-bits.webp';
import pypobotPng from './img/portfolio/pypobot.png';
import pypobotWebP from './img/portfolio/pypobot.webp';
import rebasicWebP from './img/portfolio/rebasic.webp';
import rebasicPng from './img/portfolio/rebasic.png';
import reflogPowerPng from './img/portfolio/reflog-power.png';
import reflogPowerWebP from './img/portfolio/reflog-power.webp';
import sentencePng from './img/portfolio/sentence.png';
import sentenceWebP from './img/portfolio/sentence.webp';
import stressMatchPng from './img/portfolio/stress-match-small.png';
import stressMatchWebP from './img/portfolio/stress-match-small.webp';
import wordsPng from './img/portfolio/words.png';
import wordsWebP from './img/portfolio/words.webp';

const GITHUB_BASE_URL = 'https://github.com/lpmi-13/';

export const techItemList = [
    { 
        date: 'October 2018',
        description: 'A command line micromaterial for users to practice rebasing to remove unneeded commit messages',
        imageNamePng: rebasicPng,
        imageNameWebP: rebasicWebP,
        projectName: 'rebasic',
        repoURL: GITHUB_BASE_URL + 'rebasic',
        focus: 'Git',
    },
    {
        date: 'November 2018',
        description: 'A command line micromaterial for users to practice resolving merge conflicts',
        imageNamePng: mergeAMaticPng,
        imageNameWebP: mergeAMaticWebP,
        projectName: 'merge-a-matic',
        repoURL: GITHUB_BASE_URL + 'merge-a-matic',
        focus: 'Git',
    },
    {
        date: 'February 2019',
        description: 'A command line micromaterial to practice bringing deleted branches back from the dead with the power of the reflog',
        imageNamePng: reflogPowerPng,
        imageNameWebP: reflogPowerWebP,
        projectName: 'reflog power',
        repoURL: GITHUB_BASE_URL + 'reflog-power',
        focus: 'Git',
    },
    {
        date: 'January 2020',
        description: 'A browser-based micromaterial to practice identifying public and private IP addresses',
        imageNamePng: ipPng,
        imageNameWebP: ipWebP,
        projectName: 'ipinder',
        repoURL: GITHUB_BASE_URL + 'ipinder',
        focus: 'Networking',
    },
    {
        date: 'March 2020',
        description: 'a simple micromaterial to practice visualizing the effects of netmasks on subnets',
        imageNamePng: netmaskBitsPng,
        imageNameWebP: netmaskBitsWebP,
        projectName: 'netmask slider',
        repoURL: GITHUB_BASE_URL + 'netmask-slider',
        focus: 'Networking',
    },
    { 
        date: 'July 2020',
        description: 'a micromaterial to practice updating a git submodule',
        imageNamePng: cakeModulePng,
        imageNameWebP: cakeModuleWebP,
        projectName: 'submodz',
        repoURL: GITHUB_BASE_URL + 'submodz',
        focus: 'Git',
    },
];

export const languageItemList = [
    {
        date: 'September 2019',
        description: 'A simple game to help learners focus on the stress in academic vocabulary. Live at https://grammarbuffet.org',
        imageNamePng: stressMatchPng,
        imageNameWebP: stressMatchWebP,
        projectName: 'stress match',
        repoURL: GITHUB_BASE_URL + 'stress-match-game',
        focus: 'Preact + the Academic Word List (Coxhead, 2000)',
    },
    {
        date: 'Feb 2018',
        description: 'A project to generate minimal pair (eg, bat/bet) audio samples from TED talks on YouTube and present these to English language learners for discrimination practice',
        imageNamePng: minimalsPng,
        imageNameWebP: minimalsWebP,
        projectName: 'minimals',
        repoURL: GITHUB_BASE_URL + 'minimalPairGenerator',
        focus: 'Python + Bash + Docker + jQuery',
    },
    {
        date: 'March 2017',
        description: 'A game intended as a way for students to practice revising contextualized writing for various features (eg, past participles, plural nouns, possessives). Students check sentences as they come down the production line and tap those that need to be corrected. Current functionality allows for identification, but future work will involve actual correction of forms. Here\'s a link to the game',
        imageNamePng: sentencePng,
        imageNameWebP: sentenceWebP,
        projectName: 'sentence factory',
        repoURL: GITHUB_BASE_URL + 'sentencefactory',
        focus: 'Reddit API + Flask + PhaserJS',
    },
    {
        date: 'November 2016',
        description: 'This is an API to serve text content together with parts of speech and lemma tags. It currently uses content from the writing prompts subreddit stored in a database. Right now it\'s only text-based resources served, but future plans include serving audio resources. For more specific implementation details, check out the documentation with example endpoints, query parameters, and responses. Many thanks to Rich Douglas for his invaluable help in creating this API.',
        imageNamePng: apiPng,
        imageNameWebP: apiWebP,
        projectName: 'micromaterials API',
        repoURL: GITHUB_BASE_URL + 'micromaterials-api',
        focus: 'Reddit API + Flask + MongoDB',
    },
    {
        date: 'September 2016',
        description: 'An app developed to scaffold turn-taking in academic discussion exercises. Students are able to use the interface to signal when they would like to interject, and group members receive notifications along with helpful ways to yield the floor.',
        imageNamePng: convoPng,
        imageNameWebP: convoWebP,
        projectName: 'convo helper',
        repoURL: GITHUB_BASE_URL + 'convohelper',
        focus: 'Node + Pusher + jQuery',
    },
    {
        date: 'August 2016',
        description: 'A web game to practice identifying and correcting overgeneralized -ed suffixes on irregular simple past verbs. In the regular levels, just identify the verbs that have been overgeneralized to have -ed past tense forms. In the bonus round, students need to type in the correct irregular past tense. Currently live at https://grammarbuffet.org', 
        imageNamePng: wordsPng, 
        imageNameWebP: wordsWebP, 
        projectName: 'touchwords', 
        repoURL: GITHUB_BASE_URL + 'touchwords', 
        focus: 'Reddit API + Flask + PhaserJS', 
    },
    {
        date: 'April 2016',
        description: 'A web application created as a demonstration of a Micro-material for English language learning. Automatically generates materials at two different difficulty levels from up-to-date public internet resources. Targets revision of articles (a/an/the) in written English in three different genres: Business journalism, Academic abstracts, and short Fiction stories. Currently live at https://anwriting.herokuapp.com', 
        imageNamePng: foodPlatePng, 
        imageNameWebP: foodPlateWebP, 
        projectName: 'anwriting',
        repoURL: GITHUB_BASE_URL + 'anwriting', 
        focus: 'Web scraping + search APIs + Node + Angular', 
    },
    {
        date: 'July 2015', 
        description: 'A project focused on assisting students with sensitising themselves to article (a/an/the) usage in fiction writing. Uses real-time data from The Writing Prompts Sub-Reddit to compile the materials.', 
        imageNamePng: cartoonBookPng, 
        imageNameWebP: cartoonBookWebP, 
        projectName: 'anredd', 
        repoURL: GITHUB_BASE_URL + 'anredd', 
        focus: 'Reddit API + Node + jQuery', 
    },
    {
        date: 'June 2015', 
        description: 'A project using real-time data from Twitter to help students practise using articles (a/an/the) in short authentic texts.', 
        imageNamePng: cartoonBirdPng, 
        imageNameWebP: cartoonBirdWebP, 
        projectName: 'antweet', 
        repoURL: GITHUB_BASE_URL + 'antweet', 
        focus: 'Twitter Search API + Node + jQuery', 
    },
];

export const mathItemList = [
    {
        date: 'April 2019', 
        description: 'This is an attempt to make it easier to just physically draw a graph and then see what the equation is for that graph. Currently live at mathbuffet.party', 
        imageNamePng: graphitPng, 
        imageNameWebP: graphitWebP, 
        projectName: 'graphit', 
        repoURL: GITHUB_BASE_URL + 'graphit', 
        focus: 'Javascript + mathematics', 
    },
]

export const miscItemList = [
    {
        date: 'April 2020', 
        description: 'This is a fun project using data from Wikipedia to determine how many countries\' national records in athletics the user is faster than. Just input your time and find out. https://howfastami.netlify.app', 
        imageNamePng: howFastPng, 
        imageNameWebP: howFastWebP, 
        projectName: 'how fast am I?', 
        repoURL: GITHUB_BASE_URL + 'howfast', 
        focus: 'Web scraping + Python + React + D3', 
    },
    { 
        date: 'July 2017', 
        description: 'A simple python command line utility to find typos in github readmes, then automatically submit pull requests to fix them.', 
        imageNamePng: pypobotPng, 
        imageNameWebP: pypobotWebP, 
        projectName: 'pypobot', 
        repoURL: GITHUB_BASE_URL + 'pypobot', 
        focus: 'Python + Github Search API + MongoDB', 
    },
    {
        date: 'January 2019', 
        description: 'This emerged from an idea about a different way to measure contributions to open source software. Instead of counting total commits, it only counts unique PR\'s merged to repos not owned by the user.', 
        imageNamePng: githubUserStatsPng, 
        imageNameWebP: githubUserStatsWebP, 
        projectName: 'GitHub user stats', 
        repoURL: GITHUB_BASE_URL + 'githubuserstats', 
        focus: 'Django + PostgreSQL + React + Material-UI', 
    },
]