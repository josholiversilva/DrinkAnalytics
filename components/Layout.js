import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className="h-screen bg-[#19222e]">
            <div className="pt-10">
                {children}
            </div>
        </div>
    )
}

export default Layout;