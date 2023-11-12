"use client";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import styles from './search.module.scss'
type SearchProps = {
  placeholder:string
}
function Search({placeholder}:SearchProps):JSX.Element {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", String(1));

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);
  return (
    <div className={styles.search}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.search__input}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
