import { Link } from 'react-router-dom';
import '../assets/css/crud.css';

const Crud = ({ id, name}) => {
  // console.log(id);
  return (
    <div className="containerCrud">
      <h1>{name}</h1>

      <div className='contentCrudBtns'>
        <Link to={`/quizGameLS/${id}`} className="playBtn" >
          Play
        </Link>
        <Link className="editBtn" id={id}>Edit</Link>
        <Link className="deleteBtn" id={id}>Delete</Link>
      </div>
    
    </div>
  );
}

export default Crud;
