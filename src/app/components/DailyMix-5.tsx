import Image from "next/image";


export function DailyMix5() {
    return (
        <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="data:image/jpeg;base64,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"
                className='w-full'
                width={104} height={104}
                alt='Capa do álbum Taylor Swift'
            />
            <strong className='font-semibold'>Daily Mix 5</strong>
            <span className='text-sm text-zinc-400'> Taylor Swift, Katy Perry, Dua Lipa and more</span>
        </a>
    )
}