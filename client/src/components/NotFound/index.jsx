import Badge from 'react-bootstrap/Badge';

function NotFound() {
  return (
    <Badge 
        bg="secondary" 
        style={{width: '50vh', fontSize: '2rem', marginTop: '40px'}}
    >
        NOT FOUND
    </Badge>
  );
}

export default NotFound;