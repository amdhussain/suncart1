import PhotoCard from "./PhotoCard";

const TopGenerations = async() => {
    const res = await fetch('https://suncart1-mcdb.vercel.app/data.json');
    const photos = await res.json()
    const topPhotos = photos.slice(0, 3); // Get the first 3 products
    // console.log(topPhotos);
  


    return (
        <div>
            <h1 className="text-2xl font-bold mt-5">Top Generations </h1>

            <div>
                {topPhotos.map(photo => <div
                 key={photo.id}>
                    {photo.title}
                </div>)}
            </div>
        </div>
    );
};

export default TopGenerations;