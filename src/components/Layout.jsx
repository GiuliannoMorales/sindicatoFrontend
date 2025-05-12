import './Layout.css';

export default function Layout({children}) {
  return (
    <div className="layout">
      <header className="header">
        <div className="headerLogo">
          <img src="/Logo_umss.png" alt="Logo UMSS" height={'100%'} style={{objectFit: 'contain'}}/>
        </div>
        <div className="headerTitulo">
          <h1 className="titulo">SISTEMA DE GESTION DEL PARQUEO</h1>
          <div className="lineaRoja"></div>
        </div>
      </header>
      <aside className="menu"></aside>
      <main className="contenido">
        <div className="lineaAzul"></div>
        {children}
      </main>
    </div>
  );
}
