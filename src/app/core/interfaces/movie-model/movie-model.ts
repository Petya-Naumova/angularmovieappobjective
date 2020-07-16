import { OriginalLanguage } from '../../enums/original-language/original-language.enum';
import { MediaType } from '../../enums/media-type/media-type.enum';

export interface MovieModel {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: Date;
  original_language: OriginalLanguage;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  media_type: MediaType;
}
