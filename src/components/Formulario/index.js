import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import CampoImagem from '../CampoImagem'

const Formulario = (props) => {
  //vamos chamar um hook (gancho) para conseguirmos manter um estado dentro de uma função
  const [nome, setNome] = useState('') //o 'use' sempre vai ser um hook, nesse caso será um hook do estado
  const [cargo, setCargo] = useState('')
  // const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const [imagem, setImagem] = useState(null)

  const aoImagemAlterada = (file) => {
    setImagem(file)
  }

  const aoSalvar = (evento) => {
    evento.preventDefault() //para evitar q a pagina seja recarregada ao formulario ser submetido
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem(null)
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoImagem 
          label="Imagem" 
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={aoImagemAlterada}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario