import { useState } from "react";

const ListaPersonas = () => {

	const [arrPersonas, setArrPersonas] = useState([
		{ id: 1, nombre: 'Mario', apellidos: 'Giron', Edad: 34 },
		{ id: 2, nombre: 'Pedro', apellidos: 'López', Edad: 23 },
		{ id: 3, nombre: 'Sofia', apellidos: 'Gómez', Edad: 48 }
	]);

	const borrarPersona = (pId) => {
		// // Copia del array
		// const arrPersonasCopia = [...arrPersonas];
		// // Recupero el índice
		// const index = arrPersonasCopia.findIndex(persona => persona.id === pId);
		// // Borro el elemento del array copia
		// arrPersonasCopia.splice(index, 1);
		// setArrPersonas(arrPersonasCopia);

		setArrPersonas(arrPersonas.filter(persona => persona.id !== pId));
	};



	return (
		<div>
			<ul>
				{arrPersonas.map((persona, index) => 
					<li key={persona.id} onClick={(e) =>  borrarPersona(persona.id) }>
						{ persona.nombre} {persona.apellidos} {persona.edad}
					</li>
				)}
			</ul>
		</div>
	);

}

export default ListaPersonas;