import { books, authors } from "../mock";

const resolvers = {
  // Query
  Query: {
    books: () => books,
    book: (parent: any, args: any) => {
      const { id } = args;
      return books.find((book: any) => book.id.toString() === id) || null;
    },
    authors: () => authors,
    author: (parent: any, args: any) => {
      const { id } = args;
      return authors.find((author: any) => author.id.toString() === id) || null;
    },
  },
  Book: {
    author: (parent: any, args: any) =>
      authors.find((author: any) => author.id === parent.authorId),
  },
  Author: {
    books: (parent: any, args: any) =>
      books.filter((book: any) => book.authorId === parent.id),
  },

  // Mutation
  Mutation: {
    createAuthor: (parent: any, args: any) => args,
  },
};

export default resolvers;
