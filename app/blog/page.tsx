'use client';
import BlogPostCard from "@/components/cards/blog-post";


export default function BlogPage() {


    return (
        <main className="flex justify-center min-h-screen flex-col items-center justify-between">
            <div className="px-20 ">
                <div className="h-[80vh] w-[100vw] bg-cover bg-no-repeat bg-bg-endor px-40 py-48">
                    <div className="my-auto h-1/2 w-2/3">
                        <h1 className="text-white text-6xl font-medium leading-tight">Neuer PLANET MUSTAFAR
                            JETZT VERFÜGBAR</h1>
                        <div className="w-2/3 mt-7">
                            <p className="text-white/80 text-[20px] flex-wrap">Ihr könnt jetzt unsere neue Webseite entdecken! Habt viel Spaß dabei und lasst uns euer Feedback da :)</p>
                        </div>

                        <div className="mt-7">
                            <a className="inline-flex justify-center rounded-md text-sm font-semibold py-3 px-8 bg-[#ffc442] text-black uppercase hover:bg-[#dba42a] hover:cursor-pointer">Weiterlesen</a>
                        </div>

                    </div>
                </div>


                <div className="mt-5 py-20 px-40 grid grid-cols-3 gap-4">
                    <BlogPostCard
                        postTitle="Neuer PLANET MUSTAFAR JETZT VERFÜGBAR"
                        postDesc="Ihr könnt jetzt unsere neue Webseite entdecken! Habt viel Spaß dabei und lasst uns euer Feedback da :)"
                        postImgUrl="https://plexus.baltic-galaxy.de/assets/baltic/mustafar.png"
                        postSlug="/blog/planet-mustafar"
                    />

                    <BlogPostCard
                        postTitle="Neuer PLANET MUSTAFAR JETZT VERFÜGBAR"
                        postDesc="Ihr könnt jetzt unsere neue Webseite entdecken! Habt viel Spaß dabei und lasst uns euer Feedback da :)"
                        postImgUrl="https://plexus.baltic-galaxy.de/assets/baltic/mustafar.png"
                        postSlug="/blog/planet-mustafar"
                    />

                    <BlogPostCard
                        postTitle="Neuer PLANET MUSTAFAR JETZT VERFÜGBAR"
                        postDesc="Ihr könnt jetzt unsere neue Webseite entdecken! Habt viel Spaß dabei und lasst uns euer Feedback da :)"
                        postImgUrl="https://plexus.baltic-galaxy.de/assets/baltic/mustafar.png"
                        postSlug="/blog/planet-mustafar"
                    />

            </div>
        </div>

        </main>
    )
}
