import { useState } from "react";

const MostrarCosas = () => {

	const [mostrar, setMostrar] = useState(true);

	const cambioMostrar = () => {
		setMostrar(!mostrar);
	}

	// let contenido = null;
	// if(mostrar) {
	// 		contenido = <p>Párrafo que se muestra o se oculta</p>;
	// };

	return (
		<div>
			<p>{mostrar.toString()}</p>
			<button onClick={cambioMostrar}>Mostrar o No</button>
			{/* {mostrar ? <p>Párrafo que se muestra o se oculta</p> : null} */}

			{/* {contenido} */}

			{/* {(() => {
				if (mostrar) {
					return  <p>Párrafo que se muestra o se oculta</p>;
				} else {
					return <p>NO SE MUESTRA</p>
				}
			})()} */}

			{mostrar && <p>Párrafo que se muestra o se oculta</p>}

		</div>
	);
}

export default MostrarCosas