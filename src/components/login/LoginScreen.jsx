import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className='max-w-7xl w-8/12 mx-auto container mt-4'>
      <h1>LoginScreen</h1>
      <hr />

      <button
        className='text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
