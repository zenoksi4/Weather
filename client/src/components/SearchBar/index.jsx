import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar() {

  return (
    <Form className='row align-items-center justify-content-center mt-3'>
      <Form.Group className="col-6 col-sm-8 col-md-5 col-lg-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter city" />
      </Form.Group>
      <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
        <Button  variant="primary" type="submit">
          Get weather
        </Button>
      </div>
    </Form>

  );
}

export default SearchBar;