import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PictureCard from "../component/pictureCard";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<PictureCard/>
	);
};
