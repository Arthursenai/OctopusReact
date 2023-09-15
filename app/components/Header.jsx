
import styles from './header.module.css';
import Image from 'next/image';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.spacer}>
            <Image className={styles.logo} src="/OctopusLogo.png" alt="Octopus" width={170} height={150} />
            </div>
            <div className={styles.p}>
              <p className={styles.p} href="/">Home</p>
              <p className={styles.p} href="/">About</p>
              <p className={styles.p} href="/">Login</p>
            </div>
        </header>
    );
}
export default Header;