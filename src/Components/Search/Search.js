import { useState} from "react";
import {useDispatch} from "react-redux";
import {fetchWeather} from "../../Redux/features/weatherSlice";
import {BsSearch} from "react-icons/bs";

const Search = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const handleChange = (e) => {
        if (e.target.value.trim().length > 0) {
            setCity(e.target.value);
        }
    }
    const handleSearch = () => {
        if (city.trim().length > 0) {
            dispatch(fetchWeather({city}));
        }
    }
    return (
        <div className="search">
            <div className={"input-container"}>
                <input onChange={(e) => handleChange(e)} className={"search-input"} type="text"
                       placeholder="Search"/>
                <div onClick={handleSearch} className={"icon-container"}>
                    <BsSearch className={"search-icon"}/>

                </div>
            </div>
        </div>
    )
}

export default Search;