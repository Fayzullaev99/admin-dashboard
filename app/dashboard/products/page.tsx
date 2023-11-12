import Image from "next/image";
import Link from "next/link";
import styles from './products.module.scss'
import Search from "@/app/ui/dashboard/search";
import Pagination from "@/app/ui/dashboard/pagination";

type ProductsPageProps = {
  searchParams:any
}

async function ProductsPage({ searchParams }:ProductsPageProps): Promise<JSX.Element> {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.products}>
      <div className={styles.products__top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.products__addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.products__table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.products__user}>
                  <Image
                    src={user.img || "/user.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.products__userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.products__buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.products__button} ${styles.products__view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.products__button} ${styles.products__delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}

export default ProductsPage