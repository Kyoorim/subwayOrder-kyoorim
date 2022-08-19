import classes from "./MenuSummary.module.css";

const MenuSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>SEARCH FOR BETTER</h2>
      <h3>우리는 더 좋은 써브웨이를 위해 매일 노력합니다.</h3>
      <p>
        매일 매장에 배송되는 신선한 야채들은 각 매장에서 정성스럽게 손질됩니다.
        엄격한 규율에 따라 세척 과정을 거친 야채들은 당일 판매되는 양만큼
        준비되며 언제나 신선한 최상의 야채를 안전하게 제공하는 것이 써브웨이의
        목표입니다.
      </p>
    </section>
  );
};

export default MenuSummary;
