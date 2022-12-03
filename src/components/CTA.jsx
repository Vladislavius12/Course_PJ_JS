import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY}
  ${styles.paddingY} sm:flex-row flex-col
  bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's register for trial</h2>
      <p className={`${styles.flexCenter} ${styles.paragraph} max-w-[470px]
      mt-5 ml-2`}>
          <form >
            <div>
              <input type="text" className="textform" name="Username" placeholder="Username"/>
            </div>
            <div>           
              <input type="text" className="textform" name="Password" placeholder="Password"/>
            </div>
          <div className={`${styles.flexCenter} sm:ml-10 ml-0 mr-5 sm:mt-0 mt-10`}>
            <button className={`py-4 px-6
            bg-blue-gradient font-poppins font-medium
            text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>Submit</button>
          </div>
          </form>
      </p>
    </div>

    <div>

    </div>
  </section>
)


export default CTA