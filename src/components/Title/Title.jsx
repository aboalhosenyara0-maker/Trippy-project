import styles from './Title.module.css'

const Title = ({title , subTitle}) => {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subTitle}</p>
        </>
    )
}

export default Title
