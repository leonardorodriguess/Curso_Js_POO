import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const conta1 = new ContaCorrente(new Cliente("Ricardo", 5456465465), 1001);

conta1.depositar(100);
conta1.sacar(50);


const cliente2 = new Cliente("Julia", 546546545);
const conta2 = new ContaCorrente(cliente2, 1002);

conta2.depositar(5000);
conta2.sacar(100);

conta2.transferir(200, conta1);

console.log(conta1)
console.log(conta2)
console.log(ContaCorrente.numeroDeContas)