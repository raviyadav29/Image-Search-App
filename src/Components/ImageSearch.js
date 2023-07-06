import { useState, useEffect } from 'react'
import "./Style.css"

function ImageSearch() {
    const [img, setImg] = useState("");
    const [res, setRes] = useState([]);

    const fetchRequest = async () => {
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=a345RVVlShL85KjRLyZjLMoz4-1T4QW2zmyk4nBSuBw`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        setRes(result);
    };
    useEffect(() => {
        fetchRequest();
    }, []);

    const Submit = () => {
        fetchRequest();
        setImg("");
    };

    return (
        <>
            <div className='nav'>
                <div className='title'>
                    <h2>ImageSearch</h2>
                </div>
                <div className='searchbox'>
                    <input type='text' value={img} placeholder='Search Image' onChange={(e) => {
                        setImg(e.target.value);
                    }} />
                    <button onClick={Submit}>Search</button>
                </div>
            </div>
            <div >
                {res.map((val) => {
                    return (
                        <>
                            <img
                                key={val.id}
                                className="card"
                                src={val.urls.small}
                                alt="val.alt_description"
                            />
                        </>
                    );
                })}
            </div>;
        </>
    )
}

export default ImageSearch
