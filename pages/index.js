import NavBar from "../component/Navbar";
import Head from "next/head";
import Seo from "../component/Seo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const [movies, setMovies] = useState();
    const router = useRouter();
    const onClick = (id, title, poster_path) => {
        router.push({
            pathname: `/movies/${id}`,
            query: {
                title,
                backImg: poster_path
            }
        }, `/movies/${id}`);
    }


    useEffect(()=>{
        (async() => {
            const { results } = await (await (await fetch('/api/movies')).json());
            setMovies(results);
        })();
    },[])

    return (
        <div className="container">
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                        <div className="movie" key={movie.id}>
                            <img onClick={()=>{onClick(movie.id, movie.original_title, movie.poster_path)}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <Link href={{
                                pathname: `/movies/${movie.id}`,
                                query: {
                                    title: movie.original_title,
                                    backImg: movie.poster_path
                                }
                            }} as={`/movies/${movie.id}`}>
                                <a>
                                    <h4>{movie.original_title}</h4>
                                </a>
                            </Link>
                        </div>

            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
      );
}

// export async function getServerSideProps() {


// }