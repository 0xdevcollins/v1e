'use client'

import * as React from 'react'
import { Bell, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface SearchBarProps {
    onSearch: (query: string) => void
    placeholder?: string
    avatarSrc?: string
    avatarFallback?: string
    className?: string
    notificationCount?: number
}

export default function SearchBar({
    onSearch,
    placeholder = 'Search document, template,....',
    avatarSrc,
    avatarFallback = 'U',
    className = '',
    notificationCount = 0,
}: SearchBarProps) {
    const [query, setQuery] = React.useState('')

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted with query:', query)
        onSearch(query)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        console.log('Input changed:', newValue)
        setQuery(newValue)
    }

    // Debug effect to monitor query state changes
    React.useEffect(() => {
        console.log('Query state updated:', query)
    }, [query])

    return (
        <form
            onSubmit={handleSearch}
            className={`flex items-center gap-20 lg:gap-24 ${className}`}
        >
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 transform text-muted-foreground" />
                <Input
                    type="search"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleInputChange}
                    className="w-full rounded-full bg-muted/50 pl-10 pt-5 pb-5 pr-4 placeholder:text-lg text-lg"
                />
            </div>
            <div className='hidden items-center gap-5 icons-section md:flex'>
                <div className="relative">
                    <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                        onClick={() => console.log('Notification button clicked')}
                    >
                        <Bell className="h-8 w-8" size={30} />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    {notificationCount > 0 && (
                        <span className="absolute -top-0 -right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                            {notificationCount > 99 ? '99+' : notificationCount}
                        </span>
                    )}
                </div>
                <Avatar className="h-12 w-12">
                    <AvatarImage src={avatarSrc} alt="User avatar" />
                    <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
            </div>
        </form>
    )
}