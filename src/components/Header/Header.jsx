import {  useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const navigate = useNavigate()
    return (
      <nav className='header'>
        <h1 className='tidbit' onClick={() => navigate('')}>Tidbit</h1>
      </nav>
    );
  }