import React from             'react';
import AddTodo from           './AddTodo.jsx';
import VisibleTodoList  from  './VisibleTodoList.jsx';
import Footer from            './Footer.jsx';

export const TodosApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer/>
  </div>
)
