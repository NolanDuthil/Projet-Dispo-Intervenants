import { User } from "@/app/lib/definitions";
import { fetchUsers } from "@/app/lib/data";

export async function loader() {
  const users = await fetchUsers();
  return { users };
}

const UsersPage = ({ users }: { users: User[] }) => {
  return (
    <div>
      <h1>User</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nom} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;