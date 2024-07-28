// Types
import { ISearchUser } from '../../@types';
// Utils
import { USER_API_URL } from '../../utils';

export async function getUser(name: string): Promise<ISearchUser> {
  const url = new URL(USER_API_URL + name);
  const get = await fetch(url);

  return get.json();
}
