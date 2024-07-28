export interface ISearchUser {
  avatar_url: string;
  followers: number;
  following: number;
  id: number;
  location: null;
  login: string;
  name: string;
  public_repos: number;
  repos_url: string;
}
export interface IRepoUser {
  name: string;
  description: string;
  html_url: string;
  language: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  avatar_url: string;
  followers: number;
  following: number;
  id: number;
  location: null;
  login: string;
  name: string;
  public_repos: number;
  repos: IRepoUser[];
}
