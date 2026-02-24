export const TAGS = {
    ASTRO: {
        name: "Astro",
        class: "bg-[#7836cf]/20 text-[#bc95ff]",
        icon: "lucide:rocket",
    },
    REACT: {
        name: "React",
        class: "bg-[#23272f] text-[#58c4dc]",
        icon: "lucide:atom",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: "lucide:wind",
    },
    NODE: {
        name: "Node.js",
        class: "bg-[#339933]/20 text-[#6cc24a]",
        icon: "lucide:server",
    },
};

export const PROJECTS = [
    {
        title: "Stampede 3D",
        description:
            "Stampede 3D is a fast and chaotic arcade runner where every buffalo counts. Grow your stampede, dodge obstacles, and try to reach the finish line with the biggest herd you can keep alive.",
        videoEmbedUrl: "https://www.youtube.com/embed/e_-9azQLHwI?si=-9sYJqHK5pKnVquB",
        link: "https://davidgamesdev.itch.io/stampede-3d",
        /* tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.NODE], */
    },
    {
        title: "Play With Me",
        description:
            "In Play With Me, you play as the pirate toy who wants nothing more than to be played with by your human owner. It was a final‑year project developed by a team of three, which we put a lot of heart into and eventually released on Steam.",
        videoEmbedUrl: "https://www.youtube.com/embed/YWk1_vkW7YE?si=G68eXh66K9QLe1h2",
        link: "https://store.steampowered.com/app/2051650/Play_With_Me/",
        /* tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.REACT], */
    },
    {
        title: "Crafting Puzzle",
        description:
            "A sandbox RPG where you gather resources, craft materials and tools, and use them to solve a variety of puzzles as you progress through the adventure.",
        videoEmbedUrl: "https://www.youtube.com/embed/YWk1_vkW7YE?si=G68eXh66K9QLe1h2",
    },
];
