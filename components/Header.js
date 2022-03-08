import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const handleClick = (pageRef) => {
        router.push(`/${pageRef}`)
    }
    return (
        <div className="h-10 w-screen bg-gray-300 flex space-x-2 items-center shadow-md shadow-gray-500 rounded-sm fixed">
            <div className="ml-4 flex space-x-2">
                <div className="border-6 border-black">
                    <button className="text-lg" onClick={() => handleClick('')}>Home</button>
                </div>
                <div> | </div>
                <div>
                    <button className="text-lg" onClick={() => handleClick('form')}>Form</button>
                </div>
            </div>
        </div>
    )
}

export default Header