import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
const conta1 = new ContaCorrente();

conta1.depositar(100)
conta1.sacar(50)


cliente1.nome = "Ricardo";
cliente1.cpf = 5456465465;




console.log(cliente1)
console.log(conta1)