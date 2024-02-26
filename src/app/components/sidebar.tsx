import { HomeIcon, Search, Library } from "lucide-react";

export function SideBar() {
    return (
        <aside className="w-72 text-white bg-zinc-9104 p-6">
            <nav className='space-y-5'>
                <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
                    <HomeIcon />
                    Home
                </a>
                <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
                    <Search />
                    Search
                </a>
                <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
                    <Library />
                    Your Library
                </a>
            </nav>
            <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Without me</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Umbrella</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Kiss Kiss</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist diamond</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Bad blood</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Fábrica de bico</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Doctor</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Galopeira</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Wake up</a>

            </nav>
        </aside>
    )
}