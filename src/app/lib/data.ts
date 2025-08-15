import { createClient } from '@vercel/postgres';
<<<<<<< HEAD
import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
=======
import { sql } from '@vercel/postgres';

>>>>>>> 8cba0dd5a1b0dc7e7b33c81e426084f23c69dfca
export async function connectToDB() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log('Connected to database');
      return client;
    }
  } catch (error) {
    console.error('Error connecting to database', error);
  }
}

export async function getPosts() {
  try {
<<<<<<< HEAD
    noStore();
    const data = await sql`SELECT * FROM posts`
    console.log(data.rows)
=======
    const data = await sql`SELECT * FROM posts`
    // console.log(data.rows)
>>>>>>> 8cba0dd5a1b0dc7e7b33c81e426084f23c69dfca
    return data.rows;
  } catch (error) {
    console.error('Error getting posts', error);
  }
}

