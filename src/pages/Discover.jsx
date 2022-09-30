import { Loader, SongCard } from "../components";
import { useDispatch, useSelector } from "react-redux";

import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {

const dispatch = useDispatch();
const { activeSong, isPlaying } = useSelector((state)=> state.player);

const {data, isFetching, error} = useGetTopChartsQuery();// we get 3 different things- data, isFetching, error
const genreTitle='Pop';
console.log(data);

if(isFetching) return <Loader title='Loading songs...'/>

if(error) return <Error/>

return (
<div className="flex flex-col">
<div className="w-full flex justify-center items-center sm:flex-col flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select onChange={()=>{}}
            value=""
            className="text-gray-300 bg-black p-3">
                {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
            {data?.map((song,i)=><SongCard key={song.key} 
            song={song} 
            value={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            />)}
        </div>
            </div>
);
}
export default Discover;

//start from 21:57 timestamp
//https://www.youtube.com/watch?v=I1cpb0tYV74
