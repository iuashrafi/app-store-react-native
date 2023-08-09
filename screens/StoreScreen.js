import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowDownTrayIcon,
  Bars3CenterLeftIcon,
  BellIcon,
} from "react-native-heroicons/solid";
import tw from "twrnc";
import { storeColors, categories, featured, games } from "../data";
import GradientButton from "../components/GradientButton";
import GameCard from "../components/GameCard";
const StoreScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Action");
  const [selectedGame, setSelectedGame] = useState(null);
  return (
    <LinearGradient
      colors={["rgba(58, 131, 244,0.4)", "rgba(9, 181, 211, 0.4)"]}
      style={[tw`w-full flex-1`]}
    >
      <SafeAreaView>
        <View style={[tw`flex-row justify-between items-center px-4 py-4`]}>
          <Bars3CenterLeftIcon color={storeColors.text} size="30" />
          <BellIcon color={storeColors.text} size="30" />
        </View>
        {/* categories */}
        <View style={[tw`pl-4`]}>
          <Text style={[tw`text-gray-900 text-2xl my-1 font-bold`]}>
            Browse Games
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => {
              if (item === activeCategory) {
                return (
                  <GradientButton
                    key={index}
                    containerClass="mr-2"
                    buttonClass=""
                    value={item}
                  />
                );
              } else {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setActiveCategory(item)}
                    style={[tw`bg-blue-200 p-3 px-4 rounded-full mr-2`]}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </ScrollView>
        </View>
        {/* featured row */}
        <View style={[tw`mt-3 space-y-4`]}>
          <Text
            style={[
              tw`ml-4 text-lg font-bold mb-2`,
              { color: storeColors.text },
            ]}
          >
            Featured Games
          </Text>
          <View style={[tw`pl-3`]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {featured.map((item, index) => {
                return <GameCard key={index} game={item} />;
              })}
            </ScrollView>
          </View>
        </View>
        {/* top action games list */}
        <View style={[tw`mt-3`]}>
          <View style={[tw`flex-row justify-between items-center mb-2`]}>
            <Text
              style={[tw`ml-4 text-lg font-bold`, { color: storeColors.text }]}
            >
              Top Action Games
            </Text>
            <TouchableOpacity style={[tw`mr-4`]}>
              <Text style={[tw`text-blue-600 font-bold`]}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{ height: 320 }}
            showsVerticalScrollIndicator={false}
          >
            {games.map((game, index) => {
              let bg =
                game.id === selectedGame
                  ? "rgba(255,255,255,0.4)"
                  : "transparent";
              return (
                <TouchableOpacity
                  style={[
                    tw`mx-4 p-2 mb-2 flex-row rounded-3xl`,
                    { backgroundColor: bg },
                  ]}
                  onPress={() => setSelectedGame(game.id)}
                  key={index}
                >
                  <Image
                    source={game.image}
                    style={[tw`rounded-2xl`, { width: 80, height: 80 }]}
                  />
                  <View style={[tw`flex-1 flex justify-center pl-3 space-y-3`]}>
                    <Text
                      style={[
                        tw`font-semibold mb-3`,
                        { color: storeColors.text },
                      ]}
                    >
                      {game.title}
                    </Text>
                    <View style={[tw`flex-row space-x-3`]}>
                      <View style={[tw`flex-row space-x-1`]}>
                        <Image
                          style={[tw`h-4 w-4 opacity-80 mr-1`]}
                          source={require("../assets/images/fullStar.png")}
                        />
                        <Text style={[tw`text-xs text-gray-700 mr-2`]}>
                          {game.stars} stars
                        </Text>
                      </View>
                      <View style={[tw`flex-row space-x-1`]}>
                        <ArrowDownTrayIcon
                          size="15"
                          style={[tw`text-blue-500 mr-1`]}
                        />
                        <Text style={[tw`text-xs text-gray-700`]}>
                          {game.downloads}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[tw`flex justify-center items-center`]}>
                    <GradientButton value="play" buttonClass="py-2 px-5" />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default StoreScreen;
