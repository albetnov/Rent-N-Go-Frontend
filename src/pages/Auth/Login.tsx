import AuthScaffold from '../../components/Auth/AuthScaffold'
import OutlineInput from '../../components/Auth/OutlineInput'
import PasswordInput from '../../components/Auth/PasswordInput'
import CenteredText from '../../components/CenteredText'
import PrimaryButton from '../../components/PrimaryButton'
import RouterLink from '../../components/RouterLink'
import LoginModel from './LoginModel'

export default function Login() {
  const { email, onEmailChange, onPasswordChange, onSubmitHandler, password } =
    LoginModel()

  return (
    <AuthScaffold
      title="Log In"
      message={{
        first: 'Welcome Back!',
        second: 'Please enter your credentials'
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <OutlineInput
          InputProps={{
            onChange: onEmailChange,
            value: email
          }}
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <PasswordInput
          InputProps={{
            onChange: onPasswordChange,
            value: password
          }}
        />
        <PrimaryButton w="full" type="submit">
          Login
        </PrimaryButton>
      </form>
      <CenteredText mt={5}>
        Don&lsquo;t have an account?{' '}
        <RouterLink fontWeight="semibold" to="/auth/register">
          Register
        </RouterLink>
      </CenteredText>
    </AuthScaffold>
  )
}
