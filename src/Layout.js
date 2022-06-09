import React from 'react';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
export default function Layout() {
	return (
		<React.Fragment>
			<Header />
			<App />
			<Footer />
		</React.Fragment>
	);

}