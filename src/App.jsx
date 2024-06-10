import Header from './components/Header/Header.jsx';
import Section from './components/Section/Section.jsx';
import Footer from './components/Footer/Footer.jsx';
import styles from './App.module.css';

function App() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className='container'>
					<div className={styles.content}>
						<Header />
						<main className='main'>
							<Section />
						</main>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
