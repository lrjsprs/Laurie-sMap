import React from "react";
import one from "../../img/red-dot-icon.png";

type CardProps = {
	component: JSX.Element;
	style: any;
	close: () => void;
	link: string;
};

const Card: React.FunctionComponent<CardProps> = ({
	component,
	style,
	close,
	link,
}) => {
	return (
		<div
			className="z-40 bg-gray-25 rounded overflow-hidden shadow-md max-w-xs max-h-xs"
			style={style}
		>
			<div className="w-full h-32 sm:h-48 object-cover">{component}</div>
			{/* <img src={one} alt="ok" className="w-full h-32 sm:h-48 object-cover" /> */}
			<div className="m-4">
				<span className="font-bold">TITRE</span>
				<span className="block text-sm text-gray-400">
					je suis la description de la carte, plus tard je parlerai soit d'un line
					wiki soit d'un lin youtube, soit d'une image
				</span>
			</div>
			<div className="m-4 grid grid-cols-8 gap-2">
				<button
					className="col-start-7 border-b-2 border-gray-400 text-gray-400 rounded"
					onClick={close}
				>
					x
				</button>
				<button className="col-start-8 border-b-2 border-gray-400 text-gray-400 rounded">
					{">"}
				</button>
			</div>
		</div>
	);
};

export default Card;
