export type Book = {
  id: number;
  name: string;
  numChapters: number;
  chapters: Chapter[];
  
};

export type Chapter = {
  id:number;
  verses:string[];
}