import promptSync from "prompt-sync";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";

export default class Entrada {
	public receberNumero(mensagem: string): number {
		const prompt = promptSync();
		let numero: number;
		
		do {
			const valor = prompt(`${mensagem}`);
			
			if (!valor || valor.trim() === '') {
				console.log("❌ Erro: O campo não pode estar vazio. Tente novamente.");
				continue;
			}
			
			numero = Number(valor);
			if (isNaN(numero)) {
				console.log("❌ Erro: Por favor, digite um número válido. Tente novamente.");
				continue;
			}
			
			if (numero < 0) {
				console.log("❌ Erro: O número deve ser positivo. Tente novamente.");
				continue;
			}
			
			break;
		} while (true);
		
		return numero;
	}

	public receberTexto(mensagem: string): string {
		const prompt = promptSync();
		let texto: string;
		
		do {
			texto = prompt(`${mensagem}`);
			
			if (!texto || texto.trim() === '') {
				console.log("❌ Erro: O campo não pode estar vazio. Tente novamente.");
				continue;
			}
			
			if (texto.trim().length < 2) {
				console.log("❌ Erro: O texto deve ter pelo menos 2 caracteres. Tente novamente.");
				continue;
			}
			
			break;
		} while (true);
		
		return texto.trim();
	}

	public receberData(mensagem: string): Date {
		const prompt = promptSync();
		let data: Date;
		
		do {
			const texto = prompt(`${mensagem} (formato: DD/MM/AAAA)`);
			
			if (!texto || texto.trim() === '') {
				console.log("❌ Erro: O campo não pode estar vazio. Tente novamente.");
				continue;
			}
			
			const formatoRegex = /^\d{2}\/\d{2}\/\d{4}$/;
			if (!formatoRegex.test(texto)) {
				console.log("❌ Erro: Formato inválido. Use DD/MM/AAAA (ex: 15/03/1990). Tente novamente.");
				continue;
			}
			
			const partes = texto.split("/");
			const dia = Number(partes[0]);
			const mes = Number(partes[1]);
			const ano = Number(partes[2]);
			
			if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
				console.log("❌ Erro: Data contém valores inválidos. Tente novamente.");
				continue;
			}
			
			if (dia < 1 || dia > 31) {
				console.log("❌ Erro: Dia deve estar entre 1 e 31. Tente novamente.");
				continue;
			}
			
			if (mes < 1 || mes > 12) {
				console.log("❌ Erro: Mês deve estar entre 1 e 12. Tente novamente.");
				continue;
			}
			
			if (ano < 1900 || ano > new Date().getFullYear() + 10) {
				console.log("❌ Erro: Ano deve estar entre 1900 e " + (new Date().getFullYear() + 10) + ". Tente novamente.");
				continue;
			}
			
			data = new Date(ano, mes - 1, dia);
			
			if (data.getDate() !== dia || data.getMonth() !== mes - 1 || data.getFullYear() !== ano) {
				console.log("❌ Erro: Data inválida (ex: 31/02/2024 não existe). Tente novamente.");
				continue;
			}
			
			break;
		} while (true);
		
		return data;
	}

	public receberTipoDeDocumento(mensagem: string): TipoDocumento | null {
		const prompt = promptSync();
		let tipoDocumento: TipoDocumento | null = null;
		
		do {
			console.log("\n📋 Tipos de documento disponíveis:");
			console.log("• CPF - Cadastro de Pessoas Física");
			console.log("• RG - Registro Geral");
			console.log("• PASSAPORTE - Passaporte");
			console.log("• SAIR - Para sair/continuar");
			
			const tipo = prompt(`${mensagem}`);
			
			if (!tipo || tipo.trim() === '') {
				console.log("❌ Erro: O campo não pode estar vazio. Tente novamente.");
				continue;
			}
			
			const tipoUpper = tipo.trim().toUpperCase();
			if (tipoUpper === "CPF") {
				tipoDocumento = TipoDocumento.CPF;
			} else if (tipoUpper === "RG") {
				tipoDocumento = TipoDocumento.RG;
			} else if (tipoUpper === "PASSAPORTE") {
				tipoDocumento = TipoDocumento.Passaporte;
			} else if (tipoUpper === "SAIR") {
				console.log("✅ Saindo da seleção de documentos...");
				return null;
			} else {
				console.log("❌ Erro: Opção inválida. Digite CPF, RG, PASSAPORTE ou SAIR. Tente novamente.");
				continue;
			}
			
			break;
		} while (true);
		
		return tipoDocumento;
	}
}
