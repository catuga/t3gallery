import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="bg-green flex h-full w-full min-w-0">
      <div className="flex-shrink">
        <img src={image.url} className="object-contain" />
      </div>

      <div className="flex w-48 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
