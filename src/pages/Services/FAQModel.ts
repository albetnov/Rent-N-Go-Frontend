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
        Our fleet includes everything from economy cars to luxury SUVs. If you have more money, please rent the
        expensive one. Because why not? It's better not only for you, but for us too. 
        You can find more information about our vehicle options on our 
        website or by reaching out to our customer support team.`
    },
    {
      id: 3,
      question: 'How can I rent a car from Rent and Go?',
      answer: `Renting a car from us is easy! Simply visit our website, choose a car that suits your needs, select the date
      or the pickup location. We only limited to 'BATAM' right now. Should you require car outside the city, please
      take the car by plane and hand it back to us by plane too. Of course, all the cost including the plane
      will be convered by you. After get what's you need then just make a reservation and pay us.`
    },
    {
      id: 4,
      question: 'Do you offer tour guide services?',
      answer: `Yes, we do offer tour guide services. Our experienced tour guides are knowledgeable
      about local attractions and can provide you with an immersive travel experience (maybe?). If
      you are interested in booking a tour guide, just choose the package that suits your needs.`
    },
    {
      id: 5,
      question: 'What are the requirements for renting a car from Rent and Go?',
      answer: `To rent a car from us, you must be at least 17 years old and have a valid driver
        license. Some car models may require a minimum age of 23 years. for short, it
        depends on the car. But we don't really follow that kind of rule. As long as you have the 2x of the money required
        we shall let you pass.`
    },
    {
      id: 6,
      question: 'What is the minimum rental period?',
      answer: `The minimum rental period is 2 day. Right? Why would you rent a car in just like 24 hour? Not gonna
      happen to us. Please be sure to rent a car for at least 2 days!`
    },
    {
      id: 7,
      question: 'Where is the cancel order button?',
      answer: `We don't have that kind of button and you will never be able to cancel your order. So take your own
      risk. You buy, you pay that's it. We don't care about your problems or reasons. We still deliver the car in
      pickup location, if you're not there. Then we simply, return the car. Our maximum hour to wait is 2 hours.
      We don't have time to wait for you. Last one, do note that the car is indeed returned to us. But your money. No.`
    },
    {
      id: 8,
      question: 'What about insurance?',
      answer: `What are you talking about? You're renting the car from us. You break it, you pay for it. We don't accept repair money.
      If it's broken, we will simply replace it with a new one and the money to replace it will be taken from you. Not paying it
      will result in law. Do pay attention when making account (if you already have one). Diligently read the terms and conditions will you?`
    }
  ]

  useCustomBackground(colors.white)

  return {
    qna
  }
}
