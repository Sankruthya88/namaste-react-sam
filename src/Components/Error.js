import { useRouteError } from "react-router";

const Error =()=>{

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Opppsssss</h1>
            <h2>Somethign went wrong</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}

export default Error;
