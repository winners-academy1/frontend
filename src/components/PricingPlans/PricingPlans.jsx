import React from 'react';
import '../../styles/pricingPlans/pricing-plans-core.css';
import { useLocation } from 'react-router-dom';
const RecordedIcon = ({ width = 35, height = 34, fill = "#E4FFE0", className = '' }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 35 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M17.372 32.7341C16.3759 32.7504 14.7821 32.4899 13.2049 32.034C12.325 31.7734 11.4451 31.7897 10.5652 32.034C8.29076 32.6527 5.99969 33.2552 3.72522 33.8739C2.62949 34.167 1.64997 33.9553 0.836474 33.1738C0.0395796 32.3922 -0.176246 31.4152 0.139192 30.3406C0.770067 28.1261 1.40094 25.8954 2.04842 23.6647C2.33065 22.704 2.28085 21.7596 2.03182 20.7826C0.305211 14.237 1.99861 8.63572 7.06222 4.06028C9.65212 1.71557 12.7899 0.347828 16.3095 0.0710216C23.2823 -0.48259 28.6946 2.20406 32.43 8.0007C34.1068 10.6222 34.8207 13.5368 34.7875 16.6305C34.7211 23.6972 29.7239 30.1126 22.8009 32.0665C21.2403 32.5062 19.6465 32.7341 17.372 32.7341ZM23.8634 12.6576C23.8302 12.625 23.8136 12.625 23.797 12.6087C23.7638 12.5436 23.7306 12.4784 23.6974 12.4133C23.0997 11.1921 22.1202 10.5245 20.7422 10.5082C17.3886 10.492 14.035 10.492 10.6814 10.5082C8.90503 10.5082 7.51047 11.8434 7.47726 13.5857C7.44406 15.4256 7.44406 17.2656 7.47726 19.1055C7.51047 20.8477 8.88843 22.1829 10.6648 22.1992C14.035 22.2318 17.3886 22.2318 20.7588 22.1992C22.1368 22.1829 23.1495 21.4991 23.714 20.2453C23.7472 20.1802 23.797 20.0987 23.8468 20.0173C24.5939 20.1802 25.3078 20.3593 26.0383 20.5058C27.4328 20.8152 28.6116 19.8871 28.6282 18.4868C28.6448 17.0376 28.6448 15.6047 28.6282 14.1556C28.6116 12.7552 27.4328 11.8434 26.0383 12.1528C25.3244 12.3319 24.5773 12.4947 23.8634 12.6576Z" fill={fill}/>
        <path d="M15.7284 12.2342C17.3554 12.2342 18.999 12.2342 20.626 12.2342C21.6221 12.2342 22.2198 12.8204 22.2364 13.8136C22.2364 15.507 22.2364 17.2004 22.2364 18.9101C22.2364 19.8871 21.6221 20.4895 20.626 20.4895C17.372 20.4895 14.118 20.4895 10.864 20.4895C9.88452 20.4895 9.27025 19.9034 9.27025 18.9427C9.27025 17.2167 9.27025 15.507 9.27025 13.7811C9.27025 12.8367 9.86792 12.2668 10.8308 12.2505C12.4578 12.2342 14.0848 12.2342 15.7284 12.2342Z" fill={fill}/>
        <path d="M26.885 16.3537C26.885 17.0376 26.885 17.7215 26.885 18.4053C26.885 18.7798 26.7522 18.8775 26.3869 18.7961C25.6731 18.6333 24.9592 18.4705 24.2453 18.2914C24.1457 18.2588 24.0129 18.1122 24.0129 18.0145C23.9963 16.891 23.9963 15.7513 24.0129 14.6277C24.0129 14.53 24.1457 14.3835 24.2453 14.3509C24.9592 14.1718 25.6731 14.009 26.3869 13.8462C26.7522 13.7648 26.885 13.8625 26.885 14.2532C26.885 14.9697 26.885 15.6536 26.885 16.3537Z" fill={fill}/>
    </svg>
);
const CheckMarkIcon = ({ width = 14, height = 14, color = 'white', className = '' }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M4.71007 10C4.59076 10 4.4789 9.98121 4.3745 9.94362C4.2701 9.90664 4.17316 9.8434 4.08367 9.75391L0.235796 5.90604C0.0717391 5.74198 -0.00670985 5.52931 0.000448986 5.26801C0.00820439 5.00731 0.0941101 4.79493 0.258167 4.63087C0.422224 4.46681 0.631023 4.38479 0.884565 4.38479C1.13811 4.38479 1.34691 4.46681 1.51096 4.63087L4.71007 7.82998L12.294 0.246085C12.458 0.0820284 12.6707 0 12.932 0C13.1927 0 13.4051 0.0820284 13.5691 0.246085C13.7332 0.410142 13.8152 0.62252 13.8152 0.883221C13.8152 1.14452 13.7332 1.3572 13.5691 1.52125L5.33647 9.75391C5.24698 9.8434 5.15004 9.90664 5.04564 9.94362C4.94124 9.98121 4.82938 10 4.71007 10Z"
            fill={color}
        />
    </svg>
);
const LiveIcon = () => (
    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.0181 34C22.2287 34 12.4393 34 2.64989 34C2.5655 33.9834 2.48111 33.9503 2.39672 33.9338C1.28275 33.6523 0.540105 32.9902 0.151905 31.9308C0.10127 31.7652 0.0506349 31.5997 0 31.4176C0 27.1633 0 22.9255 0 18.6712C0.0168783 18.6381 0.0337564 18.6216 0.0337564 18.5885C0.523227 16.8503 1.53592 16.0889 3.39254 16.0889C9.01301 16.0889 14.6335 16.0889 20.2371 16.0889C24.0009 16.0889 27.7648 16.0889 31.5455 16.0889C33.284 16.0889 34.6343 17.3635 34.6511 19.0354C34.668 23.058 34.668 27.064 34.6511 31.0865C34.6511 32.328 33.8241 33.4206 32.6257 33.8344C32.4232 33.8841 32.2207 33.9337 32.0181 34ZM26.482 22.0482C27.4779 22.0482 28.4399 22.0482 29.402 22.0482C30.0602 22.0482 30.516 21.6509 30.5328 21.0715C30.5497 20.4756 30.0771 20.0617 29.402 20.0617C28.1361 20.0617 26.8702 20.0617 25.6044 20.0617C24.828 20.0617 24.4398 20.459 24.4398 21.204C24.4398 22.5945 24.4398 23.985 24.4398 25.392C24.4398 26.5839 24.4398 27.7758 24.4398 28.9676C24.4398 29.547 24.828 29.994 25.4018 30.0105C26.7858 30.0271 28.1699 30.0271 29.5708 30.0105C30.094 30.0105 30.516 29.5801 30.5328 29.0835C30.5666 28.6035 30.2121 28.1565 29.7058 28.0572C29.5708 28.0241 29.4357 28.0406 29.3007 28.0406C28.3724 28.0406 27.4272 28.0406 26.482 28.0406C26.482 27.3619 26.482 26.7163 26.482 26.0542C27.4779 26.0542 28.4568 26.0542 29.4357 26.0542C30.0602 26.0542 30.516 25.6238 30.516 25.061C30.516 24.4981 30.0602 24.0677 29.4357 24.0677C28.5581 24.0677 27.6804 24.0677 26.8027 24.0677C26.7015 24.0677 26.5833 24.0512 26.482 24.0512C26.482 23.3559 26.482 22.7103 26.482 22.0482ZM19.41 24.7464C19.3763 24.7464 19.3594 24.7464 19.3256 24.7464C19.2919 24.6306 19.2581 24.5147 19.2244 24.3988C18.9206 23.2235 18.6336 22.0482 18.3298 20.8729C18.1779 20.2935 17.6378 19.9624 17.0977 20.0949C16.5238 20.2273 16.2032 20.757 16.3551 21.3529C17.0133 23.9684 17.6884 26.5839 18.3467 29.1994C18.4817 29.7291 18.8531 30.0271 19.3425 30.0271C19.8489 30.0271 20.2202 29.7126 20.3552 29.1828C21.0135 26.5839 21.6717 24.0015 22.33 21.4026C22.4988 20.7736 22.1781 20.2273 21.5873 20.0949C21.0304 19.9624 20.524 20.3101 20.3721 20.9225C20.254 21.386 20.1358 21.8495 20.0177 22.2965C19.832 23.1076 19.6126 23.9188 19.41 24.7464ZM6.16058 28.0241C6.16058 27.8585 6.16058 27.7261 6.16058 27.5937C6.16058 25.4251 6.16058 23.2566 6.16058 21.0881C6.16058 20.4921 5.72174 20.0617 5.14788 20.0617C4.57402 20.0617 4.13518 20.4921 4.13518 21.0881C4.13518 21.4523 4.13518 21.8164 4.13518 22.1806C4.13518 24.4319 4.13518 26.6998 4.13518 28.9511C4.13518 29.5636 4.54026 30.0105 5.14788 30.0105C6.51502 30.0271 7.88216 30.0271 9.2493 30.0105C9.68814 30.0105 9.99195 29.7788 10.1607 29.3815C10.4308 28.7193 9.94131 28.0406 9.19867 28.0241C8.20285 28.0075 7.20703 28.0241 6.16058 28.0241ZM14.2959 25.061C14.2959 23.7532 14.2959 22.4455 14.2959 21.1543C14.2959 20.5087 13.874 20.0617 13.3001 20.0452C12.6925 20.0452 12.2705 20.4921 12.2705 21.1543C12.2705 23.7367 12.2705 26.3025 12.2705 28.8849C12.2705 29.547 12.6925 30.0105 13.2832 30.0105C13.8908 30.0105 14.2959 29.547 14.2959 28.8849C14.2959 27.6102 14.2959 26.3356 14.2959 25.061Z" fill="#B6AEAE"/>
        <path d="M6.17737 6.73604C6.21112 4.58406 6.90313 2.43207 8.32091 0.511843C8.72599 -0.0344293 9.33361 -0.150305 9.82308 0.197323C10.2957 0.544951 10.3632 1.12433 9.97498 1.6706C7.61202 4.98135 7.61202 8.97079 9.97498 12.265C10.3632 12.8113 10.2957 13.4072 9.8062 13.7548C9.31673 14.1024 8.72599 13.9535 8.32091 13.4072C6.92001 11.5532 6.17737 9.28531 6.17737 6.73604Z" fill="#B6AEAE"/>
        <path d="M28.5075 6.65326C28.4737 9.36807 27.7648 11.5532 26.3302 13.4899C26.0601 13.8376 25.7225 14.0197 25.2837 13.9369C24.8618 13.8541 24.5917 13.5893 24.4904 13.1754C24.406 12.8278 24.5411 12.5298 24.7605 12.2484C25.6213 11.0897 26.1614 9.78192 26.3808 8.3583C26.7352 5.97456 26.212 3.78947 24.828 1.80303C24.7774 1.73681 24.7267 1.6706 24.693 1.62094C24.3554 1.12433 24.4398 0.528392 24.9124 0.213872C25.385 -0.117203 25.9757 -0.0178804 26.347 0.462177C27.3597 1.80303 28.0349 3.30942 28.3387 4.94823C28.4062 5.61038 28.4568 6.28908 28.5075 6.65326Z" fill="#B6AEAE"/>
        <path d="M20.3721 7.00089C20.3552 8.63971 18.9712 9.98056 17.2834 9.964C15.6293 9.94745 14.2621 8.59004 14.279 6.95123C14.2959 5.31241 15.6799 3.97156 17.3678 3.98811C19.0387 4.00467 20.389 5.36207 20.3721 7.00089Z" fill="#B6AEAE"/>
        <path d="M24.4398 6.95124C24.423 8.68938 23.8491 10.2123 22.7014 11.5201C22.2794 12.0167 21.6718 12.0829 21.2161 11.7187C20.7604 11.338 20.7266 10.742 21.1486 10.2454C22.8364 8.22587 22.8364 5.72626 21.1486 3.69016C20.7435 3.19355 20.7604 2.61417 21.1992 2.23343C21.6549 1.8527 22.2625 1.91891 22.7014 2.39897C23.8491 3.72327 24.423 5.24621 24.4398 6.95124Z" fill="#B6AEAE"/>
        <path d="M10.2115 6.93469C10.2452 5.22966 10.8191 3.70671 11.9668 2.39897C12.3719 1.93547 12.9964 1.86925 13.4352 2.23343C13.8909 2.59762 13.9416 3.2101 13.5196 3.67361C11.8318 5.54418 11.8149 8.39142 13.5365 10.2785C13.9416 10.7255 13.8909 11.338 13.4521 11.7022C13.0133 12.0829 12.3888 12.0167 11.9837 11.5532C10.8191 10.2454 10.2452 8.70594 10.2115 6.93469Z" fill="#B6AEAE"/>
    </svg>
);
const PricingPlans = () => {
    const location = useLocation();
    
    const queryParams = new URLSearchParams(location.search);
    const course = queryParams.get('course');
    const type = queryParams.get('type');
    const courseName = type == "core" ? "Core" : "Academic";
    const courseMainTitle = course == "arabic" ? `PTE ${courseName} Course For Arabic Speakers` : `PTE ${courseName} Course Fully Explained in English`;

    const labels = {
        1: "Five One-to-One Interactive Sessions", // 5
        2: "Four Recorded Sessions (Speaking, Writing, Reading, Listening)", // 6
        3: "Flexible Scheduling; Study at Your Own Pace", // 7
        4: "Three Recorded Sessions (Pre-Writing, Pre-Reading, Pronunciation)", // 8
        5: "Golden Materials: Previous Real Exam Questions", // 9
        6: "Customized Study Plans", // 10
        7: "Daily Feedback", // 11
        8: "Free Mock Tests with Full Analysis", // 12
        9: "Interactive WhatsApp Groups", // 13
        10: "24/7 Support" // 14
    };
    
    if (course === "english") {
        delete labels[2];
    }
    let rowsLength = 15;
    if (type === "academic") {
        delete labels[5];
        // rowsLength = 13;
    }

    if (type == "core" && course == "arabic") {
        labels[1] = "Four One-to-One Interactive Sessions";
        labels[4] = "Four Recorded Sessions (Pre-Writing, Pre-Reading, Pronunciation, Review)";
    }

    if (type == "academic" && course == "arabic") {
        labels[2] = "Five Interactive Sessions";
    }



    const arabicPrices = {
        academic: {
            oneStudent: {
                price: "550$",
                checkoutUrl: "https://buy.stripe.com/3cs5kUcsFc3g4qQ7sH",
            },
            oneStudentGroup: {
                price: "225$",
                checkoutUrl: "https://buy.stripe.com/aEUaFe3W92sG9LabII",
            },
            twoStudentsGroup: {
                price: "410$",
                checkoutUrl: "https://buy.stripe.com/4gw14EfER7N02iIfYZ",
            },
            threeStudentsGroup: {
                price: "570$",
                checkoutUrl: "https://buy.stripe.com/28ofZygIVffs9LaeUW",
            },
            fourStudentsGroup: {
                price: "760$",
                checkoutUrl: "https://buy.stripe.com/bIY8x6boBffsbTi003",
            },
        },
        core: {
            oneStudent: {
                price: "225$",
                checkoutUrl: "https://buy.stripe.com/fZeaFe8cpd7kbTi7sD",
            },
            oneStudentGroup: {
                price: "300$",
                checkoutUrl: "https://buy.stripe.com/6oEeVu9gt4AOcXmfZe",
            },
            twoStudentsGroup: {
                price: "500$",
                checkoutUrl: "https://buy.stripe.com/9AQdRq78l0kyaPebIZ",
            },
            threeStudentsGroup: {
                price: "650$",
                checkoutUrl: "https://buy.stripe.com/14keVu9gt3wK4qQeVc",
            },
            fourStudentsGroup: {
                price: "800$",
                checkoutUrl: "https://buy.stripe.com/8wM9BadwJ3wK7D25kD",
            },
        }
    };
    const englishPrices = {
        academic: {
            oneStudentGroup: {
                price: "300$",
                checkoutUrl: "https://buy.stripe.com/9AQ3cM1O16IW0aA6oI",
            },
            twoStudentsGroup: {
                price: "500$",
                checkoutUrl: "https://buy.stripe.com/4gwfZyeANd7k3mM14p",
            },
            threeStudentsGroup: {
                price: "650$",
                checkoutUrl: "https://buy.stripe.com/28o00AeAN1oCg9y28u",
            },
            fourStudentsGroup: {
                price: "800$",
                checkoutUrl: "https://buy.stripe.com/7sIcNmboB4AOf5u9AX",
            },
        },
        core: {
            oneStudentGroup: {
                price: "300$",
                checkoutUrl: "https://buy.stripe.com/6oEeVu9gt4AOcXmfZe",
            },
            twoStudentsGroup: {
                price: "500$",
                checkoutUrl: "https://buy.stripe.com/9AQdRq78l0kyaPebIZ",
            },
            threeStudentsGroup: {
                price: "650$",
                checkoutUrl: "https://buy.stripe.com/14keVu9gt3wK4qQeVc",
            },
            fourStudentsGroup: {
                price: "800$",
                checkoutUrl: "https://buy.stripe.com/8wM9BadwJ3wK7D25kD",
            },
        }
    };

    const currentCourseLanguage = course == "arabic" ? arabicPrices : englishPrices;
    const currentCourse = type == "core" ? currentCourseLanguage.core : currentCourseLanguage.academic;

    const openStripeCheckoutPage = (url) => {
        window.location.href = url;
    };

    return (
        <div className='pricing-plans-core-container'>
            <div className='column one'>
                <span className="merged">
                        <span className='course-title'>{courseMainTitle}</span>
                        Choose <p>your plan</p>
                </span>
                {Object.values(labels).map((content, index) => (
                    <span key={index + 5}>{content}</span> // Content from 5th to 14th element
                ))}
                <span></span> {/* Element #15 left empty */}
            </div>
            {
                course == "arabic" &&
                <div className='column two'>
                    {Array.from({ length: rowsLength }).map((_, index) => {
                        switch (index) {
                            case 0:
                                return (
                                    <span key={index} className='label'>For <span>1 Student</span></span>
                                )
                                break;
                            case 1:
                                return (
                                    <span key={index} className='icon'>
                                        {
                                            type == "core" ? <RecordedIcon/> : <LiveIcon/>  
                                        }
                                    </span>
                                )
                                break;
                            case 2:
                                return (
                                    <span key={index} className='price'>{currentCourse.oneStudent.price}</span>
                                )
                                break;
                            case 3:
                                return (
                                    type == "core" ?
                                    (<span key={index} className='type'>Recorded<span className='circle-solid'></span></span>) :
                                    (<span key={index} className='type'>Live<span className='circle-solid red'></span></span>) 
                                )
                                break;
                            case 13:
                                if (type == "academic") {
                                    return (
                                        <span></span>
                                    )
                                    break;
                                } else {
                                    return (
                                        <span key={index} className='check-mark'>
                                            {
                                                course == "arabic" && index == 4 && type == "core" ?
                                                "X"
                                                : type == "academic" && course == "arabic" && index == 5 ? "X":
                                                <CheckMarkIcon/>
                                            }
                                        </span>
                                    )
                                }
                            case 14:
                                return (
                                    <span key={index} className='button-custom' onClick={()=> openStripeCheckoutPage(currentCourse.oneStudent.checkoutUrl)}>Get Started</span>
                                )
                                break;
                        
                            default:
                                return (
                                    <span key={index} className='check-mark'>
                                        {
                                            course == "arabic" && index == 4 && type == "core" ?
                                            "X"
                                            : type == "academic" && course == "arabic" && index == 5 ? "X":
                                                <CheckMarkIcon/>
                                        }
                                    </span>
                                )
                        }
                    })}
                </div>
            }
            <div className='column'>
            {Array.from({ length: rowsLength }).map((_, index) => {
                if (course === "english" && index == 5) {
                    return;
                }
                switch (index) {
                    case 0:
                        return (
                            <span key={index} className='label'>For <span>1 Student</span></span>
                        )
                        break;
                    case 1:
                        return (
                            <span key={index} className='icon'>
                                <LiveIcon/> 
                            </span>
                        )
                        break;
                    case 2:
                        return (
                            <span key={index} className='price'>{currentCourse.oneStudentGroup.price}</span>
                        )
                        break;
                    case 3:
                        return (
                            <span key={index} className='type'>Live <span className='circle-solid red'></span></span>
                        )
                        break;
                    case 13:
                        if (type == "academic") {
                            return (
                                <span></span>
                            )
                            break;
                        } else {
                            return (
                                <span key={index} className='check-mark'>
                                    {
                                        course == "arabic" && ((type == "core" && index == 5) || (type =="academic" && index == 4)) ?
                                        "X"
                                        : 
                                        <CheckMarkIcon color='black'/>
                                    }
                                </span>
                            )
                        }
                    case 14:
                        return (
                            <span key={index} className='button-custom' onClick={()=> openStripeCheckoutPage(currentCourse.oneStudentGroup.checkoutUrl)}>Get Started</span>
                        )
                        break;
                
                    default:
                        return (
                            <span key={index} className='check-mark'>
                                    {
                                        course == "arabic" && ((type == "core" && index == 5) || (type =="academic" && index == 4)) ?
                                        "X"
                                        : 
                                        <CheckMarkIcon color='black'/>
                                    }
                            </span>
                        )
                }
            })}
            </div>
            <div className='column'>
            {Array.from({ length: rowsLength }).map((_, index) => {
                if (course === "english" && index == 5) {
                    return;
                }
                switch (index) {
                    case 0:
                        return (
                            <span key={index} className='label'>For <span>2 Students</span></span>
                        )
                        break;
                    case 1:
                        return (
                            <span key={index} className='icon'>
                                <LiveIcon/> 
                            </span>
                        )
                        break;
                    case 2:
                        return (
                            <span key={index} className='price'>{currentCourse.twoStudentsGroup.price}</span>
                        )
                        break;
                    case 3:
                        return (
                            <span key={index} className='type'>Live <span className='circle-solid red'></span></span>
                        )
                        break;
                    case 13:
                        if (type == "academic") {
                            return (
                                <span></span>
                            )
                            break;
                        } else {
                            return (
                                <span key={index} className='check-mark'>
                                     {
                                        course == "arabic" && ((type == "core" && index == 5) || (type =="academic" && index == 4)) ?
                                        "X"
                                        : 
                                        <CheckMarkIcon color='black'/>
                                    }
                                </span>
                            )
                        }
                    case 14:
                        return (
                            <span key={index} className='button-custom' onClick={()=> openStripeCheckoutPage(currentCourse.twoStudentsGroup.checkoutUrl)}>Get Started</span>
                        )
                        break;
                
                    default:
                        return (
                            <span key={index} className='check-mark'>
                                 {
                                    course == "arabic" && ((type == "core" && index == 5) || (type =="academic" && index == 4)) ?
                                    "X"
                                    : 
                                    <CheckMarkIcon color='black'/>
                                }
                            </span>
                        )
                }
            })}
            </div>
            <div className='column'>
            {Array.from({ length: rowsLength }).map((_, index) => {
                if (course === "english" && index == 5) {
                    return;
                }
                switch (index) {
                    case 0:
                        return (
                            <span key={index} className='label'>For <span>3 Students</span></span>
                        )
                        break;
                    case 1:
                        return (
                            <span key={index} className='icon'>
                                <LiveIcon/> 
                            </span>
                        )
                        break;
                    case 2:
                        return (
                            <span key={index} className='price'>{currentCourse.threeStudentsGroup.price}</span>
                        )
                        break;
                    case 3:
                        return (
                            <span key={index} className='type'>Live <span className='circle-solid red'></span></span>
                        )
                        break;
                    case 13:
                        if (type == "academic") {
                            return (
                                <span></span>
                            )
                            break;
                        } else {
                            return (
                                <span key={index} className='check-mark'>
                                     {
                                        course == "arabic" && ((type == "core" && index == 5) || (type =="academic" && index == 4)) ?
                                        "X"
                                        : 
                                        <CheckMarkIcon color='black'/>
                                    }
                                </span>
                            )
                        }
                    case 14:
                        return (
                            <span key={index} className='button-custom' onClick={()=> openStripeCheckoutPage(currentCourse.threeStudentsGroup.checkoutUrl)}>Get Started</span>
                        )
                        break;
                
                    default:
                        return (
                            <span key={index} className='check-mark'>
                                 {
                                    course == "arabic" && ((type == "core" && index == 5) || (type =="academic" && index == 4)) ?
                                    "X"
                                    : 
                                    <CheckMarkIcon color='black'/>
                                }
                            </span>
                        )
                }
            })}
            </div>
            <div className='column'>
            {Array.from({ length: rowsLength }).map((_, index) => {
                if (course === "english" && index == 5) {
                    return;
                }
                switch (index) {
                    case 0:
                        return (
                            <span key={index} className='label'>For <span>4 Students</span></span>
                        )
                        break;
                    case 1:
                        return (
                            <span key={index} className='icon'>
                                <LiveIcon/> 
                            </span>
                        )
                        break;
                    case 2:
                        return (
                            <span key={index} className='price'>{currentCourse.fourStudentsGroup.price}</span>
                        )
                        break;
                    case 3:
                        return (
                            <span key={index} className='type'>Live <span className='circle-solid red'></span></span>
                        )
                        break;
                    case 13:
                        if (type == "academic") {
                            return (
                                <span></span>
                            )
                            break;
                        } else {
                            return (
                                <span key={index} className='check-mark'>
                                     {
                                        course == "arabic" && ((type == "core" && index == 5) || (type =="academic" && index == 4)) ?
                                        "X"
                                        : 
                                        <CheckMarkIcon color='black'/>
                                    }
                                </span>
                            )
                        }
                    case 14:
                        return (
                            <span key={index} className='button-custom' onClick={()=> openStripeCheckoutPage(currentCourse.fourStudentsGroup.checkoutUrl)}>Get Started</span>
                        )
                        break;
                
                    default:
                        return (
                            <span key={index} className='check-mark'>
                                 {
                                    course == "arabic" && ((type == "core" && index == 5) || (type =="academic" && index == 4)) ?
                                    "X"
                                    : 
                                    <CheckMarkIcon color='black'/>
                                }
                            </span>
                        )
                }
            })}
            </div>
        </div>
    );
};

export default PricingPlans;
