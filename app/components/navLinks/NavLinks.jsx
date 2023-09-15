import Link from "next/link"
import styles from './navLinks.module.css';

export const NavLinks = ({rota, texto}) => {
    return (
        <div>
            <Link className={styles.p} href={rota}>{texto}</Link>
        </div>
    )
}

export default NavLinks;