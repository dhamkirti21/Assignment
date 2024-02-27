import Image from 'next/image';

interface imageProps {
    imageUrl: string
}

const ImageComponent = (props: imageProps) => {

    return (
        <div>
            <Image
                src={`/images/${props.imageUrl}`}
                alt="post-thumbnail"
                width={141}
                height={103}
                className="p-2 ml-auto mr-auto"
            />
        </div>
    );
};

export default ImageComponent;
