import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

// components
import PageTransition from '@/components/PageTransition'
import Photo from '@/components/Photo'
import Social from '@/components/Social'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <PageTransition>
      <section className="h-full">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Olá, sou <br />
                <span className="text-accent">João Pedro</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Tenho experiência em desenvolver aplicações web modernas e
                funcionais, e também sou proficiente em diversas tecnologias
                relacionadas ao front-end.
              </p>

              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a download="cv_devjpedro" href="/assets/cv.pdf">
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Baixar CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </PageTransition>
  )
}

export default Home
