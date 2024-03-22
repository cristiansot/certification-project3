import { Link } from 'react-router-dom';
import '../assets/css/crud.css';

const Crud = ({ id, name}) => {
// console.log(id + name);
  return (
    <div className="containerCrud">
      <h1>{name}</h1>

      <div className='contentCrudBtns'>
        <Link to={`/quizGame/${id}`} className="playBtn" >
          Play
        </Link>
    
      </div>
    
    </div>
  );
}

export default Crud;
