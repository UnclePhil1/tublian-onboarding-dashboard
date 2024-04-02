import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className=''>
            <div className="text-center space-y-2">
                <Image
                    src={'./Images/notfound.svg'}
                    alt='profile'
                    width={700}
                    height={300}
                    className='md:w-[300px] md:h-[300px] text-center mx-auto'
                />
                <h2>Not Found</h2>
                <p className='text-primary/50'>The page is still under development!</p>
                <Button variant={'green'}>
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    )
}