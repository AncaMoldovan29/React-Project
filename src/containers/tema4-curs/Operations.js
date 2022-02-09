import React from 'react';
import {FormControl} from 'react-bootstrap';

const Operations = ({searchValue, setSearchValue}) => {

    return (
        <div className="row col-3" style={{margin: '20px'}}>
            <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    )
};

export default Operations;
