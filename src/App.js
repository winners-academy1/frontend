import { React, useState, Suspense } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FixedHeader from './components/Header/FixedHeader';
import AboutUs from './components/About-us/AboutUs';
import DeliveryPolicy from './components/Policy/DeliveryPolicy';
import PrivacyPolicy from './components/Policy/PrivacyPolicy';
import ContactUs from './components/Contact-Us/ContactUs';
import LoadingState from './components/Loading-State/LoadingState';
import PricingPlansAcademic from './components/PricingPlans/PricingPlansAcademic';
import PricingPlans from './components/PricingPlans/PricingPlans';
import Instructors from './components/Instructors/Instructors';
function App() {
  const [y, setY] = useState(window.scrollY);
  const [isLoading, setIsLoading] = useState(window.location.pathname == "/" ? true : false);

  window.onscroll = function () {
    setY(window.scrollY);
  };
  return (
    <> 
      {
        isLoading &&
        <div id="loading">
          <LoadingState/>
        </div>
      }
      <Router>
        <div id='app' className={isLoading ? "d-none" : ""}>
          <Suspense fallback={null}>
            {Number(y) >= 120 && (
              <button
                className='go-up'
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <i className='fas fa-angle-up'></i>
              </button>
            )}
            {/* <FixedHeader /> */}
            <Header />

            <Routes>
              <Route exact path='/' element={<Home setIsLoading={setIsLoading} />} />
              <Route exact path='/AboutUs' element={<AboutUs />} />
              <Route exact path='/ContactUs' element={<ContactUs />} />
              <Route exact path='/Instructors' element={<Instructors />} />
              <Route exact path='/DeliveryPolicy' element={<DeliveryPolicy />} />
              <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy />} />
              <Route exact path='/PricingPlansAcademic' element={<PricingPlansAcademic />} />
              <Route exact path='/PricingPlans' element={<PricingPlans />} />
            </Routes>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
