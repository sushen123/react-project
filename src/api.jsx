import { useEffect, useState , useRef} from "react"
import { useNavigate } from "react-router-dom"




export function OTPrequest({setOtp}) {
   const navigate = useNavigate()

    return <div>
      <h1>Login Via OTP</h1>
      <input type="text"  placeholder="Enter your mobile Number"/>
      <button onClick={() => {
        let generatedOTP = Math.floor(1000+Math.random() *9000).toString();
        setOtp(generatedOTP)
        console.log(generatedOTP)
        navigate('/otp-verified')
      }}>Send OTP</button>
      
    </div>


}

export function OTPverified ({otp}) {
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)

    ]
    const [userOTP, setUserOTP] = useState(new Array(4).fill(""));
    

    useEffect(() => {
    
       if(otp.length  && inputRefs[0]){
        inputRefs[0].current.focus();
       }


    },[otp])

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            let newUserOTP = [...userOTP];
            newUserOTP[index] = value;
            setUserOTP(newUserOTP);
      
            if (index < inputRefs.length - 1) {
              inputRefs[index + 1].current.focus();
            }
          }
    }

    function isOTPsuccessfull(otp,userOTP) {
       return otp == userOTP.join("")
    }
  
    
    return ( <div>
        <h3>Login Via OTP</h3>
        {inputRefs.map((ref, index) => (
            <input
            key={index}
             type="text"
             className="otpbox"
             maxLength="1"
             ref={ref}
             value={userOTP[index] || ''}
             onChange={(e) => {
                handleChange(e,index)}
             }
             />
        ))}

        <button className="login" onClick={() => {
             if (isOTPsuccessfull(otp, userOTP)) {
                console.log("OTP verification successful");
              } else {
                console.log("OTP verification failed");
              }
        }}>Login</button>
    </div>
    )
}