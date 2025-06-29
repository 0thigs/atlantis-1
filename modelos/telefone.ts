import type Prototipo from "../interfaces/prototipo";

export default class Telefone implements Prototipo {
	public ddd: string;
	public numero: string;

	public clonar(): Prototipo {
		const telefone = new Telefone();
		telefone.ddd = this.ddd;
		telefone.numero = this.numero;
		return telefone;
	}
}
