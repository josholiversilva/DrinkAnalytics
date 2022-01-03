import React, { useState, useRef, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import CurrencyInput from 'react-currency-input-field';
import DatePicker from "react-datepicker";
import { Menu, MenuItem, Typeahead } from 'react-bootstrap-typeahead';
import { getAllDrinks } from '../api/drinks'

import "react-datepicker/dist/react-datepicker.css";

const form = () => {
    const [usState, setUSState] = useState('California');
    const [startDate, setStartDate] = useState(new Date());

    const getAllDrinks = async () => {
      const action = await fetch('localhost:3001/drinks')
      const data = await action.json()
      const drinks = data.map((drink) => {
        return drink.name
      })
      console.log(drinks)
      setDrinkOpts(drinks)
    }

    // workaround for react-stars clearing
    // https://github.com/n49/react-stars/issues/68
    const [starsKey, setStarsKey] = useState(Math.random())

    // Individual Form State
    const [drinkOpts, setDrinkOpts] = useState([])
    const [drink, setDrink] = useState(),
        onDrink = (value) => {
          console.log(value)
          value.length > 0 ? setDrink(value[0].label) : setDrink()
        }
    const [cost, setCost] = useState(),
        onCost = (value, name) => {
            setCost(value)
            console.log(value, name)
        }
    const [restaurant, setRestaurant] = useState(),
      onRestaurant = (value) => {
        console.log(value)
        value.length > 0 ? setRestaurant(value[0].label) : setRestaurant()
      }
    const [city, setCity] = useState(),
        onCity = ({target:{value}}) => {
            setCity(value)
            console.log(value)
        }
    const [desc, setDesc] = useState(),
        onDesc = ({target:{value}}) => {
            setDesc(value)
            console.log(value)
        }
    const [rating, setRating] = useState(),
        onRating = (newRating) => {
            console.log(newRating)
        }

    // Form Object
    const formVals = {
        drink: drink,
        cost: cost,
        restaurant: restaurant, 
        city: city, 
        state: usState, 
        date: startDate,
        desc: desc, 
        rating: rating
    }

    // Submit Handler
    const onFormSubmit = e => {
        e.target.reset()
        for (var key in formVals) {
            var value = formVals[key]
            console.log(`${key}=${value}`)
        }
        // resetForm()
        alert("Form Submitted")
    }

    // Submit Workflow
    /*
    const resetForm = () => {
        console.log("RESEETTTINNG FORM")
        setDrink()
        setCost('')
        setRestaurant('')
        setCity()
        setUSState('California')
        setStartDate(new Date())
        setDesc('')
        setStarsKey(Math.random());
        setRating('');
    }
    */

    return (
        <>
          <div style={{paddingLeft: "2em", paddingRight: "2em"}}>
            <div><h1>Boba Entry<br /><br /></h1></div>
              <Form onSubmit={onFormSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Drink</Form.Label>
                      <Typeahead
                        allowNew
                        value={drink}
                        id="custom-selections-example"
                        newSelectionPrefix="Add a new item: "
                        options={drinkOpts}
                        placeholder="Oolong Milk Tea"
                        onChange={onDrink}
                      />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Drink Cost</Form.Label>
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
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Restaurant</Form.Label>
                        <Typeahead
                          allowNew
                          value={restaurant}
                          id="custom-selections-example"
                          newSelectionPrefix="Add a new item: "
                          options={[]}
                          placeholder="Wushiland"
                          onChange={onRestaurant}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        value={city}
                        onChange={onCity} 
                    />
                  </Form.Group>
  
                  <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>
                      <Form.Control 
                        as="select"
                        value={usState}
                        onChange={e => {
                          setUSState(e.target.value);
                        }}
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
                        className="form-control"
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
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-1">
                    <Form.Group as={Col}>
                        <ReactStars
                            key={starsKey}
                            value={rating}
                            onChange={onRating}
                            size={50}
                            count={5}
                            isHalf={true}
                        />
                    </Form.Group>
                </Row>

                <div style={{paddingTop:"10vh"}} className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>

              <div className="d-grid gap-2">
                <Button href='/' size='lrg' variant='secondary'>Return</Button>
              </div>
            </div>
        </>
    )
}

export default form 