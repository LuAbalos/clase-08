import { Input, SearchContainer } from "reactstrap";

const SearchForm = () => {

    const handleEvent = (evt) => {
        if (evt.keyCode === 32) evt.preventDefault();
        console.log(evt.keyCode);    
    }

    return (
    <>
    <SearchContainer>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Navbar</a>
                <form class="d-flex">
                    <Input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                        onKeyDown={(handleEvent)}
                    />

                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </SearchContainer>
    </>
    );
}

export default SearchForm;