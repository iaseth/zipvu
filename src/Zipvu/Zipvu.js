import React from 'react';

import Header from './Header';
import Footer from './Footer';
import FileInfo from './FileInfo';

const JSZip = require('jszip');



export default function Zipvu () {
	const fref = React.useRef(null);
	const [file, setFile] = React.useState(null);

	const [zip, setZip] = React.useState(null);
	const [contents, setContents] = React.useState([]);

	const contentItems = contents.map((c, i) => {
		const f = zip.files[c];
		return (
			<div key={i} className="flex bg-slate-50 border border-slate-300 text-slate-800 text-sm font-bold">
				<div className="px-3 py-3 w-16 border-r-2 border-slate-300 text-right">{i+1}</div>
				<div className="px-3 py-3">
					<span className="px-2 py-1 bg-slate-200">{c}</span>
				</div>
			</div>
		);
	});

	function handleChange (e) {
		let newFile = fref.current.files[0];
		setFile(newFile);

		if (newFile.type.includes("zip")) {
			const newZip = new JSZip();
			const newContents = [];
			newZip.loadAsync(newFile).then(function (newZip) {
				for (let file in newZip.files) {
					newContents.push(file);
				}
				setZip(newZip);
				setContents(newContents.sort());
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
					<div>
						{contentItems}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
