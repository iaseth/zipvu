import React from 'react';

import Header from './Header';
import Footer from './Footer';
import FileInfo from './FileInfo';
import FileTable from './FileTable';

const JSZip = require('jszip');



export default function Zipvu () {
	const fref = React.useRef(null);
	const [file, setFile] = React.useState(null);

	const [data, setData] = React.useState({
		zip: null,
		contents: []
	});

	function handleChange (e) {
		let newFile = fref.current.files[0];
		setFile(newFile);

		if (newFile.type.includes("zip")) {
			const zip = new JSZip();
			const contents = [];
			zip.loadAsync(newFile).then(function (zip) {
				for (let file in zip.files) {
					contents.push(file);
				}

				setData({
					zip: zip,
					contents: contents.sort()
				});
			});
		}
	}

	return (
		<div className="Zipvu">
			<Header />
			<div className="min-h-screen bg-slate-100 px-4 pt-4 pb-24">
				<div className="max-w-4xl mx-auto">
					<div>
						<input ref={fref} type="file" onChange={handleChange} />
					</div>
					<FileInfo file={file} />
					<FileTable {...data} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
