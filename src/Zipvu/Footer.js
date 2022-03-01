import {EA, RainbowBorder} from './Utils';



export default function Footer () {

	return (
		<div>
			<RainbowBorder />
			<div className="Footer bg-slate-800 text-white py-20 px-4">
				<p className="font-bold text-center">Created by <EA href="https://github.com/iaseth">Ankur Seth</EA>. Hosted on <EA href="https://github.com/iaseth/zipvu">GitHub</EA>.</p>
			</div>
			<RainbowBorder />
		</div>
	);
}
