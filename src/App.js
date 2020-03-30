import React, { Fragment, useState, useEffect } from "react";

// Import Axios
import axios from 'axios';
 
// Import Components
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";


function App() {

  const apiKey = 'b57e7e2b68da4312ac9004f97b7a4785';
  const codeCountry = 'ar';
  const url = `https://newsapi.org/v2/top-headlines?country=${codeCountry}&apiKey=${apiKey}`;

  // Crear State Category
  const initialStateCategory = ''
  const [category, setSategory] = useState(initialStateCategory);

   // Crear State News
   const initialStateNews = [];
   const [news, setNews] = useState(initialStateNews);

  // Declare UserEffect
  useEffect(() => {
    requestApi();
  }, [category]);

  // Declare Methods
  const requestApi = async () => {

    const apiKey = 'b57e7e2b68da4312ac9004f97b7a4785';
    const codeCountry = 'ar';

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${codeCountry}&category=${category}&apiKey=${apiKey}`;
      const res = await axios.get(url);
      const news = res.data.articles;
     
      setNews(news);
      
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <Fragment>
      <Header title="Buscador de Noticias"></Header>

      <div className="container white">
        <Form 
          setSategory={setSategory}
        />

        <List
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
