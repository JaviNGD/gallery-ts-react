type Props = { image: string, id: string} 

export const RandomImage = ({ image, id }: Props): JSX.Element => {

    return <img src={image} alt={`Image ${id} from picsum`} className="w-full h-full object-cover rounded-md"/>
}
