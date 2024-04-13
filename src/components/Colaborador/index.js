import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
  // const urlImagem = imagem ? URL.createObjectURL(imagem) : undefined
  const urlImagem = imagem instanceof Blob ? URL.createObjectURL(imagem) : imagem;

  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={urlImagem} alt={nome}/>
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
