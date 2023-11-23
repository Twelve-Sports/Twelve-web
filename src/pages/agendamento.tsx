import React, { useState } from "react";
import AgendaWrapper from "../layouts/agendaWrapper";
import { Flex } from "@chakra-ui/react";
import DatePicker from "../components/DatePicker";
import AgendaCard from "../components/agendamento/AgendaCard";
import AgendaLine from "../components/agendamento/AgendaLine";
import SlidingMenu, {
  SlidingMenuItem,
} from "../components/agendamento/SliderMenu";
import QuadraLine from "../components/agendamento/QuadraLine";

export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState<SlidingMenuItem>(null);
  const isDatePickerLocked = selectedOption !== null;

  // MOCKADO!
  const listaDeHorarios = [
    { id: 1, horario: "08:00", quadrasDisp: 2 },
    { id: 2, horario: "09:00", quadrasDisp: 0 },
    { id: 3, horario: "10:00", quadrasDisp: 0 },
    { id: 4, horario: "11:00", quadrasDisp: 1 },
    { id: 5, horario: "12:00", quadrasDisp: 7 },
    { id: 6, horario: "13:00", quadrasDisp: 2 },
    { id: 7, horario: "14:00", quadrasDisp: 4 },
    { id: 8, horario: "15:00", quadrasDisp: 3 },
    { id: 9, horario: "16:00", quadrasDisp: 7 },
    { id: 10, horario: "17:00", quadrasDisp: 1 },
    { id: 11, horario: "18:00", quadrasDisp: 0 },
    { id: 12, horario: "19:00", quadrasDisp: 0 },
    { id: 13, horario: "20:00", quadrasDisp: 0 },
    { id: 14, horario: "21:00", quadrasDisp: 0 },
  ];

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
            horarios={listaDeHorarios.map((vacancy) => ({
              row: <AgendaLine key={vacancy.id} vacancy={vacancy} />,
              label: vacancy.horario,
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
