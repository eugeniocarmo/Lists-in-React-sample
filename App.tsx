import * as React from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';

import './style.css';


export default function App() {
  const [theme, setTheme] = useState('light');

  const toDark = () => {
    setTheme('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    console.log('Dark Mode Enable');
  };
  const toLight = () => {
    setTheme('light');
    document.documentElement.setAttribute('data-theme', 'light');
    console.log('Light Mode Enable');
  };
// Idéa do map - como reptir os dodos e fazer o return -  (4:29) inserindo {} JavaScript
// O array de inicialização do useState gera o data types . Eg: todos. (7:00)
// e um deles é o map que vai percorrer todos os arrays (métodos acessores)
// o map permite agente transformar o nosso todos
// eu posso retornar um eg:
// {todo.map (()=1)}    nesse caso o map mostra q retorna lista de numéricos
// ou seja, agente consegue com o MAP  pegar um array do tipo string e passar p. tipo number!!  (8:39)
// passando O HTML <li>Todo 01</li> p/ dentro do retorno    (9:40)
//  - o map vira map de JSX element (vai retornar uma lista de JSX elements) 
// já está repetindo elementos fixos (10-12)
// para mudar elementos fixos <li>Todo 01</li> - o map é parecido c/ forEach
// O map é uma função callback cujo retorno produz o elemento do novo array!!
// ele vai receber 3 elementos- valor atual, indice (elemt) e array de origem
// VSCode no Map - array.map(callbackfn: value:string, array:string[])=>JSX 
        // <ul>
        //   {todos.map(( todoAtual, index, array) => (
        //     <li>Todo 01</li>))}
        // </ul>
// todoAtual vai ser sempre o tipo no nosso array, eg: objeto,lista n.   13:30
// index é a posição do todoAtual no array e no fim o array que é os todos
// Agora queremos adicionar um novo todo na lista - como faz? 15:53
//  const addTodo = () => {};
// Depois de adicionar o spread operator ele vai adcionando o mesmo nome
// Como faz para mundar o número todo2. 33, 4 etc?  19:04
// Como fazer pra ficar com o 0 04, 05, 06 etc      20:13 / 21:47
// Idéia principal do addTodo - setTodos([...todos, ` Todo ${todos.length + 1}`])  15:37"

  const Todo: React.FC = () => {
    const [todos, setTodos] = useState(['Todo01', 'Todo02 ', 'Todo03 ']);
    
    const addTodo = () => { 
      setTodos(oldTodos => {
        const numberofNewTodo = oldTodos.length + 1
        return [...oldTodos, `Todo${numberofNewTodo < 10 ? '0'+numberofNewTodo : numberofNewTodo}`]
      });  
    };



    return (
      <>
        <ul>
          {todos.map(( tipoDoTodoAtual, index, array) => (
            <li key={tipoDoTodoAtual}>{tipoDoTodoAtual}</li>))}
        </ul>
        <button onClick={addTodo}>Add Todo</button>
      </>
    );


  }


  
  return (
    <div className="App">
      <div className={theme}>
        {theme === 'light' ? (
          <button className="right-aligned-button" onClick={toDark}>Dark</button>
        ) : (
          <button className="right-aligned-button" onClick={toLight}>Light</button>
        )}
      </div>
      <br />
      <h1>Lists in React</h1>
      <ul>
        
       
      </ul>
      
      <Todo />

      <hr />
    </div>
  );
}


// Alterantive code for useState:
// const addTodo = () => {
    //   setTodos([...todos, `Todo ${todos.length + 1}`]);
    // };


    // return (
    //   <>
    //     <ul>
    //       {todos.map((todo, index) => (
    //         <li key={index}>{todo}</li>
    //       ))}
    //     </ul>
    //     <button onClick={addTodo}>Add Todo</button>
    //   </>
    // );