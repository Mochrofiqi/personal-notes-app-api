import React from "react";
import PropsTypes from 'prop-types';
import { LocaleConsumer } from '../context/LocaleContext';

function SearchCatatan({ kata, onSearch  }){
    return(
        <LocaleConsumer>{
          ({ locale }) => {
            return (
                <section className="search-bar">
                    <input type="text" placeholder={locale === 'id' ? 'Cari berdasarkan judul..' : 'Search by title..'} value={kata} onChange={(event) => onSearch(event.target.value)} />
                </section>
            )
          }
        }</LocaleConsumer>
    );
};

SearchCatatan.propsTypes = {
    kata: PropsTypes.string.isRequired,
    onSearch: PropsTypes.func.isRequired,
}

export default SearchCatatan;