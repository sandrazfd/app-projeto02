
import { Endereco } from 'src/app/interfaces/endereco';

export interface Candidato {
    id?: number;
    idSexo?: number;
    idEscolaridade?: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
    telefone: string;
    email: string;
    endereco?: Endereco;
    
  
    
}
