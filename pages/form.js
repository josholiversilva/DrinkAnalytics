import React, { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'

const form = () => {
    const [type, setType] = useState("California");

    return (
        <>
          <div style={{paddingLeft: "2em", paddingRight: "2em"}}>
            <div><h1 style={{paddingTop:"15vh"}}>Boba Entry<br /><br /></h1></div>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Drink</Form.Label>
                    <Form.Control required placeholder="Oolong Milk Tea" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Restaurant</Form.Label>
                    <Form.Control required placeholder="Wushiland" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>
  
                  <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>
                      <Form.Control 
                        as="select"
                        value={type}
                        onChange={e => {
                          console.log("e.target.value", e.target.value);
                          setType(e.target.value)
                        }}
                      >
                        <option value="CA">California</option>
                        <option value="AL">Alabama</option>
                        <option value="AZ">Arizona</option>
                      </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} md="3">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <div style={{paddingTop:"15vh"}} className="d-grid gap-2">
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