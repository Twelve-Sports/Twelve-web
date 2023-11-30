import React, { useEffect, useState } from "react";
import AgendaWrapper from "../layouts/agendaWrapper";
import { Flex } from "@chakra-ui/react";
import DatePicker from "../components/DatePicker";
import AgendaCard from "../components/agendamento/AgendaCard";
import AgendaLine from "../components/agendamento/AgendaLine";
import SlidingMenu, {
  SlidingMenuItem,
} from "../components/agendamento/SliderMenu";
import QuadraLine from "../components/agendamento/QuadraLine";
import { format } from 'date-fns-tz';



export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [video, setVideo] = useState<any> ([]);
  const [selectedOption, setSelectedOption] = useState<SlidingMenuItem>(null);
  const isDatePickerLocked = selectedOption !== null;

  async function getVideoByDayAndHourAllCourts(date: string, hour: number): Promise<void> {
    try {
      console.log(hour);
  
      const response = await fetch('http://localhost:3002/allVideoDayAllCourts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, hour }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Erro na solicitação: ${response.statusText}\n${errorMessage}`);
      }
  
      const data = await response.json();
  
      // setVideo(data);
      return data;
    } catch (error) {
      console.error('Erro durante a solicitação:', error.message);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        Array.from({ length: 22 - 8 }, (_, index) =>
          getVideoByDayAndHourAllCourts(format(selectedDate, 'yyyy-MM-dd', { timeZone: 'America/Sao_Paulo' }), index + 8)
        )
      );
  
      setVideo(newData);
    };
  
    fetchData();
  }, [selectedDate]);
  

  // MOCKADO!
  const listaDeHorarios = [
    { id: 1, hour: "08:00", totalClips: 2 },
    { id: 2, hour: "09:00", totalClips: 0 },
    { id: 3, hour: "10:00", totalClips: 0 },
    { id: 4, hour: "11:00", totalClips: 1 },
    { id: 5, hour: "12:00", totalClips: 7 },
    { id: 6, hour: "13:00", totalClips: 2 },
    { id: 7, hour: "14:00", totalClips: 4 },
    { id: 8, hour: "15:00", totalClips: 2 },
    { id: 9, hour: "16:00", totalClips: 7 },
    { id: 10, hour: "17:00", totalClips: 1 },
    { id: 11, hour: "18:00", totalClips: 0 },
    { id: 12, hour: "19:00", totalClips: 0 },
    { id: 13, hour: "20:00", totalClips: 0 },
    { id: 14, hour: "21:00", totalClips: 0 },
  ];

 

  const listaAtualizada = listaDeHorarios.map((hour, index) => ({
    ...hour,
    totalClips: video[index]?.totalClips || 0,
    
  }));
  console.log('listaAtualizada', listaAtualizada);
  

  // MOCKADO!
  const listaDeQuadras = [
    { id: 1, nome: "Quadra 1", horasConsecutivas: 2 },
    { id: 2, nome: "Quadra 2", horasConsecutivas: 3 },
    { id: 3, nome: "Quadra 3", horasConsecutivas: 0 },
    { id: 4, nome: "Quadra 4", horasConsecutivas: 2 },
    { id: 5, nome: "Quadra 5", horasConsecutivas: 0 },
  ];

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
          <SlidingMenu
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            horarios={listaAtualizada.map((vacancy) => ({
              row: <AgendaLine key={vacancy.id} vacancy={vacancy} />,
              label: vacancy.hour,
              onClick: () => console.log("banana"),
            }))}
            quadras={listaDeQuadras.map((quadra) => ({
              row: (
                <QuadraLine
                  key={quadra.id}
                  courtID={quadra.id}
                  courtName={quadra.nome}
                  consecutiveHours={quadra.horasConsecutivas}
                />
              ),
              label: quadra.nome,
              onClick: () => console.log("banana"),
            }))}
          />
        </AgendaCard>
      </Flex>
    </AgendaWrapper>
  );
}
