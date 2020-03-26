import React from 'react';
import Routes from './routes';
import './global.css';

/**
 * Um componente em react é uma função que retorna html
 * JSX - java script xml, é o html dentro do java script
 * 
 * Uma propriedade de uma tag, id, name, etc, pode ser acessada
 * pelo arguento props na função que retorna o componente
 * sintaxe: {props.nome-da-propriedade}
 * da mesma forma pode se acessar o conteudo dentro de uma tag
 * usando o argumento props
 * sintaxe: {props.children}
 * 
 * Estado - quando uma propriedade muda e queremos renderizar
 * novamente o componente usamos o conceito de estado
 * sintaxe: import {useState} from 'react'; 
 * a variavel deve ser o argumento para a função useSata(valor)
 * 
 * useState(valor) retorna um array : Arra[valor , funçãoDeAtualização]
 * para mudar o valor é preciso usar a função
 */
function App() {
  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;
