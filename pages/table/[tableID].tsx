import { NextPage } from "next"
import {useRouter} from "next/router"

const Table:NextPage = () => {

    const router = useRouter();
    const {tableID} = router.query;


    return (<h1>This is table {tableID}</h1>);
}

export default Table;