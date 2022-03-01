import React from 'react';

import Header from './Header';
import Footer from './Footer';

const JSZip = require('jszip');



export default function Zipvu () {

	return (
		<div className="Zipvu">
			<Header />
			<div className="min-h-screen bg-slate-100 text-white flex">
				<h2 className="m-auto text-8xl font-bold">Zipvu</h2>
			</div>
			<Footer />
		</div>
	);
}
