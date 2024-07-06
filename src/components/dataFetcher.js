import React, { useState, useEffect } from 'react';
import { useApi } from '../utility/apiContext';

const DataFetcher = ({ baseEndpoint, params }) => {

    const { data, headers, loading, error, fetchData } = useApi();

    // Construct the API endpoint based on props
    const constructUrl = () => {
        let url = `${baseEndpoint}?`;
        url += params.supplier ? `supplier=${params.supplier}&` : '';
        url += params.first ? `first=${params.first}&` : '';
        url += params.last ? `last=${params.last}&` : '';
        url += params.search ? `search=${params.search}&` : '';
        return url.slice(0, -1); // Remove the trailing '&' or '?'
    };

    useEffect(() => {
        const apiUrl = constructUrl();
        fetchData(apiUrl);

    }, [baseEndpoint, params]);



    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="description">
                <h2>Department List</h2>
            </div>
            <div className="data-list">
                <div className="data-row head">
                    <div className="data-cell"><input type="checkbox" className="checkbox" /> S/N</div>
                    {headers.map((item) => {

                        return (<div key={item} className="data-cell">{item}</div>)
                    })}

                </div>
                <div className="data-items">

                    {data.map((row, rowIndex) => (
                            <div  className="data-row make-margin">
                            <div  className="data-cell"><input type="checkbox" className="checkbox" /> {rowIndex}</div>
                            <div  className="data-cell">{row[headers[0]]}</div>
                            <div  className="data-cell">{row[headers[1]]}</div>
                            <div  className="data-cell">{row[headers[2]]}</div>
                            <div  className="data-cell">{row[headers[3]]}</div>
                            <div  className="data-cell">{row[headers[4]]}</div>
                            <div  className="data-cell">{row[headers[5]]}</div>
                            <div  className="data-cell">{row[headers[6]] !== null && row[headers[6]] !== undefined ? row[headers[6]].toString() : 'null'}</div>
                            <div  className="data-cell">{row[headers[7]]}</div>
                            <div  className="data-cell"><img src={row[headers[8]]} alt="Image 1" /></div>
                            <div  className="data-cell">{row[headers[9]]}</div>
                            <div  className="data-cell">{row[headers[10]]}</div>
                            <div  className="data-cell">{row[headers[11]]}</div>
                            <div  className="data-cell">{row[headers[12]] !== null && row[headers[12]] !== undefined ? row[headers[12]].toString() : 'null'}</div>
                            <div  className="data-cell">{row[headers[13]]}</div>
                            <div  className="data-cell">{row[headers[14]]}</div>





                        </div>

                    ))

                    }

                   

                    
                </div>

            </div>
        </>
    );
};

export default DataFetcher;
