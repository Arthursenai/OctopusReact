import React from 'react';
import styles from './page.module.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
const Login = () => {
    return (
        <div className={styles.adiv}>
            <Header />
            <div className={styles.login}>
                <h1 className={styles.login}>Login</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Login;