import type Documento from "./documento";
import type Endereco from "./endereco";
import type Telefone from "./telefone";

export default class Cliente {
	public nome: string;
	public nomeSocial: string;
	public dataNascimento: Date;
	public dataCadastro: Date;
	public telefones: Telefone[] = [];
	public endereco: Endereco;
	public documentos: Documento[] = [];
	public dependentes: Cliente[] = [];
	public titular: Cliente;
}
