import styles from './style';

import { Navbar, Mainm, Stats, Bisness, Billing, CardDeal, Testimonials, Clients, CTA, Footer, Registration }  from './components';

const App = () => (
    <div className="bg-primary  w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Mainm />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Bisness />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer/>
      </div>
    </div>
  </div>
)

export default App