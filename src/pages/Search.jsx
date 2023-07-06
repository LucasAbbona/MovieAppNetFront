import PostMedia from "../components/PostMedia"
import SectionLabel from "../components/View/SectionLabel"

const Search = () => {
  return (
    <div className="bg-neutral-800 w-full py-5 flex flex-col gap-5">
    <SectionLabel title={'Peliculas'}/>
    <PostMedia type={'movie'}/>   
    <SectionLabel title={'Series'} />
    <PostMedia type={'series'}/>   
    </div>
  )
}

export default Search