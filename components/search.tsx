'use client'

import { Search } from 'lucide-react'
import { Input } from './ui/input'

const SearchInputBar = () => {
    // Declearing some usefull hooks

    return (
        <div className='relative w-[50%] hidden lg:block'>
            <Search className='absolute h-4 w-4 top-3 left-4 text-muted-foreground cursor-pointer hover:text-slate-200' />
            <Input
                placeholder='Search'
                className='pl-10 bg-transparent'
            />
        </div>
    )
}

export default SearchInputBar