import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => { //aqui ele vai desestruturar o obj pra n precisar passar props na frente de cada var
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome}/>
      </div>
      {/* ------ */}
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador