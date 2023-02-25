import { TextField } from "@mui/material";
import { FC, ChangeEvent, useState, useEffect } from "react";

import style from './SearchBar.module.scss'

import useDebounce from '../../hooks/useDebounce';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  value?: string;
}

export const SearchBar: FC<SearchBarProps> = ({value = '', onSearch }): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState(value);
  const debouncedSearchTerm = useDebounce(searchTerm, 750);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const nextSearchTerm = event.target.value;
    if (nextSearchTerm === searchTerm) return;
    setSearchTerm(nextSearchTerm);
  }

  return (
    <TextField 
        className={style.SearchInput}
        placeholder="Enter keywords" 
        variant="standard" 
        value={searchTerm}
        onChange={onChangeHandler}
    />
  );
};