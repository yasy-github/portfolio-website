let slides = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", alt: "Postman" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original-wordmark.svg", alt: "Digitalocean" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg", alt: "Cloudflare" },
]

export const Slider = () => {
    return (
        <div className="invisible md:visible max-w-5xl mx-auto px-4 mt-50">
            {/* <div class="flex items-center justify-center h-screen bg-gray-300"> */}
            <div class="slider relative shadow-lg overflow-hidden w-[960px] h-[100px]">
                <div class="before:absolute before:content-[''] before:w-[100px] before:h-[250px] before:bg-gradient-to-r before:from-black before:to-transparent before:z-2 before:left-0 before:top-0
                    after:absolute after:content-[''] after:w-[100px] after:h-[250px] after:bg-gradient-to-r after:from-black after:to-transparent after:z-2 after:right-0 after:top-0 after:rotate-180"
                />
                <div class="slide-track">
                    {
                        [...slides, ...slides].map((slide, index) => (
                            <img src={slide.src} alt={slide.alt} height="250" width="100" className="mx-10"/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};