import headerStyles from '../styles/Header.module.css'
import inner from '../styles/Inner.module.css'
const Content = (props) => {
    return (
        <>
            <div className={inner.top_left_box}>
                Hi
            </div>

            <div className={inner.mid_left_box}>
                There
            </div>

            <div className={inner.top_right_box}>
                Delilah
            </div>

            <div className={inner.bottom_left_box}>
                Drinks
            </div>

            <div className={inner.bottom_right_box}>
                Analytics
            </div>

            <div>
                <p>
                    Content
                </p>
            </div>
        </>
    )
}

export default Content