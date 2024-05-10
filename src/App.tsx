import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import UserCard from "./components/UserCard";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

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
  const [filter, setFilter] = useState<string>("none");

  useEffect(() => {
    fetchUsers();
  }, [currentPage, filter]);

  const fetchUsers = async (query?: string) => {
    try {
      let apiUrl = `https://65ca334d3b05d29307dfede3.mockapi.io/users/v1/users?page=${currentPage}&limit=10`;
      if (query) {
        apiUrl = `https://65ca334d3b05d29307dfede3.mockapi.io/users/v1/users?search=${encodeURIComponent(query)}`;
      }
      if (filter) {
        apiUrl += `&sortBy=${filter}`;
      }

      if (apiUrl.includes("page")) {
        setLoading(true);
      }
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

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
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
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <SearchBar onSearch={handleSearch} />
              <Filter filter={filter} onFilterChange={handleFilterChange} />
            </div>
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
