import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className="bg-[#19222e]">
            <div className="pt-16">
                {children}
            </div>
        </div>
    )
}

export default Layout;