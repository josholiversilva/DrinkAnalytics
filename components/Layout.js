import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className="bg-[#19222e] pt-16 h-full">
            {children}
        </div>
    )
}

export default Layout;