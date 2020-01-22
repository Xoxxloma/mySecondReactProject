export default class BookstoreService {

  data = [
    { id: 1,
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke',
      price: 35,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51-5ZXYtcML.jpg'
      },
    { id: 2,
      title: 'Grokking Algorithms',
      author: 'Aditya Y. Bhargava',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/61uUPXbhMxL._SX258_BO1,204,203,200_.jpg'
    },
    { id: 3,
      title: "You Don't Know JS: Scope & Closures",
      author: 'Kyle Simpson',
      price: 40,
      coverImage: 'https://miro.medium.com/max/1313/0*wNwIsj7-6X7aHEmw.jpg'
    },
    { id: 4,
      title: "Structure and Interpretation of Computer Programs",
      author: 'Harold Abelson and Gerald Jay Sussman',
      price: 66,
      coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/SICP_cover.jpg/274px-SICP_cover.jpg'
    },
  ];
  getBooks() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 1000);
    });
  }
};
