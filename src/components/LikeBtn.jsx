import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import RoundBtn from "./RoundBtn";

export default function LikeBtn({ favorite, color, size }) {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handelFavorite= () => {
    setIsFavorite(prev=> !prev)
  }

  return (
    <RoundBtn onPress={handelFavorite}>
      {isFavorite ? (
        <Ionicons name="heart" size={size} color={color} />
      ) : (
        <Ionicons name="heart-outline" size={size} color={color} />
      )}
    </RoundBtn>
  );
}
