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
          <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
            {/* text */}
            <div className="order-2 text-center xl:order-none xl:text-left">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Olá, sou <br />
                <span className="text-accent">João Pedro</span>
              </h1>
              <p className="mb-9 max-w-[500px] text-dark-secondary/80 dark:text-light-secondary/60">
                Tenho experiência em desenvolver aplicações web modernas e
                funcionais, e também sou proficiente em diversas tecnologias
                relacionadas ao front-end.
              </p>

              {/* btn and socials */}
              <div className="flex flex-col items-center gap-8 xl:flex-row">
                <a download="cv_devjpedro" href="/assets/cv.pdf">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 uppercase"
                  >
                    <span>Baixar CV</span>
                    <FiDownload className="text-xl " />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-light-primary hover:dark:text-dark-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* photo */}
            <div className="order-1 mb-8 xl:order-none xl:mb-0">
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
