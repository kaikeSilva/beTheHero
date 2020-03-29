import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import Routes from './src/routes';


/**
 * As tags para desenvolvimento mobile, tags do react native,
 * são diferentes, elas não tem semântica
 * <view>: utilizada para qualquer tipo de container
 * <text>: qualquer tipo de texto
 * 
 * Os estilos são objetos que são recebidos na propriedade style das tags.
 * 
 * Todos os elementos ja possuem display flex por padrão
 * 
 * As propriedades de estilo são escritas em camel case.
 * 
 * Não existe herança de estilos, cada componente deve ser estilizado individualmente
 * 
 * 
*/

export default function App() {
  return (
    <Routes/>
  );
}
