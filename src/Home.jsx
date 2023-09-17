import { useNavigate } from 'react-router-dom';
const Home = () => {
  let navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center align-center'>
      <button
        onClick={() => navigate('/github')}
        className='border border-black p-2'
      >
        Go to Github
      </button>
      <button
        onClick={() => navigate('/ntwist')}
        className='border border-black p-2'
      >
        Go to Ntwist
      </button>
    </div>
  );
};

export default Home;
