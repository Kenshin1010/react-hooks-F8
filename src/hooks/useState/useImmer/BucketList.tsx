import { useImmer } from "use-immer";

type ArtworkType = {
  id: number;
  title: string;
  seen: boolean;
};

// let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [list, updateList] = useImmer<ArtworkType[]>(initialList);

  function handleToggle(artworkId: number, nextSeen: boolean) {
    updateList((draft) => {
      const artwork: ArtworkType | undefined = draft.find(
        (a) => a.id === artworkId
      );
      if (!artwork) {
        console.error("Artwork is undefined");
        return;
      }
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle} />
    </>
  );
}

interface ItemListProps {
  artworks: ArtworkType[];
  onToggle: (artworkId: number, nextSeen: boolean) => void;
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
