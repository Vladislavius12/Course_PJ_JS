import styles from "../style";
import List from "./List";
import Registration from "./Registration";

const CTA = () => (
  <section id="registration" className={`${styles.flexCenter} ${styles.marginY}
  ${styles.paddingY} sm:flex-row flex-col
  bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's register for trial</h2>
      <Registration />
    </div>

    <div>
      
    </div>
  </section>
)

export default CTA;