import Header from '@/components/Header'
import ToStart from '@/components/ToStart'
import FastMarquee from '@/components/FastMarquee'
import * as S from './styles'
import Differences from '@/components/Differences'
import Plans from '@/components/Plans'
import PartOfTheFamily from '@/components/PartOfTheFamily'
// import Contact from '@/components/Contact'

const Home = () => {
  return (
    <>
      <S.ContainerFrame>
        <Header />
        <ToStart />
      </S.ContainerFrame>
      <FastMarquee />
      <Differences />
      <Plans />
      <PartOfTheFamily />
      {/* <Contact /> */}
    </>
  )
}

export default Home
