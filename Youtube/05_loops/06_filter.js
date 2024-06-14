// for each method kuch return nhi karta hai 

// but filter value return karta hai you can see and filter bhi callback fucntion mangta hai 

const myNums = [1,2,3,4,5,6]

// console.log(myNums.filter((nums)=>{
//     return nums > 4
// }))


const books = [
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt and David Thomas",
      publisher: "Addison-Wesley Professional",
      publishDate: 19991020,
      relatedTo: "Software Craftsmanship"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      publisher: "Prentice Hall",
      publishDate: 20080801,
      relatedTo: "Agile Software Development"
    },
    {
      title: "Design Patterns",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides",
      publisher: "Addison-Wesley Professional",
      publishDate: 19941021,
      relatedTo: "Software Design"
    },
    {
      title: "You Don't Know JS: Scope & Closures",
      author: "Kyle Simpson",
      publisher: "O'Reilly Media",
      publishDate: 20140320,
      relatedTo: "JavaScript"
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      publisher: "O'Reilly Media",
      publishDate: 20080501,
      relatedTo: "JavaScript"
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      publisher: "No Starch Press",
      publishDate: 20111214,
      relatedTo: "JavaScript"
    },
    {
      title: "Introduction to the Theory of Computation",
      author: "Michael Sipser",
      publisher: "Cengage Learning",
      publishDate: 19960101,
      relatedTo: "Computation Theory"
    },
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell and Peter Norvig",
      publisher: "Pearson",
      publishDate: 19950115,
      relatedTo: "Artificial Intelligence"
    },
    {
      title: "Code Complete",
      author: "Steve McConnell",
      publisher: "Microsoft Press",
      publishDate: 20040619,
      relatedTo: "Software Development"
    },
    {
      title: "Refactoring: Improving the Design of Existing Code",
      author: "Martin Fowler",
      publisher: "Addison-Wesley Professional",
      publishDate: 19991109,
      relatedTo: "Software Refactoring"
    }
  ];

  
  const newBook = books.filter((bk)=>{
    return bk.relatedTo === "JavaScript"
  })

  console.log(newBook);