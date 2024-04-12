import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
      <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
          {/* o map vai aparecer sempre q tiver uma iteração em cima de uma lista renderizando na tela */}
          <option value="" required={props.required}>Selecione...</option>
          {props.itens.map(item => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select>
      </div>
    )
}

export default ListaSuspensa