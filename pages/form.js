import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import CurrencyInput from 'react-currency-input-field';
import DatePicker from "react-datepicker";
import { Typeahead } from 'react-bootstrap-typeahead';
import { createNewRestaurant, updateRestaurant } from '../features/restaurant/restaurantAPI'
import { createNewDrink } from '../features/drinks/drinksAPI'
import { useSelector } from 'react-redux';
import { getDrinks, getDrinksWithinDate, getRestaurants } from '../features/content/getData';
import { getTimeDate } from '../features/timeType/getTimeDate';
import NoFeatureGuest from '../components/login/NoFeatureGuest';
import { useAuth } from '../firebase/auth'

import "react-datepicker/dist/react-datepicker.css";

const UserForm = () => {
  const { user } = useAuth()
  const { isGuest } = useSelector(state => state.login)

  const { time, offset } = useSelector(state => state.timeType)
  var userEmail = ''
  if (isGuest)
    userEmail="guest@guest.com"
  else
    userEmail=user.email

  const timeDate = getTimeDate(time, offset)
  const { drinks, errorDrinks } = getDrinksWithinDate(userEmail, time, timeDate)
  const { restaurants, errorRestaurants } = getRestaurants(userEmail)

    const [usState, setUSState] = useState('CA');
    const [startDate, setStartDate] = useState(new Date());

    // workaround for react-stars clearing
    // https://github.com/n49/react-stars/issues/68
    const [starsKey, setStarsKey] = useState(Math.random())

    // Individual Form State
    const [drinkOpts, setDrinkOpts] = useState([])
    const [drink, setDrink] = useState(),
        onDrink = (value) => {
          if (typeof value[0] !== "string")
            value.length > 0 ? setDrink(value[0].label) : setDrink()
          else
            value.length > 0 ? setDrink(value[0]) : setDrink()
        }
    const [cost, setCost] = useState(),
        onCost = (value, name) => {
            setCost(value)
        }
    const [newRestaurant, setNewRestaurant] = useState(false)
    const [restaurantOpts, setRestaurantOpts] = useState([])
    const [restaurant, setRestaurant] = useState(),
      onRestaurant = (value) => {
        if (typeof value[0] !== "string") {
          setNewRestaurant(true)
          value.length > 0 ? setRestaurant(value[0].label) : setRestaurant()
        }
        else {
          setNewRestaurant(false)
          value.length > 0 ? setRestaurant(value[0]) : setRestaurant()
        }
      }
    const [city, setCity] = useState(),
        onCity = ({target:{value}}) => {
            setCity(value)
        }
    const [desc, setDesc] = useState(),
        onDesc = ({target:{value}}) => {
            setDesc(value)
        }
    const [rating, setRating] = useState(),
        onRating = (newRating) => {
            setRating(newRating)
        }

    useEffect(() => {
      const drinkNames = drinks ? drinks.map(drink => {return drink.name}) : []
      var restaurantNames = restaurants ? restaurants.map(restaurant => {return restaurant.name}) : []
       setDrinkOpts(drinkNames)
       setRestaurantOpts(restaurantNames)
     }, [drinks, restaurants])

    // Form Object
    const clientUserEmail = isGuest ? 'guest@guest.com' : user.email
    const formVals = {
        name: drink,
        cost: cost,
        restaurant: restaurant, 
        city: city, 
        state: usState, 
        date: startDate,
        description: desc, 
        rating: rating,
        userEmail: clientUserEmail
    }

    // Submit Handler
    const onFormSubmit = e => {
        e.target.reset()
        e.preventDefault();
        
        sendToDb(formVals)
    }

    const sendToDb = async () => {
      // First Create/Update Restaurants (B/C restaurants have own table)
      setIsSubmitting(true)
      const restaurantVals = {name: restaurant, rating: rating, userEmail: clientUserEmail}
      newRestaurant ? 
        await createNewRestaurant(restaurantVals) : 
          await updateRestaurant(restaurantVals)
      
      // Then create new drink
      await createNewDrink(formVals)

      setSubmitted(true)
    }

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

  if (isGuest) {
    return (
      <NoFeatureGuest />
    )
  }
    return (
        <>
          <div className="flex justify-center items-center h-full">
          <div className="h-full flex justify-center items-center">
              <Form onSubmit={onFormSubmit}>
                <h1 className="text-white text-4xl pt-4">Boba Entry</h1>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Drink</Form.Label>
                      { drink === undefined ?
                          <Typeahead
                            allowNew
                            value={drink}
                            id="custom-selections-example"
                            newSelectionPrefix="New Drink: "
                            options={drinkOpts}
                            placeholder="Oolong Milk Tea"
                            onChange={onDrink}
                            inputProps={{ required: true, className:"form-control"}}
                          />
                        :
                          <Typeahead
                            allowNew
                            value={drink}
                            id="custom-selections-example"
                            newSelectionPrefix="New Drink: "
                            options={drinkOpts}
                            placeholder="Oolong Milk Tea"
                            onChange={onDrink}
                            inputProps={{ required: true, className:"form-control bg-green-200 border-2 border-green-400" }}
                          />
                    }
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Drink Cost</Form.Label>
                    { cost === undefined ?
                        <CurrencyInput 
                          required
                          value={cost}
                          className="form-control"
                          id="cost"
                          name="cost"
                          prefix="$"
                          placeholder="4.50"
                          decimalsLimit={2}
                          onValueChange={(value, name)=>onCost(value, name)}
                        />
                      :
                        <CurrencyInput 
                            required
                            value={cost}
                            className="form-control bg-green-200 border-2 border-green-400"
                            id="cost"
                            name="cost"
                            prefix="$"
                            placeholder="4.50"
                            decimalsLimit={2}
                            onValueChange={(value, name)=>onCost(value, name)}
                        />
                    }
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Restaurant</Form.Label>
                        { restaurant === undefined ?
                            <Typeahead
                              allowNew
                              value={restaurant}
                              id="custom-selections-example"
                              newSelectionPrefix="New Restaurant: "
                              options={restaurantOpts}
                              placeholder="Wushiland"
                              onChange={onRestaurant}
                              inputProps={{ required: true, className:"form-control"}}
                            />
                          :
                            <Typeahead
                              allowNew
                              value={restaurant}
                              id="custom-selections-example"
                              newSelectionPrefix="New Restaurant: "
                              options={restaurantOpts}
                              placeholder="Wushiland"
                              onChange={onRestaurant}
                              inputProps={{ required: true, className:"form-control bg-green-200 border-2 border-green-400"}}
                            />
                        }
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    { city === undefined ?
                     <Form.Control 
                          value={city}
                          onChange={onCity} 
                          placeholder="City"
                      />
                    :
                      <Form.Control 
                          value={city}
                          onChange={onCity} 
                          placeholder="City"
                          className="bg-green-200 border-2 border-green-400"
                      />
                    }
                  </Form.Group>
  
                  <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>
                      <Form.Control 
                        as="select"
                        value={usState}
                        onChange={e => {
                          setUSState(e.target.value);
                        }}
                        className="bg-green-200 border-2 border-green-400"
                      >
			                  <option value="CA">California</option>
                        <option value="AK">Alaska</option>
			                  <option value="AL">Alabama</option>
			                  <option value="AR">Arkansas</option>
			                  <option value="AZ">Arizona</option>
			                  <option value="CO">Colorado</option>
			                  <option value="CT">Connecticut</option>
			                  <option value="DC">District of Columbia</option>
			                  <option value="DE">Delaware</option>
			                  <option value="FL">Florida</option>
			                  <option value="GA">Georgia</option>
			                  <option value="HI">Hawaii</option>
			                  <option value="IA">Iowa</option>
			                  <option value="ID">Idaho</option>
			                  <option value="IL">Illinois</option>
			                  <option value="IN">Indiana</option>
			                  <option value="KS">Kansas</option>
			                  <option value="KY">Kentucky</option>
			                  <option value="LA">Louisiana</option>
			                  <option value="MA">Massachusetts</option>
			                  <option value="MD">Maryland</option>
			                  <option value="ME">Maine</option>
			                  <option value="MI">Michigan</option>
			                  <option value="MN">Minnesota</option>
			                  <option value="MO">Missouri</option>
			                  <option value="MS">Mississippi</option>
			                  <option value="MT">Montana</option>
			                  <option value="NC">North Carolina</option>
			                  <option value="ND">North Dakota</option>
			                  <option value="NE">Nebraska</option>
			                  <option value="NH">New Hampshire</option>
			                  <option value="NJ">New Jersey</option>
			                  <option value="NM">New Mexico</option>
			                  <option value="NV">Nevada</option>
			                  <option value="NY">New York</option>
			                  <option value="OH">Ohio</option>
			                  <option value="OK">Oklahoma</option>
			                  <option value="OR">Oregon</option>
			                  <option value="PA">Pennsylvania</option>
			                  <option value="PR">Puerto Rico</option>
			                  <option value="RI">Rhode Island</option>
			                  <option value="SC">South Carolina</option>
			                  <option value="SD">South Dakota</option>
			                  <option value="TN">Tennessee</option>
			                  <option value="TX">Texas</option>
			                  <option value="UT">Utah</option>
			                  <option value="VA">Virginia</option>
			                  <option value="VT">Vermont</option>
			                  <option value="WA">Washington</option>
			                  <option value="WI">Wisconsin</option>
			                  <option value="WV">West Virginia</option>
			                  <option value="WY">Wyoming</option>
                      </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Date</Form.Label>
                    <DatePicker
                        className="form-control bg-green-200 border-2 border-green-400"
                        selected={startDate}
                        onChange={(date)=>setStartDate(date)}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-1">
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                          value={desc}
                          as="textarea" 
                          rows="2" 
                          name="description" 
                          onChange={onDesc}
                          placeholder="(Optional Description) 0% Sweet, honey boba, less ice"
                          className="form-control bg-green-200 border-2 border-green-400"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-1">
                    <Form.Group as={Col}>
                        <ReactStars
                            inputProps={{ required: true }}
                            key={starsKey}
                            value={rating}
                            onChange={onRating}
                            size={50}
                            count={5}
                            isHalf={true}
                            activeColor={"#95c4fe"}
                        />
                    </Form.Group>
                </Row>

                <div className="d-grid gap-2 pt-12">
                  <button className={`bg-blue-600 ${isSubmitting ? '' : 'hover:bg-blue-300'} hover:text-black rounded p-2 text-white text-bold`} disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
                {
                  submitted && 
                    <div className="bg-green-200 w-full rounded p-2 text-center text-black mt-2">
                      Submitted Form!
                    </div>
                }
              </Form>
            </div>
          </div>
        </>
    )
}

export default UserForm;