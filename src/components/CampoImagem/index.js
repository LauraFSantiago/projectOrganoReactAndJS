import './CampoImagem.css'

const CampoImagem = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.files[0])
  }

  return (
    <div className="campo-imagem">
      <label>{props.label}</label>
      <input type="file" onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  )
}

export default CampoImagem