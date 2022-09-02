import React, { useState, createContext, useEffect } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  useEffect(() => {
    async function getPhotos() {
      const res = await fetch(url);
      const data = await res.json();
      setAllPhotos(data);
    }
    getPhotos();
  }, []);

  console.log(allPhotos);
  return (
    <Context.Provider value={{ allPhotos: allPhotos }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
