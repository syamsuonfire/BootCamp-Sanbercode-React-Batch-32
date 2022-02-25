const Nav = () => {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </>
    )
  }
  lalu gunakan component Routes tersebut untuk di dalam app.js seperti di bawah ini:
  
  function App() {
    return (
        <Routes/>
      );
    }