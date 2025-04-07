import GoogleLogo from '../../assets/google-logo.svg'
import { Button } from './Button'
const GoogleSignInButton = () => {
    return (
      <Button
        type="button"
        className="w-full h-[40px]"
        variant="outline"
      >
        <img
          src={GoogleLogo}
          alt="Google logo"
          className="w-6 h-6 mr-3"
        />
        <span className="text-sm font-medium text-gray-700">
          Sign in with Google
        </span>
      </Button>
    );
  };
  
  export default GoogleSignInButton;
  