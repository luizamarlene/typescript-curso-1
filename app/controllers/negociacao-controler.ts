import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export default class NegociacaoControler {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()

    constructor() {
        this.inputData = (document.querySelector('#data'))
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    adicona(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        console.log(this.negociacoes.lista())
        this.limpaFormulario()
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ','))
        const value = parseInt(this.inputValor.value)
        const quantidade = parseFloat(this.inputQuantidade.value)
       return new Negociacao(
            date,
            quantidade,
            value
        )
    }

    limpaFormulario(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }
}