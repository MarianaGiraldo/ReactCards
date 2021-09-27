import React from 'react';
import MenuNav from './MenuNav';
import CarruselIndex from './CarruselIndex';

function Index() {
    return (
        <div className="App">
        <MenuNav />
        <header className="App-header">
          <CarruselIndex />
        </header>
      </div>
    )
}

export default Index
