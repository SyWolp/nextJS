import { useRouter } from "next/router";
import Seo from "../../component/Seo";

export default function Detail() {
    const router = useRouter();
    console.log(router.query);
    return (
        router.query.backImg ? 
        <div>
            <Seo title={router.query.title}/>
            <img src={`https://image.tmdb.org/t/p/w200/${router.query.backImg}`} />
            <div>{router.query.title}</div>
            <p>{router.query.overview}</p>
        </div> : <div>Loading</div>
    )
}