import { Cliente } from "./Cliente.js"

export class Conta{
    
    constructor (SaldoInicial, cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = SaldoInicial;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor, taxa){
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            return valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valor)
    }
}