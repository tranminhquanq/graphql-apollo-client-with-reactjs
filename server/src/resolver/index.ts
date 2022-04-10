import { books, authors } from "../mock";
import { IAuthor, IBook } from "../interface";

const resolvers = {
  // Query
  Query: {
    books: (): IBook[] => books,
    book: (parent, args: { id: string }) => {
      const { id } = args;
      return books.find((book: IBook) => book.id.toString() === id) || null;
    },
    authors: () => authors,
    author: (parent, args: { id: string }) => {
      const { id } = args;
      return (
        authors.find((author: IAuthor) => author.id.toString() === id) || null
      );
    },
  },
  Book: {
    author: (parent: IBook, args) =>
      authors.find((author: IAuthor) => author.id === parent.authorId),
  },
  Author: {
    books: (parent: IAuthor, args) =>
      books.filter((book: IBook) => book.authorId === parent.id),
  },

  // Mutation
  Mutation: {
    createAuthor: (parent, args: IAuthor) => args,
    createBook: (parent, args: IBook) => args,
  },
};

export default resolvers;
