
import './style.css'
import Trash from '../../assets/react.svg'

function App() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      idade: 20,
      email: 'john.doe@example.com'
    }, {
      id: 2,
      name: 'Jane Doe',
      idade: 25,
      email: 'jane.doe@example.com'
    },{
      id: 3,
      name: 'Bob Smith',
      idade: 30,
      email: 'bob.smith@example.com'
    },{
      id: 4,
      name: 'Alice Johnson',
      idade: 35,
      email: 'alice.johnson@example.com'
    }
  ]



  return (
    <>
      <div className='container'>
        <form className='formCadastro'>
          <h1>Cadastro de Usuário</h1>
          <input placeholder='Nome' name='nome' type='text'/>
          <input placeholder='Idade' name='idade' type='number'/>
          <input placeholder='Email' name='email' type='email'/>
          <button type='submit'>Cadastrar</button>
        </form>
        {users.map( user => (
          <div  key={user.id} className='card'>
            <div >
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.id}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button><img src={Trash}/></button>
          </div>
        ))}
        
      </div>
    </>
  )
}

export default App
