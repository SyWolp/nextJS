import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    console.log(router.query.poster_path);
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w300/${router.query.backImg}`} />
            <div>{router.query.title}</div>
        </>
    )
}