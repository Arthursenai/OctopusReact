import styles from './page.module.css';
import NavLink from './components/navlink/NavLink';
import Image from 'next/image';
export const Header = () => {
    return (
        <header className={styles.header}>
            <h3 className={styles.title}>Octopus</h3>
            <div className={styles.spacer}>
            <Image className={styles.logo} src="/OctopusLogo.png" alt="Octopus" width={100} height={100} />
            </div>
            <div className={styles.links}>
                <NavLink rota={'sa'} texto={'Example'} />
                <NavLink rota={'sa'} texto={'example'} />
                <NavLink rota={'sa'} texto={'Example'} />
            </div>
        </header>
    );
}
