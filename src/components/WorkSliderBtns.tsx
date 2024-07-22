'use client'

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { useSwiper } from 'swiper/react'

interface WorkSliderBtnsProps {
  containerStyles: string
  btnStyles: string
}

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
}: WorkSliderBtnsProps) => {
  // hooks
  const swiper = useSwiper()

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  )
}

export default WorkSliderBtns
