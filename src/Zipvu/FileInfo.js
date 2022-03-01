


export default function FileInfo ({
	file
}) {

	if (!file) return null;

	const rows = ["name", "size", "type"];
	const rowItems = rows.map((v, i) => {
		const tdClass = "px-3 pt-3 pb-2 border";
		return (
			<tr key={i}>
				<td className={tdClass}>{v}</td>
				<td className={tdClass}>{file[v]}</td>
			</tr>
		);
	});


	return (
		<div className="FileInfo py-8">
			<table className="text-sm font-bold bg-slate-50 text-slate-700">
				<tbody>
					{rowItems}
				</tbody>
			</table>
		</div>
	);
}
