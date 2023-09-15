import styles from './Header.module.css';
import NavLink from '../navlink/NavLink';
import Image from 'next/image';
export const Header = () => {
    return (
        <header className={styles.header}>
            <h3 className={styles.title}>Octopus</h3>
            <Image src="/OctopusLogo.png" alt="Octopus" width={100} height={100} />
            <div className={styles.links}>
                <NavLink rota={'/'} texto={'Example'} />
                <NavLink rota={'/teste'} texto={'example'} />
                <NavLink rota={'/'} texto={'Example'} />
                <NavLink rota={'/teste'} texto={'example'} />
            </div>
        </header>
    );
}
