
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'

import { Footer } from './components/footer'
import { SideBar } from './components/sidebar'
import { DailyMix1 } from './components/DailyMix-1'
import { DailyMix2 } from './components/DailyMix-2'
import { DailyMix3 } from './components/DailyMix-3'
import { DailyMix4 } from './components/DailyMix-4'
import { DailyMix5 } from './components/DailyMix-5'
import { Eminem } from './components/Eminem'
import { Rihanna } from './components/Rihanna'
import { ChrisBrown } from './components/ChrisBrown'
import { Rihanna2 } from './components/Rihanna2'
import { TaylorSwift } from './components/TaylorSwift'
import { McZoiDeGato } from './components/McZoiDeGato'
import { Eminem2 } from './components/Eminem2'
import { Xitaozinho_Xororo } from './components/Xitaozinho_Xororo'
import { Soad } from './components/S.O.A.D'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 text-white p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            < Eminem />
            < Rihanna />
            < ChrisBrown />
            < Rihanna2 />
            < TaylorSwift />
            < McZoiDeGato />
            < Eminem2 />
            < Xitaozinho_Xororo />
            < Soad />



          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Vitor Silva</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            < DailyMix1 />
            < DailyMix2 />
            < DailyMix3 />
            < DailyMix4 />
            < DailyMix5 />
          </div>
        </main >
      </div >
      < Footer />
    </div >
  )
}
