import { useState } from 'react'
import './style.css'
import Trash from '../../assets/react.svg'

function App() {
  const [users, setUsers] = useState([
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
  ])

  // Armazenando os valores digitados no formulario
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')

  // Função executada ao enviar o formulario
  const handleSubmit = (e) => {
    // Evita da pagina recarregar
    e.preventDefault() 

    // Verifica se campos estão preenchidos
    if (!nome || !idade || !email){
      alert('Preencha todos os campo !!!')
      return
    }

    // Criando um novo usuario
    const novoUsuario = {
      id: users.length + 1,
      name: nome,
      idade: Number(idade), // Convertente para numero, porem no HTML ja setei como Number então não precisaria, mais ta ai...
      email: email
    }

    // Adicionando a uma lista existente
    setUsers(prev => [...prev, novoUsuario])

    // Limpa ps campos do formulario
    setNome('')
    setIdade('')
    setEmail('')

  }

  // Função de remoção de usuario
  const handleRemove = (id) => {
    // Confirma se o usuário deseja excluir
    const confirmacao = window.confirm('Deseja excluir o usuário?')
    if (!confirmacao) return

    // Removendo usuario
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  
  return (
    <div className='container'>
      <form className='formCadastro' onSubmit={handleSubmit}>
        <h1>Cadastro de Usuário</h1>
        <input placeholder='Nome' name='nome' type='text' value={nome} onChange={e => setNome(e.target.value)} // Atualizando estado nome 
        /> 
        <input placeholder='Idade' name='idade' type='number' value={idade} onChange={e => setIdade(e.target.value)}/>
        <input placeholder='Email' name='email' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
        <button type='submit'>Cadastrar</button>
      </form>
      {users.map( user => (
        <div  key={user.id} className='card'>
          <div >
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.idade}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => handleRemove(user.id)}><img src={Trash}/></button>
        </div>
      ))}
      
    </div>

  )
}

export default App
