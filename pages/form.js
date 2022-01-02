import React, { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import CurrencyInput from 'react-currency-input-field';

const form = () => {
    const [type, setType] = useState("California");

    // Individual Form State
    const [drink, setDrink] = useState(),
        onDrink = ({target:{value}}) => {
            setDrink(value)
            console.log(value)
        }
    const [cost, setCost] = useState(),
        onCost = (value, name) => {
            setCost(value)
            console.log(value, name)
        }
    const [restaurant, setRestaurant] = useState(),
        onRestaurant = ({target:{value}}) => {
            setRestaurant(value)
            console.log(value)
        }
    const [city, setCity] = useState(),
        onCity = ({target:{value}}) => {
            setCity(value)
            console.log(value)
        }
    const [state, setState] = useState(),
        onState = ({target:{value}}) => {
            setState(value)
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
            setRating(newRating)
        }

    // Form Object
    const formVals = {
        drink: drink,
        cost: cost,
        restaurant: restaurant, 
        city: city, 
        state: state, 
        desc: desc, 
        rating: rating
    }

    // Submit Handler
    const onFormSubmit = e => {
        e.preventDefault()
        for (var key in formVals) {
            var value = formVals[key]
            console.log(`${key}=${value}`)
        }
        resetForm()
    }

    const resetForm = () => {
        setDrink()
        setCost()
        setRestaurant()
        setCity()
        setState()
        setDesc()
        setRating()
    }

    return (
        <>
          <div style={{paddingLeft: "2em", paddingRight: "2em"}}>
            <div><h1>Boba Entry<br /><br /></h1></div>
              <Form onSubmit={onFormSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Drink</Form.Label>
                    <Form.Control required placeholder="Oolong Milk Tea" onChange={onDrink}/>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Drink Cost</Form.Label>
                    <CurrencyInput 
                        id="cost"
                        name="cost"
                        prefix="$"
                        decimalsLimit={2}
                        onValueChange={(value, name)=>onCost(value, name)}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-1">
                    <Form.Group as={Col}>
                        <Form.Label>Restaurant</Form.Label>
                        <Form.Control required placeholder="Wushiland" onChange={onRestaurant} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={onCity} />
                  </Form.Group>
  
                  <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>
                      <Form.Control 
                        as="select"
                        value={type}
                        onChange={e => {
                          console.log("e.target.value", e.target.value);
                          setType(e.target.value);
                          onState();
                        }}
                      >
                        <option value="CA">California</option>
                        <option value="AL">Alabama</option>
                        <option value="AZ">Arizona</option>
                      </Form.Control>
                  </Form.Group>
                </Row>

                <Row className="mb-1">
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="2" name="description" onChange={onDesc} />
                    </Form.Group>
                </Row>

                <ReactStars
                    onChange={onRating}
                    size={50}
                    count={5}
                    isHalf={true}
                />

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
    /*
    return (
        <div className='max-w-xs my-2 overflow-hidden rounded shadow-lg'>
            <div className='px-6 py-4'>
            <div className='mb-2 text-xl font-bold'>Contact us</div>
            <form className='flex flex-col'>
                <label htmlFor='name' className='mb-2 italic'>Name</label>
                <input className='mb-4 border-b-2' id='name' name='name' type='text' autoComplete='name' required />
                <button type='submit' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'>Submit</button>
            </form>
            </div>
        </div>
    )
}
*/

export default form 