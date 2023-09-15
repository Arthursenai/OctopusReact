
import styles from './header.module.css';
import Image from 'next/image';
import NavLinks from '../navLinks/NavLinks';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.spacer}>
                <Image className={styles.logo} src="/OctopusLogo.png" alt="Octopus" width={170} height={150} />
            </div>
            <div className={styles.pdiv}>
                <NavLinks className={styles.p} rota="/" texto="Home" />
                <NavLinks className={styles.p} rota="/about" texto="About" />
                <NavLinks className={styles.p} rota="/login" texto="Login" />
            </div>
        </header>
    );
}
export default Header;