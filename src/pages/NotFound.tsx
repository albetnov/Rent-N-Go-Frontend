import { useNavigate } from 'react-router-dom'
import CenteredGrid from '../components/CenteredGrid'
import CenteredText from '../components/CenteredText'
import PrimaryButton from '../components/PrimaryButton'

export default function NotFound() {
  const navigate = useNavigate()

  const rescue = () => {
    navigate('/')
  }

  return (
    <CenteredGrid>
      <CenteredText fontSize={48} fontWeight="bold">
        404
      </CenteredText>
      <CenteredText fontSize={28}>
        The page you&lsquo;re looking for, is not here. Perhaps a typo?
        Regardless use the button below to get to home.
      </CenteredText>
      <PrimaryButton onClick={rescue}>Rescue Me</PrimaryButton>
    </CenteredGrid>
  )
}
