import Link from 'next/link'
import styles from './footer.module.css'
import Image from 'next/image'
export const Footer = () => {
    return (
        <div className={styles.footer}>

            <p className={styles.para1}>Todos os direitos reservados© 2023</p>
           
            <div className={styles.imagens}>
                <Image src={'/OctopusLogo.png'} alt="Logo da Equipe Octopus" width={75} height={75}></Image>
              
                <Link href="https://github.com/Arthursenai" target="_blank"><Image src={'/github-logo.png'} alt="Git Hub do techleade da equipe" width={45} height={45}  className={styles.img}></Image></Link>
            </div>
          


        </div>
    )
}
export default Footer;