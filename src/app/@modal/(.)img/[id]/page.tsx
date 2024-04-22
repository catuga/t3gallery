import { getImage } from '~/server/queries';
import { Modal } from './modal';

export default async function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

    const image = await getImage(idAsNumber);
    return <div><img src={image.url} className="w-96" /></div>
}