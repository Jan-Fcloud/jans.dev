import { Base } from './base';

export interface Repo extends Base {
    organization: string;
    project: string;
    fullname: string;
    description: string;
    url: string;
    avatar_url: string;
    stars: number;
    language: string;
    languageColor: string;
}
