// Types
import { IRepoUser } from '../../@types';

export async function getRepoUser(url: string): Promise<IRepoUser[]> {
  const getRepoUser = await fetch(url);
  return getRepoUser.json();
}
