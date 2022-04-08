import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const handleClick = (pageRef) => {
        router.push(`/${pageRef}`)
    }
    return (
        <div className="h-10 w-screen bg-[#19222e] border-b-2 border-[#95c4fe] flex space-x-2 items-center shadow-xl shadow-bg-[#95c4fe] rounded-sm fixed">
            <div className="ml-4 flex space-x-2">
                <div className="border-6 border-black">
                    <button className="text-lg text-[#95c4fe]" onClick={() => handleClick('')}>Home</button>
                </div>
                <div className="text-[#95c4fe]"> | </div>
                <div>
                    <button className="text-lg text-[#95c4fe]" onClick={() => handleClick('analytics')}>Analytics</button>
                </div>
                <div className="text-[#95c4fe]"> | </div>
                <div>
                    <button className="text-lg text-[#95c4fe]" onClick={() => handleClick('form')}>Form</button>
                </div>
            </div>
        </div>
    )
}

export default Header