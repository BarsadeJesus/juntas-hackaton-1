import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DetailsItems from './details-items';

const BanksItems = (props) => {
  // console.log(props.getsBanks);
  const [buttonClickedRequest, setButtonClickedRequest] = useState(false);
  const { image, name, tcea, total, quota, interes } = props.getsBanks;
  const handleButtonClickRequest = event => {
    event.preventDefault();
    setButtonClickedRequest(true);
  };
  return (
    <React.Fragment >
      <tr>
        <td><img src={image} className="imagen img-fluid" alt="banco" /></td>
        <td>{quota}</td>
        <td>{props.month}</td>
        <td>{tcea}</td>
        <td>{interes}</td>
        <td>{total}</td>
        <td>
          <button onClick={event => { handleButtonClickRequest(event); }}>
            {" "}
            Ver Requisitos
            </button>
          <Link
            to={{
              pathname: '/requisitos', state: {
                name,
                month: props.month,
                quota,
                tcea,
                total,
                amountrequest: props.amountRequest,
              }
            }}
            className="btn-yellow-link"
          >  Solicitar </Link>

        </td>
      </tr>
      <tr>
        {buttonClickedRequest ? (<DetailsItems />
        ) : null}
        {}
      </tr>
    </React.Fragment >
  );
}

export default BanksItems;
