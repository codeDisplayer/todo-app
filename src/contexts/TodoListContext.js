import { createContext } from 'react';

//dummy data generator package:
import casual from 'casual';

const TodosContext = createContext();
export const useTodosContext = () => useContext(TodosContext);


export default function TodoListContext({ children }) {

  //initital todos array (dummy data)
  const fakeTodos = () => {
    //this will return an array of 6 objects (todos) to be assigned to fakeTodos
    return [0, 1, 2, 3, 4, 5].map(() => {
      return {
        description: casual.sentence,
        createdAt: casual.date(format = 'YYYY-MM-DD'),
        todoColor: casual.rgb_hex
      }
    })
  }

  const [todos, setTodos] = useState(fakeTodos);

  const globalStateObject = {
    todos,
    setTodos
  }

  return (
    <TodosContext.Provider value={globalStateObject}>
      {children}
    </TodosContext.Provider>
  )
}
