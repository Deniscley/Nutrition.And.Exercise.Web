import Card from "../../ui/card/card";
import { plans } from "../../../state/constants/constants";
import "./plans-template.css";

export default function PlansTemplate() {
  return (
    <>
      <div className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mês</h2>
                <h4>Recursos</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Escolha o Plano</button>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
