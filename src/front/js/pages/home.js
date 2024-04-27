import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import FeaturedRecipesHero from "../component/featuredRecipesHero";
import UserFunctHero from "../component/userFunctHero";
import ContactHero from "../component/contactHero";

export default function Home() {
  return (
    <div>
      <FeaturedRecipesHero />
      <UserFunctHero />
      <ContactHero />
    </div>
  );
}
