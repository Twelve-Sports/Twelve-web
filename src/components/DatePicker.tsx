import { Button, Flex, FlexProps, forwardRef } from "@chakra-ui/react";
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

type DatePickerProps = {
	selectedDate: Date;
	setSelectedDate: (date: Date) => void;
} & FlexProps;



export default function DatePicker({ selectedDate, setSelectedDate, ...props }: DatePickerProps) {
	const minDate = new Date();

	const handleDateChange = (date: Date) => {
		const today = new Date();
		if (date < today) {
			setSelectedDate(today);
		} else {
			setSelectedDate(date);
		}
	};

	const handlePrevDay = () => {
		const prevDay = new Date(selectedDate);
		prevDay.setDate(prevDay.getDate() - 1);
		prevDay.setHours(23,59,59,999);
		if (prevDay < minDate) return;
		setSelectedDate(prevDay);
	};

	const handleNextDay = () => {
		const nextDay = new Date(selectedDate);
		nextDay.setDate(nextDay.getDate() + 1);
		setSelectedDate(nextDay);
	};

	return (
		<Flex align={"center"} {...props}>
			<Button variant="ghost" onClick={handlePrevDay}  mx="10px"><ArrowLeftIcon/></Button>
			<ReactDatePicker
				selected={selectedDate}
				onChange={handleDateChange}
				customInput={<CustomInput />}
				locale={ptBR}
				dateFormat="yyyy-MM-dd"
				minDate={minDate}
			/>
			<Button variant="ghost" onClick={handleNextDay} mx="10px"><ArrowRightIcon/></Button>
		</Flex>
	);
}

const weekdays = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro",
	"Outubro","Novembro","Dezembro"];

function displayDate(date:string){
	const data = new Date(date + "T00:00:00");
	return `${weekdays[data.getDay()]}, ${data.getDate()} de ${months[data.getMonth()]} de ${data.getFullYear()}`;
}

const CustomInput = forwardRef(({ value = "", onClick }, ref) => (
	<Button variant="ghost" className="example-custom-input" onClick={onClick} ref={ref}>
		{displayDate(value)}
	</Button>
));
