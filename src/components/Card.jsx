import React from 'react'
import starimage from '../assets/star.png'


export default function Card(props){
  
  let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    const [imagePath, setImagePath] = React.useState('');
    React.useEffect(() => {
      // Dynamically import the image when the component mounts
      const importImage = async () => {
        const image = await import(`../assets/${props.item.coverImg}.png`);
        setImagePath(image.default);
      };
  
      importImage();
    }, []);
    // const img = new Image();
    // img.src = `./assets/${props.item.coverImg}`;
    const img=(`./src/assets/${props.item.coverImg}`)
    // console.log(props.item)
  return <div className='card'>
            { badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={imagePath} className='card-image'/>
            <div className='rating'>
            <img src={starimage} className='star-image'/>
            <div className='rating-info'>{props.item.stats.rating} <span className='gray'> ({props.item.stats.reviewCount}) 	&middot; {props.item.location}</span></div>
            </div>  
            <p className='card-title'>{props.item.title}</p>
            <p className='card-price'><span className='bold'>From ${props.item.price}</span> / person</p>
          </div>
}