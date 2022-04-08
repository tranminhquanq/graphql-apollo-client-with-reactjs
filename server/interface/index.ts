export interface IBook {
  id: number;
  name: string;
  genre: string;
  authorId: number;
}

export interface IAuthor {
  id: number;
  name: string;
  age: number;
  books?: IBook[];
}
