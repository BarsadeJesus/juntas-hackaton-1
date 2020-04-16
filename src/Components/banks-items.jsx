import React, { useState } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import DetailsItems from './details-items';

const BanksItems = (props) => {
  // console.log(props.getsBanks);


  const [buttonClickedRequest, setButtonClickedRequest] = useState(false);

  const { name, tcea, total, quota, interes } = props.getsBanks;

  const handleButtonClickRequest = event => {
    event.preventDefault();
    setButtonClickedRequest(true);
  };


  return (
    <React.Fragment >
      <HashRouter>
        <tr>
          <td>{name}</td>
          <td>{props.month}</td>
          <td>{quota}</td>
          <td>{tcea}</td>
          <td>{interes}</td>
          <td>{total}</td>
          <td>
            <button onClick={event => { handleButtonClickRequest(event); }}>
              {" "}
              Ver Requisitos
            </button>
            <Link className="btn btn-success" to="/requisitos">  Solicitar </Link>
          </td>
        </tr>
        <tr>
          {buttonClickedRequest ? (<DetailsItems />
          ) : null}
          {}
        </tr>
      </HashRouter>
    </React.Fragment>
  );
}

export default BanksItems;
