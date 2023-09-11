import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const theme = extendTheme({
	colors: {
		brand: {
			50: "#FFEEDD",
			100: "#FFDDBB",
			200: "#FFC999",
			300: "#FFB877",
			400: "#FFA955",
			500: "#FF9838",
			600: "#E68931",
			700: "#CC7A2A",
			800: "#B26B23",
			900: "#995C1C",
		},
		success: {
			50: "#a1f0a1",
			100: "#92e58f",
			200: "#82da7d",
			300: "#73cf6b",
			400: "#64c459",
			500: "#55b946",
			600: "#46ae34",
			700: "#379322",
			800: "#288810",
			900: "#197c00"
		},
		danger: {
			50: "#FFE0DD",
			100: "#FFC1BF",
			200: "#FFA3A1",
			300: "#FF8785",
			400: "#FF6B6A",
			500: "#FF5050",
			600: "#D64344",
			700: "#B83D3E",
			800: "#9B3638",
			900: "#802F31",
		},
		gray:{
			50: "#F5F5F5",
			100: "#E0E0E0",
			200: "#CCCCCC",
			300: "#B7B7B7",
			400: "#A2A2A2",
			500: "#8D8D8D",
			600: "#787878",
			700: "#636363",
			800: "#4E4E4E",
			900: "#393939",
		}
	},
	styles: {
		global: {
			"html, body": {
				fontFamily: inter,
			},
		}
	}
});

