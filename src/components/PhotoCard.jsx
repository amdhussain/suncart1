import {Card} from '@heroui/react';
import Image from 'next/image';

const PhotoCard = ({photo}) => {
    console.log(photo);
    return (
        <Card className=''> 
        <div>
            <Image
                src={photo.imageUrl}
                height={200}
                width={200}
                alt={photo.title}
            />
        </div>
        </Card>
    );
};

export default PhotoCard;




// // src\components\PhotoCard.jsx

// import { Card } from '@heroui/react';
// import Image from 'next/image';

// const PhotoCard = ({ photo }) => {
//     // এখানে 'image' প্রপার্টি ব্যবহার করুন (আপনার JSON অনুযায়ী)
//     return (
//         <Card className='p-4'> 
//             <div>
//                 <Image
//                     src={photo.image} // এখানে imageUrl এর বদলে image দিন
//                     height={200}
//                     width={200}
//                     alt={photo.name} // এখানে title এর বদলে name ব্যবহার করা ভালো
//                 />
//                 <h3 className="font-bold mt-2">{photo.name}</h3>
//                 <p>Price: ${photo.price}</p>
//             </div>
//         </Card>
//     );
// };

// export default PhotoCard;