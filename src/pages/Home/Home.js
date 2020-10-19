import React, { useContext, useState } from "react";
import { Context } from "../../contexts/Context";
import { Input } from "./HomeStyle";
import DropDown from "../../components/Dropdown/DropDown";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const { data, region, setRegion, isLoading, error } = useContext(Context);
  const [search, setSearch] = useState("");

  const renderCard = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    .map((country, id) => <Cards country={country} key={id} />);

  console.log(data);

  return (
    <div>
      <form>
        <div className="search-bar">
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          />
        </div>
      </form>
      <DropDown value={region} onChange={(e) => setRegion(e.target.value)}/>
      {error && (
        <div className="error">
          Oh no something went wrong{" "}
          <span role="img" aria-label="sad-face">
            😰
          </span>
        </div>
      )}
      {isLoading ? (
        <div className="loading"> Loading... </div>
      ) : (
      <main className="container">{ renderCard }</main>
      )}
    </div>
  );
};

export default Home;
