import './Banner.css';

export const Banner = () => {
  //isso é JSX, q é como o react trabalha com a parte visual
  //é basicamente como o react le e transforma em elementos no DOM
  return (
    //por conta do js trabalhar com classes, com react a gente vai usar 'className' e não 'class'
    <header className="banner"> 
      <img src="/images/banner.png" alt="O banner principal da página do organo"/>
    </header>
  )
}