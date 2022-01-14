
import FavHero from "./FavHero";
function FavHeroes() {
  return (
    <div className="min-w-[337px]">
      <div className="flex flex-row justify-between ">
        <FavHero
          bgColor=""
          charUrl="https://www.freepnglogos.com/uploads/marvel-png/marvel-captain-america-png-image-purepng-transparent-30.png"
        />
        <FavHero
          bgColor=""
          charUrl="https://www.freepnglogos.com/uploads/batman-png/image-batman-heroes-wiki-10.png"

        />
        <FavHero
          bgColor=""
          charUrl="https://www.freepnglogos.com/uploads/spiderman-png/spiderman-png-spider-man-clipart-deviantart-pencil-and-color-spider-22.png"
        />
      </div>
    </div>
  );
}

export default FavHeroes;
