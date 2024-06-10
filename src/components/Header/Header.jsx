import logoImg from '../../assets/logo.svg';
import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<h1>
				<a href='#' className={styles.logo}>
					<span className='sr-only'>Ping coming soon</span>
					<img src={logoImg} width={60} height={18} alt='Ping' />
				</a>
			</h1>
		</header>
	);
}
