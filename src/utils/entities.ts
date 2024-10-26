export interface Show {
  id: string;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  // officialSite: string | null;
  image: ShowImage;
  summary: string;
}

type ShowImage = {
  medium: string;
  original: string;
};
