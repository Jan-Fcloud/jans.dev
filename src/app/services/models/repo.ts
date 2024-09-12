import { Base } from './base';

export interface Repo extends Base {
    title: string;
    description: string;
    url: string;
    avatar_url: string;
    stars: number;
    language: string;
    languageColor: string;
}
