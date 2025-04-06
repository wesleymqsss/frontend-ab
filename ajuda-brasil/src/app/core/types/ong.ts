export interface Ong {
    nome: string,
    cpfOrCnpj: string,
    cep: string,
    email: string,
    telefone: string,
    cidade: string,
    tipo_doacao: string,
    tipo_perfil: number,
    valor: number,
    senha: string
}

export interface OngDetails {
    nome: string,
    cpfOrCnpj: string,
    barro: string,
    email: string,
    telefone: string,
    numero: number,
    refenrencia_endereco: string,
    estado: string,
    sobreNos: string

}