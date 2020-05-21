import React, { useState } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated'


const foodOptions = [
  {value: "tradamerican",label: "American"},
  {value: "asianfusion", label: "Asian Fusion"},
  {value: "bbq", label: "Barbeque"},
  {value: "buffets", label: "Buffets"},
  {value: "cajun", label: "Cajun/Creole"},
  {value: "chinese", label: "Chinese"},
  {value: "comfortfood", label: "Comfort Food"},
  {value: "delis", label: "Delis"},
  {value: "diners", label: "Diners"},
  {value: "Greek", label: "Greek"},
  {value: "indpak", label: "Indian"},
  {value: "italian", label: "Italian"},
  {value: "japanese", label: "Japanese"},
  {value: "jewish", label: "Jewish"},
  {value: "mediterranean", label: "Mediterranean"},
  {value: "mexican", label: "Mexican"},
  {value: "pizza", label: "Pizza"},
  {value: "sandwiches", label: "Sandwiches"},
  {value: "sushi", label: "Sushi"},
  {value: "thai", label: "Thai"},
  {value: "vegan", label: "Vegan"},
  {value: "vegetarian", label: "Vegetarian"}
];

const optionsState = [
  {value: "PA", label: "Pennsylvania"}
];

export function FoodOptions({data, setFoodType}) {
  const [foodType, setFood] = useState([]);
  
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: 'lightyellow',
        primary: 'black'
      }
    }
  }
  return(
    <Select
    name="foodType"
    theme={customTheme}
    value={this.state.value}
    components={makeAnimated()}
    options={foodOptions}
    className="mb-3"
    placeholder="select food type"
    isMulti
    autoFocus
    onChange={setFood} />
  )
}
