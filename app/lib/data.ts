import { db } from '@/app/lib/db';
import { User } from '@/app/lib/definitions';


export async function fetchUsers(): Promise<User[]> {
    try {
        const client = await db.connect();
        const result = await client.query<User>('SELECT * FROM "user"');
        client.release();
        return result.rows as User[];
    } catch (e: any) {
        console.error('Error fetching users', e);
        throw e;
    }
}