import React from "react";

import BanksItems from "./banks-items";

const BanksList = ({
    typeDocument,
    numberDocument,
    headingDocument,
    amountsRequest,
    bank,
    months,
}) => {

    return (
        <div className="mr-table">
            <h3 className="h3ColorFuc font">Elige tu mejor opción</h3>
            <table className="table table-striped table-responsive-sm table-responsive-md ">
                <thead>
                    <tr className="table-yellow">
                        <td>Banco/Entidad</td>
                        <td>Cuota mensual</td>
                        <td>N° de Cuotas</td>
                        <td>TCEA</td>
                        <td>Interés</td>
                        <td>Monto Total</td>
                        <td>Más informacion</td>
                    </tr>
                </thead>
                <tbody>

                    {bank.map(element => (
                        <BanksItems
                            getsBanks={element}
                            key={element.name}
                            month={months}
                            amountRequest={amountsRequest}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BanksList;
