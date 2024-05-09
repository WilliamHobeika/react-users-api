import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import UserCard from "./components/UserCard";
import Pagination from "./components/Pagination";

type User = {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState("1");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://65ca334d3b05d29307dfede3.mockapi.io/users/v1/users?page=${currentPage}&limit=10`,
      );
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(true);
      setLoading(false);
    }
  };

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber.toString());
    fetchUsers();
  };

  return (
    <>
      <div className="wrapper mb-20 h-fit">
        <h1 className="pb-8 pt-8 text-4xl font-extrabold tracking-tighter lg:text-5xl xl:text-6xl">
          Explore our vibrant community of users and delve into their profiles
          below.
        </h1>{" "}
        {error && <p>Something Went Wrong, please try again later</p>}
        {loading ? (
          <div>
            <LinearProgress />{" "}
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {users.map((user) => (
              <div key={user.id}>
                <UserCard user={user} />
              </div>
            ))}
          </div>
        )}
        <div className="mt-5 flex items-center justify-center">
          <Pagination
            currentPage={Number(currentPage)}
            totalPages={5}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
