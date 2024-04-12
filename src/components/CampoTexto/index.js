import './CampoTexto.css'

const CampoTexto = (props) => { //esse props apenas é mais usado, pois remete a propriedades, mas poderia ser qualquer coisa

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} dplaceholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto