import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type FilterProps = {
  filter: string;
  onFilterChange: (filter: string) => void;
};

const Filter = ({ filter, onFilterChange }: FilterProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onFilterChange(event.target.value as string);
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
