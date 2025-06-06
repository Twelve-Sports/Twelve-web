import React from "react";
import AgendaWrapper from "../layouts/agendaWrapper";
import SportSelector from "../components/SportSelector";
import { PadelIcon, VolleyIcon } from "../../public/icons/icons";
import { Flex, Text } from "@chakra-ui/react";
import DatePicker from "../components/DatePicker";
import AgendaCard from "../components/AgendaCard";
import AgendaLine from "../components/AgendaLine";

export default function Agendamento() {
  const [selectedSport, setSelectedSport] = React.useState<number>(null);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const sports = [
    {
      id: 1,
      name: "Padel",
      icon: <PadelIcon color={selectedSport === 1 ? "white" : "black"} />,
    },
    {
      id: 2,
      name: "Vôlei",
      icon: <VolleyIcon color={selectedSport === 2 ? "white" : "black"} />,
    },
  ];

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

  return (
    <AgendaWrapper>
      <Flex
        width="100%"
        position={"relative"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex flexDir={"column"} gridGap={"10px"}>
          <Text>Filtrar por:</Text>
          <SportSelector
            sports={sports}
            selectedSport={selectedSport}
            setSelectedSport={setSelectedSport}
            gridGap="10px"
            width="fit-content"
          />
        </Flex>

        <AgendaCard display={selectedSport ? "flex" : "none"}>
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            borderBottom={"1px solid #0003"}
            width="100%"
            justifyContent={"space-between"}
          />
          {listaDeHorarios.map((horario) => (
            <AgendaLine key={horario.id} vacancy={horario} />
          ))}
        </AgendaCard>
      </Flex>
    </AgendaWrapper>
  );
}
