import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { animalsSelector, getRadndomAnimals } from "../../store/animals";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { Figure } from "../../components/Figure";
import { Button } from "@material-ui/core";
import { getRandomAnimals } from "../../store/animals/action";

export const Animals = () => {
	const data = useSelector(animalsSelector.getAnimalsData);
	const isError = useSelector(animalsSelector.getAnimalsError);
	const isLoading = useSelector(animalsSelector.getAnimalsisLoading);
	const dispatch = useDispatch();

	const getData = () => {
		dispatch(getRadndomAnimals)
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<h1>Homework</h1>

			{
				!isError &&
				<Button onClick={getData} disable={isLoading} >
					reload
				</Button>
			}

			{isError && (
				<Error
					reload={getData}
				/>
			)}


			{isLoading && <Loader />}

			{!isLoading && data && <figure {...data} />}
		</div>
	)

}