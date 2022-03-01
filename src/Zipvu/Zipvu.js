import React from 'react';

import Header from './Header';
import Footer from './Footer';
import FileInfo from './FileInfo';

const JSZip = require('jszip');



export default function Zipvu () {
	const fref = React.useRef(null);
	const [file, setFile] = React.useState(null);

	function handleChange (e) {
		setFile(fref.current.files[0]);
	}

	return (
		<div className="Zipvu">
			<Header />
			<div className="min-h-screen bg-slate-100 px-4 py-4">
				<div className="max-w-4xl mx-auto">
					<div>
						<input ref={fref} type="file" onChange={handleChange} />
					</div>
					<FileInfo file={file} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
