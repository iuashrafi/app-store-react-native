import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";
import { HeartIcon, ArrowDownTrayIcon } from "react-native-heroicons/solid";
import { storeColors } from "../data";
import StarRating from "react-native-star-rating";

const GameCard = ({ game }) => {
  const [isFavourite, setFavourite] = useState(false);
  return (
    <View style={[tw`mr-4 relative`]}>
      <Image source={game.image} style={[tw`w-80 h-60 rounded-3xl`]} />
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
        style={[
          tw`absolute p-4 h-full w-full flex justify-between rounded-3xl`,
        ]}
      >
        <View style={[tw`flex-row justify-end`]}>
          <TouchableOpacity
            onPress={() => setFavourite(!isFavourite)}
            style={[
              tw`p-2 rounded-full`,
              { backgroundColor: "rgba(255,255,255,0.3)" },
            ]}
          >
            <HeartIcon
              size="20"
              color={isFavourite ? storeColors.redHeart : "white"}
            />
          </TouchableOpacity>
        </View>
        <View style={[tw`space-y-1`]}>
          <StarRating
            disabled={true}
            starSize={15}
            containerStyle={{ width: 90 }}
            maxStars={5}
            rating={game.stars}
            emptyStar={require("../assets/images/emptyStar.png")}
            fullStar={require("../assets/images/fullStar.png")}
          />
          <Text style={[tw`text-xl font-bold text-gray-300`]}>
            {game.title}
          </Text>
          <View style={[tw`flex-row items-center space-x-2`]}>
            <ArrowDownTrayIcon size="18" color="lightgray" />
            <Text style={[tw`text-sm text-gray-300 font-semibold`]}>
              {game.downloads} Downloads
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default GameCard;
