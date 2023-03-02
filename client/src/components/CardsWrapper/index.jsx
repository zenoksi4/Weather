const wrapper = {
    backgroundColor:"#28688C",
    boxShadow: "1px 5px 25px 3px #444",
    borderRadius: "10px",
    margin: "100px auto",
    maxWidth: "720px",
    padding: "0px",
    color: "white",
  }
  
function CardsWrapper({children}) {

  return (
    <div className="container-fluid" style={wrapper}>
        <div className="row" style={{padding: "15px"}}>
            {children}
        </div>
    </div>
  );
}

export default CardsWrapper;