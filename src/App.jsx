import React from 'react';
import perfil from './components/perfil.jpg'

function Header() {                       //começo 
  return (
    <header style={{
      padding: 20,
      borderBottom: '5px solid #5A0000',
     borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      fontFamily: 'Arial, sans-serif',
    }}>


<div style={{
  width: 80,
  height: 80,
  borderRadius: '50%',
  overflow: 'hidden',
  flexShrink: 0,
}}>
  <img 
    src={perfil} 
    alt="Foto de perfil" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />
</div>
      <div style={{ lineHeight: 1.5 }}>
  <h1 style={{ margin: '0 0 8px 0' }}>Carina de Camargo</h1>
  <p style={{ margin: '4px 0' }}>
    Email: <a href="mailto:carinacamargo2407@gmail.com" style={{ color: '#5A0000', textDecoration: 'none' }}>
      carinacamargo2407@gmail.com
    </a>
  </p>
  <p style={{ margin: '4px 0' }}>
    Telefone: <a href="tel:+5519983968881" style={{ color: '#5A0000', textDecoration: 'none' }}>
      19 98396-8881
    </a>
  </p>
</div>

    </header>
  );
}


function Stack() {                             
  return (
    <section style={{ padding: 20, 
      borderBottom: '5px solid #5A0000',
      borderRadius: 8,}}>
      <h2>Stack</h2>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>Docker</li>
      </ul>
    </section>
  );
}


function Cursos() {
  return (
    <section style={{ padding: 20, 
      borderBottom: '5px solid #5A0000',
      borderRadius: 8,}}>
      <h2>Cursos</h2>
      <ul>
        <li>Curso Tecnico Desenvolvimento de Sistemas </li>
        <li>Curso de ingles intermediario </li>
      </ul>
    </section>
  );
}


function Habilidades() {
  return (
    <section style={{ padding: 20, 
      borderBottom: '5px solid #5A0000',
      borderRadius: 8,}}>
      <h2>Habilidades</h2>
      <ul>
        <li>Trabalho em equipe</li>
        <li>Organização</li>
        <li>Comunicativa </li>
      </ul>
    </section>
  );
}


function Projetos() {
  return (
    <section style={{ padding: 20 }}>
      <h2>Projetos</h2>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {/* Projeto 1 */}
        <div style={{ border: '4px solid #5A0000',
          borderRadius: 8, padding: 15, width: 250 }}>
          <h3>Site Pessoal</h3>
          <p>Portfólio simples com HTML e CSS.</p>
          <p><strong>Tecnologias:</strong> HTML, CSS</p>
          <a href="#" style={{ color: '#5A0000', textDecoration: 'none' }}>Repositório</a><br />
          <a href="#" style={{ color: '#5A0000', textDecoration: 'none' }}>Ver Demo</a>
        </div>


        {/* Projeto 2 */}
        <div style={{ border: '4px solid #5A0000',
          borderRadius: 8, padding: 15, width: 250 }}>
          <h3>Site Pessoal</h3>
          <p>Portfólio simples com HTML e CSS.</p>
          <p><strong>Tecnologias:</strong> HTML, CSS</p>
          <a href="#" style={{ color: '#5A0000', textDecoration: 'none' }}>Repositório</a><br />
          <a href="#" style={{ color: '#5A0000', textDecoration: 'none' }}>Ver Demo</a>
        </div>



        {/* Projeto 3 */}
        <div style={{ border: '4px solid #5A0000',
          borderRadius: 8, padding: 15, width: 250 }}>
         <h3>Site Pessoal</h3>
         <p>Portfólio simples com HTML e CSS.</p>
         <p><strong>Tecnologias:</strong> HTML, CSS</p>
         <a href="#" style={{ color: '#5A0000', textDecoration: 'none' }}>Repositório</a><br />
         <a href="#" style={{ color: '#5A0000', textDecoration: 'none' }}>Ver Demo</a>
        </div>

      </div>
    </section>
  );
}


export default function App() {
  return (
    <div style={{
      maxWidth: 900,
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8c9d4',
      minHeight: '100vh',
      paddingBottom: 40,   
      color: 'black',    //letras preto
    }}>
      <Header />
      <Stack />
      <Cursos />
      <Habilidades />
      <Projetos />
    </div>
  );
}
