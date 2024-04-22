import FullPageImageView from '~/components/full-image-page';

export default function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    const idAsNumber = Number(photoId);

    return (
        <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
            <FullPageImageView id={idAsNumber} />
        </div>
    );
}