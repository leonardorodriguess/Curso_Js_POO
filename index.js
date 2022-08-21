import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const conta1 = new ContaCorrente();

conta1.cliente = new Cliente();
conta1.cliente.nome = "Ricardo";
conta1.cliente.cpf = 5456465465;

conta1.depositar(100);
conta1.sacar(50);
conta1.agencia = 1001;



const cliente2 = new Cliente();
const conta2 = new ContaCorrente();

cliente2.nome = "Julia";
cliente2.cpf = 546546545;

conta2.cliente = cliente2;
conta2.depositar(5000);
conta2.sacar(100);
conta2.agencia = 1002;


conta2.transferir(200, conta1);

//console.log(cliente1)
console.log(conta1)
console.log(conta2)