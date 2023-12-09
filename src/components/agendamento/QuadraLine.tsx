import React, { useEffect } from "react";
import {
  Box,
  Button,
  Collapse,
  Flex,
  FlexProps,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { format } from "date-fns-tz";

type AgendaLineProps = {
  courtID: number;
  courtName: string;
  clipCount: number;
  selectedDate: Date;
  selectedHour: string;
} & FlexProps;
export default function QuadraLine({
  courtID,
  courtName,
  clipCount,
  selectedDate,
  selectedHour,
  ...props
}: AgendaLineProps) {
  const [show, setShow] = React.useState(false);
  const [videos, setVideos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  async function fetchClipsInCourt(date: string, hour: number) {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3002/videoHour/${courtID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date, hour }),
        }
      );

      if (!response.ok) {
        setVideos([]);
        const errorMessage = await response.text();
        throw new Error(
          `Erro na solicitação: ${response.statusText}\n${errorMessage}`
        );
      }

      const data = await response.json();
      console.log(data);
      setVideos(data.videos);
    } catch (error) {
      setVideos([]);
      console.error("Erro durante a solicitação:", error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  useEffect(() => {
    if (show) {
      setLoading(true);
      const hourInteger = parseInt(selectedHour.split(":")[0]);
      fetchClipsInCourt(format(selectedDate, "yyyy-MM-dd"), hourInteger);
    }
  }, [show]);

  return (
    <Flex width="100%" flexDir={"column"} borderBottom={"1px solid #0003"}>
      <Flex
        py="15px"
        px="25px"
        align={"center"}
        justify={"space-between"}
        fontSize={"20px"}
        bg={"white"}
        {...props}
      >
        <Text fontWeight={"bold"} color={"gray.900"}>
          {courtName}
        </Text>
        <Box bg={"gray.100"} px="5px" borderRadius="5px">
          {clipCount + " clipes"}
        </Box>
        <Button variant={"ghost"} onClick={() => setShow(!show)}>
          <ArrowForwardIcon
            h="20px"
            w="20px"
            transform={show ? "rotate(90deg)" : "rotate(0deg)"}
            transition={"all 0.3s"}
          />
        </Button>
      </Flex>
      <Collapse in={show} animateOpacity>
        <Flex
          p="15px"
          color="white"
          flexDir={"column"}
          gap="10px"
          align={"center"}
          bg={"gray.100"}
        >
          {loading ? (
            <Spinner width={"100px"} height={"100px"} color="brand.500" />
          ) : (
            videos.map((video: any, index, arr) => {
              const clipHourAndMinute = video.data.split("T")[1].split(".")[0];
              const videoPath = "http://localhost:3002/" + video.file;
              return (
                <>
                  <Flex
                    key={video.file}
                    gap="5px"
                    justify="space-around"
                    align="center"
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    w="100%"
                  >
                    <Text color="gray.900">{clipHourAndMinute}</Text>
                    <Box rounded="20px" overflow="clip">
                      <video width="240" height="160" controls>
                        <source src={videoPath} type="video/mp4" />
                        Your browser does not support the avideo tag.
                      </video>
                    </Box>
                  </Flex>
                  {/* if not last add separator line */}
                  {index !== arr.length - 1 && (
                    <Box w="100%" h="1px" bg="gray.500" opacity="0.5" />
                  )}
                </>
              );
            })
          )}
        </Flex>
      </Collapse>{" "}
    </Flex>
  );
}
