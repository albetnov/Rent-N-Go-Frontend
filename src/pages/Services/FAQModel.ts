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
        Our fleet includes everything from economy cars to luxury SUVs. 
        You can find more information about our vehicle options on our 
        website or by reaching out to our customer support team.`
    },
    {
      id: 3,
      question: 'How can I rent a car from Rent and Go?',
      answer: `Renting a car from us is easy! Simply visit our website, select the dates and location
      for your rental, choose a car that suits your needs, and make a reservation.`
    },
    {
      id: 4,
      question: 'Do you offer tour guide services?',
      answer: `Yes, we do offer tour guide services. Our experienced tour guides are knowledgeable
      about local attractions and can provide you with an immersive travel experience. If
      you are interested in booking a tour guide, please contact our customer support team for
      more information.`
    },
    {
      id: 5,
      question: 'What are the requirements for renting a car from Rent and Go?',
      answer: `To rent a car from us, you must be at least 17 years old and have a valid driver
        license. Some car models may require a minimum age of 23 years. for short, it
        depends on the car`
    }
  ]

  useCustomBackground(colors.white)

  return {
    qna
  }
}
