import illustrationImg from '../../assets/illustration-dashboard.png';
import styles from './Section.module.css';

export default function Section() {
	return (
		<section className={styles.section}>
			<div className={styles.head}>
				<div className={styles.intro}>
					<h2 className={styles.title}>
						<span className={styles.light}>We are launching</span>{' '}
						soon!
					</h2>
					<p>Subscribe and get notified</p>
					<form className={styles.form}>
						<div className={styles.group}>
							<input
								className={styles.control}
								type="email"
								placeholder="Your email address..."
							/>
							<div className={styles['error-message']}></div>
							<button type="submit" className="btn btn--primary">
								Notify Me
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.content}>
					<div className={styles.image}>
						<img
							src={illustrationImg}
							width={278}
							height={170}
							alt="Illustration dashboard"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
