import React from 'react';

import Header from './components/layout/header';
import Nav from './components/layout/nav';
import Footer from './components/layout/Footer.js';


function App() {
    return(
    <div className="App">
    <Header />
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="nosotros" element={<NosotrosPage />} /> 
            <Route path="novedades" element={<NovedadesPage />} /> 
            <Route path="contacto" element={<ContactoPage />} />
         </Routes>
    </BrowserRouter>

    <Footer />
    </div>
    
    );
    }
export default App;

