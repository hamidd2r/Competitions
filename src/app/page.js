import Appoinment from '@/components/Appoinment'
import ChooseUs from '@/components/ChooseUs'
import Intro from '@/components/Intro'
import Listofdog from '@/components/Listofdog'
import PetList from '@/components/PetList'
import PhotoSlide from '@/components/PhotoSlide'
import Recovery from '@/components/Recovery'
import Image from 'next/image'

export default function Home() {
  return (
 <>
 <PhotoSlide/>
 <Listofdog/>
 <Intro/>
 {/* <Appoinment/> */}
 <ChooseUs/>
 {/* <PetList/> */}
 {/* <Recovery/> */}
 </>
  )
}
