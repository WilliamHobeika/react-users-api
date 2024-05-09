import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import UserCard from "./components/UserCard";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

type User = {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async (query?: string) => {
    // setLoading(true);
    try {
      const apiUrl = query
        ? `https://65ca334d3b05d29307dfede3.mockapi.io/users/v1/users?search=${encodeURIComponent(query)}`
        : `https://65ca334d3b05d29307dfede3.mockapi.io/users/v1/users?page=${currentPage}&limit=10`;

      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
          setLoading(false);
          setUsers(data);
          setAvailable(true);
        }, 1000);
      } else {
        console.error("Failed to fetch users");
        alert("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(true);
      setLoading(false);
    }
  };

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (query: string) => {
    fetchUsers(query);
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
            <SearchBar onSearch={handleSearch} />
            {users.map((user) => (
              <div key={user.id}>
                <UserCard user={user} />
              </div>
            ))}
          </div>
        )}
        {available && (
          <div className="mt-5 flex items-center justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={5}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
