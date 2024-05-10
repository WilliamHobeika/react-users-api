import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

type FilterProps = {
  onFilterChange: (filter: string) => void;
};

const Filter = ({ onFilterChange }: FilterProps) => {
  const [filter, setFilter] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    const newFilter = event.target.value as string;
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="filter-label">Filter</InputLabel>

      <Select
        id="filter_id"
        value={filter}
        label="filter"
        onChange={handleChange}
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="createdAt">Date Joined</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
