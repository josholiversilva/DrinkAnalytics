import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={headerStyles.main}>
            <p className={headerStyles.left_txt}>
                <Link href='/'>Home</Link>
            </p>
            <span className={headerStyles.left_txt}> | </span>

            <p className={headerStyles.left_txt}>
                <Link href='/form'>Form</Link>
            </p>

            <p className={headerStyles.right_txt}>
                Login Info
            </p>
        </div>
    )
}

export default Header