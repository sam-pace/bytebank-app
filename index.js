import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome;
cliente1.cpf;

const contaCorrente = new ContaCorrente();

contaCorrente.agencia = "1001";
contaCorrente.saldo = 0;