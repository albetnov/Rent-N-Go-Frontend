import useCustomBackground from '../../hooks/useCustomBackground'
import colors from '../../utils/colors'

export default function FAQModel() {
  const qna = [
    {
      id: 1,
      question: 'What services does Rent and Go offer?',
      answer: `Rent and Go offers car rental services, private driver services, and tour guide + driver
                services. Every car rented from Rent and Go is owned by the company.`
    },
    {
      id: 2,
      question: 'What types of vehicles are available for rent at Rent N Go?',
      answer: `At Rent N Go, we offer a variety of vehicles to suit your travel needs. 
        You can find more information about our vehicle options on our 
        website or by reaching out to our customer support team.`
    },
    {
      id: 3,
      question: 'How can I rent a car from Rent and Go?',
      answer: `Renting a car from us is easy! Simply visit our website, choose a car that suits your needs, select the date
      or the pickup location. We only limited to 'BATAM' right now. Should you require car outside the citY.  Of course, all the cost including the plane
      will be convered by you.`
    },
    {
      id: 4,
      question: 'Do you offer tour guide services?',
      answer: `Yes, we do offer tour guide services. Our experienced tour guides are knowledgeable
      about local attractions and can provide you with an immersive travel experience. If
      you are interested in booking a tour guide, just choose the package that suits your needs.`
    },
    {
      id: 5,
      question: 'What are the requirements for renting a car from Rent and Go?',
      answer: `To rent a car from us, you must be at least 17 years old and have a valid driver
        license. Some car models may require a minimum age of 23 years. for short, it
        depends on the car.`
    },
    {
      id: 6,
      question: 'What is the minimum rental period?',
      answer: 'The minimum rental period is 2 day only!'
    },
    {
      id: 7,
      question: 'Where is the cancel order button?',
      answer: `If you accidentally placed an order or changed your mind, don’t worry! 
      You can easily cancel your order by going to the order section of your profile. T
      here you will find a cancel button next to the order you wish to cancel.`
    },
    {
      id: 8,
      question: 'What about insurance?',
      answer: `Rent and Go provides liability insurance coverage for all rented vehicles. 
      However, as stated in our terms and conditions, the renter is responsible for any damage or loss to the rented vehicle, up to the deductible amount specified in the rental agreement. 
      Please make sure to read our terms and conditions carefully when making an account or renting a vehicle from us. `
    }
  ]

  useCustomBackground(colors.white)

  return {
    qna
  }
}
