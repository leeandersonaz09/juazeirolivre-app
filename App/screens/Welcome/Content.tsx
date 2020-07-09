import React from "react";
import { Dimensions, StyleSheet} from "react-native";
import { Image, Rect, TSpan, Text, } from "react-native-svg";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  title1: {
    fontSize: 48,
    fontWeight: "300",
  },
  title2: {
    fontSize: 48,
    fontWeight: "600",
  },
  description: {
    opacity: 0.5,
    fontSize: 16,
  },
});

interface ContentProps {
  color: string;
  backgroundColor: string;
  source: number;
  title1: string;
  title2: string;
}
interface ContentProps {
  color: string;
  backgroundColor: string;
  source: number;
  title1: string;
  title2: string;
}

export default ({
  color,
  backgroundColor,
  source,
  title1,
  title2,
}: ContentProps) => {
  return (
    <>
      <Rect x={0} y={0} {...{ width, height }} fill={backgroundColor} clipPath="url(#mask)"/>
      <Image x={16} y={100} width={width * 0.61} href={source} clipPath="url(#mask)"/>
      <Text x={16} y={height / 2} fontSize={48} fontWeight={300} fill={color} clipPath="url(#mask)">
        {title1}
      </Text>
      <Text
        x={16}
        y={height / 2 + 48}
        fontSize={48}
        fontWeight={600}
        fill={color}
        clipPath="url(#mask)"
      >
        {title2}
      </Text>
      <Text y={height / 2 + 48 * 2} fontSize={16} fill={color} clipPath="url(#mask)">
        <TSpan x={16} dy={0}>
          Lorem ipsum dolor sit amet,
    </TSpan>
        <TSpan x={16} dy={16 + 2}>
          Lorem ipsum dolor sit amet,
    </TSpan>
        <TSpan x={16} dy={32 + 4}>
          Lorem ipsum dolor sit amet,
    </TSpan>
      </Text>

    </>
  );
};
