import React, { useEffect, useState } from "react";
import AgendaWrapper from "../layouts/agendaWrapper";
import { Flex } from "@chakra-ui/react";
import DatePicker from "../components/DatePicker";
import AgendaCard from "../components/agendamento/AgendaCard";
import AgendaLine from "../components/agendamento/AgendaLine";
import SliderMenu, {
  SlidingMenuItem,
} from "../components/agendamento/SliderMenu";
import { format } from "date-fns-tz";
import QuadraLine from "../components/agendamento/QuadraLine";

export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState<SlidingMenuItem>(null);
  const isDatePickerLocked = selectedOption !== null;
  const selectedHour = selectedOption?.label ?? null;
  const [totalClipsByHour, setTotalClipsByHour] = useState<any>({});
  const [totalClipsByGame, setTotalClipsByGame] = useState<any>([]);

  async function fetchClipsByDay(date: string): Promise<void> {
    try {
      const response = await fetch("http://localhost:3002/allVideoDay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date }),
      });

      if (!response.ok) {
        setTotalClipsByHour({});
        const errorMessage = await response.text();
        throw new Error(
          `Erro na solicitação: ${response.statusText}\n${errorMessage}`
        );
      }

      const data = await response.json();
      const totalClipsByHour = data.totalClipsByHour;
      setTotalClipsByHour(totalClipsByHour);
    } catch (error) {
      setTotalClipsByHour({});
      console.error("Erro durante a solicitação:", error.message);
    }
  }

  async function fetchClipCountByGame(
    date: string,
    hour: number
  ): Promise<void> {
    try {
      const response = await fetch("http://localhost:3002/clipCountByGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, hour }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Erro na solicitação: ${response.statusText}\n${errorMessage}`
        );
      }

      const data = await response.json();
      setTotalClipsByGame(data);
    } catch (error) {
      console.error("Erro durante a solicitação:", error.message);
    }
  }

  useEffect(() => {
    fetchClipsByDay(format(selectedDate, "yyyy-MM-dd"));
  }, [selectedDate]);

  useEffect(() => {
    if (selectedHour) {
      const hourInteger = parseInt(selectedHour.split(":")[0]);
      fetchClipCountByGame(format(selectedDate, "yyyy-MM-dd"), hourInteger);
    }
  }, [selectedHour]);

  const listaDeHorarios = Object.entries(totalClipsByHour).map(
    ([hour, totalClips]) => ({
      row: (
        <AgendaLine
          key={hour}
          vacancy={{
            id: 1,
            hour: hour,
            totalClips: totalClips as number,
          }}
        />
      ),
      label: hour,
    })
  );

  const listaDeJogos = totalClipsByGame.map((game: any) => (
    <QuadraLine
      key={game.court_id}
      courtID={game.court_id}
      courtName={game.court_name}
      clipCount={game.video_count}
      selectedDate={selectedDate}
      selectedHour={selectedHour}
    />
  ));

  return (
    <AgendaWrapper>
      <Flex
        width="100%"
        position={"relative"}
        flexDir={{ base: "column", md: "row" }}
      >
        <AgendaCard>
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            width="100%"
            locked={isDatePickerLocked}
            pb={3}
          />

          <SliderMenu
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            horarios={listaDeHorarios}
            quadras={listaDeJogos}
          />
        </AgendaCard>
      </Flex>
    </AgendaWrapper>
  );
}
