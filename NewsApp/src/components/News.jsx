import React, { Component } from "react";
import NewsItem from "./NewsItem";

// export class News extends Component {
//   articles = [

    
//   ];
//   constructor() {
//     super();
//     console.log("Hello I am a constructor");
//     this.state = {
//       articles: this.articles, // Articles Array
//       loading: false,
//     };
//   }

//   async componentDidMount() {
//     try {
//       let response = await fetch(
//         "https://newsapi.org/v2/everything?q=apple&from=2024-08-17&to=2024-08-17&sortBy=popularity&apiKey=61116340b4b54c769d6d62c1c3f928ee"
//       );
//       // console.log(response);
//       let fetchData = await response.json();
//       console.log(fetchData);

//       this.setState({ articles: fetchData.articles });
//       console.log(this.articles);

//     } catch (error) {
//       console.log(error);

//     }

//   }

//   render() {
//     return (
//       <div className="container">
//         <h2>SaloSkilo Top-News</h2>

//         <div className="row">
//           {/* map function to add all elem */}
//           {this.articles.map((element) => {
//             return (
//               <div className="col md-4 my-3" key={element.publishedAt}>
//                 <NewsItem
//                   title={element.title.slice(0, 20)}
//                   description={element.description.slice(0, 50)}
//                   imageUrl={element.urlToImage}
//                   newsUrl={element.url}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );

//     // let newsItems = [];
//     // this.articles.forEach((element) => {
//     //   console.log(element);

//     //   let { title, description, urlToImage, url, publishedAt } = element;
//     //   newsItems.push(
//     //     <div className="col md-4 my-3" key={publishedAt}>
//     //       <NewsItem title={title.slice(0, 20)} description={description.slice(0, 50)} imageUrl={urlToImage
//     //       } newsUrl={url} />
//     //     </div>
//     //   );
//     // });
//     // return <div className="row">{newsItems}</div>;
//   }
// }
// export default News;




class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], // Initially empty array for articles
      loading: true, // Loading state to indicate data is being fetched
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-08-17&to=2024-08-17&sortBy=popularity&apiKey=61116340b4b54c769d6d62c1c3f928ee');
      let fetchData = await response.json();

      // Update the state with the fetched data
      this.setState({ articles: fetchData.articles, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>SaloSkilo Top-News</h1>

        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col md-4 my-3" key={element.url}>
                <NewsItem
                // ternary operator 
                  title={element.title ? element.title.slice(0, 20) : ""}
                  description={element.description ? element.description.slice(0, 50) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default News;

