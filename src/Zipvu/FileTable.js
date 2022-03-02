


export default function FileTable ({
	zip, contents
}) {

	const contentItems = contents.map((c, i) => {
		const f = zip.files[c];
		if (!f) {
			console.log(c);
			return null;
		}
		const is_image = c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".png");

		const image_id = `image_${i}`;
		if (is_image) {
			f.async("blob").then((blob) => {
				let src = URL.createObjectURL(blob);
				let element = document.getElementById(image_id);
				if (element) element.src = src;
			});
		}

		return (
			<div key={i} className="flex bg-slate-50 -mb-[1px] border border-slate-300 text-slate-800 text-sm font-bold">
				<div className="px-3 py-3 w-16 border-r border-slate-300 text-right">{i+1}</div>
				<div className="px-3 py-3 overflow-hidden grow">
					<div>
						<span className="px-2 py-1 bg-slate-200 font-mono">{c}</span>
					</div>
					{is_image && <div className="py-4">
						<img id={image_id} src="#" alt="" className="max-w-[80%] p-2 border-2 border-blue-500" />
					</div>}
				</div>
			</div>
		);
	});

	return (
		<div className="FileTable">
			{contentItems}
		</div>
	);
}
