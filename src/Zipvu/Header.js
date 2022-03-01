import {RainbowBorder} from './Utils';



export default function Header () {

	return (
		<div className="Header bg-slate-700 text-white">
			<RainbowBorder />
			<div className="max-w-4xl m-auto py-4 px-4">
				<h2 className="font-bold">
					<a href="/">Zipvu</a>
				</h2>
			</div>
			<RainbowBorder />
		</div>
	);
}
